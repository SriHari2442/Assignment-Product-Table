import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../features/productsSlice';
import { useParams } from 'react-router-dom';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className={`container ${styles.productDetail}`}>
      {product && (
        <div>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>Price: {product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
