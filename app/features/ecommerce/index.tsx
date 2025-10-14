import Navbar from './components/navbar'
import { BannerCarousel } from './components/carousel'
import { banners } from './data/banner'
import CategorySection from './containers/category-section'

export default function EcommerceContainer() {
  return (
    <>
      <Navbar />
      <main className='py-10 md:py-20'>
        <BannerCarousel banners={banners} />
        <CategorySection />
      </main>


    </>
  )
}
