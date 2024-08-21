import React, { useState, useEffect } from 'react';
import { Company } from '../../../features/company/types/companyTypes';
import { CompanyFormContainer, InputField, SaveButton } from './CompanyForm.styles';

interface CompanyFormProps {
  company?: Company;
  onSave: (company: Company) => void;
}

export const CompanyForm: React.FC<CompanyFormProps> = ({ company, onSave }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (company) {
      setName(company.name);
      setAddress(company.address);
    }
  }, [company]);

  const handleSave = () => {
    if (company) {
      onSave({ ...company, name, address });
    } else {
      onSave({ id: Date.now(), name, address });
    }
  };

  return (
    <CompanyFormContainer>
      <InputField
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Название компании"
      />
      <InputField
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Адрес компании"
      />
      <SaveButton onClick={handleSave} disabled={!name || !address}>
        Сохранить
      </SaveButton>
    </CompanyFormContainer>
  );
};
