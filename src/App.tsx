import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import ProductShow from "./components/ProductShow";
import Product from "./components/Product";
import Global from "./assets/wrappers/Global";
import Modal from "./components/Modal";
import Lightbox from "./components/Lightbox";
import AppProvider from "./context";

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
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    console.log("close");
  };

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Global />
        <Header />
        <div className="container">
          <Product>
            <ProductShow
              isLightboxOpen={isLightboxOpen}
              openLightbox={() => setIsLightboxOpen(!isLightboxOpen)}
            />
          </Product>
        </div>
        <Modal open={isLightboxOpen} closeModal={closeLightbox} large={true}>
          <Lightbox
            isLightboxOpen={isLightboxOpen}
            closeLightbox={closeLightbox}
            openLightbox={() => setIsLightboxOpen(!isLightboxOpen)}
          />
        </Modal>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
