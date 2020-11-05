import React, { memo } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { Card, Col, Row } from 'react-bootstrap';
import ToggleValue from './ToggleValue';

const TableRow = ({ data, onChangeData }) => {
  const { name, pii, masked, type } = data;

  const handleChangeData = (paramName, value) => {
    const newObj = {};
    newObj[paramName] = value;
    const newData = { ...data, ...newObj };
    onChangeData(newData);
  };

  return (
    <Card key={name} className='shadow-sm mb-2 mx-3'>
      <Row className='py-1 mx-2'>
        <Col className='pt-2'>{name}</Col>
        <Col>
          <ToggleValue
            label='PII'
            value={pii}
            onToggle={(value) => {
              handleChangeData('pii', value);
            }}
            variant='primary'
          />
        </Col>
        <Col>
          <ToggleValue
            label='MASKED'
            value={masked}
            onToggle={(value) => {
              handleChangeData('masked', value);
            }}
            variant='danger'
          />
        </Col>
        <Col>
          <ToggleValue label={type} disabled variant='info' />
        </Col>
      </Row>
    </Card>
  );
};

TableRow.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    pii: PropTypes.bool,
    masked: PropTypes.bool,
    type: PropTypes.string,
  }),
  onChangeData: PropTypes.func,
};

TableRow.defaultProps = {
  data: {
    name: '',
    pii: false,
    masked: false,
    type: '',
  },
  onChangeData: noop,
};

export default memo(TableRow);
