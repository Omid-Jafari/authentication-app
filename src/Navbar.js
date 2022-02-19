import { useContext } from 'react';
import AuthContext from "./context/AuthProvider";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './component/Button'

const Wrapper = styled.div`
margin-bottom: 30px;
padding: 8px;
width: 100%;
height: 60px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;    

`;

const Content = styled.div`

    ul {
        display: flex;
        justify-content: space-between;
    }

    ul li {
        display: flex;
    }

    ul li a {
        font-size: 19px;
        text-decoration: none;
        color: black;
    }
`;

const Navbar = () => {
    const { auth, setAuth } = useContext(AuthContext);

    return (
        <Wrapper>
            <Content>
                <ul>
                    <li><a href='#'>Logo Here</a></li>
                    {auth
                    ? <Button onClick={() => setAuth('')}>log out {auth.user}</Button>
                    : <li><Link to='/login'>Login to site</Link></li>} 
                </ul>
            </Content>
        </Wrapper>
    )
}

export default Navbar;