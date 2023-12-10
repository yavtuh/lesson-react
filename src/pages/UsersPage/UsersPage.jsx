import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import User from '../../components/User/User';
import './UsersPage.scss';


const UsersPage = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        }

        getUsers();

    }, []);

    if(isLoading){
        return (
          <p>Loading</p>
        )
      }

    return (
        <div className="users">
            <div className="users__container">
                <div className="users__title">
                    <h1>Users Page</h1>
                </div>
                <ul className="users__list">
                    {users.length > 0 && users.map(user => {
                        return (<li key={user.id} className="users__item">
                            <Link to={`${user.id}`}>
                                <User  user={user} />
                            </Link>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default UsersPage