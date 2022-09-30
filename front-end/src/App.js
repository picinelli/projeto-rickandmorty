import GlobalStyle from "./styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}
