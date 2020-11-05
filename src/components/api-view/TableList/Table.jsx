/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { Container } from 'react-bootstrap';
import TableHeader from './TableHeader';
import TableGroup from './TableGroup';

const TableList = ({ data, onChangeData }) => {
  const groupNames = Object.keys(data);

  const handleChangeData = (groupName, groupData) => {
    const newGroup = {};
    newGroup[groupName] = groupData;

    const newData = { ...data, ...newGroup };
    onChangeData(newData);
  };

  return (
    <Container fluid className='m-0 bg-white p-0 border shadow-sm'>
      <TableHeader />
      {groupNames.map((groupName) => {
        const handleChangeGroupData = (groupData) => {
          handleChangeData(groupName, groupData);
        };

        return (
          <TableGroup data={data[groupName]} name={groupName} key={groupName} onChangeData={handleChangeGroupData} />
        );
      })}
    </Container>
  );
};

TableList.propTypes = {
  data: PropTypes.object,
  onChangeData: PropTypes.func,
};

TableList.defaultProps = {
  data: {},
  onChangeData: noop,
};

export default TableList;
