import React from 'react';
function Title() {
    console.log(`rendering title`);
    console.log(`Title component is being rendered`);

    return(
        <h2>useCallback Hook Tutorial</h2>
    );


}

export default React.memo(Title); // React.memo is used to prevent unnecessary re-renders of the Title component