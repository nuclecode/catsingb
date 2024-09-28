import ProductPage from '../../../components/ProductPage';

async function fetchLitterById(id) {
    const res = await fetch(`https://cats-in-gb.netlify.app/api/kringleLitters/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch litter data');
    }

    return res.json();
}

export default async function Litter({ params }) {
    const { id } = params;

    try {
        const litter = await fetchLitterById(id);
        return <ProductPage product={litter} />;
    } catch (error) {
        console.error(error);
        return <div>Error: {error.message}</div>;
    }
}
