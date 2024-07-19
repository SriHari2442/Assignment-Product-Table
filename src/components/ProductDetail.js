import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../features/productsSlice';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      {product && (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
