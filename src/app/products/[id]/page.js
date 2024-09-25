import ProductPage from '../../../components/ProductPage';

async function fetchProductById(id) {
    const res = await fetch(`https://cats-in-gb.netlify.app/api/products/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch product data');
    }

    return res.json();
}

export default async function Product({ params }) {
    const { id } = params;

    try {
        const product = await fetchProductById(id);
        return <ProductPage product={product} />;
    } catch (error) {
        console.error(error);
        return <div>Error: {error.message}</div>;
    }
}
