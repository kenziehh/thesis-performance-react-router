import React from 'react'
import { ProductCard } from '../components/product-card'
import { products } from '../data/products'

export default function NewProductSection() {
    return (
        <section className='container px-4 pt-8 md:pt-14 pb-4 md:pb-10 flex-col flex gap-8'>
            <div className='flex flex-row justify-between gap-2'>
                <h2 className="text-pretty text-lg md:text-3xl font-semibold tracking-tight">Produk Baru</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-5 xl:gap-5">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>

        </section>
    )
}
