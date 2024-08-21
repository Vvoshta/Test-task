import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { CompanyRow } from '../CompanyRow/CompanyRow';
import { CompanyTableProps } from '../types';
import { toggleAllCompanySelections } from '../../../features/company/slices/companySlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { TableCheckbox, TableHeader, TableRowsHeader } from './CompanyTable.styles';

export const CompanyTable: React.FC<CompanyTableProps> = ({ companies, onEdit }) => {
  const dispatch = useDispatch();
  const selectedCompanyIds = useSelector((state: RootState) => state.company.selectedCompanyIds);

  const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('asc');

  const handleSelectAllChange = () => {
    dispatch(toggleAllCompanySelections());
  };

  const handleSortChange = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const sortedCompanies = companies.slice().sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (sortOrder === 'asc') {
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    } else {
      return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
    }
  });

  const isAllSelected = selectedCompanyIds.length === companies.length;

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style}>
      <CompanyRow company={sortedCompanies[index]} onEdit={onEdit} />
    </div>
  );

  return (
    <>
      <TableHeader>Список компаний</TableHeader>
      <TableCheckbox onChange={handleSelectAllChange}>
        <label>
          <input type="checkbox" name="chosen" checked={isAllSelected} />
          <span style={{ marginLeft: '8px' }}>Выбрать все</span>
        </label>
      </TableCheckbox>
      <TableRowsHeader>
        <div style={{ flex: 1 }}>
          <div style={{ cursor: 'pointer' }} onClick={handleSortChange}>
            Название компании {sortOrder === 'asc' ? '▲' : '▼'}
          </div>
        </div>
        <div style={{ flex: 2 }}>Адрес компании</div>
      </TableRowsHeader>
      <List height={500} itemCount={sortedCompanies.length} itemSize={50} width={'100%'}>
        {Row}
      </List>
    </>
  );
};
