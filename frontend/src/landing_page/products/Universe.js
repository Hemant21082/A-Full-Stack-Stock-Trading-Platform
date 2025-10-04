import React from "react";

function Universe() {
    return ( 
        <div className = "container mt-5 p-5">
            <div className="row text-center">
                <h1 className="mt-5 fs-4 mb-4">The Zerodha Universe</h1>
                <p className="fs-5 mb-5">Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3">
                    <img className = "w-50 mb-3" src = "media\images\zerodhaFundhouse.png"></img>
                    <p className="text-small text-muted pb-5">Our asset management venture
                    that is creating simple and transparent index
                    funds to help you save for your goals.
                    </p>

                    <img className = "w-50 mb-3" src = "media\images\sensibullLogo.svg"></img>
                    <p className="text-small text-muted pb-5">Options trading platform that lets you
                    create strategies, analyze positions, and examine
                    data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-4 p-3">
                    <img  className = "w-50 mb-3" src = "media\images\tijori.svg"></img>
                    <p className="text-small text-muted pb-5">Investment research platform
                    that offers detailed insights on stocks,
                    sectors, supply chains, and more.
                    </p>

                    <img className = "w-50 mb-3"src = "media\images\streakLogo.png"></img>
                    <p className="text-small text-muted pb-5">Systematic Trading Platform that allows you to create and backfest strategies without coding.</p>
                </div>
                <div className="col-4 p-3">
                    <img className = "w-50 mb-3" src = "media\images\smallcaseLogo.png"></img>
                    <p className="text-small text-muted pb-5">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs</p>   

                    <img className = "w-50 mb-3" src = "media\images\dittoLogo.png"></img>
                    <p className="text-small text-muted">Personalized advice on life
                    and health insurance. No spam
                    and no mis-selling.
                    Sign up for free</p>   
                </div>
            </div>
        </div>
    );

}

export default Universe;