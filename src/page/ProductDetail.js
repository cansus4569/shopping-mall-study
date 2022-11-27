import React from 'react'
import { Button, Dropdown } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/cansus4569/shopping-mall-study/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setProduct(data);
    }

    useEffect(() => {
        getProductDetail();
    }, [])

    return (
        <Container>
            <Row>
                <Col className="product-img">
                    <img src={product?.img} />
                </Col>
                <Col>
                    <div className='product-info'>{product?.title}</div>
                    <div className='product-info'>₩ {product?.price}</div>
                    <div className='choice'>{product?.choice ? 'Conscious choice' : ""}</div>
                    <div className='new-product'>{product?.new ? '신제품' : ""}</div>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-down btn btn-outline-dark">
                            사이즈 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {product?.size.length > 0 && product.size.map((item) => (
                                <Dropdown.Item href="#">{item}</Dropdown.Item>
                            ))}
                            {/* <Dropdown.Item href="#">{product?.size[0]}</Dropdown.Item>
                            <Dropdown.Item href="#">{product?.size[1]}</Dropdown.Item>
                            <Dropdown.Item href="#">{product?.size[2]}</Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="dark" className='add-button'>Dark</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail
