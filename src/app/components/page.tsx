"use client";
import React, { useEffect, useState } from 'react';


interface User {
    name: string,
    price: number,
    image: string,
    id: string
}

const Sofa = () => {
    const [Sofa, Sofaset] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://678107a785151f714b091285.mockapi.io/api/products/products');
                const data = await response.json();
                Sofaset(data);
            } catch (error) {
                console.log("products data not fetch", error);
            }
        }
        fetchData();
    }, []);

    console.log(Sofa);

    return (
        <div className='px-6 py-12 mt-16'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {Sofa.map((sofa) => (
                    <div key={sofa.id} className='transition-transform transform hover:scale-105 bg-white shadow-lg rounded-lg overflow-hidden'>
                        <img src={sofa.image} alt={sofa.name} height={48} className='w-full object-cover' />
                        <div className='p-4'>
                            <h3 className='text-lg font-semibold'>{sofa.name}</h3>
                            <p className='text-gray-700'>${sofa.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sofa;