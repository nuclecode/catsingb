import styles from './ProductPage.module.scss';

const ProductPage = ({ product }) => {
    return (
        <div className={styles.productPage}>
            <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.title} className={styles.image} />
            </div>
            <div className={styles.details}>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.price}>${product.price}</p>
                <p className={styles.description}>{product.description}</p>
                <button className={styles.addToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductPage;
