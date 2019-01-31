import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 49%;
  border: 1px solid lightgrey;
  border-radius: 3px;

  span[role='img'] {
    width: 100%;
    text-align: center;
    position: relative;
    font-size: 64px;
  }
`;

export default Column;
