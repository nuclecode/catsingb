import ProductList from '../../components/ProductList';

const AvailableKittens = () => {
    const products = [
        { id: 'sakura', name: 'Sakura', image: '/sakura.jpg' },
    ];
    const kringleLitters = [
        { id: 'lilyLitter', name: 'A litter of wonderful kittens', image: '/lilyLitter.jpeg' },
    ]

    return (
        <div>
            <h1>Available Cats & Kittens</h1>
            <p>This page displays all currently available cats and kittens. Feel free to ask any questions you might have about the cats you see on this page.</p>
            <p>
                Currently, we are expecting a litter of kittens from Akebi. Each kitten is raised with love and care.
            </p>
            <h3>An older female is available for adoption.</h3>
            <ProductList products={products} isKringle={false}/>
            <h3>Litters by other cats fathered by Kringle</h3>
            <ProductList products={kringleLitters} isKringle={true}/>

            <h3>Litters by other cats fathered by Luigi</h3>
            <p>
                For more details or to schedule a visit, please contact us.
            </p>
        </div>
    );
}

export default AvailableKittens;