import styled from 'styled-components';

const ColumnTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  span[role='img'] {
    position: relative;
    width: 100%;
    height: 90px;
  }

  span[role='img']:after {
    content: '👩‍💻';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 64px;
  }

  :hover span[role='img']:after {
    content: '💁';
  }

  span[aria-label='Bob']:after {
    content: '👨‍💻';
  }
  :hover span[aria-label='Bob']:after {
    content: '🙋‍♂️';
  }
`;

export default ColumnTop;
