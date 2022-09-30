import { useContext, useState } from "react";
import DataContext from "../../providers/DataContext";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { toast } from "react-toastify";
import * as S from "./style";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function SignUp() {
  const { data, setData } = useContext(DataContext);
  const [inputData, setInputData] = useState({
    name: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit() {
    setLoading(true);
    try {
      const request = await axios.post(`${data.API}/signin`, inputData);

      const token = request.data.token;
      setData({ ...data, token });
      localStorage.setItem("token", token);

      setLoading(false);
      navigate("/");
    } catch (err) {
      toast(`Erro! ${err.response?.data}`);
      setLoading(false);
    }
  }

  return (
    <S.Container>
      <S.InteractionWrapper>
        <S.FormWrapper>
          <h1>Faça login!</h1>
          <S.Form>
            <TextField
              id="Username"
              label="Nome de usuário"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              value={inputData.name}
              onChange={(e) => {
                setInputData({ ...inputData, name: e.target.value });
              }}
            />
            <TextField
              id="password"
              type="password"
              label="Senha"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
              value={inputData.password}
              onChange={(e) => {
                setInputData({ ...inputData, password: e.target.value });
              }}
            />
            <Button
              onClick={() => {
                handleSubmit();
              }}
              variant="contained"
            >
              {loading ? (
                <ThreeDots color="#00BFFF" height={25} width={25} />
              ) : (
                "Entrar"
              )}
            </Button>
          </S.Form>
          <Button
            variant="text"
            sx={{ marginTop: "8px", fontSize: "11px", fontWeight: "bold" }}
            onClick={() => navigate("/registro")}
          >
            Não possui uma conta? Registre-se!
          </Button>
        </S.FormWrapper>
      </S.InteractionWrapper>
    </S.Container>
  );
}
