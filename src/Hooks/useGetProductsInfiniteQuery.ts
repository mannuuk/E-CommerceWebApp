import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import {
  GET_PRODUCT_LIST_RESPONSE,
  PRODUCT_ITEM_TYPES,
} from "../Types/RequestTypes";
import { fetcher } from "../Utils/Helpers";

const getProductList = async (
  page: number
): Promise<AxiosResponse<GET_PRODUCT_LIST_RESPONSE>> => {
  return await fetcher({
    url: `/products?page=${page}&limit=12`, // Assuming you need to pass the page number
  });
};

export const getProductListArray = (
  pages: Array<AxiosResponse<GET_PRODUCT_LIST_RESPONSE>>
): Array<PRODUCT_ITEM_TYPES> => {
  return pages
    .map((data) => data?.data?.products)
    .reduce((a, b) => a.concat(b), []);
};

function useGetProductsInfiniteQuery() {
  return useInfiniteQuery({
    queryKey: ["productListKey"],
    queryFn: ({ pageParam }: any) => getProductList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (
      lastPage: any,
      allPages,
      lastPageParam,
      allPageParams
    ) => {
      //  managing hardcoded pagination count, because we are not receiving total product count or total pages key from backend
      return lastPageParam < 13 ? lastPageParam + 1 : undefined;
    },
  });
}

export default useGetProductsInfiniteQuery;
