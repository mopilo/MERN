import React, {Component} from 'react'
import {Button, ListGroup, Container, ListGroupItem} from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getItems, deleteItems} from '../actions/itemActions'


class ShoppingList extends Component{
    

    componentDidMount(){
        this.props.getItems() 
    }

    itemDelete = (id) => {
        this.props.deleteItems(id);
    }

    render(){
        const {items} = this.props.item
        return(
            <Container>
                
                <ListGroup>
                    <TransitionGroup className='shopping-list'>
                        {items.map(({_id, name})=> (
                            <CSSTransition key={_id} classNames='fade' timeout={500}>
                                <ListGroupItem>
                                    <Button
                                        className='remove-btn'
                                        color='danger'
                                        size='sm'
                                        onClick={this.itemDelete.bind(this, _id)}
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
    item: PropTypes.object.isRequired,
    deleteItems: PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, {getItems, deleteItems})(ShoppingList)
