import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Payment = ({ dataF, setDataF, viewer, setViewer, cart, cartTotal }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setDataF(prev => ({ ...prev, ...data }));
        setViewer(2);
    };

    const handleBack = () => {
        setViewer(0);
    };

    return (
        <div className="container mt-5">
            {/* Cart Summary Section */}
            <div className="card shadow mb-4">
                <div className="card-header bg-dark text-white">
                    <h2 className="mb-0">Cart Summary</h2>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
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
                                        <td>{item.item}</td>
                                        <td>{item.quantity}</td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="4" className="text-end fw-bold">Subtotal:</td>
                                    <td>${cartTotal.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td colSpan="4" className="text-end fw-bold">Total:</td>
                                    <td className="fw-bold">${cartTotal.toFixed(2)}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>

            {/* Existing Payment Form */}
            <div className="card shadow">
                <div className="card-header bg-dark text-white">
                    <h2 className="mb-0">Payment Information</h2>
                </div>
                <div className="card-body pb-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mb-4">
                            <h5 className="mb-3">Personal Information</h5>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Full Name*</label>
                                <input 
                                    {...register("name", { 
                                        required: "Full name is required",
                                        minLength: { value: 2, message: "Minimum length is 2 characters" }
                                    })} 
                                    className="form-control"
                                    placeholder="Enter your full name"
                                />
                                {errors.name && <p className="text-danger">{errors.name.message}</p>}
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Email*</label>
                                <input 
                                    {...register("email", { 
                                        required: "Email is required",
                                        pattern: { 
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })} 
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                                {errors.email && <p className="text-danger">{errors.email.message}</p>}
                            </div>

                            <div className="col-12 mb-3">
                                <label className="form-label">Address*</label>
                                <input 
                                    {...register("address", { required: "Address is required" })} 
                                    className="form-control"
                                    placeholder="Enter your address"
                                />
                                {errors.address && <p className="text-danger">{errors.address.message}</p>}
                            </div>

                            <div className="col-md-4 mb-3">
                                <label className="form-label">City*</label>
                                <input 
                                    {...register("city", { required: "City is required" })} 
                                    className="form-control"
                                    placeholder="Enter your city"
                                />
                                {errors.city && <p className="text-danger">{errors.city.message}</p>}
                            </div>

                            <div className="col-md-4 mb-3">
                                <label className="form-label">State*</label>
                                <input 
                                    {...register("state", { required: "State is required" })} 
                                    className="form-control"
                                    placeholder="Enter your state"
                                />
                                {errors.state && <p className="text-danger">{errors.state.message}</p>}
                            </div>

                            <div className="col-md-4 mb-3">
                                <label className="form-label">ZIP Code*</label>
                                <input 
                                    {...register("zip", { 
                                        required: "ZIP code is required",
                                        pattern: { value: /^[0-9]{5}$/, message: "Invalid ZIP code" }
                                    })} 
                                    className="form-control"
                                    placeholder="Enter ZIP code"
                                />
                                {errors.zip && <p className="text-danger">{errors.zip.message}</p>}
                            </div>
                        </div>

                        <div className="row">
                            <h5 className="mb-3">Card Details</h5>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Card Number*</label>
                                <input 
                                    {...register("cardNumber", { 
                                        required: "Card number is required",
                                        pattern: { value: /^[0-9]{16}$/, message: "Invalid card number" }
                                    })} 
                                    className="form-control"
                                    placeholder="Enter card number"
                                />
                                {errors.cardNumber && <p className="text-danger">{errors.cardNumber.message}</p>}
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Card Name*</label>
                                <input 
                                    {...register("cardName", { required: "Card name is required" })} 
                                    className="form-control"
                                    placeholder="Enter name on card"
                                />
                                {errors.cardName && <p className="text-danger">{errors.cardName.message}</p>}
                            </div>

                            <div className="col-md-4 mb-3">
                                <label className="form-label">Expiry Date*</label>
                                <input 
                                    {...register("expiryDate", { 
                                        required: "Expiry date is required",
                                        pattern: { 
                                            value: /(0[1-9]|1[0-2])\/([0-9]{2})/,
                                            message: "Invalid expiry date (MM/YY)"
                                        }
                                    })} 
                                    className="form-control"
                                    placeholder="MM/YY"
                                />
                                {errors.expiryDate && <p className="text-danger">{errors.expiryDate.message}</p>}
                            </div>

                            <div className="col-md-4 mb-3">
                                <label className="form-label">CVV*</label>
                                <input 
                                    {...register("cvv", { 
                                        required: "CVV is required",
                                        pattern: { value: /^[0-9]{3,4}$/, message: "Invalid CVV" }
                                    })} 
                                    className="form-control"
                                    placeholder="Enter CVV"
                                />
                                {errors.cvv && <p className="text-danger">{errors.cvv.message}</p>}
                            </div>
                        </div>
                        
                        <div className="d-flex justify-content-center gap-3 mt-4">
                            <button 
                                type="button" 
                                className="btn btn-outline-dark btn-lg px-4"
                                onClick={handleBack}
                            >
                                Back to Browse
                            </button>
                            <button 
                                type="submit" 
                                className="btn btn-dark btn-lg px-4"
                            >
                                Submit Payment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;