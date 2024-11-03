import React, { useState } from "react";
import Payment from "./MyPayment";
import Summary from "./MySummary";
import Browse from "./MyBrowse";
function App() {
    const [dataF, setDataF] = useState({});
    const [viewer, setViewer] = useState(0);

    return (
        <div>
            {viewer === 0 && <Browse dataF={dataF} setDataF={setDataF} viewer={viewer} setViewer={setViewer} />}
            {viewer === 1 && <Payment dataF={dataF} setDataF={setDataF} viewer={viewer} setViewer={setViewer} />}
            {viewer === 2 && <Summary dataF={dataF} setDataF={setDataF} viewer={viewer} setViewer={setViewer} />}
        </div>
    );
}
export default App; 