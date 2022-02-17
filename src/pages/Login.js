import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: ""
    };
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleOnClick = (e) => {
    axios.post('/api/login',{'id':this.state.id, 'password':this.state.password})
      .then(response => {
        if (response.status == 200) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.headers.access_token}`;
          
        }else if(response.status == 401){
          alert('입력하신 ID 혹은 비밀번호가 일치하지 않습니다.');
        }else{
          alert('서버 오류입니다. 다시 시도해주세요.');
        }
      });
  }

  render() {
    delete axios.defaults.headers.common['Authorization'];
    return (

      <div className="App">

        <form className="LoginForm">
          <h2 className="LoginHeader">Login</h2>
          <div className="id_pw_input">
            <div>

            </div>
            <div>
            <input type="text" id="inputId" className="form-control" placeholder="ID" name="id" onChange={this.handleChange} />
            </div>
            <div>
            <input type="password" id="inputPassword" className="form-control" placeholder="PASSWORD" name="password" onChange={this.handleChange} />
            </div>
            <div>
            <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleOnClick}> 로그인 </button>
            </div>
          </div>
          <div>
            <a className="link_info" href="">아이디 찾기</a>
            <a className="link_info" href="">비밀번호 찾기</a>
            <a className="link_info" href="/joinus">회원가입</a>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
