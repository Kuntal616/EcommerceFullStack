import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 8, transform: 'translateY(-4px) scale(1.03)' } }}>
      <Link to={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
        />
      </Link>
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600}>{product.name}</Typography>
        <Typography color="text.secondary" fontWeight={500}>₹{product.price}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <StarIcon sx={{ color: '#FFD700', fontSize: 18, mr: 0.5 }} />
          {product.rating || 4.5}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
