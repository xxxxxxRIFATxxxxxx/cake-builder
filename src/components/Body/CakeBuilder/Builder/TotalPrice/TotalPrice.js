import React from 'react';

const TotalPrice = ({ totalPrice = 0 }) => {
    return (
        <tr>
            <td colSpan="2">Total Price</td>
            <td colSpan="2" className="text-center">{totalPrice.toFixed(2)}<span> $</span></td>
        </tr>
    );
};

export default TotalPrice;