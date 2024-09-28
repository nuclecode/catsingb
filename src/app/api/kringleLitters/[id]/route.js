export async function GET(request, { params }) {
    const { id } = params;

    const litters = [
        { id: 'lilyLitter', name: 'Lily Litter', image: '/lilyLitter.jpeg', price: 1000, description: 'Lily’s litter filled with charm and energy. Fathered by Luigi.' },
    ];

    const litter = litters.find((litter) => litter.id === id);

    if (!litter) {
        return new Response(JSON.stringify({ message: 'Litter not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(litter), { status: 200 });
}
