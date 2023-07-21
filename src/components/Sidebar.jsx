import React from 'react'
import Logo from "../assets/Logo.png";
import Search from "../assets/search-icon.png";
import Movie from "../assets/movie-icon.png";
import Fav from "../assets/fav-icon.png";
import User from "../assets/user-icon.png";

const Sidebar = () => {
  return (
    <div>
        <nav className='sidebar-menu'>
            <div className='sidebar-flex'>
                <div>
                    <img src={Logo} />
                </div>
                <div>
                    <a href="/"><img src={Search} /></a>
                </div>
                <div>
                    <a href="/"><img src={Movie} /></a>
                </div>
                <div>
                    <a href="/"><img src={Fav} /></a>
                </div>
                <div>
                    <a href="/"><img src={User} /></a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Sidebar