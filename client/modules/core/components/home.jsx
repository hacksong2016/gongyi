import React from 'react';
import fullpage from 'fullpage.js';
import {Grid,Row,Col} from 'react-bootstrap';

class Home extends React.Component {
  componentDidMount(){
    const options = {
      verticalCentered: true,
      navigation: true,
      navigationPosition: 'right',
      afterRender: function(){
        $('video').get(0).play();
      }
    };
    $('#fullpage').fullpage(options);
  };
  render(){
    return (
      <div id="fullpage">
        <div className="section" id="section0">
          <div className="slide" id="slide1"><h1>他们有小小的梦想</h1></div>
          <div className="slide" id="slide2"><h1>他们有大大的希望</h1></div>
          <div className="slide" id="slide3"><h1>心怀梦想 就有希望</h1></div>
          <div className="slide" id="slide4"><h1>献出关爱 给他们更好的明天</h1></div>
        </div>
        <div className="section " id="section1">
          <video autoPlay controls loop id="myVideo" data-keepplaying>
            <source src="/other/hope.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className="section" id="section2">
          <Grid className="wrap" fluid={true}>
            <Row className="imgsContainer">
              <Col xs={8}>
                <img src="/images/angel.jpg" id="section2_1" />
              </Col>
              <Col xs={4}>
                <img src="/images/kids.jpg" id="section2_2" />
                <img src="/images/lesson.jpg" id="section2_3" />
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="section" id="section3">
          <div className="jumbotron">
            <h2>以爱为名，助力贫困儿童快乐成长</h2>
            <p><a className="btn btn-success btn-lg" href="/search" role="button">我要捐助</a></p>
          </div>
        </div>
      </div>
    );
  };
}
export default Home;
