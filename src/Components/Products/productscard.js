import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
        <Card style={{ margin: '10px' }}>
            <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.imageUrl}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${product.price}
                </Typography>
                <Button variant="contained" color="primary">
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
