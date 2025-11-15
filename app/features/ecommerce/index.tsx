import { BannerCarousel } from './components/carousel';
import CategorySection from './components/category-section';
import Navbar from './components/navbar';
import NewProductSection from './components/new-product-section';
import { banners } from './data/banners';
import { categories } from './data/categories';
import { products } from './data/products';



export default function EcommerceMain() {


  return (
    <>
      <Navbar />
      <main className='py-10 md:py-20'>
        <BannerCarousel banners={banners} />
        <CategorySection categories={categories} />
        <NewProductSection products={products} />
      </main>
    </>
  );
}
