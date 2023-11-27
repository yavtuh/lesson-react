import React from 'react'

const User = ({ user }) => {
  const { street, city, zipcode, geo } = user.address;
  return (
    <div>
      <p>User Name: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address</p>
      <ul>
        <li>Street: {street}</li>
        <li>City: {city}</li>
        <li>Zipcode: {zipcode}</li>
        <li>
          <p>Geo</p>
          <ul>
            <li>Lat: {geo.lat}</li>
            <li>Lng: {geo.lng}</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default User