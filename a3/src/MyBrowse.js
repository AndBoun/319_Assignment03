import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowProducts({ dataF, setDataF, viewer, setViewer }) {
  const [catalog, setCatalog] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const handleSubmit = (data) => {
    data.preventDefault();
    setViewer(1); // Move to Payment view
  }
  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("/products.json");
        const data = await response.json();
        setCatalog(data.Products);
        console.log(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const total = () => {
      let totalAmt = 0;
      for (let i = 0; i < cart.length; i++) {
        totalAmt += cart[i].price * cart[i].quantity;
      }
      setCartTotal(totalAmt);
      console.log(totalAmt);
    };
    total();
  }, [cart]);

  const addToCart = (el) => {
    console.log("Adding to cart:", el);
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === el.id);
      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + 1,
        };
        return updatedCart;
      } else {
        return [...prevCart, { ...el, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (el) => {
    console.log("Removing from cart:", el);
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === el.id);
      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        if (updatedCart[itemIndex].quantity > 1) {
          updatedCart[itemIndex] = {
            ...updatedCart[itemIndex],
            quantity: updatedCart[itemIndex].quantity - 1,
          };
        } else {
          updatedCart.splice(itemIndex, 1);
        }
        return updatedCart;
      }
      return prevCart;
    });
  };

  const howManyofThis = (id) => {
    const item = cart.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  const listItems = catalog.map((el) => (
    <div className="col-md-6 col-lg-4 mb-4" key={el.id}>
      <div className="swiper-slide">
        <div className="product-item image-zoom-effect link-effect">
          <div className="image-holder position-relative">
            <img src={el.image} alt={el.attribute} className="product-image img-fluid" />
          </div>
          <div className="product-content">
            <h5 className="element-title text-uppercase fs-5 mt-3">{el.item}</h5>
            <p>{el.productDescription}</p>
            <button className="text-decoration-none" onClick={() => addToCart(el)}>
              <span>Add to cart - ${el.price}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <section className="categories overflow-hidden">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
            <h4 className="text-uppercase">CROC SHOPPING</h4>
          </div>
          <div className="row">
            {listItems}
          </div>
        </div>
      </section>
    <form onSubmit={handleSubmit}>
      <div className="card mt-5">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Your Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  <h4>
                    <b>Products selected {cart.length}</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  <h4>
                    <b>Order total ${cartTotal.toFixed(2)}</b>
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              {cart.map((el, index) => (
                <div key={index} className="col-12">
                  <div className="d-flex justify-content-between align-items-center">
                    <img className="img-fluid" src={el.image} width={50} alt={el.item} />
                    <span>{el.item}</span>
                    <span>${(el.price * el.quantity).toFixed(2)}</span>
                    <button className="btn btn-light" onClick={() => removeFromCart(el)}>-</button>
                    <span>{el.quantity}</span>
                    <button className="btn btn-light" onClick={() => addToCart(el)}>+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button type ="submit" className="btn btn-primary"> Checkout </button>
      </form>
    </div>
  );
}

export default ShowProducts;