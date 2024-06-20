import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
const Home = () => {
  return (
    <main>
       <div className='frontpage'>
        <div className='front-text'>
        Unlock Your Potential with Top Tech Gear.
        </div>
        <img src="src/pic/picsc-removebg-preview.png" alt="" />
    </div>
    <div className='home-bottom'>
      <div className='home-para'>
        <p className='home-p'>-------  "Step into a World of Innovation and Excellence with TechGear Haven. Discover a curated selection of cutting-edge gadgets—from sleek monitors to powerful CPUs—that redefine your digital experience. Embrace the future of technology with us."</p>
      </div>
    <div className='bottom-but'>
     <Link to ="/shop"> <button className='home-shopbut'>
        SHOP NOW
        </button>
      </Link>
    </div>
    </div>
    
    </main>
   
  )
}

export default Home
