import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Company } from '../../../features/company/types/companyTypes';
import { deleteCompanies } from '../../../features/company/slices/companySlice';
import { useCompany } from '../../../hooks/useCompany';
import { PageContainer, ActionButtons, TableWrapper } from './CompanyListPage.styles';
import { CompanyTable, CompanyFormModal } from '../index';

export const CompanyListPage: React.FC = () => {
  const { companies, selectedCompanyIds } = useCompany();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const openModalForNewCompany = () => {
    setSelectedCompany(null);
    setIsModalOpen(true);
  };

  const openModalForEditCompany = (company: Company) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  const handleDeleteSelected = () => {
    if (selectedCompanyIds.length > 0) {
      dispatch(deleteCompanies(selectedCompanyIds));
    }
  };

  return (
    <PageContainer>
      <ActionButtons>
        <button onClick={openModalForNewCompany}>Добавить компанию</button>
        <button onClick={handleDeleteSelected} disabled={selectedCompanyIds.length === 0}>
          Удалить выбранные
        </button>
      </ActionButtons>
      <TableWrapper>
        <CompanyTable companies={companies} onEdit={openModalForEditCompany} />
      </TableWrapper>
      <CompanyFormModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        company={selectedCompany ?? undefined}
      />
    </PageContainer>
  );
};
