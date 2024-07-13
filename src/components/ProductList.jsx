import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        name: 'Gato calvo',
        imagenUrl: 'https://th.bing.com/th/id/OIP.PSLdHB1heH2uk7wITn2L3gAAAA?rs=1&pid=ImgDetMain',
        percentageOffer: '30',
        newPrice: '160',
        oldPrice: '208',
        introduction: 'Un gato calvo muy especial',
        availability: 'In Stock',
        description: 'Un gato calvo muy especial que te hará compañía en todo momento.',
    },
    {
        id: 2,
        name: 'Gato siames',
        imagenUrl: 'https://i.pinimg.com/736x/4d/20/61/4d2061f62c34e13fea9cb63435152c11.jpg',
        percentageOffer: '20',
        newPrice: '200',
        oldPrice: '250',
        introduction: 'Un gato siames elegante',
        availability: 'In Stock',
        description: 'Un gato siames elegante que te hará compañía en todo momento.',
    },
    {
        id: 3,
        name: 'Gato persa',
        imagenUrl: 'https://th.bing.com/th?id=OIF.O4B%2b%2faXCoEFkohyGlgZBoA&rs=1&pid=ImgDetMain',
        percentageOffer: '10',
        newPrice: '300',
        oldPrice: '350',
        introduction: 'Un gato persa hermoso',
        availability: 'In Stock',
        description: 'Un gato persa hermoso que te hará compañía en todo momento.',
    },
    {
        id: 4,
        name: 'Gato egipcio',
        imagenUrl: 'https://th.bing.com/th/id/R.1c9184888ead79b94d2f597f63ac26f1?rik=LnRO4OhkK8y4ww&riu=http%3a%2f%2fimages3.memedroid.com%2fimages%2fUPLOADED661%2f611feaeb38dd2.jpeg&ehk=vMqMhKOI1UtMRNtl%2f4eoFCZazYJ0T%2f67RpRlN8VK9j4%3d&risl=&pid=ImgRaw&r=0',
        percentageOffer: '15',
        newPrice: '400',
        oldPrice: '450',
        introduction: 'Un gato egipcio majestuoso',
        availability: 'In Stock',
        description: 'Un gato egipcio majestuoso que te hará compañía en todo momento.',
    },
];


const ProductList = () => {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        console.log(product.id);
        navigate(`/product/${product.id}`, { state: { product } });
    }

    return (
        <section className="flex flex-wrap justify-center">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    imagenUrl={product.imagenUrl}
                    percentageOffer={product.percentageOffer}
                    newPrice={product.newPrice}
                    oldPrice={product.oldPrice}
                    onProductClick={() => handleProductClick(product)}
                />
            ))}
        </section>
    );
}

export default ProductList;
