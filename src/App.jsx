import { useEffect, useState } from "react"
import User from "./components/User/User"



function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      }catch(err){
        console.log(err);
      } finally{
        setIsLoading(false);
      }
    }

    getUsers();

    const handleScroll = () => {
      console.log('Scroll');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);
  
  if (isLoading) {
    return (
      <>
        Loading......
      </>
    );
  }

  return (
    <>
      { users.length > 0 && users.map(user =>{
          return <User key={user.id} user={user}/>
      })}
    </>
  )
}

export default App
