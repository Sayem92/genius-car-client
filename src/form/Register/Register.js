import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'

const Register = () => {

    const handleSignUp = e => {
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
                    <h1 className="text-4xl font-semibold text-center my-5">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" name='ConfirmPassword' placeholder="confirm password" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? Please  <Link className='text-orange-600 font-semibold' to='/login'> Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;