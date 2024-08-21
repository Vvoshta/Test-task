import React from 'react';
import { useDispatch } from 'react-redux';
import { Company } from '../../../features/company/types/companyTypes';
import { updateCompany, addCompany } from '../../../features/company/slices/companySlice';
import { CompanyForm } from './CompanyForm';
import { CloseButton, StyledModal } from './CompanyForm.styles';

interface CompanyFormModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  company?: Company;
}

export const CompanyFormModal: React.FC<CompanyFormModalProps> = ({
  isOpen,
  onRequestClose,
  company,
}) => {
  const dispatch = useDispatch();

  const handleSave = (companyData: Company) => {
    if (company) {
      dispatch(updateCompany(companyData));
    } else {
      dispatch(addCompany(companyData));
    }
    onRequestClose();
  };

  return (
    <StyledModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <CloseButton onClick={onRequestClose}>&times;</CloseButton>
      <h2>{company ? 'Редактировать компанию' : 'Добавить новую компанию'}</h2>
      <CompanyForm company={company} onSave={handleSave} />
    </StyledModal>
  );
};
