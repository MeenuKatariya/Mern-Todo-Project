import React from 'react'
import { LoginContext } from '../../Context/LoginContext';

function Homepage() {
  const {user} = React.useContext(LoginContext);
  return (
    <div >
        
        <div style={{textDecoration:"none", fontSize:"20px", color:"red",fontWeight:"800",marginTop:"30px"}} className='user-box'>
            {
                user  ? "User login" : "Please Login"
            }
        </div>
    </div>
  )
}

export default Homepage