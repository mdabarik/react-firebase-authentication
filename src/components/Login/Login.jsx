import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { useState } from 'react';

const Login = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth(app)
    console.log(app);
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }


    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            {/* {user ? logout : sign in} */}

            {  !user ?
                <button
                onClick={() => handleGoogleSignIn()}
            >Google Login</button> :
            <button
                onClick={() => handleSignOut()}
            >Signout</button>
            }
            {<div>
                <h2>User: {user?.displayName}</h2>
                <h3>Email: {user?.email}</h3>
                <img src={user?.photoURL} />
            </div>}
        </div>
    );
};

export default Login;