import React from 'react'
import {Link} from "react-router-dom"
const ErrorPage = () => {
  return (
    <>
        <div id='notfound'>
            <div className='notfound'>
                <div className='notfound-404'>
                    <p>404</p>
                </div>
                <h2 >We are sorry ,Page not found!!</h2>
                <p className='md-5'>
                The page you are looking for might have been removed had its name changed or is temporarily unavailable

                </p>
                <Link to ='/'>Back To HomePage</Link>
            </div>
        </div>
    </>
  )
}

export default ErrorPage