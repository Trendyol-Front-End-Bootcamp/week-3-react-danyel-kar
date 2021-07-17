import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = ()=>{
    return(
        <div>
            <h1>404 Page Not Found...</h1>
            <div> <Link to="/">                       
                <button className='back-btn'>Click For Home Page</button>         
            </Link></div>
           
        </div>
    )
}
export default NotFound;