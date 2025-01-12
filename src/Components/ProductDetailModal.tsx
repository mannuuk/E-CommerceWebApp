import { Dispatch, SetStateAction } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { PRODUCT_ITEM_TYPES } from "../Types/RequestTypes";
import { XMarkIcon } from "@heroicons/react/24/outline";

type PRODUCT_DETAIL_MODAL_PROPS = {
  productDetail: PRODUCT_ITEM_TYPES;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
function ProductDetailModal(props: PRODUCT_DETAIL_MODAL_PROPS) {
  const { productDetail, isOpen, setIsOpen } = props;

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <DialogPanel className="mx-auto my-[20px] max-w-screen-lg rounded bg-white p-6 max-h-[90vh] overflow-y-auto">
          <DialogTitle className={"text-right"}>
            <button
              onClick={() => setIsOpen(false)}
              className=" text-black p-2 rounded-full hover:bg-gray-200"
            >
              <XMarkIcon className="w-6 h-6" /> {/* Heroicons close icon */}
            </button>
          </DialogTitle>

          <img
            src={productDetail?.image}
            alt="product image"
            className="w-full h-48 object-contain"
          />
          <h6 className="text-primary font-[700] text-center py-2">
            ${productDetail?.price}
          </h6>
          <h6 className="text-background text-[20px] font-[600] mb-[16px] text-center">
            {productDetail?.title}
          </h6>
          <p className="text-background text-center text-[16px]">
            {productDetail?.description}
          </p>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default ProductDetailModal;
