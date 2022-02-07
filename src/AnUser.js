import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import axios from './api/axios';
import Button from './component/Button';
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
flex-direction: column;
    width: 700px;
    height: 700px;
    border: 1px solid white;
    border-radius: 10px;
    margin: 40px auto;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;    
    
    h1 {
    margin-top: -10px;
    }
    `;

const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin: 50px auto;

}
`;
const Detail = styled.div`
    font-size: 22px;
    margin: 20px auto;
`;



const AnUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState([])

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`/api/users/${id}`);
                setUser(response.data.data);
                console.log(response.data.data)
            } catch (err) {
                console.log("something went wrong")
            }
        }

        fetchUser();
    }, []);

    return (
        <Wrapper>
            <Content>
                <h1>User Detail:</h1>
                <img src={user.avatar} />
                <Detail>Hello there.My name is <b>{user.first_name} {user.last_name}</b>.<br />
                And my email adress is : <i>{user.email}</i></Detail>
            </Content>
            <Button><Link to='/users'>Back to users list</Link></Button>
        </Wrapper>
    )
}

export default AnUser;