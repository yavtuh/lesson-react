import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import User from '../../components/User/User';
import './UserPage.scss';


const UserPage = () => {

  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        if (data.length === 0) {
          throw new Error('User not found');
        }
        setUser(data);
      } catch (err) {
        navigate('/404');
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    
    getUser();

  }, [id]);

  if(isLoading){
    return (
      <p>Loading</p>
    )
  }

  return (
    <div className="user">
      <div className="user__container">
        <div className="user__title">
          <h1>User Page</h1>
        </div>
        
        <div className="user__item">
              <User user={user} />
        </div>
      </div>
    </div>
  )
}

export default UserPage