import React, { useState } from 'react';

const Contact = () => {
    const [data,setData] = useState({
        fullname : '',
        phone : '',
        email : '',
        message :'',
    });
     const InputEvent = (event) => {
        const {name,value} = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
        }
        });
     };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is : ${data.fullname} \nMy Mobile Number is : ${data.phone} \nMy Email is : ${data.email} \nMy Message is : ${data.message}`);
    }
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center text-warning'> Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="" 
                                class="form-label">Full Name</label>
                                <input type="text" class="form-control"
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}  
                                placeholder="Enter Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="" 
                                class="form-label">Phone Number</label>
                                <input type="number" class="form-control"
                                name="phone"
                                value={data.phone}
                                onChange={InputEvent} 
                                 placeholder="Enter your Mobile No" />
                            </div>
                            <div class="mb-3">
                                <label for=""
                                 class="form-label">Email address</label>
                                <input type="email" class="form-control"
                                name="email"
                                value={data.email}
                                onChange={InputEvent}
                                 placeholder="Enter your Email Address" />
                            </div>
                
                            <div class="mb-3">
                                <label for="" 
                                class="form-label">Message</label>
                                <textarea class="form-control"
                                name="message"
                                value={data.message}
                                onChange={InputEvent} 
                                 rows="3"></textarea>
                            </div>
                            <div className='col-12'>
                                <button className='btn btn-outline-success' type='submit'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;
