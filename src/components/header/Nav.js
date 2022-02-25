import React, { useState, Component } from 'react';
import { Link} from 'react-router-dom';

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
        <li>
          <Link to ="/logout">Logout</Link>
        </li>
      </ul>
      </div>
    );
  }

}
export default Nav;
