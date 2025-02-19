import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from './ProductList';

const ProductDetail = () => {
    const location = useLocation();
  const { product } = location.state || {}; 

  if (!product) {
    return <div>No product data found</div>;
  }
    return (
        <div class="bg-gray-100 dark:bg-gray-800 py-8">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row -mx-4">
                    <div class="md:flex-1 px-4">
                        <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img class="w-full h-full object-cover" src={product.imagenUrl} alt="Product Image" />
                        </div>
                        <div class="flex -mx-2 mb-4">
                            <div class="w-1/2 px-2">
                                <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Adoptar</button>
                            </div>
                            <div class="w-1/2 px-2">
                                <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Agregar a Favorito</button>
                            </div>
                        </div>
                    </div>
                    <div class="md:flex-1 px-4">
                        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.name}</h2>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {product.introduction}
                        </p>
                        <div class="flex mb-4">

                            <div>
                                <span class="font-bold text-gray-700 dark:text-gray-300">Estado:</span>
                                <span class="text-gray-600 dark:text-gray-300"> {product.availability}</span>
                            </div>
                        </div>
                        <div>
                            <span class="font-bold text-gray-700 dark:text-gray-300">Descripcion del gatito:</span>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
