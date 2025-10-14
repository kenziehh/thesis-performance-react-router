import { useState } from 'react'
import { Link } from 'react-router'
import { Menu, X } from 'lucide-react'
import Button from '~/shared/components/button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="px-4 container flex flex-wrap items-center justify-between py-4 relative">
      <div className="text-2xl font-bold">Ecommerce</div>

      <button
        className="block md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={`
          absolute left-0 top-full w-full bg-white dark:bg-gray-900 shadow-md md:shadow-none md:bg-transparent md:dark:bg-transparent
          md:static md:flex md:w-auto md:items-center md:gap-8
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:opacity-100 md:max-h-full'}
        `}
      >
        <div className="flex flex-col md:flex-row items-center md:gap-8 px-6 md:px-0">
          <Link
            to="/"
            className="py-3 md:py-2 hover:text-green-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="py-3 md:py-2 hover:text-green-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="py-3 md:py-2 hover:text-green-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Cart
          </Link>

          <Button className='w-full md:w-auto'>Sign In</Button>
        </div>
      </div>
    </nav>
  )
}
