import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faTruck, faSmileBeam } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
    document.title = "Cake - Service";
    return (
        <section className="container center">
            <h5 className="display-5 text-center text-shadow">Service</h5>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 bg-dark box-shadow">
                        <FontAwesomeIcon icon={faBirthdayCake} size="10x" className="m-auto p-4" />
                        <div className="card-body text-center">
                            <h6 className="card-title fs-4 pink">Customize Cake</h6>
                            <p className="card-text text-center-align">We offer you to make your own custom<br />cakes of
                                different
                                flavors with<br />reasonable prices</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 bg-dark box-shadow">
                        <FontAwesomeIcon icon={faTruck} size="10x" className="m-auto p-4" />
                        <div className="card-body text-center">
                            <h6 className="card-title fs-4 pink">Delivery</h6>
                            <p className="card-text text-center-align">We will deliver the cake to your door.<br />We will ensure
                                your food<br /> safety</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 bg-dark box-shadow">
                        <FontAwesomeIcon icon={faSmileBeam} size="10x" className="m-auto p-4" />
                        <div className="card-body text-center">
                            <h6 className="card-title fs-4 pink">Best Quality</h6>
                            <p className="card-text text-center-align">We only provide the qualityful cake with <br /> original
                                cherry Our cake is <br /> good for health</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;