import React from "react";

function Stats(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">
                    <h1 className="fs-2 mb-5">Trust with confidence</h1>
                    <h2 className="fs-4">Customer-first always</h2>
                    <p className = "text-muted">That's why 1.3+ crore customers trust Zerodha with $3.5+ lakkh crores worth of equity investements.</p>
                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className = "text-muted">No gimmicks, spam, "gamification" or annoying push notifications. High quality apps that you use at your pace,the way you like</p>
                    <h2 className="fs-4">The Zerodha Universe</h2>
                    <p className = "text-muted">Not just an app, but a whole ecosystem. Our investements in 30+ fintech startups offer you tailored services specific to your needs</p>
                    <h2 className="fs-4">Do better with honey</h2>
                    <p className = "text-muted">With initiatives like nudge and kill switch , we don't just facilitate transactions, but actively help you to do better with your money</p>
                </div>     
                <div className="col-6 p-5">
                    <img className = "img-fluid" src = "media/images/ecosystem.png" alt = "ecosystem image"></img>
                    <div className="text-center">
                        <a className = "me-5"href = "" style = {{textDecoration:"none"}}>Explor our products<i class="fa-solid fa-arrow-right"></i></a>
                        <a href = ""style = {{textDecoration:"none"}} >Try Kite demo</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;

