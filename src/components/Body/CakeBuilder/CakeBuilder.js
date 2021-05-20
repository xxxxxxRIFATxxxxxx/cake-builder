import React from 'react';
import Cake from './Cake/Cake';
import Builder from './Builder/Builder';

const CakeBuilder = ({ items, slices, addSlice, removeSlice, totalPrice }) => {
    document.title = "Cake";
    return (
        <section className="container center">
            <div className="row">
                <Cake slices={slices} />
                <Builder items={items} addSlice={addSlice} removeSlice={removeSlice} totalPrice={totalPrice} slices={slices} />
            </div>
        </section>
    );
};

export default CakeBuilder;