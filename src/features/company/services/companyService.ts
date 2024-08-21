import { Company } from '../types/companyTypes';

const fetchCompanies = async (): Promise<Company[]> => {
  return new Array(10000).fill(null).map((_, index) => ({
    id: index + 1,
    name: `Company ${index + 1}`,
    address: `Address ${index + 1}`,
  }));
};

export { fetchCompanies };
