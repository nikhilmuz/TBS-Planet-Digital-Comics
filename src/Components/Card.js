import React, { Component } from 'react'
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

class CardComponent extends Component {
    goToPage = (link) => {
        window.location.href = `${link}`
    };
    render () {
        return (
            <Card
                cover={<img alt="example" src={this.props.cover} />}
                actions={
                    [
                        <button className="transparent-btn"
                                onClick={() => this.goToPage(this.props.link)}>
                            <Icon type="book" /> Read All</button>
                    ]
                }
            >
                <Meta
                    avatar={this.props.avtar && <Avatar src={this.props.avtar}/>}
                    title={this.props.title}
                    description={this.props.description}
                />
            </Card>
        )
    }
}
export default CardComponent;