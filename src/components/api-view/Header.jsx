import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Container, Navbar } from 'react-bootstrap';

const Header = ({ data }) => {
  const { api, method, path } = data;
  return (
    <Container fluid>
      <Navbar expand='lg' variant='light' bg='white'>
        <Navbar.Brand href='#'>
          <span className='mr-3'>{method.toUpperCase()}</span>
          {path}
        </Navbar.Brand>
      </Navbar>

      <Navbar>
        <Breadcrumb>
          <Breadcrumb.Item href='#'>All APIs</Breadcrumb.Item>
          <Breadcrumb.Item href='#'>{api}</Breadcrumb.Item>
          <Breadcrumb.Item active>{path}</Breadcrumb.Item>
        </Breadcrumb>
      </Navbar>
    </Container>
  );
};

Header.propTypes = {
  data: PropTypes.shape({
    api: PropTypes.string,
    method: PropTypes.string,
    path: PropTypes.string,
  }),
};

Header.defaultProps = {
  data: {
    api: 'api.dnssf.com',
    method: 'get',
    path: 'V1/balance/history',
  },
};

export default Header;
