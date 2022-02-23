import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setToken} from '../actions'
function LoginPage(){
  const dispatch = useDispatch();

  const RouterContext = React.createContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const handleOnClick = (e) => {
    axios.post('/api/login',{'id': id, 'password': password})
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          dispatch(setToken(response.headers.access_token));
          // navigate('/');
          console.log(RouterContext)
          console.log(location)
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.headers.access_token}`;
        }
      })
      .catch(error => {
        console.log(error.response);
        if(error.response.status === 401){
          alert('입력하신 ID 혹은 비밀번호가 일치하지 않습니다.');
        }else{
          alert('서버 오류입니다. 다시 시도해주세요.');
        }
      });
  }
    // delete axios.defaults.headers.common['Authorization'];
    return (
      <div className="App">

        <form className="LoginForm">
          <h2 className="LoginHeader">Login</h2>
          <div className="id_pw_input">
            <div>

            </div>
            <div>
            <input type="text" id="inputId" className="form-control" placeholder="ID" name="id" onChange={({ target: { value } }) => setId(value)} />
            </div>
            <div>
            <input type="password" id="inputPassword" className="form-control" placeholder="PASSWORD" name="password" onChange={({ target: { value } }) => setPassword(value)} />
            </div>
            <div>
            <button className="btn btn-lg btn-primary btn-block" type="button" onClick={handleOnClick}> 로그인 </button>
            </div>
          </div>
          <div>
            <a className="link_info" href="">비밀번호 찾기</a>
            <a className="link_info" href="/joinus">회원가입</a>
          </div>
        </form>
      </div>
    );
}
export default LoginPage;
