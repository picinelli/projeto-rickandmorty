import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const InteractionWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--orange);
  max-width: 100vw;
  width: 100vw;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  max-height: 800px;
  height: 100%;
  width: 100%;
  background-color: bisque;
  border-radius: 50px;

  img {
    margin: 14rem 0 7rem 0;
  }

  h1 {
    font-weight: bold;
    font-size: 1.75rem;
    margin: 0 0 40px 0;
  }

  height: 100vh;
  width: 60%;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    width: 100%;
    border-radius: 0;
    padding: 50px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
