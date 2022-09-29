import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 60px;
  background-color: var(--orange);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20% 0 20%;
  position: fixed;
  z-index: 2;

  @media (max-width: 1500px) {
    padding: 0 12% 0 12%;
  }

  @media (max-width: 1250px) {
    padding: 0 10% 0 10%;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    cursor: pointer;
  }

  h1 {
    display: flex;
    width: 110px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
  }

  @media (max-width: 900px) {
    h1 {
      display: none;
    }

    img {
      display: none;
    }
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;
  max-width: 60%;
  margin-right: 30px;

  input {
    border: 0;
    border-radius: 5px 5px 5px 5px;
    width: 100%;
    height: 80%;
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }

  input:focus {
    outline: none;
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;


export const Divider = styled.div`
  width: 100vw;
  height: 60px;
`;
