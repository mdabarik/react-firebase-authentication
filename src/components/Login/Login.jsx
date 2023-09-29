import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { useState } from 'react';

const Login = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth(app)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
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
            .then((res) => {
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const logedInUser = result.user;
            console.log(logedInUser);
            setUser(logedInUser)

        })
        .catch(error => {
            console.log(error);;
        })
    }

    return (
        <div>
            {/* {user ? logout : sign in} */}

            {  user ?
            <button onClick={() => handleSignOut()} >Signout</button> :
                <div>
                    <button onClick={() => handleGoogleSignIn()}>Google Login</button>
                    <button onClick={() => handleGithubSignIn()}>Github Sign in</button>
                </div>
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