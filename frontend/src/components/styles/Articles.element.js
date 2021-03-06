import styled from 'styled-components';
import colors from '../../constant/colors';
import StyledContainer from '../../constant/StyledContainer';

export const Main = styled.main`
  background-color: ${colors.green};
  min-height: 100vh;
  padding: 130px 0 100px;

  @media (max-width: 1200px) {
    min-height: calc(100vh - 186px);
    padding-bottom: 50px;
  }
`;

export const News = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const HeaderComponent = styled.div`
  /* background-color: red; */
  width: 100%;

  & > img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
  }

  @media (max-width: 1200px) {
    & > img {
      height: 250px;
    }
  }

  @media (max-width: 900px) {
    & > img {
      height: 400px;
    }
  }

  @media (max-width: 760px) {
    & > img {
      height: 230px;
    }
  }
`;

export const Header = styled.div`
  & > h2 {
    color: ${colors.white};
    margin: 10px 0 20px;
  }

  & > p {
    &:nth-of-type(1) {
      display: flex;
      align-items: center;

      & > .circle {
        margin: 0 10px;
      }
    }

    &:nth-of-type(2) {
      margin-bottom: 20px;
    }

    &:last-of-type {
      white-space: pre-line;
    }
  }
`;

export const NewsContainer = styled.section`
  width: 100%;
  max-width: 420px;
  margin-left: 30px;
  background-color: ${colors.darkGreen};
  padding: 10px 10px 20px;
  border-radius: 20px;
  height: fit-content;
  max-height: 500px;
  position: sticky;
  top: 100px;

  & > h4 {
    color: ${colors.white};
    text-align: center;
    margin-bottom: 10px;
  }

  @media (max-width: 900px) {
    margin-left: unset;
    margin-top: 30px;
    max-width: 100%;
  }
`;
