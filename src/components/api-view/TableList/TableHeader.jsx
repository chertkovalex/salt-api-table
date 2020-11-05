import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const TableHeader = () => {
  return (
    <Card>
      <Row className='py-2 mx-2'>
        <Col>NAME</Col>
        <Col>PII</Col>
        <Col>MASKED</Col>
        <Col>TYPE</Col>
      </Row>
    </Card>
  );
};

export default TableHeader;
