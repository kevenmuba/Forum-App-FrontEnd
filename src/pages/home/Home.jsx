import React, { useContext } from 'react'
import { AppState } from '../../App'

 
function Home() {
  const {user} = useContext(AppState)
  return (
    <div>
      <p>Home</p>
      <hr />
      <hr />
      <hr />
      <p> Welcome:{user.username}</p>
    </div>
  )
}

export default Home
