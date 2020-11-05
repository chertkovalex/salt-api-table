/* eslint-disable react/forbid-prop-types */
import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { Button, Collapse } from 'react-bootstrap';
import { BsCaretDownFill, BsCaretRightFill } from 'react-icons/bs';

import TableRow from './TableRow';
import GROUPS from '../../../constants/groups';

const TableGroup = ({ data, name, onChangeData }) => {
  const [open, setOpen] = useState(true);

  const collapsibleId = `collapsible-${name}`;
  const groupDisplayName = GROUPS[name];

  const handleChangeData = (i, newRow) => {
    const newArr = [...data.slice(0, i), newRow, ...data.slice(i + 1)];

    onChangeData(newArr);
  };

  return (
    <div className='mt-3'>
      <Button onClick={() => setOpen(!open)} aria-controls={collapsibleId} aria-expanded={open} variant='link'>
        {open ? <BsCaretDownFill /> : <BsCaretRightFill />}
        {groupDisplayName}
      </Button>
      <Collapse in={open}>
        <div id={collapsibleId}>
          {data.map((row, i) => {
            const handleChangeRowData = (newRow) => {
              handleChangeData(i, newRow);
            };

            return <TableRow data={row} key={row.name} onChangeData={handleChangeRowData} />;
          })}
        </div>
      </Collapse>
    </div>
  );
};

TableGroup.propTypes = {
  data: PropTypes.array,
  name: PropTypes.string,
  onChangeData: PropTypes.func,
};
TableGroup.defaultProps = {
  data: {},
  name: 'Group',
  onChangeData: noop,
};

export default memo(TableGroup);
