import React from 'react';
import {Modal,Button,Col,Image,Glyphicon} from 'react-bootstrap';
//TODO 复用Modal

const HelpMe = React.createClass({
  getInitialState() {
    return { show: false};
  },
  componentWillReceiveProps(nextProps){
    if(nextProps.show === true ){
      this.open();
    }
  },
  close() {
    this.setState({ show: false });
    this.props.close();
  },
  open() {
    this.setState({ show: true });
  },
  render() {
    const {who} = this.props;
    return (
      <div>
        <Modal show={this.state.show} onHide={this.close} onEntered={this.loadMap}>
          <Modal.Header closeButton>
            <Modal.Title>感谢捐助!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={who.photos} thumbnail />
            <p>我是来自{who.province}的{who.name}</p>
            <p>感谢您的捐助,请经常回来关注我的成长.<Glyphicon style={{color:"red"}} glyph="heart"/></p>
            <p style={{color:'#eee',fontSize:'8px'}}>捐助流程即将上线...</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default HelpMe;