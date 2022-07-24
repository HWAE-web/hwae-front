import { createGlobalStyle } from "styled-components";
import Poppins from "../fonts/Poppins-Medium.woff";

export default createGlobalStyle`
 @font-face {
       font-family: 'Poppins' ;
       src: local('Poppins'),
       url('../fonts/Poppins-Medium.woff') format('woff');
       font-weight: 300;
       font-style: normal;
 }
`;
