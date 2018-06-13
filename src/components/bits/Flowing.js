import styled from 'styled-components';

export const Flowing = styled.div`
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
                return 'linear-gradient(147deg, #04cadb, #46d499)'
            } else if (title === 'is-fail') {
                return 'linear-gradient(147deg, #d4469f, #fc543c)'
            } else {
                return 'linear-gradient(147deg, #04cadb, #d4469f, #a746d4, #46d499)'
            }
        }
    };
    background-size: 400% 400%;

    -webkit-animation: AnimationName 28s ease infinite;
    -moz-animation: AnimationName 28s ease infinite;
    animation: AnimationName 28s ease infinite;

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
