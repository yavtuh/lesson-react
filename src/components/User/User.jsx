import './User.scss';

const User = ({ user }) => {
  const { street, city } = user.address;
  return (
    <div className="user">
      <div className="user__name">
        <p>{user.username}</p>
      </div>
      <div className="user__contacts">
        <div className="user__email"><p>{user.email}</p></div>
        <div className="user__phone"><p>{user.phone}</p></div>
      </div>
      <div className="user__address">
        <div className="user__address-title">
          <p>Address</p>
        </div>
        <ul className="user__address-list">
          <li className="user__address-item">
            <span>Street:</span> <span>{street}</span>
          </li>
          <li className="user__address-item">
            <span>City:</span> <span>{city}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default User