import styled from 'styled-components';

const Transaction = styled.li`
  list-style: none;
  text-align: left;
  padding: 4px;
  font-size: 1.6rem;
  position: relative;
  transition: all 200ms;
  cursor: pointer;
  background-color: white;

  :after {
    content: '→';
    position: absolute;
    right: 8px;
    top: 45%;
    transform: translate(0, -50%);
  }

  &.bob {
    text-align: right;

    :after {
      content: '←';
      right: calc(100% - 24px);
    }
  }

  :hover {
    color: white;
    background-color: rgba(93, 158, 161, 0.7);
  }
`;

export default Transaction;
