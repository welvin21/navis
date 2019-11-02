import  React from 'react';
import { Card, Tag } from 'antd';

const NotificationCard = (props) => {
    const { title, docs, isUrgent, onClick } = props;
    return(
        <Card hoverable={true} 
            size="small" 
            extra={isUrgent ? <Tag color="red">Urgent</Tag> : <Tag color="green">Submitted</Tag>} 
            title={title} 
            style={{ width: "100%" }}
            onClick={onClick}>
            <p>Requesting:</p>
            <p>
                {docs.map(item => {
                    return <span><Tag color="cyan">{item}</Tag></span>
                })}
            </p>
        </Card>
    );
}

export default NotificationCard;