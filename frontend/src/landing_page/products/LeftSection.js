import React from "react";

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}){
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-6 p-3">
                    <img  src = {imageURL}></img>
                </div>
                <div className="col-6 mt-5 p-3">
                    <h1 className="fs-3 mb-4">{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href = {tryDemo}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href = {learnMore} style = {{ marginLeft:"20px"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-4">
                        <a href = {googlePlay} className="me-3"><img src = "media/images/googlePlayBadge.svg"></img></a>
                        <a href = {appStore}><img src = "media/images/appstoreBadge.svg"></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LeftSection;

