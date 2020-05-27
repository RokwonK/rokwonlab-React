import React, {useEffect} from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import dotenv from 'dotenv';

dotenv.config();

function Logintap() {
    const handle = (e:any) => {
        console.log(e.target.value);
    }
    return (
        <Login className="login">

            <Social_login>

                <GoogleLogin
                    className="google-login"
                    clientId ={`${process.env.REACT_APP_google_key}`}
                    render={(props:any) => (<FcGoogle size={35} className="icon" onClick={props.onClick}/>) }
                    buttonText="Login with Google"
                    cookiePolicy={'http://localhost:3000'}
                    onSuccess={result => console.log(result)} 
                    onFailure={result => console.log(result)}/>
                
                <FacebookLogin 
                    appId={`${process.env.REACT_APP_facebook_key}`}
                    autoLoad={false}
                    render={(props :any) => (<FaFacebook size={35} className="icon" color="#3b5998" onClick={props.onClick} />) }
                    fields="name,email,picture"
                    cssClass="facebook-login"
                    callback={ (result:any) => console.log(result)}/>    
                
                <AiFillTwitterCircle size={35} className="icon" color="#00acee" onClick={()=> alert('not supported')}/>

            </Social_login>
            
        </Login>
        
    )
}

const Login = styled.div`
    
    display:flex;
    flex-direction:column;
    
`;

const Social_login = styled.div`
    display: inline-block;
    
    
    flex-direction:column;
    align-self:center;
    border-radius:10px;
    padding-top:1px;
    
    
    .icon{
        margin-left:10px;
        margin-right:10px;
    }
`;

export default Logintap;