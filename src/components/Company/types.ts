import { Company } from '../../features/company/types/companyTypes';

export interface CompanyRowProps {
  company: Company;
  onEdit: (company: Company) => void;
}

export interface CompanyTableProps {
  companies: Company[];
  onEdit: (company: Company) => void;
}
