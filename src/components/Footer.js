import React from 'react';
import Newsletter from "./Newsletter/Newsletter";

const Footer = () => {

    return (
        <footer className="bg-light text-center text-lg-start">
            <hr/>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">subscribe to our newsletter</h5>
                        <Newsletter/>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;