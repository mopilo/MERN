import React, {Component} from 'react'
import {Button, ListGroup, Container, ListGroupItem} from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import uuid from 'uuid';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getItems} from '../actions/itemActions'


class ShoppingList extends Component{
    

    componentDidMount(){
        this.props.getItems() 
    }

    render(){
        const {items} = this.state
        return(
            <Container>
                <Button 
                    color='dark' 
                    style={{marginBottom: '2rem'}}
                    onClick={()=> {
                        const name = prompt('Enter name')
                        if(name){
                            this.setState(
                                state => ({
                                    items: [...state.items, {id: uuid(), name}]
                                })
                            )
                        }
                    }}
                >
                    Add item
                </Button>
                <ListGroup>
                    <TransitionGroup className='shopping-list'>
                        {items.map(({id, name})=> (
                            <CSSTransition key={id} classNames='fade' timeout={500}>
                                <ListGroupItem>
                                    <Button
                                        className='remove-btn'
                                        color='danger'
                                        size='sm'
                                        onClick={()=>{
                                            this.setState(state => ({
                                                items: state.items.filter(item=> item.id !== id)
                                            }))
                                        }}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        )) }
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.PropTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired

}

const mapStateToProps = (state) => {
    item: state.item
}

export default connect(mapStateToProps, {getItems})(ShoppingList)
