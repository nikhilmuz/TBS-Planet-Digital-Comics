import React from 'react'
import { Tabs } from 'antd';
import CardComponent from './Card'
import { Row, Col } from 'reactstrap'

const TabPane = Tabs.TabPane;
class SlidingTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'English',
        };
    }
    componentWillMount () {
    }
    render() {
        return (
            <div className="tabs-content">
                <Tabs
                    defaultActiveKey={this.state.selectedLanguage}
                    tabPosition="top"
                >
                    {
                        this.props.list.length > 0 &&
                        this.props.list.map((item) => {
                            return (
                                <TabPane tab={`${item.language}`} key={item.language}>
                                    <div className="item tab-panel">
                                        <Row>
                                            {
                                                item.listOfCom.length > 0 &&
                                                item.listOfCom.map(com => {
                                                    return (
                                                        <Col lg='3' md='4' sm="6" xs="12" key={com.title}>
                                                            <div className="coms-item">
                                                                <CardComponent
                                                                    cover="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fnotgoaway.com%2Fwp-content%2Fuploads%2F2017%2F07%2F4K-Wallpaper-53.jpeg&f=1"
                                                                    title="title"
                                                                    id="1"
                                                                    link="http://google.com"
                                                                    description="Total Episodes: 1"
                                                                />
                                                            </div>
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                    </div>
                                </TabPane>
                            )
                        })
                    }
                </Tabs>
            </div>
        );
    }
}

export default SlidingTabs