export async function GET(request, { params }) {
    const { id } = params;

    const products = [
        { id: 'sakura', name: 'Sakura', image: '/sakura.jpg', price: 400, description: 'Sakura is a retired queen who gave birth to 2 amazing litters, she is a great mum. She is comprehensively tested. She has been neutered. We want her to settle in a permanent home surrounded by people who know the Sphynx breed. She has blue eyes and is a confirmed cream-point color coming from a DBE line. She has contributed to the Elf breed for which we are grateful. Sakura is now 3,5 years old.' },
    ];

    const product = products.find((prod) => prod.id === id);

    if (!product) {
        return new Response(JSON.stringify({ message: 'Product not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(product), { status: 200 });
}
