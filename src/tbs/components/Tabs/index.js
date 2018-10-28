import React from 'react'
import { Tabs } from 'antd';
import { CardComponent } from './../index'
import cookie from 'react-cookies';
import { Row, Col } from 'reactstrap'
import { setCookies } from '../../../common/utils';

const TabPane = Tabs.TabPane;
// const selectedLanguage = cookie.load('selectedLanguage')
class SlidingTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
      selectedLanguage: cookie.load('selectedLanguage') ? cookie.load('selectedLanguage') : this.props.list[0].language
    };
  }
  componentWillMount () {
  }
  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode, selectedLanguage: mode }, () => setCookies(`${this.props.list[0].language}`, 'selectedLanguage'));
  }
  render() {
    const { mode } = this.state;
    console.log(this.props.onClickPath)
    return (
      <div className="tabs-content">
        {/* <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group> */}
        <Tabs
          defaultActiveKey={this.state.selectedLanguage}
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
                                  <Col lg='3' md='4' sm="6" xs="12" key={com.title}>
                                    <div className="coms-item">
                                      <CardComponent
                                        cover={com.img}
                                        title={com.title}
                                        id={com.com_id || 'undefined'}
                                        onClickPath={this.props.onClickPath}
                                        description={com.description}
                                        hideIcons={!this.props.showIcons}
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