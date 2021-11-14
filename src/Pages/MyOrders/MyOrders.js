import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {

    const { user } = useAuth();
    const [myorder, setMyorder] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/clients?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyorder(data))
    }, [user.email])

    return (
        <div>
            <h3>My all Orders: {myorder.length}</h3>
        </div>
    );
};

export default MyOrders;