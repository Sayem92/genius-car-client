import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../api/AuthToken';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const confirmPassword = form.ConfirmPassword.value;
        // console.log(name,email,confirmPassword);
        createUser(email, confirmPassword)
            .then(result => {
                const user = result.user;
                console.log(user);

                // create jwt--------------
                setAuthToken(user)
                
                form.reset()
            })
            .then(error => console.log(error))
    }


    return (
        <div className="hero w-full mx-auto my-20">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImg} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full px-5  shadow-2xl bg-base-100 py-20">
                    <h1 className="text-4xl font-semibold text-yellow-400 text-center my-5">Sign Up</h1>
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
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='ConfirmPassword' placeholder="confirm password" className="input input-bordered" required />

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