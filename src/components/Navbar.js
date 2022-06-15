import React from 'react'
import haze from '../haze.png';



const Navbar = () => {
    return (
        <div>
            <nav class="navbar bg-light">
                <div class="container-fluid mx-2">
                    <a class="navbar-brand d-flex" href="/">
                        <img src={haze} alt="" width="30" height="24" class="d-inline-block align-text-top" />
                        <p className='mx-3'> WEATHER APP MADE BY PRANAV JADHAV</p>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
