import React from 'react';
import { Link } from 'react-router-dom';
import Statecard from './Statecard';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <div className="card">
        <img src="zomato.avif" className="card-img" alt="..." style={{ height: '36rem' }} />
        <div className="card-img-overlay contentbg">
          <h5 className="card-title name">zomato</h5>
          <h1 className="card-text parabg">Find the best restaurants, cafe's <br /> and bars in india</h1>
        </div>
        <div className="card-img-overlay">
          <ul className="nav1">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Add restaurant</Link>
            </li>
            <li className="nav-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <Link className="nav-link" to='/login' data-bs-toggle="modal" data-bs-target="#exampleModal">Log in</Link>
            </li>
            <li className="nav-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <Link className="nav-link" to='/signup' data-bs-toggle="modal" data-bs-target="#exampleModal">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='belowbg'>
        <h1>Popular locations in <img style={{ height: '33px' }} src="flag.png" alt='/' /> India</h1>
        <p>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food,<br /> Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users <br /> just like you, to find your next great meal.</p>
      </div>

      <div>
        <Statecard />
      </div>
      <div>
        <Footer />
      </div>
      <Signup />
      <Login />

    </>
  )
}

export default Home