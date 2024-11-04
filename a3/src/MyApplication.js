import React, { useState } from "react";
import Payment from "./MyPayment";
import Summary from "./MySummary";
import Browse from "./MyBrowse";
function App() {
  const [customerInfo, setCustomerInfo] = useState({});
  const [viewer, setViewer] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <div>
      {viewer === 0 && (
        <Browse
          viewer={viewer}
          setViewer={setViewer}
          cart={cart}
          setCart={setCart}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      )}
      {viewer === 1 && (
        <Payment
          customerInfo={customerInfo}
          setCustomerInfo={setCustomerInfo}
          viewer={viewer}
          setViewer={setViewer}
          cart={cart}
          cartTotal={cartTotal}
        />
      )}
      {viewer === 2 && (
        <Summary
          customerInfo={customerInfo}
          setCustomerInfo={setCustomerInfo}
          viewer={viewer}
          setViewer={setViewer}
          cart={cart}
          setCart={setCart}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      )}
    </div>
  );
}
export default App;
