import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
import {connect} from 'react-redux'
import {addItem} from '../actions/itemActions'



class ItemModal extends Component{
    state = {
        modal: false,
        item: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }
//add via action
        this.props.addItem(newItem)

        this.toggle()
    }

    onChange = (e) => {
        this.setState({name: e.target.value})
    }
    render(){
        return(
            <div>
                <Button 
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                    Add Item
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                <ModalHeader toggle={this.toggle}>
                    Add to Shopping List
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for='item'>Item</Label>
                            <Input
                                id = 'item'
                                name = 'name'
                                type = 'text'
                                placeholder = 'Add shopping item'
                                onChange = {this.onChange}
                            />
                            <Button 
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                            >
                                Add Item
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps,{addItem})(ItemModal)