import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-2">Pricing</h1>
        <p className="mt-3 fs-5 text-muted">
          Free equity investements and flat ₹20 traday and F&O trades
        </p>
      </div>

      <div className="row p-5 mt-5">
        <div className="col-4">
          <img className = "w-75" src = "media\images\pricingEquity.svg" alt = "random image"></img>
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="pt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
            <img className = "w-75" src = "media\images\intradayTrades.svg" alt = "random image"></img>
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="pt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img className = "w-75" src = "media\images\pricingEquity.svg" alt = "random image"></img>
          <h1 className="fs-3">Free direct MF</h1>
          <p className="pt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
