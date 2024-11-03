import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MySummary = ({ dataF, setDataF, viewer, setViewer, cart, setCart, cartTotal, setCartTotal }) => {
    const updateHooks = () => {
        setViewer(0);
        setDataF({});
        setCart([]);
        setCartTotal(0);
    };

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header bg-dark text-white">
                    <h2 className="mb-0">Order Summary</h2>
                </div>
                <div className="card-body">
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <h4 className="mb-3">Customer Information</h4>
                            <div className="card bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">{dataF.name}</h5>
                                    <p className="card-text mb-1">{dataF.email}</p>
                                    <p className="card-text mb-1">{dataF.address}</p>
                                    <p className="card-text mb-1">{dataF.city}, {dataF.state} {dataF.zip}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h4 className="mb-3">Order Details</h4>
                    <div className="table-responsive mb-4">
                        <table className="table align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Item</th>
                                    <th>Details</th>
                                    <th className="text-end">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index}>
                                        <td style={{ width: '100px' }}>
                                            <img 
                                                src={item.image} 
                                                alt={item.item} 
                                                className="img-thumbnail"
                                                style={{ maxWidth: '80px' }}
                                            />
                                        </td>
                                        <td>
                                            <h6 className="mb-0">{item.item}</h6>
                                            <small className="text-muted">Quantity: {item.quantity}</small>
                                        </td>
                                        <td className="text-end">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot className="table-light">
                                <tr>
                                    <td colSpan="2" className="text-end fw-bold">Total:</td>
                                    <td className="text-end fw-bold">${cartTotal.toFixed(2)}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div className="text-center">
                        <p className="lead text-success mb-4">Thank you for your purchase!</p>
                        <button onClick={updateHooks} className="btn btn-dark btn-lg px-5">
                            Return to Browse
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySummary;