import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        name: 'Miel',
        imagenUrl: 'https://www.diariodesevilla.es/2023/03/05/mascotas/curiosidades-gatos-naranja-unicos-especie_1771932936_178438200_1200x675.png',
        introduction: 'Una gatita naranja muy especial',
        availability: 'Disponible',
        description: 'Una gatita naranja muy especial que te hará compañía en todo momento. Es Hembra. Es un gato muy cariñoso y juguetón. ¡Adoptala ya!',
    },
    {
        id: 2,
        name: 'Pixel',
        imagenUrl: 'https://s.yimg.com/ny/api/res/1.2/4Tzx_f3_p3pQfLZtIOXUng--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-09/e4488eb0-3f74-11ed-bfbc-4db5b337addb',
        introduction: 'Un gato calico elegante',
        availability: 'Disponible',
        description: 'Un gato tricolor elegante que te hará compañía en todo momento. Es macho. Es un gato muy cariñoso y sumamente tranquilo. Le encanta dormir en las piernas de la persona que ama. ¡Adoptalo ya!',
    },
    {
        id: 3,
        name: 'Oreo',
        imagenUrl: 'https://th.bing.com/th/id/R.cec894e4259a5e1e5870f923f52abb90?rik=4mZBCbiUzc%2f5Ew&riu=http%3a%2f%2fwww.osgatos.com.br%2ffotos%2fgato-peludo.jpg&ehk=D%2fqibt7hIfAt262vbhIfXoqe6MD7yxo%2f9E3HE7eKuRA%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        introduction: 'Un gato bicolor hermoso',
        availability: 'Disponible',
        description: 'Un gato bicolor hermoso que te hará compañía en todo momento. Es macho, y le encantan los niños. Le gusta mucho las caricias y tener tu atención. ¡Adoptalo ya!',
    },
    {
        id: 4,
        name: 'Tiggy',
        imagenUrl: 'https://thumbs.dreamstime.com/b/gato-rayado-gris-11405616.jpg',
        introduction: 'Una gatita tigresa majestuosa',
        availability: 'Disponible',
        description: 'Un gatita con rayas en su cuerpo que te hará compañía en todo momento. Le encanta estar en actividad, corriendo y sacando todas sus energías, nunca te aburrirás a su lado. Es muy tierna y cariñosa. ¡Adoptala ya!',
    },
    {
        id: 5,
        name: 'Nube',
        imagenUrl: 'https://th.bing.com/th/id/OIP.mlAZ5oSA1rmSGq3hwEAm8AAAAA?rs=1&pid=ImgDetMain',
        introduction: 'Un gato blanco majestuoso',
        availability: 'Disponible',
        description: 'Un gato blanco con pelaje majestuoso que te hará compañía en todo momento. Su pelaje es tan esponjoso que te sentirás acariciando una nube. Le gusta estar acompañado, es muy cariñoso y siempre querrá que lo abraces. ¡Adoptalo ya!',
    },
    {
        id: 6,
        name: 'Pantera',
        imagenUrl: 'https://gatoyfelino.com/wp-content/uploads/2020/12/black-cat-375866_1280.jpg',
        introduction: 'Un gata negra majestuoso',
        availability: 'Disponible',
        description: 'Una gatita con pelaje exhuberante y negro que te hará compañía en todo momento. Le encanta dormir con las personas, es muy tierna y sabe tratar con niños. ¡Adoptala ya!',
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
                    //percentageOffer={product.percentageOffer}
                    //newPrice={product.newPrice}
                    //oldPrice={product.oldPrice}
                    onProductClick={() => handleProductClick(product)}
                />
            ))}
        </section>
    );
}

export default ProductList;
