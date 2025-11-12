import Navbar from './components/navbar'
import { BannerCarousel } from './components/carousel'
import { banners } from './data/banners'
import CategorySection from './components/category-section'
import NewProductSection from './components/new-product-section'


export default function EcommerceContainer() {
  return (
    <>
      <Navbar />
      <main className='py-10 md:py-20'>
        <BannerCarousel banners={banners} />
        <CategorySection />
        <NewProductSection />
      </main>
    </>
  )
}
