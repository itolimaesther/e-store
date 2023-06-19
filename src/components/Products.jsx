import { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Alert from 'react-bootstrap/Alert';
import { useDispatch , useSelector } from 'react-redux';
import { addProduct } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import StatusCode from '../utils/statusCode';


const Products = () => {
    const { data: products, status } = useSelector(state => state.products)


    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const addToCart = (product) => {
        dispatch(addProduct(product))
    }

    if (status === StatusCode.LOADING) {
        return <p>Loading....</p>
    }

    if (status === StatusCode.ERROR) {
        return <Alert key='danger' variant='danger'>Something went wrong. Try again later</Alert>
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
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    ))

  return (
    <div>
          <h1>Products Dashboard</h1>
          <Container>
            <div className='row col-md-12 px-2' >
                {cards}
            </div>
              
          </Container>
    </div>
  )
}

export default Products