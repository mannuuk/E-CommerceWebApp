import React from "react";
import { PRODUCT_ITEM_TYPES } from "../Types/RequestTypes";

type PRODUCT_CARD_TYPE = {
  item: PRODUCT_ITEM_TYPES;
};
function ProductCard(props: PRODUCT_CARD_TYPE) {
  const { title, image, price, category } = props.item ?? {};
  return (
    <div className="bg-white shadow-[0_1px_4px_rgba(0,0,0,.15)] p-4 rounded-[10px] cursor-pointer min-h-[350px]">
      <img
        src={image}
        alt="product image"
        className="w-full h-48 object-contain"
        loading="lazy"
      />
      <h6 className="text-primary font-[700] text-center py-2">${price}</h6>
      <h6 className="text-background text-[16px] font-[600] two-line-ellipsis text-center">
        {title}
      </h6>
      <p className="text-background text-center text-[14px] mt-[20px] capitalize">
        {category}
      </p>
    </div>
  );
}
export default ProductCard;
