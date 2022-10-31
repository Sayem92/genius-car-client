import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'

const Login = () => {

    const handleLogin = e => {
        e.preventDefault()
        console.log('okkkkkkk');
    }

    return (
        <div className="hero w-full mx-auto my-20">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImg} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full px-5  shadow-2xl bg-base-100 py-20">
                    <h1 className="text-4xl font-semibold text-center my-5">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='name' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
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