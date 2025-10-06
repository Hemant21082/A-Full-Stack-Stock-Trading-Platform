import React from "react";

function Brokerage(){
    return (
        <div className="container">
            <div className="row p-5 mt-5 border-top">
                <div className="col-8 p-4">
                    <a href = "" ><h3 className="fs-5 text-center mb-4">Brokerage Calculator</h3></a>
                    <ul className="text-muted">
                        <li>Call & Trade and RMS auto-squareoff : Additional charges of $50+GST per order.</li>
                        <li>Digital contrast notes will be sent via email.</li>
                        <li>Physical copies of contrast notes ,if required , shall be charged $20 per contract note. Courier charges apply.</li>
                        <li>if the account is in debit balance , any order placed will be charged $40 per executed instead of $20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-4 p-4">
                    <a href = "" ><h3 className="fs-5">List of charges</h3></a>
                </div>
            </div>
        </div>
    )
};

export default Brokerage;