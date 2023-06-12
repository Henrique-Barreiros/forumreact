import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        setEmail("");
        setPassword("");
    };

    return (
        <main className='login'>
            <h1 className='loginTitle'>Faça login na sua conta</h1>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    name='email'
                    id='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Senha</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='loginBtn'>Login</button>
                <p>
                   Não possui uma conta? <Link to='/register'>Criar</Link>
                </p>
            </form>
        </main>
    );
};
export default Login;