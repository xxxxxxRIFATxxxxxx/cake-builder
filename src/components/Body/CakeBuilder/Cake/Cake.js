import React from 'react';
import Slice from './Slice/Slice';
import './Cake.css';

const Cake = ({ slices }) => {
    const slice = slices.map((slice) => <Slice slice={slice} key={`${slice} ${Math.random()}`} />)
    return (
        <div className="col-sm-6">
            <div className="bg-dark">
                <div className="card-body">
                    <div className="cake">
                        {slice}
                        <div className="cherry"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cake;