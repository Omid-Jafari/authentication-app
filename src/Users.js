import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import axios from './api/axios';

const Header = styled.h1`
    display: flex;
    justify-content: center;
    margin: 20px auto;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    a {
        text-decoration: none;
        color: black;
    }


`;

const User = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    border: 1px solid grey;
    border-radius: 5px;
    min-width: 260px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;    margin: 10px;
    cursor: pointer;

    img {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        object-fit: cover;
        position: absolute;
        top: 20px;
        left: 70px;
        border: .5px solid black;
        padding: 7px;
    }

    img + div {
        margin-top: 240px
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        font-size: 19px;
    }
`;

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data.data);
                // console.log(users)
            } catch (err) {
                console.log("something went wrong")
            }
        }

        fetchUsers();
    }, []);
    // const anUserDetail = (key) => <Link to={`/AnUser/:${key}`} />

    return (
        <>
            <Header>Users List</Header>
            <Wrapper>
                {users.map(user => (
                    <Link to={`/AnUser/${user.id}`}>
                    <User
                        key={user.id}
                        // onClick={(key) =>  }
                    >
                        <img src={user.avatar} />
                        <div>firstname: {user.first_name}</div>
                        <div>lastname: {user.last_name}</div>
                        <div>email: {user.email}</div>
                    </User>
                    </Link>
                ))}


            </Wrapper>
        </>
    )
}
export default Users;
