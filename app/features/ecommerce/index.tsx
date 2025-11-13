import { BannerCarousel } from './components/carousel'
import CategorySection from './components/category-section'
import Navbar from './components/navbar'
import NewProductSection from './components/new-product-section'
import type { Banner, Product } from './types';

type EcommerceLoaderData = {
  banners: Banner[];
  categories: string[];
  products: Product[];
};
  
export default function EcommerceContainer({ loaderData }: { loaderData: EcommerceLoaderData }) {
  const {
    banners: loadedBanners,
    categories: loadedCategories,
    products: loadedProducts
  } = loaderData;

  return (
    <>
      <Navbar />
      <main className='py-10 md:py-20'>
        <BannerCarousel banners={loadedBanners} />
        <CategorySection categories={loadedCategories} />
        <NewProductSection products={loadedProducts} />
      </main>
    </>
  );
}
