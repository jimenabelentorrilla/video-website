import React from 'react'
import Gif from "../assets/gif-cinema.png";
const Footer = () => {
  return (
    <div className='container-footer'>
        <div>
            <div className='footer-text'>
                <h3>Stay Connected</h3>
                <p>From cult classics to modern masterpieces.
                Stay updated with the latest movies, news and articles from INDI.</p>
            </div>
            <div className='footer-form'>
                <input type="text" class="form-control" placeholder="Your Email" />
                <button>Submit</button>
                
            </div>
        </div>
        <div>
            <img className="footer-img" src={Gif}/>
        </div>
        
    </div>
  )
}

export default Footer