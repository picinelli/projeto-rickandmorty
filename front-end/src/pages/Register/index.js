import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { ThreeDots } from "react-loader-spinner";

import * as S from "./style";

export default function SignUp() {
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.InteractionWrapper>
        <S.FormWrapper>
          <h1>Registre-se!</h1>
          <S.Form>
            <TextField
              id="outlined-basic"
              label="Nome de Usuário"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              value={inputData.username}
              onChange={(e) => {
                setInputData({ ...inputData, username: e.target.value });
              }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              value={inputData.email}
              onChange={(e) => {
                setInputData({ ...inputData, email: e.target.value });
              }}
            />
            <TextField
              id="outlined-basic"
              label="Senha"
              type="password"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              value={inputData.password}
              onChange={(e) => {
                setInputData({ ...inputData, password: e.target.value });
              }}
            />
            <TextField
              id="outlined-basic"
              label="Confirme sua senha"
              type="password"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              value={inputData.passwordConfirmation}
              onChange={(e) => {
                setInputData({
                  ...inputData,
                  passwordConfirmation: e.target.value,
                });
              }}
            />
            <Button variant="contained">
              {loading ? (
                <ThreeDots color="#00BFFF" height={25} width={25} />
              ) : (
                "Registrar"
              )}
            </Button>
          </S.Form>
          <Button
            variant="text"
            sx={{ marginTop: "8px", fontSize: "11px", fontWeight: "bold" }}
            onClick={() => navigate("/login")}
          >
            Já possui uma conta? Faça login!
          </Button>
        </S.FormWrapper>
      </S.InteractionWrapper>
    </S.Container>
  );
}
