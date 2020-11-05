/* eslint-disable react/forbid-prop-types, react/destructuring-assignment  */
import React from 'react';
import PropTypes from 'prop-types';
import camelCase from 'lodash/camelCase';
import { Col, Container, Row } from 'react-bootstrap';

import Tabs from './Tabs';
import Filter from './Filter';
import TableList from './TableList/Table';

const filterData = (filterParams, groupsObj) => {
  const { searchText, searchPII } = filterParams;
  const groupNames = Object.keys(groupsObj);

  const filteredGroups = groupNames.reduce((acc, groupName) => {
    const rows = groupsObj[groupName];
    acc[groupName] = rows.filter((row) => {
      const { name, type, pii } = row;

      // if searchText not empty - check name and type
      // if searchPII - check pii to be true
      return (
        (searchText.length ? name.includes(searchText) || type.includes(searchText) : true) && (searchPII ? pii : true)
      );
    });

    return acc;
  }, {});

  return filteredGroups;
};

class Content extends React.PureComponent {
  constructor(props) {
    super(props);
    const { request, response } = props.data;

    this.state = { activeTab: 'request', request, response, fullRequest: request, fullResponce: response };

    this.invokeFilter = this.invokeFilter.bind(this);
    this.onChangeTableData = this.onChangeTableData.bind(this);
    this.selectTab = this.selectTab.bind(this);
  }

  onChangeTableData(tableData) {
    const { activeTab } = this.state;
    const activeDataKey = camelCase(`full ${activeTab}`);
    const newStateData = {};
    // TODO: optimize this
    newStateData[activeDataKey] = { ...this.state[activeDataKey], ...tableData };
    newStateData[activeTab] = tableData;

    this.setState(newStateData);
  }

  invokeFilter(filterParams) {
    const { fullRequest, fullResponce } = this.state;

    // TODO question: maybe no need to filter both, but invoke filtering on tab switch or reset filter on tab switch?
    const filteredRequest = filterData(filterParams, fullRequest);
    const filteredResponse = filterData(filterParams, fullResponce);

    this.setState({ request: filteredRequest, response: filteredResponse });
  }

  selectTab(activeTab) {
    this.setState({ activeTab });
  }

  render() {
    const { activeTab } = this.state;

    const tableData = this.state[activeTab];
    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <Tabs activeTab={activeTab} onSelectTab={this.selectTab} />
            </Col>
          </Row>
        </Container>

        <Container fluid className='bg-light'>
          <Row>
            <Col>
              <Filter onFilter={this.invokeFilter} />
            </Col>
          </Row>
          <Row>
            <Col>
              <TableList data={tableData} onChangeData={this.onChangeTableData} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

Content.propTypes = {
  data: PropTypes.object,
};

Content.defaultProps = {
  data: {},
};

export default Content;
