import styled from 'styled-components';

export const TableHeader = styled.div`
  background-color: #f4f4f4;
  padding: 10px;
  border-bottom: 2px solid #ddd;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TableRowsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

export const TableCheckbox = styled.div`
  padding: 10px;
  background-color: #fafafa;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    cursor: pointer;
  }

  span {
    font-size: 14px;
    color: #333;
    cursor: pointer;
  }
`;
