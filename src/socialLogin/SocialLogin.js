import React from 'react';
import { useContext } from 'react';
import { setAuthToken } from '../api/AuthToken';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);

                // jwt create---------------------------
                setAuthToken(user)

            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn}
                    className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;