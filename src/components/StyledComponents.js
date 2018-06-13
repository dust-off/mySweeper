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

export const Flowing =  styled.div`
    position: relative;
    margin-bottom: 20px;
    background: #d4469f;
    padding: 7px;
    text-align: center;
    color: #fff;
    min-height: 100px;
    border-radius: 7px;
    width: 100%;
    background: ${props => {
        let title = props.classTitle.split(' ')[1]
        if (title === 'is-pass') {
            return 'linear-gradient(147deg, #04cadb, #46d499, #04cadb)'
        } else if (title === 'is-fail') {
            return 'linear-gradient(147deg, #d4469f, #fc543c, #d4469f)'
        } else {
            return 'linear-gradient(147deg, #04cadb, #d4469f, #a746d4, #46d499)'
        }
    }
    };
    background-size: 400% 400%;

    -webkit-animation: AnimationName 20s ease infinite;
    -moz-animation: AnimationName 20s ease infinite;
    animation: AnimationName 20s ease infinite;

    @-webkit-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes AnimationName { 
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
`
