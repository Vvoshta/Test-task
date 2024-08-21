export interface Company {
  id: number;
  name: string;
  address: string;
}

export interface CompanyState {
  companies: Company[];
  selectedCompanyIds: number[];
}
