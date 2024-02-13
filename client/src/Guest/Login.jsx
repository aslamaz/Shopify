import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const [checkEmail, setCheckEmail] = useState('');
    const [checkPassword, setCheckPassword] = useState('');





    const handleLogin = () => {
        const data = {
            userEmail: checkEmail,
            userPassword: checkPassword
        }

        axios.post('http://localhost:5000/loginCheck', data).then((response) => {
            console.log(response.data);
            const data = response.data;
            const { message, login, id } = data
            if (login === "admin") {
                sessionStorage.setItem("adminId", id)

                navigate("../Admin/")
            }
            else if (login === "customer") {
                sessionStorage.setItem("customerId", id)

                navigate("../User/");
            }
            else if (login === "Shop") {
                sessionStorage.setItem("shopId", id)

                navigate("../shop/");
            }



        })
    }

    return (
        <div>

            <div class="login-page">
                <div style={{ fontSize: "38px", fontWeight: "bold" }}>LOGIN...
                    <hr></hr>
                </div>
                <div class="logform">
                    <div class="login-form">
                        <input type="email" placeholder="EnterEmail" onChange={(event) => setCheckEmail(event.target.value)} />
                        <input type="text" placeholder="password" onChange={(event) => setCheckPassword(event.target.value)} />
                        <button onClick={handleLogin}>login</button>
                        <p class="message">Not registered? <Link to={'/Guest/User'} className='linkuser' style={{ fontSize: "12px", marginLeft: "0px" }}>Create an account</Link></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login