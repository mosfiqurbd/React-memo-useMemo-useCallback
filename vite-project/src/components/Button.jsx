import React from 'react';
function Button({ handleClick, children }) {
    console.log(`rendering button ${children}`);
    return (
        <p>
            <button type="button" onClick={handleClick}>
                {children}
            </button>
        </p>
    );
};

export default React.memo(Button); // React.memo is used to prevent unnecessary re-renders of the Button component