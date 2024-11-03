import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ShowProducts({
  dataF,
  setDataF,
  viewer,
  setViewer,
  cart,
  setCart,
  cartTotal,
  setCartTotal,
}) {
  const [catalog, setCatalog] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setCatalog(data.Products); // Ensure this matches the structure of your JSON
        setFilteredCatalog(data.Products);
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

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term === "") {
      setFilteredCatalog(catalog);
    } else {
      const filtered = catalog.filter(
        (item) =>
          item.item.toLowerCase().includes(term.toLowerCase()) ||
          item.category.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredCatalog(filtered);
    }
  };

  const listItems = filteredCatalog.map((el) => (
    <div className="col-md-6 col-lg-4 mb-4" key={el.id}>
      <div className="swiper-slide">
        <div className="product-item image-zoom-effect link-effect">
          <div className="image-holder position-relative">
            <img
              src={el.image}
              alt={el.attribute}
              className="product-image img-fluid"
            />
          </div>
          <div className="product-content">
            <h5 className="element-title text-uppercase fs-5 mt-3">
              {el.item}
            </h5>
            <p>{el.productDescription}</p>
            <button
              className="btn btn-dark w-100 py-2 transition-all hover:bg-gray-800 active:bg-gray-700"
              onClick={() => addToCart(el)}
            >
              Add to cart - ${el.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  const handleCheckout = () => {
    setViewer(1); // Move to Payment view
  };

  return (
    <div>
      <header className="bg-light p-3 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                placeholder="Search by item or category"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </header>
      <section className="categories overflow-hidden">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
            <h4 className="text-uppercase">CROC Shopping</h4>
          </div>
          <div className="row">{listItems}</div>
        </div>
      </section>
      <div className="card shadow mt-5 mb-5">
        <div className="card-header bg-dark text-white">
          <h3 className="mb-0">Shopping Cart</h3>
        </div>
        <div className="card-body">
          {cart.length > 0 ? (
            <>
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Product</th>
                      <th>Name</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-end">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((el, index) => (
                      <tr key={index}>
                        <td style={{ width: "100px" }}>
                          <img
                            src={el.image}
                            alt={el.item}
                            className="img-thumbnail"
                            style={{ maxWidth: "80px" }}
                          />
                        </td>
                        <td>
                          <h6 className="mb-0">{el.item}</h6>
                        </td>
                        <td className="text-center">${el.price.toFixed(2)}</td>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <button
                              className="btn btn-outline-dark btn-sm"
                              onClick={() => removeFromCart(el)}
                            >
                              -
                            </button>
                            <span className="mx-3">{el.quantity}</span>
                            <button
                              className="btn btn-outline-dark btn-sm"
                              onClick={() => addToCart(el)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="text-end">
                          ${(el.price * el.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="table-light">
                    <tr>
                      <td colSpan="4" className="text-end fw-bold">
                        Total:
                      </td>
                      <td className="text-end fw-bold">
                        ${cartTotal.toFixed(2)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div>
                  <span className="text-muted">
                    Items in cart: {cart.length}
                  </span>
                </div>
                <button
                  type="button"
                  className="btn btn-dark btn-lg px-4"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-muted my-5">Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowProducts;
