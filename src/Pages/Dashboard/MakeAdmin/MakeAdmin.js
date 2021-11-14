import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    const handleOnblur = e => {
        setEmail(e.target.value);
    }

    const handleAdmin = e => {
        const user = { email };

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true)
                }
            })

        e.preventDefault();
    }

    return (
        <div className="mt-5 ms-5">
            <h3>Our Admin Maker</h3>

            <form onSubmit={handleAdmin}>

                <div className="form-group">

                    <input
                        type="email"
                        onBlur={handleOnblur}
                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div>

                <div className="mt-3">
                    <button type="submit" className="btn btn-primary">Make Admin</button>

                </div>

            </form>
            {
                success && <div className="alert alert-info error-control" role="alert">
                    Admin create successfully!
                </div>
            }
        </div>
    );
};

export default MakeAdmin;