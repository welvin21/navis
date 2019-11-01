import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Card } from "antd";
//import { FirebaseDB } from "../constants/firebase";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const styleFooter = {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'skyblue',
    textAlign: 'right',
}

class ClaimCard extends React.Component {
    
    render() {
        return (
            <Card
            title={ 'Claim #' + this.props.id + ' ' + this.props.title }
            size="default"
            hoverable
            style={{ margin:'16px'}}
            onClick={this.props.onClick}
            >
                <content>
                    { this.props.content }
                </content>
                <footer style={styleFooter}>
                    { this.props.date }
                </footer>
            </Card>
        );
    }
}

export default ClaimCard;