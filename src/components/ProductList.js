import ProductCard from './ProductCard';
import styles from './ProductList.module.scss';

const ProductList = ({ products, isKringle }) => {
    const baseRoute = isKringle ? "/kringleLitters" : "/products";

    return (
        <div className={styles.productList}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} baseRoute={baseRoute} />
            ))}
        </div>
    );
};

export default ProductList;
