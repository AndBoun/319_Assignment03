import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';

function ShowProducts(){
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const response = await fetch("/products.json");
            const data = await response.json();
      
            setCatalog(data);
      
      
          };
    }, []);
}