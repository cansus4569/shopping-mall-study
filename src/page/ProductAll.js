import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        let searchQuery = query.get('q') || "";
        console.log("What Query?",searchQuery);
        let url = `https://my-json-server.typicode.com/cansus4569/shopping-mall-study/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        setProductList(data);
    }

    useEffect(() => { 
        getProducts();
    }, [query])

    return (
        <div>
            <Container>
                <Row>
                    {productList.map(menu => (
                        <Col md={3} sm={12}>
                            <ProductCard item={menu}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductAll;