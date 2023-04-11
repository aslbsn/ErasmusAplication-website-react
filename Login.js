import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Login_s() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const kullanici_adi = sessionStorage.getItem('email');
        const sifre = sessionStorage.getItem('password');

        if(email == kullanici_adi && password == sifre){

            navigate('/portal');
        }
        else{
            setError('Hatali kullanici adi veya sifre!');
        }


    }


    return (
        <div id="girisbox"className="container bg-light text-dark rounded border 
        border-warning" style={{height:"30em"}}>
         
            <h2 className="h2 mb-3 fw-normal">Giriş</h2>
            <form onSubmit={handleSubmit}>
                <input id="girisbuton" type="email" 
                        placeholder="Mail adresiniz" 
                        value={email} 
                        onChange= {(e) => setEmail(e.target.value)}
                        required />
                <input id="girisbuton" type="password"
                        placeholder="Şifre"
                        value={password}
                        onChange= {(e) => setPassword(e.target.value)}
                        required />
                <button id="girisbuton2" type="submit" className="w-50 btn btn-sm btn-secondary" >Login</button>
            </form>

            {error && <p style={{color:'red'}}> {error} </p> }

            <p>
                Hesabınız yok mu? <Link to="/kayit">Kayıt Ol!</Link>
            </p>
        </div>
    );
}

export default Login_s;