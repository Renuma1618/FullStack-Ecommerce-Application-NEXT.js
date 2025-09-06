
import {Button}from "@/components/ui/button";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/components/ProductsView";
// Update the import path to the correct module that exports getAllCategories
import { getAllCategories } from "@/sanity/lib/products/getCategories";
import BlackFridayBanner from "@/components/BlackFridayBanner";



export default async function Home() {
  const products = await getAllProducts(); // Fetch all products from Sanity
  const categories = await getAllCategories(); // Fetch all categories from Sanity
  return (
    <div>
      <BlackFridayBanner />
      {/* rendering products */}
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <ProductsView products={products} categories={categories}/>
      </div>
    </div>
  );
}
