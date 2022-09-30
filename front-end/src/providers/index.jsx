import { DataProvider } from "./DataContext";

export default function AppProvider({ children }) {
  return <DataProvider>{children}</DataProvider>;
}
