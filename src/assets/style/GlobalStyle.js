import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');

  body{
    font-family:'Noto Sans KR','맑은 고딕', sans-serif;
  }
`;
export default GlobalStyle;
