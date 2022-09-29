import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  height: 200px;
  display: flex;
  background-color: #3C3E44;
  border-radius: 10px;

  img {
    width: 40%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
  }
`

export const InfoWrapper = styled.div`
  padding: 10px;
`

export const Name = styled.h1`
  color: #FFFFFF;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 3px;
`

export const Status = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  margin-bottom: 15px;
`

export const InfoDescription = styled.p`
  color: #9E9E9E;
  font-size: 18px;
  margin: 15px 0 10px 0;
`

export const Info = styled.h2`
  color: #FFFFFF;
  font-size: 20px;
`