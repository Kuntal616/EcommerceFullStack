import React from 'react';
import { Box, Typography, Card, CardActionArea, CardContent, Grid } from '@mui/material';

const categories = [
  { name: 'Fruits', image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80' },
  { name: 'Vegetables', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { name: 'Dairy', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80' },
  { name: 'Bakery', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' },
];

const CategorySection = () => (
  <Box sx={{ mt: 6 }}>
    <Typography variant="h5" mb={2}>Shop by Category</Typography>
    <Grid container spacing={3}>
      {categories.map((cat) => (
        <Grid item xs={6} sm={3} key={cat.name}>
          <Card sx={{ borderRadius: 3, boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 8 } }}>
            <CardActionArea>
              <img src={cat.image} alt={cat.name} style={{ width: '100%', height: 120, objectFit: 'cover', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
              <CardContent>
                <Typography align="center" variant="subtitle1">{cat.name}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default CategorySection;
