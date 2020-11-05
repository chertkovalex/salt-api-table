import React, { memo } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

const ToggleValue = ({ disabled, label, onToggle, value, variant }) => {
  return (
    <ButtonGroup toggle className='my-2'>
      <ToggleButton
        checked={value}
        className='py-0'
        disabled={disabled}
        onChange={() => {
          onToggle(!value);
        }}
        type='checkbox'
        value='1'
        variant={value ? variant : `outline-${variant}`}
      >
        {label.toUpperCase()}
      </ToggleButton>
    </ButtonGroup>
  );
};

ToggleValue.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onToggle: PropTypes.func,
  value: PropTypes.bool,
  variant: PropTypes.string,
};

ToggleValue.defaultProps = {
  disabled: false,
  label: '',
  onToggle: noop,
  value: false,
  variant: 'secondary',
};

export default memo(ToggleValue);
