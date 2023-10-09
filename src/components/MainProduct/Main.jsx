// import React from "react"
import ProductList from "./List";

function Main() {
    return(
        <>
        <div className="b">
            <div className="flex flex-wrap">
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                </div>  
        </div>
        </>
       
    )
}

export default Main;