import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import User from '../../components/User/User';
import './UsersPage.scss';
import useFetch from '../../hooks/useFetch';


const UsersPage = () => {

    const { data, isLoading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/users')
   
    if (error) {
        return (
            <p>Error: {error}</p>
        )
    }

    if (isLoading) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <div className="users">
            <div className="users__container">
                <div className="users__header">
                    <div className="users__title">
                        <h1>Users Page</h1>
                    </div>
                    <button className="users__refetch" onClick={refetch}>Refetch</button>
                </div>

                <ul className="users__list">
                    {data?.length > 0 && data?.map(user => {
                        return (<li key={user.id} className="users__item">
                            <Link to={`${user.id}`}>
                                <User user={user} />
                            </Link>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default UsersPage