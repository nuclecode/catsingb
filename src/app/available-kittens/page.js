import ProductList from '../../components/ProductList';

export default function AvailableKittens() {
    const products = [
        { id: 'sakura', name: 'Sakura', image: '/sakura.jpg' },
        // { id: 'product2', name: 'Product 2', image: '/product2.jpg' },
        // { id: 'product3', name: 'Product 3', image: '/product3.jpg' },
    ];

    return (
        <div>
            <h1>Available Kittens</h1>
            <p>
                Currently, we are expecting a litter of kittens from Akebi. Each kitten is raised with love and care.
            </p>
            <p>An older female is available for adoption.</p>
            <ProductList products={products} />
            <p>
                For more details or to schedule a visit, please contact us.
            </p>
        </div>
    );
}
