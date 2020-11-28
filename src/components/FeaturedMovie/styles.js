import styled from "styled-components";

export const Featured = styled.section`
  height: 100vh;

  @media (max-width: 760px) {
    height: 95vh;
  }
`;

export const FeaturedTransparencyVertical = styled.div`
  width: inherit;
  height: inherit;
  /* inherit: Vai herdar o tamanho do anterior(Featured) */
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const FeaturedTransparencyHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 180px;
  padding-top: 70px;
`;

export const FeaturedName = styled.div`
  font-size: 60px;
  font-weight: bold;

  @media (max-width: 760px) {
    font-size: 40px;
  }
`;

export const FeaturedInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

export const FeaturedPoints = styled.div`
  display: inline-block; //Coloca um do lado da outra e o block nos permite colocar width e heigth
  color: #46d369;
  margin-right: 15px;
`;

export const FeaturedYear = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const FeaturedSeasons = styled.div`
  display: inline-block;
`;

export const FeaturedDescription = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;

  @media (max-width: 760px) {
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
  }
`;

export const FeaturedButtons = styled.div`
  margin-top: 15px;

  .watch {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    background-color: #fff;
    color: #000;
    opacity: 1;
    transition: all ease 0.2s;
  }

  .list {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    background-color: #333;
    color: #fff;
    opacity: 1;
    transition: all ease 0.2s;
  }

  .watch:hover,
  .list:hover {
    opacity: 0.7;
  }

  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

export const FeaturedGenres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;

  @media (max-width: 760px) {
    font-size: 14px;
  }
`;
