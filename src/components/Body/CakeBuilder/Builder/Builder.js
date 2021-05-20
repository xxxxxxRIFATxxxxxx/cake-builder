import React from 'react';
import Item from './Item/Item';
import TotalPrice from './TotalPrice/TotalPrice';
import { Link } from 'react-router-dom';

const Builder = ({ items, addSlice, removeSlice, totalPrice, slices }) => {
    const item = Object.keys(items).map((item) => {
        return <Item item={item} key={`${item} - ${Math.random()}`} addSlice={addSlice} removeSlice={removeSlice} slices={slices} />
    });

    return (
        <div className="col-sm-6">
            <div className="card bg-dark box-rounded box-shadow">
                <div className="card-body">
                    <div className="builder">
                        <h6 className="display-6 text-center text-shadow">Cake Builder</h6>

                        {/* <!--========== ITEMS START ==========--> */}
                        <table className="table table-dark table-hover">

                            <tbody>
                                {/* <!--========== ITEM START ==========--> */}
                                {item}
                                {/* <!--========== ITEM END ==========--> */}
                            </tbody>

                            <tfoot>
                                {/* <!--========== TOTAL PRICE START ==========--> */}
                                <TotalPrice totalPrice={totalPrice} />
                                {/* <!--========== TOTAL PRICE END ==========--> */}
                            </tfoot>
                        </table>
                        {/* <!--========== ITEMS END ==========--> */}

                        {/* <!--========== ORDER NOW BUTTON START ==========--> */}
                        <div className="d-grid gap-2">
                            <Link to="/order" className="btn btn-danger" type="button">Order Now</Link>
                        </div>
                        {/* <!--========== ORDER NOW BUTTON END ==========--> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Builder;