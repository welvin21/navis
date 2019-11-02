import React, { useState } from 'react';
import {Typography, Menu, Dropdown, Icon} from 'antd';
import ClaimList from './ClaimList';

const {Title, Text} = Typography;

const AllClaims = () => {
    const list = ['latest', 'earliest', 'claimant name'];
    const [sortCriteria, setSortCriteria] = useState('latest');

    const menu = (
        <Menu onClick={(e) => {setSortCriteria(e.key)}}>
            {
                list.map((item) => (
                    <Menu.Item key={item}>
                        <Text>{item}</Text>
                    </Menu.Item>
                ))
            }
        </Menu>
    )
    return (
        <div style={{margin: 'auto 20px'}}>
            <Title>All Claims</Title>
            <Text>sorted by </Text>
            <Dropdown overlay={menu}>
                <Text style={{color: 'blue'}}>
                    {sortCriteria} {list[sortCriteria]} <Icon type='down' />
                </Text>
            </Dropdown>
            <ClaimList sortCriteria={sortCriteria}/>
        </div>
    );
}

export default AllClaims;