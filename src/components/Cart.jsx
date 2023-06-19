// import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from "react-redux"
import { deleteProduct } from '../store/cartSlice';


const Cart = () => {
    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const removeFromCart = (product) => {
        dispatch(deleteProduct(product))
    }


    const cards = products.map(product => (
        <div key={`${product.title}`} className='col-md-3 py-4'>
            <Card>
                <div className='text-center py-2'>
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title> {product.title} </Card.Title>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                    <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove Item</Button>
                </Card.Body>
            </Card>
        </div>
    ))
  return (
      <Container>
          <div className='row col-md-12 px-2' >
                {cards}
            </div>
      </Container>
  )
}

export default Cart