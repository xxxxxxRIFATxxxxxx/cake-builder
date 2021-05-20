import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faIceCream, faMugHot } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    document.title = "Cake - Menu";
    return (
        <section className="container center">
            <h5 className="display-5 text-center text-shadow">Menu</h5>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 bg-dark box-shadow">
                        <FontAwesomeIcon icon={faBirthdayCake} size="10x" className="m-auto p-4" />
                        <div className="card-body text-center">
                            <h6 className="card-title fs-4 pink">Cake</h6>
                            <p className="card-text text-center">Try our special cake with<br />special discount</p>
                        </div>
                        <div className="card-footer">
                            <div className="d-grid gap-2">
                                <Link to="/order" className="btn btn-danger">Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 bg-dark box-shadow">
                        <FontAwesomeIcon icon={faIceCream} size="10x" className="m-auto p-4" />
                        <div className="card-body text-center">
                            <h6 className="card-title fs-4 pink">Ice cream</h6>
                            <p className="card-text text-center">Try our special ice cream with<br />special discount</p>
                        </div>
                        <div className="card-footer">
                            <div className="d-grid gap-2">
                                <Link to="/order" className="btn btn-danger">Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 bg-dark box-shadow">
                        <FontAwesomeIcon icon={faMugHot} size="10x" className="m-auto p-4" />
                        <div className="card-body text-center">
                            <h6 className="card-title fs-4 pink">Coffe</h6>
                            <p className="card-text text-center">Try our special coffe with<br />special discount</p>
                        </div>
                        <div className="card-footer">
                            <div className="d-grid gap-2">
                                <Link to="/order" className="btn btn-danger">Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;