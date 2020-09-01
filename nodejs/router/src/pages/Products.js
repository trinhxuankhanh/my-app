import React, { Component } from 'react';
import { CartContext } from '../contexts/Cart.js'

import {
    Container, Row, Col, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button,
} from 'reactstrap';
const axios = require('axios').default;

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('https://42mm6.sse.codesandbox.io/products')
        .then(res => {
            this.setState({
                products: [...res.data]
            })
        })
    }

    render() {
        const { products } = this.state;
        return (
            <Container>
                <h2>Products</h2>
                <Row>
                    {
                        products.map((item, index) => (
                            <Col md='3' key={index}>
                                <Card>
                                    <CardImg top width="100%" src={item.urlImage} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{item.name}</CardTitle>
                                        <CardSubtitle>{item.description}</CardSubtitle>
                                        <CartContext.Consumer>
                                            {
                                                ({ addToCart }) => <Button onClick={() => addToCart(item)}>Buy</Button>
                                            }
                                        </CartContext.Consumer>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        )
    }
}

export default Products;