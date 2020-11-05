import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import FILTER_PARAMS from '../../constants/filter';

const getFilterParamsFromFormElements = (elements) => {
  const filterParams = {};
  filterParams[FILTER_PARAMS.SEARCH] = elements[FILTER_PARAMS.SEARCH].value;
  filterParams[FILTER_PARAMS.PII] = elements[FILTER_PARAMS.PII].checked;
  return filterParams;
};

const Filter = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const filterParams = getFilterParamsFromFormElements(e.target.elements);

    props.onFilter(filterParams);
  };

  const resetFilter = (e) => {
    const { form } = e.target;
    const { elements } = form;
    elements[FILTER_PARAMS.SEARCH].value = '';
    elements[FILTER_PARAMS.PII].checked = false;

    const filterParams = getFilterParamsFromFormElements(elements);

    props.onFilter(filterParams);
  };

  return (
    <Container className='p-0 mt-4 mb-3' fluid>
      <Form onSubmit={handleSubmit}>
        <Row className='align-items-center'>
          <Col md={8}>
            <InputGroup className=''>
              <InputGroup.Prepend>
                <InputGroup.Text id='search-addon'>
                  <BsSearch />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-describedby='search-addon'
                aria-label='Search'
                placeholder='Search'
                name={FILTER_PARAMS.SEARCH}
              />
            </InputGroup>
          </Col>
          <Col md={2}>
            <Form.Check
              type='checkbox'
              id='autoSizingCheck'
              className=''
              label='Show PII only'
              name={FILTER_PARAMS.PII}
            />
          </Col>
          <Col md={2}>
            <Button type='submit' className='' block>
              Apply
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant='link' className='float-right  p-0' onClick={resetFilter}>
              Reset Filter
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func,
};

Filter.defaultProps = {
  onFilter: noop,
};

export default Filter;
