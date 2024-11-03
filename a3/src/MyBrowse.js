import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowProducts() {
  const [catalog, setCatalog] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setCatalog(data.Products); // Ensure this matches the structure of your JSON
        console.log(data);
      } catch (error) {
        console.error("Error fetching catalog data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const total = () => {
      let totalAmt = 0;
      for (let i = 0; i < cart.length; i++) {
        totalAmt += cart[i].price;
      }
      setCartTotal(totalAmt);
      console.log(totalAmt);
    };
    total();
  }, [cart]);

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let itemFound = false;
    const updatedCart = cart.filter((cartItem) => {
      if (cartItem.id === el.id && !itemFound) {
        itemFound = true;
        return false;
      }
      return true;
    });
    if (itemFound) {
      setCart(updatedCart);
    }
  };

  const howManyofThis = (id) => {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  };

  const listItems = catalog.map((el) => (
    <div className="row border-top border-bottom" key={el.id}>
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" src={el.image} />
        </div>
        <div className="col">
          <div className="row text-muted">{el.item}</div>
        </div>
        <div className="col">
          <button type="button" className="btn btn-light" onClick={() => removeFromCart(el)}>-</button> {" "}
          <button type="button" className="btn btn-light" onClick={() => addToCart(el)}>+</button>
        </div>
        <div className="col">
          ${el.price} <span className="close">&#10005;</span>{howManyofThis(el.id)}
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>CROC Shopping</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  <h4>
                    <b>Products selected {cart.length}</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  <h4>
                    <b>Order total ${cartTotal}</b>
                  </h4>
                </div>
              </div>
            </div>
            <div>{listItems}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProducts;