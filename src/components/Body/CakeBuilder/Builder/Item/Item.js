import React from 'react';
import { countBy } from 'lodash';
import './Item.css';

const Item = ({ item, addSlice, removeSlice, slices }) => {
    const slicesByCount = countBy(slices);
    return (
        <tr>
            <td>{item.charAt(0).toUpperCase() + item.slice(1)}</td>
            {slicesByCount[item] >= 0 ? <td className="quantity">{slicesByCount[item]}</td> : <td className="quantity">0</td>}

            <td>
                <div className="d-grid gap-2">
                    <button className="btn btn-danger" type="button" onClick={() => addSlice(item)}>+</button>
                </div>
            </td>

            <td>
                <div className="d-grid gap-2">
                    <button className="btn btn-secondary" type="button" onClick={() => removeSlice(item)}>-</button>
                </div>
            </td>
        </tr>
    );
};

export default Item;