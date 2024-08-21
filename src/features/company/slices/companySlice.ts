import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company, CompanyState } from '../types/companyTypes';

const initialState: CompanyState = {
  companies: [],
  selectedCompanyIds: [],
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setCompanies(state, action: PayloadAction<Company[]>) {
      state.companies = action.payload;
    },
    addCompany(state, action: PayloadAction<Company>) {
      state.companies.push(action.payload);
    },
    updateCompany(state, action: PayloadAction<Company>) {
      const index = state.companies.findIndex((company) => company.id === action.payload.id);
      if (index !== -1) {
        state.companies[index] = action.payload;
      }
    },
    deleteCompanies(state, action: PayloadAction<number[]>) {
      state.companies = state.companies.filter((company) => !action.payload.includes(company.id));
      state.selectedCompanyIds = [];
    },
    toggleCompanySelection(state, action: PayloadAction<number>) {
      const { payload } = action;
      if (state.selectedCompanyIds.includes(payload)) {
        state.selectedCompanyIds = state.selectedCompanyIds.filter((id) => id !== payload);
      } else {
        state.selectedCompanyIds.push(payload);
      }
    },
    toggleAllCompanySelections(state) {
      if (state.selectedCompanyIds.length === state.companies.length) {
        state.selectedCompanyIds = [];
      } else {
        state.selectedCompanyIds = state.companies.map((company) => company.id);
      }
    },
  },
});

export const {
  setCompanies,
  addCompany,
  updateCompany,
  deleteCompanies,
  toggleCompanySelection,
  toggleAllCompanySelections,
} = companySlice.actions;

export default companySlice.reducer;
