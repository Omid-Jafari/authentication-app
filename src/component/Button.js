import styled from 'styled-components';


const Button = styled.button`
    display: block;
    background: grey;
    width: 25%;
    min-width: 230px;
    height: 60px;
    border-radius: 30px;
    color: white;
    border: 0;
    font-size: 26px;
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    a {
        text-decoration: none;
        color: white;
    }

    :hover {
    opacity: 0.8;
    }
`;

export default Button;