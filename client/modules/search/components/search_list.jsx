import React from 'react';
import {Grid,Row,Col,Button,Thumbnail} from 'react-bootstrap';

const SearchList = ({lists}) => (
  <Row className="search-list">
    {lists.length === 0? <p>没有找到需要救助的儿童</p>:null}
    {lists.map(list => (
      <Col xs={12} md={6} key={list._id}>
        <Thumbnail src={list.photos[0]} alt="242x200" >
          <h3>编号:{list.no}</h3>
          <label>&nbsp;({list.status})</label>
          <p>{list.province} {list.description}</p>
          <p>{list.need}</p>
          <p>
            <Button bsStyle="primary">捐助</Button>
          </p>
        </Thumbnail>
      </Col>
    ))}
  </Row>
);

export default SearchList;
