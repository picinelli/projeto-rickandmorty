import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, TextField } from "@mui/material";
import { ThreeDots } from "react-loader-spinner";

import * as S from "./style";
import DataContext from "../../providers/DataContext";

export default function SignUp() {
  const { data } = useContext(DataContext);
  const [inputData, setInputData] = useState({
    name: "",
    password: "",
    passwordConfirmation: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit() {
    setLoading(true);
    try {
      await axios.post(`${data.API}/signup`, inputData);
      setLoading(false);

      navigate("/login");
    } catch (err) {
      toast(`Erro! ${err.response?.data}`);
      setLoading(false);
    }
  }

  return (
    <S.Container>
      <S.InteractionWrapper>
        <S.FormWrapper>
          <h1>Registre-se!</h1>
          <S.Form>
            <TextField
              id="username"
              label="Nome de Usuário"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              value={inputData.name}
              onChange={(e) => {
                setInputData({ ...inputData, name: e.target.value });
              }}
            />
            <TextField
              id="password"
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
              id="password_confirm"
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
            <Button onClick={handleSubmit} variant="contained">
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
