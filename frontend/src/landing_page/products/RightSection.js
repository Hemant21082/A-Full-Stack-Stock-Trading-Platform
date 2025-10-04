import React from "react";


function RightSection({productName,productDescription,learnMore,imageURL}) {
    return ( 
        <div className="container p-5">
            <div className="row">
                <div className="col-6 mt-5 p-3">
                    <h1 className= "fs-3 mb-4">{productName}</h1>
                    <p>{productDescription}</p>
                    <a href = "">{learnMore}<i class="fa-solid fa-arrow-right"></i></a>
                </div> 
                <div className="col-6 ">
                    <img src = {imageURL}></img>
                </div>
            </div>
        </div>
    );
}

export default RightSection;