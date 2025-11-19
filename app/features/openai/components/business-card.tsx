import type { Business } from '../types'

export default function BusinessCard({ business }: { business: Business }) {
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="relative aspect-square w-full">
                <img
                    src={business.src}
                    alt={business.title}
                    decoding='async'
                    loading='lazy'
                    className="object-cover rounded-lg w-full h-full"
                />
            </div>
            <span className="text-lg font-medium">
                {business.title}
            </span>
            <div className="flex gap-2.5 text-sm text-gray-500">
                <span>{business.category}</span>
            </div>
        </div>
    )
}
