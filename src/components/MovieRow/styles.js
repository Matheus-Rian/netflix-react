import styled from 'styled-components'

export const MovieRowListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;

`;


export const MovieRowItem = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;
  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
  }

  img:hover {
    transform: scale(1);
  }
`;
