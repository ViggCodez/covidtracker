import React from 'react';

function Homepage(props) {
    return (
        <>
        <div className="header">
            <div className="header-content">
                <div className="header-title">What is coronavirus?</div>
                <div className="header-text">Coronaviruses are a family of viruses that can cause respiratory illness in humans. They are called “corona” because of crown-like spikes on the surface of the virus. Severe acute respiratory syndrome (SARS), Middle East respiratory syndrome (MERS) and the common cold are examples of coronaviruses that cause illness in humans.
                <br />
                The new strain of coronavirus — SARS-CoV-2 — was first reported in Wuhan, China in December 2019. It has since spread to every country around the world.</div>
            </div>
        </div>

        <div className="home-body">
            <div className="home-body-nav">
                <ul>
                    <li>Symptoms</li>
                    <li>Diagonosis</li>
                    <li>Treatment</li>
                    <li>Prevention</li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Homepage;