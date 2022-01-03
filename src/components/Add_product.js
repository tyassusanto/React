/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input} from 'reactstrap';

import add from '../svg/add.svg'

const ModalExample = ({input, formAdd, submitAdd}) => {
  const [modal, setModal] = useState(false);
  // console.log(formAdd)

  const toggle = () => setModal(!modal);
 
  return (
    <div>
      <img src={add} alt="" onClick={toggle} />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Add Item</ModalHeader>
        <ModalBody>
        <Form>
          <FormGroup row>
            <Label for="name" sm={2}>Name</Label>
            <Col sm={12}>
              <Input type="text" name="product_name"  placeholder="input product name" 
              onChange={input}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="images" sm={2}>Images</Label>
            <Col sm={12}>
              <Input type="text" name="picture" placeholder="input url images" 
              onChange={input}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="price" sm={2}>Price</Label>
            <Col sm={12}>
              <Input type="text" name="price"  placeholder="input number only" 
              onChange={input}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="category" sm={2}>Category</Label>
            <Col sm={12}>
              <Input type="select" name="category" 
              onChange={input}
              >
                <option value="Foods">Foods</option>
                <option value="Coffee">Coffee</option>
                <option value="Non-Coffee">Non Coffee</option>
                <option value="Add-on" >Add On</option>
              </Input>
            </Col>
          </FormGroup>
      </Form>
        </ModalBody>
        <form onSubmit={submitAdd}>
          <ModalFooter>       
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            <Button type="submit" onClick={toggle} color="primary" >Add</Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}

export default ModalExample;