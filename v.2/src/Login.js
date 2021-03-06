import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';
import './App.css';

const firebaseApp= firebase.initializeApp(firebaseConfig);

class Login extends Component{
    render(){
        const { user, signOut, signInWithGoogle} = this.props;
        return(
            <div>
            
                {
                    user ? <p> Hola, {user.displayName}</p>
                    :<p>Por favor, inicia sesión </p>
                }
                {
                    user ? <button onClick={signOut}> Cerrar sesión</button>
                    :<button onClick={signInWithGoogle}>Iniciar sesión con Google</button>
                }
            </div>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();
const providers= {googleProvider:new firebase.auth.GoogleAuthProvider(),};

export default withFirebaseAuth({
    providers,firebaseAppAuth,
})(Login);
/*
const Login = () => {

    return ( 
        <div className="login">
                <button>Google</button>
        </div>
    );
}
export default Login;
 */