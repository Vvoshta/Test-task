import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { toggleCompanySelection } from '../../../features/company/slices/companySlice';
import { CompanyRowProps } from '../types';
import { CompanyInfoContainer, CompanyRowContainer, EditButton } from './CompanyRow.styles';

export const CompanyRow: React.FC<CompanyRowProps> = ({ company, onEdit }) => {
  const selectedCompanyIds = useSelector((state: RootState) => state.company.selectedCompanyIds);
  const dispatch = useDispatch();
  const isSelected = selectedCompanyIds.includes(company.id);

  const handleCheckboxChange = () => {
    dispatch(toggleCompanySelection(company.id));
  };

  return (
    <CompanyRowContainer id={`company-row-${company.id}`} isSelected={isSelected}>
      <CompanyInfoContainer onClick={handleCheckboxChange}>
        <input
          type="checkbox"
          name="checked"
          checked={isSelected}
          onChange={handleCheckboxChange}
          onClick={(e) => e.stopPropagation()}
        />
        <div style={{ flex: 1, marginLeft: '10px' }}>{company.name}</div>
        <div style={{ flex: 2 }}>{company.address}</div>
      </CompanyInfoContainer>

      <EditButton onClick={() => onEdit(company)}>Редактировать</EditButton>
    </CompanyRowContainer>
  );
};
