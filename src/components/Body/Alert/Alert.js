import React from 'react';

const Alert = ({ message }) => {
    return (
        <div className="alert text-center fs-4" role="alert">
            {message}
        </div>
    );
};

export default Alert;