import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Payment = ({ dataF, setDataF, viewer, setViewer }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setViewer(2); // Move to Summary view
    };

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h2 className="mb-0">Payment Information</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-4">
                            <h5 className="mb-3">Personal Information</h5>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="Enter your address" />
                            </div>
                        </div>

                        <div className="row">
                            <h5 className="mb-3">Card Details</h5>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cardNumber" className="form-label">Card Number</label>
                                <input type="text" className="form-control" id="cardNumber" placeholder="Enter card number" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cardName" className="form-label">Card Name</label>
                                <input type="text" className="form-control" id="cardName" placeholder="Enter name on card" />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                                <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="cvv" className="form-label">CVV</label>
                                <input type="text" className="form-control" id="cvv" placeholder="Enter CVV" />
                            </div>
                        </div>
                        
                        <div className="d-grid gap-2 col-6 mx-auto mt-4">
                            <button type="submit" className="btn btn-primary btn-lg">Submit Payment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;