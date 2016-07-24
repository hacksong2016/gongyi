import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import echarts from 'echarts'
import china from 'echarts/map/js/china.js'

const Map = React.createClass({
  getInitialState() {
    return { show: false };
  },
  componentDidMount(){

  },
  componentWillReceiveProps(nextProps){
    if(nextProps.show === true ){
      this.open();
    }
  },
  drawMap(result){
    const self = this;
    const myChart = echarts.init($('#map')[0]);
    myChart.on('click', function (params) {
      if(params.name){
        self.props.choose(params.name);
      }
      self.close();
    });

    let data = [];
    if(result){
      result.map(res => {
        data.push({name:res._id,value:res.count});
      });
    }
    const option = {
      title: {
        text: '待资助的学生',
        subtext: '还有很多',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data:['贫困']
      },
      visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: '贫困',
          type: 'map',
          mapType: 'china',
          roam: false,
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data:data
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
  loadMap(){
    this.props.getProvinceCount(this.drawMap)
  },
  close() {
    this.setState({ show: false });
  },
  open() {
    this.setState({ show: true });
  },
  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.close} onEntered={this.loadMap}>
          <Modal.Header closeButton>
            <Modal.Title>按地区筛选</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="map"></div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default Map;