import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { Nav } from 'react-bootstrap';

const Tabs = ({ activeTab, onSelectTab }) => {
  const handleTabSelect = (eventKey) => onSelectTab(eventKey);
  return (
    <Nav variant='tabs' defaultActiveKey='request' activeKey={activeTab} onSelect={handleTabSelect}>
      <Nav.Item>
        <Nav.Link eventKey='request'>Request</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='response'>Response</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string,
  onSelectTab: PropTypes.func,
};

Tabs.defaultProps = {
  activeTab: 'request',
  onSelectTab: noop,
};

export default Tabs;
