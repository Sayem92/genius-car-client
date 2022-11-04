import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const confirmPassword = form.ConfirmPassword.value;

        login(email, confirmPassword)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }
                // user email post korci-----------
                // console.log(currentUser);

                // get jwt token----------------------------------
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is easiest but not the best for safe jwt token
                        localStorage.setItem('genius-token', data.token)

                        form.reset()
                        navigate(from, { replace: true })
                    })




            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero w-full mx-auto my-20">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImg} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full px-5  shadow-2xl bg-base-100 py-20">
                    <h1 className="text-4xl font-semibold text-yellow-400 text-center my-5">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='ConfirmPassword' placeholder="confirm password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to Genius Car <Link className='text-orange-600 font-semibold' to='/register'> Sign up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;