import React from 'react'
import { Link } from 'react-router'

export default function SectionHeader({ title, href }: { title: string, href: string }) {
    return (
        <div className='flex gap-4 justify-between w-full'>
            <h3 className='text-xl'>
                {title}
            </h3>
            <Link to={href} className='text-md hover:text-gray-500'>
                Lihat semua
            </Link>
        </div>
    )
}
