import ProductCard from './ProductCard';
import styles from './ProductList.module.scss';

const ProductList = ({ products }) => {
    return (
        <div className={styles.productList}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
