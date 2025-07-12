import React from 'react';
function ShowCount({ count, title }) {
    console.log(`rendering$ {title} `);

    return (
        <p>
            {title} is {count}
        </p>
    );
}

export default React.memo(ShowCount); // React.memo is used to prevent unnecessary re-renders of the ShowCount component
// This will ensure that ShowCount only re-renders when its props change