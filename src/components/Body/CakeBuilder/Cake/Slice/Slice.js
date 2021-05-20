import React from 'react';
import './Slice.css';

const Slice = ({ slice }) => {
    return (
        <div className={`slice ${slice}`}></div>
    );
};

export default Slice;