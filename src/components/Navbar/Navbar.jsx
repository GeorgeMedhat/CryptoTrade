import React, { useContext } from 'react'

import "./Navbar.css"
import logo from'../../Assets/CryptoTrade.png';
import arrow from'../../Assets/right-up.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar=(props)=> {

    const {setCurrency}=useContext(CoinContext)

    const currencyHandler =(event)=>{
      switch(event.target.value){
        case 'USD' :{
          setCurrency({name:'usd',symbol:'$'});
          break;
        }
        case 'EUR' :{
          setCurrency({name:'eur',symbol:'€'});
          break;
        }
        case 'JPY' :{
          setCurrency({name:'jpy',symbol:'¥'});
          break;
        }
        default :{
          setCurrency({name:'usd',symbol:'$'});
          break;
        }
      }
    }

  return (
    <div className='navbar'>
    <Link to={'/'}>
      <img className='logo' src={logo} alt="crypto app"/>
    </Link>
    <ul>
        <Link to={'/'}><li>Home</li></Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>BLOG</li>
    </ul>

    <div className='nav-right'>
      <select onChange={currencyHandler}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
      </select>
      <button>Sign up<img className='center' src={arrow} alt=''></img></button>
    </div>
    </div>
  )
}

export default Navbar