import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard /> {/*DENTRO DO DASHBOARD ESTÁ O SUMMARY */}
      <GlobalStyle />
    </>
  );
}