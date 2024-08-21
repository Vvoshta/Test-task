import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { fetchCompanies } from '../features/company/services/companyService';
import { setCompanies } from '../features/company/slices/companySlice';

export const useCompany = () => {
  const companies = useSelector((state: RootState) => state.company.companies);
  const selectedCompanyIds = useSelector((state: RootState) => state.company.selectedCompanyIds);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCompanies = async () => {
      const data = await fetchCompanies();
      dispatch(setCompanies(data));
    };
    loadCompanies();
  }, [dispatch]);

  return { companies, selectedCompanyIds };
};
