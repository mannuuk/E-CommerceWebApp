import React, { useMemo, useState } from "react";
import useGetProductsInfiniteQuery, {
  getProductListArray,
} from "../Hooks/useGetProductsInfiniteQuery";
import ProductCard from "../Components/ProductCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Components/Spinner";
import Filter from "../Components/Filter";
import { FILTER } from "../Types/CommonTypes";
import ProductDetailModal from "../Components/ProductDetailModal";
import { PRODUCT_ITEM_TYPES } from "../Types/RequestTypes";

function HomePage() {
  const [filters, setFilters] = useState<FILTER>({} as FILTER);
  const [productDetails, setProductDetails] = useState<PRODUCT_ITEM_TYPES>(
    {} as PRODUCT_ITEM_TYPES
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data, isError, isLoading, fetchNextPage, isFetchingNextPage } =
    useGetProductsInfiniteQuery();
  const productList = getProductListArray(data?.pages ?? []);

  // Filter Will work only loaded data, it's only managed by Frontend.

  const filteredProductList = useMemo(
    () =>
      productList
        .filter((product) => {
          // If no category is selected, show all products
          return !filters.category || product.category === filters.category;
        })
        .sort((a, b) =>
          filters.sort === "lowToHigh"
            ? a.price - b.price
            : filters.sort === "highToLow"
            ? b.price - a.price
            : 0
        ),
    [filters, productList]
  );

  if (isLoading) {
    return (
      <div className="h-svh flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="container mx-auto px-4 py-10 my-10 text-center">
        <p className="text-primary text-[20px]">
          Something went wrong, please Refresh the Page
        </p>
      </div>
    );
  }

  return (
    <section className="py-5">
      <div className="container mx-auto">
        <div className="px-4">
          <Filter setFilters={setFilters} filters={filters} />
        </div>
        <InfiniteScroll
          dataLength={filteredProductList.length}
          next={fetchNextPage}
          hasMore={true}
          loader={
            isFetchingNextPage && (
              <div className="flex justify-center">
                <Spinner />
              </div>
            )
          }
          pullDownToRefreshThreshold={50}
        >
          {filteredProductList?.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 px-4 py-5">
              {filteredProductList.map((item, index) => {
                return (
                  <div
                    key={`item-${index}`}
                    onClick={() => {
                      setProductDetails(item);
                      setIsOpen(true);
                    }}
                  >
                    <ProductCard item={item} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center py-10 mt-10">
              <h5 className="text-primary text-[24px]">No Products Found</h5>
            </div>
          )}
        </InfiniteScroll>
      </div>

      <ProductDetailModal
        productDetail={productDetails}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </section>
  );
}
export default HomePage;
