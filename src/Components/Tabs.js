import React from 'react'
import { Tabs } from 'antd';
import CardComponent from './Card'
import { Row, Col } from 'reactstrap'

const TabPane = Tabs.TabPane;
class SlidingTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'Hindi',
            mode: 'top',
        };
    }
    componentWillMount () {
    }
    render() {
        const { mode } = this.state;
        return (
            <div className="tabs-content">
                <Tabs
                    defaultActiveKey={this.state.language}
                    tabPosition={mode}
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
                                                        <Col lg='2' md='4' sm="6" xs="6" key={com.title}>
                                                            <div className="coms-item">
                                                                <CardComponent
                                                                    cover={com.cover}
                                                                    title={com.title}
                                                                    id={com.id}
                                                                    link={com.link}
                                                                    description={com.episodes}
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
