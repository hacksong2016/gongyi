import React from 'react';
import {Grid,Row,Col,Panel,Button,ListGroup,ListGroupItem,FormGroup,Checkbox,Radio,ControlLabel,FormControl,Thumbnail} from 'react-bootstrap';
import Map from '../containers/map';
import SearchList from '../containers/search_list';

class List extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal:false,
      query:{},
      page:1
    };
  };
  componentDidMount(){
  };
  showModal(){
    this.setState({showModal:true});
  };
  closeModal(){
    this.setState({showModal:false});
  };
  chooseProvince(data){
    let query = this.state.query;
    query.province = data;
    this.setState({query:query,page:1});
  };
  loadMore(){
    this.setState({page:this.state.page+1});
  };
  selectProblem(event){
    let query = this.state.query;
    query.problem = event.target.value;
    this.setState({query:query,page:1});
  };
  selectGender(event){
    let query = this.state.query;
    query.gender = event.target.value;
    this.setState({query:query,page:1});
  };
  selectAge(event){
    let query = this.state.query;
    query.age = event.target.value;
    this.setState({query:query,page:1});
  };
  render(){
    return(
      <Grid className="content search-list">
        <Row>
          <Panel collapsible defaultExpanded header="查找需要帮助的孩子">
            <Button bsStyle="primary" bsSize="small" onClick={this.showModal.bind(this)}>选择地区</Button>
            <label>当前选择:{this.state.query.province}</label>
            <Map query={this.state.query} show={this.state.showModal} choose={this.chooseProvince.bind(this)} close={this.closeModal.bind(this)}></Map>
            <ListGroup fill>
              <ListGroupItem>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>根据困难</ControlLabel>
                  <FormControl componentClass="select" placeholder="请选择" name="problem" onChange={this.selectProblem.bind(this)}>
                    <option value="">全部</option>
                    <option value="贫穷">贫穷</option>
                    <option value="留守">留守</option>
                    <option value="失学">失学</option>
                    <option value="孤儿">孤儿</option>
                    <option value="残疾">残疾</option>
                    <option value="重病">重病</option>
                  </FormControl>
                </FormGroup>
              </ListGroupItem>
              <ListGroupItem>
                <ControlLabel>性别</ControlLabel>
                <FormGroup>
                  <Radio inline defaultChecked value="" name="gender" onChange={this.selectGender.bind(this)}>
                    全部
                  </Radio>
                  <Radio inline name="gender" value="1" onChange={this.selectGender.bind(this)}>
                    男孩
                  </Radio>
                  <Radio inline name="gender" value="2" onChange={this.selectGender.bind(this)}>
                    女孩
                  </Radio>
                </FormGroup>
              </ListGroupItem>
              <ListGroupItem>
                <ControlLabel>年龄</ControlLabel>
                <FormGroup>
                  <Radio inline value="" defaultChecked name="age" onChange={this.selectAge.bind(this)}>
                    全部
                  </Radio>
                  <Radio inline value="10" name="age" onChange={this.selectAge.bind(this)}>
                    1到10岁
                  </Radio>
                  <Radio inline value="16" name="age" onChange={this.selectAge.bind(this)}>
                    大于10岁
                  </Radio>
                </FormGroup></ListGroupItem>
            </ListGroup>
          </Panel>
          <div className="alert alert-info" role="alert">本页数据为虚构,仅作演示使用.</div>
        </Row>
        <Grid fluid={true}>
          <SearchList query={this.state.query} page={this.state.page}></SearchList>
          <Button bsSize="large" block onClick={this.loadMore.bind(this)}>加载更多</Button>
        </Grid>
      </Grid>
      )
    }
};

export default List;
