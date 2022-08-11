import { createGlobalStyle } from "styled-components";

import PoppinsMedium from "./Poppins-Medium.woff";
import PoppinsBold from "./Poppins-Bold.woff";
import PoppinsSemibold from "./Poppins-SemiBold.woff";

import MonumentUltra from "./MonumentExtended-Ultrabold.woff";

import RobotoRegular from "./Roboto-Regular.woff";
import RobotoMedium from "./Roboto-Medium.woff";
import RobotoBold from "./Roboto-Bold.woff";

import NotoSansBold from "./NotoSans-Bold.woff";
import NotoSansRegular from "./NotoSans-Regular.woff";

import RalewayBold from "./Raleway-Bold.woff";
import InterMedium from "./Inter-Medium.woff";

import SpoqaBold from "./SpoqaHanSansNeo-Bold.woff";
import SpoqaRegular from "./SpoqaHanSansNeo-Regular.woff";

export const GlobalFonts = createGlobalStyle`
      @font-face {
            font-family: 'Roboto Regular';
            src: url(${RobotoRegular}) format('woff');
      }

      @font-face {
            font-family: 'Roboto Medium';
            src: url(${RobotoMedium}) format('woff');
      }

      @font-face {
            font-family: 'Roboto Bold';
            src: url(${RobotoBold}) format('woff');
      }

      @font-face {
            font-family: 'Poppins SemiBold';
            src: url(${PoppinsSemibold}) format('woff');
      }

      @font-face {
            font-family: 'Poppins Bold';
            src: url(${PoppinsBold}) format('woff');
      }

      @font-face {
            font-family: 'Poppins Medium';
            src: url(${PoppinsMedium}) format('woff');
      }

      @font-face {
            font-family: "Monument Ultra";
            src: url(${MonumentUltra}) format('woff');
      }

      @font-face {
            font-family: 'NotoSans Bold';
            src: url(${NotoSansBold}) format('woff');
      }

      @font-face {
            font-family: 'NotoSans Regular';
            src: url(${NotoSansRegular}) format('woff');
      }

      @font-face {
            font-family: 'Raleway Bold';
            src: url(${RalewayBold}) format('woff');

      }
      
      @font-face {
            font-family: 'Inter Medium';
            src: url(${InterMedium}) format('woff');
      }

      @font-face {
            font-family: 'Spoqa Han Sans Neo Bold';
            src: url(${SpoqaBold}) format('woff');
      }
      
      @font-face {
            font-family: 'Spoqa Han Sans Neo Regular';
            src: url(${SpoqaRegular}) format('woff');
      }
`;

// export default GlobalFonts;
