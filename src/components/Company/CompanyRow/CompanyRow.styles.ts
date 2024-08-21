import styled from 'styled-components';

interface CompanyRowProps {
  isSelected: boolean;
}

export const CompanyRowContainer = styled.div<CompanyRowProps>`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  background-color: ${({ isSelected }) => (isSelected ? '#f9f9f9' : '#ffffff')};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const CompanyInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  input {
    margin-right: 15px;
    cursor: pointer;
  }

  div {
    margin-right: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const EditButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
  margin-left: auto;

  &:hover {
    background-color: #0056b3;
  }
`;
