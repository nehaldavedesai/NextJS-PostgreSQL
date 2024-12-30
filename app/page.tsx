'use client'

// import React, { useState } from 'react'
import './index.css'
import './app.css'
import Link from "next/link"
import { useState, useEffect} from 'react';
import { useRouter } from "next/navigation";
import ReactDOM from 'react-dom/client';
import axios from '@/node_modules/axios/index';


// const root = ReactDOM.createRoot(document.getElementById('root'));

const LoginForm = () => {
// const router = useRouter()


const [email, setEmail] = useState('');
const [password , setPassword] = useState('');


const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};

const handleSubmit = () =>
  {  
    axios({
          method:"POST", 
          // headers: {
          // // 'Accept': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          // // 'Content-Type': 'application/json'},
          // 'Content-Type':'multipart/form-data; boundary=---011000010111000001101001'},
          // // 'Content-Type': 'text/html; charset=UTF-8'
          // // },
          // // 'Content-Type': 'application/x-www-form-urlencoded'},
          // body: {data}
          // body: {formData}
          data: {email, password},
          url: "http://localhost:3001/api/login"
    }).then((res) => console.log(res))
          // body: JSON.stringify({email, password})
                
            // router.Refresh()
          //   const result = await fetchRequest.json().then((response) => {
          //       if (response.status === 200) {
          //         return response.json();
          //       } else {
          //         throw new Error("Something went wrong on API server!");
          //       }
          //     })
          //     .then((response) => {
          //       console.debug(response);
          //     })
          //     .catch((error) => {
          //       console.error(error);
          //     });
            
          //   // console.log(result)

          // });

          // return fetchRequest.json();
          // return fetchRequest
      
  }

return (
    <>
    <form>
      <div className={'mainContainer'}>
        <div className={'titleContainer'}>
        <div>Login</div>
        </div>
        <br />
        <div className={'inputContainer'}>
        <input
            name="email"
            type="text"
            value={email}
            // value = "abcd"
            id="email"
            placeholder="Enter Email "
            // onChange={(ev) => setEmail("email")}
            onChange={handleEmailChange}
            className={'inputBox'}
        />
        </div>
        <br />
        <div className={'inputContainer'}>
        <input
            type="password"
            id="password"
            name="password"
            value={password}
            // value = 'abcd'
            placeholder="Enter Password"
            // onChange={(ev) => setPassword("")}
            onChange={handlePasswordChange}
            className={'inputBox'}
        />
        </div>
        <br />
          <div className={'inputContainer'}>
          <Link href="/admin">
          {/* <input className={'inputButton'} value={'Log In'} onClick={handleSubmit} /> */}
          <input className={'inputButton'} type="submit" onClick={handleSubmit} value={'Log in'} />
          {/* <button type="submit" onClick={handleSubmit}>Log In</button> */}
          </Link>
        </div>
    </div>
    </form>
  </>
  )
}

export default LoginForm
