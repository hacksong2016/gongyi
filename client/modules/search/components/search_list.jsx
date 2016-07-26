import React from 'react';
import {Grid,Row,Col,Button,Thumbnail,Glyphicon} from 'react-bootstrap';
import HelpMe from './helpme.jsx';

class SearchList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal:false,
      who:{}
    };
  };
  helpMe(list){
    this.setState({showModal:true,who:list});
    this.props.helpKids(list._id);
  };
  closeModal(){
    this.setState({showModal:false});
  }
  render(){
    const status = {1:'待捐助',2:"已捐助"};
    const problemClass = {
      '贫穷':'label label-default',
      '留守':'label label-info',
      '失学':'label label-primary',
      '孤儿':'label label-success',
      '残疾':'label label-warning',
      '重病':'label label-danger'
    };
    const gender = {1:'男孩',2:'女孩'};
    return (<Row className="search-list">
      {this.props.lists.length === 0 ? <p>没有找到需要救助的儿童</p> : null}
      {this.props.lists.map(list => (
        <Col xs={12} md={6} key={list._id}>
          <Thumbnail src={list.photos[0]} alt="242x200">
            <h3>名字:{list.name}</h3>
            {list.problem.map(p => (
              <span key={p} className={problemClass[p]}>{p}</span>
            ))}
            <p>({status[list.status]})</p>
            <p>{list.description}{gender[list.gender]}.</p>
            <p>{list.family}</p>
            <p>
              <Button bsStyle="primary" onClick={this.helpMe.bind(this,list)}><Glyphicon glyph="heart"/>捐助我</Button>
            </p>
          </Thumbnail>
        </Col>
      ))}
      <HelpMe show={this.state.showModal} who={this.state.who} close={this.closeModal.bind(this)}></HelpMe>
    </Row>)
  };
}
export default SearchList;