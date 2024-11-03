import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Payment = ({ dataF, setDataF, viewer, setViewer }) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            setDataF(prev => ({ ...prev, ...data }));
            setViewer(2);
        }
        
        setValidated(true);
    };

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h2 className="mb-0">Payment Information</h2>
                </div>
                <div className="card-body">
                    <form noValidate className={validated ? 'was-validated' : ''} onSubmit={handleSubmit}>
                        <div className="row mb-4">
                            <h5 className="mb-3">Personal Information</h5>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="name" className="form-label">Full Name*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    required
                                    minLength="2"
                                />
                                <div className="invalid-feedback">
                                    Please enter your full name (minimum 2 characters)
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">Email*</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter a valid email address
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="address" className="form-label">Address*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter your address
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="city" className="form-label">City*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter your city
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="state" className="form-label">State*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="state"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter your state
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="zip" className="form-label">ZIP Code*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="zip"
                                    pattern="[0-9]{5}"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter a valid 5-digit ZIP code
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <h5 className="mb-3">Card Details</h5>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cardNumber" className="form-label">Card Number*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="cardNumber"
                                    pattern="[0-9]{16}"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter a valid 16-digit card number
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cardName" className="form-label">Card Name*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="cardName"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter the name on your card
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="expiryDate" className="form-label">Expiry Date*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="expiryDate"
                                    pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                                    placeholder="MM/YY"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter a valid expiry date (MM/YY)
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="cvv" className="form-label">CVV*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="cvv"
                                    pattern="[0-9]{3,4}"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please enter a valid CVV (3-4 digits)
                                </div>
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