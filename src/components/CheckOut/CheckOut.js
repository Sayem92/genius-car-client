import React from 'react';
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext)
    // console.log(title);
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = ` ${form.firstName.value} ${form.lastName.value} `;
        const email = user?.email || "unregistered";
        const phone = form.phone.value;
        const message = form.message.value;
        // console.log(name, email, phone, message);

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        if(phone.length < 11){
            alert('Phone number not valid!!')
            return
        }
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization : `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert("Order placed successfully")
                    form.reset();
                    navigate('/orders')

                }
            })
            .catch(err => console.log(err))

    }

    return (
        <div className='container mx-auto border my-24'>
            <div className='border-gray-500 p-24 bg-slate-300 rounded-lg'>
                <h2 className="text-4xl">You are about to order: <span className='text-blue-600'>{title}</span>
                </h2>
                <h4 className='text-2xl my-3'>Price: <span className='text-orange-500'>${price}</span>
                </h4>

                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="firstName" type="text" placeholder="First Name" className="input input-bordered input-accent w-full " />

                        <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered input-accent w-full " />

                        <input name="email" type="email" defaultValue={user?.email} readOnly placeholder="Your Email" className="input input-bordered input-accent w-full " />

                        <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered input-accent w-full " required />
                    </div>
                    <div className='my-4'>
                        <textarea name="message" className="w-full textarea textarea-accent" placeholder="Your message" required>
                        </textarea>
                    </div>
                    <button className="btn btn-success hover:bg-green-500 w-full text-white">Order Confirm</button>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;