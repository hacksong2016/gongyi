import React from 'react';
import {Grid,Row,Col,Panel,Button,ListGroup,ListGroupItem,Thumbnail} from 'react-bootstrap';
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
  }
  componentDidMount(){

  };
  showModal(){
    this.setState({showModal:true});
  };
  chooseProvince(data){
    let query = this.state.query;
    query.province = data;
    this.setState({query:query});
  };
  render(){
    return(
      <Grid className="content">
        <Row>
          <Panel collapsible defaultExpanded header="筛选条件">
            <Button bsStyle="primary" bsSize="large" onClick={this.showModal.bind(this)}>按地区</Button>
            <label>当前选择:{this.state.query.province}</label>
            <Map show={this.state.showModal} choose={this.chooseProvince.bind(this)}></Map>
            <ListGroup fill>
              <ListGroupItem>按困难..</ListGroupItem>
              <ListGroupItem>按性别..</ListGroupItem>
              <ListGroupItem>按年龄..</ListGroupItem>
            </ListGroup>
          </Panel>
        </Row>
        <Grid fluid={true}>
          <SearchList query={this.state.query} page={this.state.page}></SearchList>
        </Grid>
      </Grid>
      )
    }
};

export default List;
