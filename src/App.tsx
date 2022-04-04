import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Global from "./assets/wrappers/Global";

const theme = {
  primaryOrange: "hsl(26, 100%, 55%)",
  secondaryOrange: "hsl(25, 100%, 94%)",
  primaryBlue: "hsl(220, 13%, 13%)",
  primaryGrayishBlue: "hsl(219, 9%, 45%)",
  secondaryGrayishBlue: "hsl(220, 14%, 75%)",
  tertiaryGrayishBlue: "hsl(223, 64%, 98%)",
  primaryWhite: "hsl(0, 0%, 100%)",
  primaryBlack: "hsl(0, 0%, 0%)",
  secondaryBlack: "rgba(0, 0, 0, 0.75)",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header />
    </ThemeProvider>
  );
};

export default App;
