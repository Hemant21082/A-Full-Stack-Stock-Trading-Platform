import React from "react";

function Team(){
    return (
        <div className="container p-5">
            <div className = "row">
                <h1 className="text-center mb-5">People</h1>
                <div className="col-6 mt-5 text-center">
                    <img src = "media/images/nithinkamath.jpg" alt = "profile picture" className="rounded-circle w-50"></img>
                    <p className="fs-5 mt-4">Nithin Kamath</p>
                    <p >Founder, CEO</p>
                </div>
                <div className="col-6 fs-5 mt-5">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to   overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                    Playing basketball is his zen.
                    Connect on Homepage / TradingQnA / Twitter
                    </p>
                    <p>Connect on <a href = "">Homepage</a> / <a href = "">TradingQnA</a> / <a href = "">Twitter</a></p>
                </div>
            </div>
        </div>
    )
};

export default Team;