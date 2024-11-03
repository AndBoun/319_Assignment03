import React, { useState } from "react";
import Payment from "./MyPayment";
import Summary from "./MySummary";
import Browse from "./MyBrowse";
function App() {
  const [dataF, setDataF] = useState({});
  const [viewer, setViewer] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <div>
      {viewer === 0 && (
        <Browse
          dataF={dataF}
          setDataF={setDataF}
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
          dataF={dataF}
          setDataF={setDataF}
          viewer={viewer}
          setViewer={setViewer}
          cart={cart}
          cartTotal={cartTotal}
        />
      )}
      {viewer === 2 && (
        <Summary
          dataF={dataF}
          setDataF={setDataF}
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
