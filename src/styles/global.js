import {createGlobalStyle} from 'styled-components';
import img from '../assets/background.png';
import Robotoregular from "../fonts/RobotoCondensed-Regular.ttf"
export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
body{
    background-color: #c8d8fd;
    font-size: 16px;
    color: black;
    background-image: url(${img});
}
@font-face {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    src: url(${Robotoregular});
  }

`
