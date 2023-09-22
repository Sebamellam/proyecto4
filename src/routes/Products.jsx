import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import data from '../data.json'

export const Products = () => {
  return (
    <> 
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        data.products.map(product => (
          <Card key= {product.sku} style={{ width: '18rem' }}>
            <img variant="top" src={product.photo} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <Link to={`/proyecto4/products/${product.sku}`}>
                <Button variant="primary">Detalle del producto</Button>
              </Link>
            </Card.Body>
          </Card>
        ))
      }
      </div>
    </>
  )
}
