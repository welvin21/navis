import React from 'react';

const NotificationDisplay = (props) => {
    const { data } = props
    return(
        <div>
            {data}
        </div>
    );
}

export default NotificationDisplay;