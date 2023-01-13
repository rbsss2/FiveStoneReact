import { Container } from "../assets/style/FiveStoneStyle";

import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function FiveStone() {
  return (
    <Container>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default FiveStone;
