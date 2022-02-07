import React from 'react';
import { Link } from 'react-router-dom';
import Button from './component/Button';
import styled from 'styled-components';

const Warn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
        font-size: 20px;
    }
`;

const Home = () => {
    return (
        <Warn>
            <h1>Hello and welcome to my app.</h1>
            <p>For more features please login to site.</p>
            <Button><Link to='/login'>Login to site</Link></Button>
        </Warn>
    )
}

export default Home;