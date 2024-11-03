import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MySummary = ({ dataF, setDataF, viewer, setViewer, cart, cartTotal }) => {
    const updateHooks = () => {
        setViewer(0);
        setDataF({});
    };

    return (
        <div className="container mt-5">
            <h1>Order Summary</h1>
            <h3>{dataF.name}</h3>
            <p>{dataF.email}</p>
            <p>{dataF.address}</p>
            

            <h4>Items Ordered:</h4>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        <img src={item.image} width={50} className="me-3"/>
                        {item.item} - ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                    </li>
                ))}
            </ul>
            <p>Total: ${cartTotal.toFixed(2)}</p>
            <p>Thank you for your purchase!</p>
            <button onClick={updateHooks} className="btn btn-primary">Return to Browse</button>
        </div>
    );
};

export default MySummary;