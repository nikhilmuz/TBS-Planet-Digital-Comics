import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Icon, Avatar } from 'antd';
import URL from './../../root'

const { Meta } = Card;

class CardComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }
    goToPage = (url, id) => {
        window.location.href = `${url}?id=${id}`
    }
    render () {
        return (
            <Card
                // style={{ width: a }}
                cover={<img alt="example" src={this.props.cover} />}
                actions={this.props.hideIcons ? [] : [<button className="transparent-btn" onClick={() => this.goToPage(this.props.onClickPath, this.props.id)}><Icon type="setting" /></button>, <Icon type="ellipsis" />]}
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

Card.propTypes = {
    // cover: PropTypes,
    // actions: PropTypes.arrayOf(PropType)
    title: PropTypes.string,
    description: PropTypes.string,
    // avatar: 
}
export default CardComponent;