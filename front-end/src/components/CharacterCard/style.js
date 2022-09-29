import styled from "styled-components";

export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: 200px;
  display: flex;
  background-color: #3c3e44;
  border-radius: 10px;
  cursor: pointer;

  img {
    width: 40%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
    height: 150px;
  }
`;

export const InfoWrapper = styled.div`
  padding: 10px;
`;

export const Name = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 3px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const Status = styled.p`
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

export const InfoDescription = styled.p`
  color: #9e9e9e;
  font-size: 18px;
  margin: 15px 0 10px 0;

  @media (max-width: 600px) {
    font-size: 15px;
    margin: 5px 0 5px 0;
  }
`;

export const Info = styled.h2`
  color: #ffffff;
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const ModalContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 500px;
  background: #3c3e44;
  border-radius: 50px;
  display: flex;

  img {
    width: 40%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px 0 0 50px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    border-radius: 25px;
    width: 350px;
    img {
      width: 100%;
      height: 40%;
      object-fit: fill;
      border-radius: 25px 25px 0 0;
    }
  }
`;

export const ModalInfoWrapper = styled.div`
  padding: 30px;

  h1 {
    font-size: 34px;
    font-weight: bold;
    margin: auto;
    text-align: center;
    color: #ffffff;

    @media (max-width: 600px) {
      font-size: 22px;
      margin: 0;
    }
  }

  h2 {
    color: #9e9e9e;
    font-size: 24px;
    margin: 18px 0 5px 0;

    @media (max-width: 600px) {
      font-size: 17px;
      margin: 10px 0 5px 0;
    }
  }

  p {
    color: #ffffff;
    font-size: 24px;

    @media (max-width: 600px) {
      font-size: 17px;
    }
  }

  @media (max-width: 600px) {
    padding: 15px;
  }
`;
