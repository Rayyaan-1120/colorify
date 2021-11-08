import {createGlobalStyle} from 'styled-components'


const Globalstyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
}

body{
    padding: 0;
    margin:0;
    box-sizing: border-box;
    font-family: 'Montserrat Alternates', sans-serif;
    background-color: #000 ;
    color: #fff;
    transition: all 0.5s linear;

}

html{
    font-size: 62.5%;
}

svg{
    cursor: pointer;
}

input[type="color"] {
	-webkit-appearance: none;
	border: 1px solid #fff;
	width: 100px;
	height: 32px;
    cursor: pointer;
}
input[type="color"]::-webkit-color-swatch-wrapper {
	padding: 0;
}
input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: .5rem;
}

.hidden{
    transform: translateX(0);
    transition: all 0.5s ease;
    opacity: 1;

    
}

.big{
    font-size:1.5rem;
}

`

export default Globalstyle