import Link from 'next/link';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product, baseRoute }) => {
    return (
        <Link href={`${baseRoute}/${product.id}`}>
            <div className={styles.card}>
                <img src={product.image} alt={product.name} className={styles.image} />
                <div className={styles.info}>
                    <h2>{product.name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
