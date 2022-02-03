import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Sidebar from '../components/Sidebar';
import MainPage from './Main';

class Index extends Component{
  state = {
    csrfToken: this.getCookie('XSRF-TOKEN')
  };

  getCookie(key) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
  }
  componentDidMount(){
    console.log(this.getCookie('XSRF-TOKEN'))
    this.interval = setInterval(this.hello, 250);
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  //csrf토큰 예제
 /* hello = () => {
    fetch('api/hello',{method: 'POST',
    headers : {
      'X-XSRF-TOKEN': this.state.csrfToken,
    }})
    .then(response => response.text())
    .then(message => {
      this.setState({message: message});
    });
  }
  */
  render(){
    return (
      <div className="App">
        <MainPage/>
      </div>
    );
  }
}

export default Index;
