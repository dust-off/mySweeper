import styled from 'styled-components'

export const StyledButton = styled.div`
@import "https://fonts.googleapis.com/css?family=Rubik+One";
.button::before, .button::after {
  position: absolute;
  content: '';
  -webkit-transition: all .2s;
  transition: all .2s;
}

.button {
  width: 300px;
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
  font-size: 28px;
  -webkit-transition: all .2s;
  transition: all .2s;
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
