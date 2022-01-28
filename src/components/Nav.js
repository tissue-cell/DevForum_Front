import React, { useState, Component } from 'react';
import { Link} from 'react-router-dom';
//import * as FaIcons from 'react-icons/fa';
//import * as AiIcons from 'react-icons/ai';
//import { IconContext } from 'react-icons';
class Nav extends Component{

  render(){
    return (

      <div>
      <ul>
        <li>
          <Link to ="/">Home</Link>
        </li>
        <li>
          <Link to ="/login">Login</Link>
        </li>
      </ul>
      </div>
    );
  }

}
export default Nav;
