import styled from 'styled-components';
import Modal from 'react-modal';

export const CompanyFormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 20px auto 10px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const InputField = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #333;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }
`;

export const SaveButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 25px;
  cursor: pointer;
  color: #aaa;

  &:hover {
    color: #fff;
  }
`;

export const StyledModal = styled(Modal)`
  width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
