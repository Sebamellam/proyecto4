import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import data from '../data.json'

export const Products = () => {
  return (
    <>
      {
        data.products.map(product => (
          <Card key= {product.sku} style={{ width: '18rem' }}>
            <img variant="top" src="" />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <Link to={`/proyecto4/product/${product.sku}`}>
                <Button variant="primary">Detalle del producto</Button>
              </Link>
            </Card.Body>
          </Card>
        ))
      }
    </>
  )
}