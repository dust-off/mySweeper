import React from 'react';
import styled from 'styled-components'

const Sbutton = styled.div`
@import "https://fonts.googleapis.com/css?family=Rubik+One";
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background: #e53935;
  background: -webkit-linear-gradient(right, #e53935, #e35d5b);
  background: linear-gradient(to left, #e53935, #e35d5b);
}

.button::before, .button::after {
  position: absolute;
  content: '';
  -webkit-transition: all .5s;
  transition: all .5s;
}

.button {
  display: inline-block;
  padding: 20px 40px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  vertical-align: middle;
  font-family: 'Rubik One', sans-serif;
  text-decoration: none;
  font-size: 4vw;
  -webkit-transition: all .5s;
  transition: all .5s;
  background-color: #3498db;
}
.button::before {
  bottom: -15px;
  height: 15px;
  width: 100%;
  left: 8px;
  -webkit-transform: skewX(45deg);
          transform: skewX(45deg);
  background-color: #196090;
}
.button::after {
  right: -15px;
  height: 100%;
  width: 15px;
  bottom: -8px;
  -webkit-transform: skewY(45deg);
          transform: skewY(45deg);
  background-color: #124364;
}
.button:active {
  margin-left: 10px;
  margin-top: 10px;
}
.button:active::before {
  bottom: -5px;
  height: 5px;
  left: 3px;
}
.button:active::after {
  right: -5px;
  width: 5px;
  bottom: -3px;
}

`

export default function StyledButton() {
    return (
        <Sbutton>
            <a class="button" href="#">Press me!</a>
        </Sbutton>
    )
}