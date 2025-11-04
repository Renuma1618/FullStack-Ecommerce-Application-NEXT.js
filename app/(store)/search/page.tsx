// import ProductGrid from '@/components/ProductGrid';
// import { searchProductsByName } from '@/sanity/lib/products/searchProductByName';
// import React from 'react'

// async function Searchpage({searchParams}: {searchParams: {query?: string}}) {
//   const {query} =  searchParams;
//   const products = await searchProductsByName(query??"");
//   if(!products.length) {
//   return (
//     <div>
//       <div className='flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4'>
//         <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-4xl'>
//           <h1 className='text-3xl font-bold mb-6 text-center'>No product found</h1>
//         </div>

//       </div>
//     </div>
//   )
// }
// return  (
//  <div className='flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4'>
//    <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-4xl'>
//     <h1 className='text-3xl font-bold mb-6 text-center'>Search results for {query}</h1>
//    <ProductGrid products={products}/>

//    </div>

//  </div>
// )
// }
// export default Searchpage


import ProductGrid from "@/components/ProductGrid";
import { searchProductsByName } from "@/sanity/lib/products/searchProductByName";
import React from "react";

// ✅ Proper type for the page props
interface SearchPageProps {
  searchParams?: {
    query?: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  // ✅ NO "await" here — searchParams is not async
  const query = searchParams?.query ?? "";

  // ✅ Await your async function, not searchParams
  const products = await searchProductsByName(query);

  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center">
            No products found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Search results for “{query}”
        </h1>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

