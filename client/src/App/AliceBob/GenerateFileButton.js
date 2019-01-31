import styled from 'styled-components';

const Column = styled.button`
  padding: 8px 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 2px;
  background-color: cadetblue;
  color: white;
  cursor: pointer;

  :hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export default Column;
