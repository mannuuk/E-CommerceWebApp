import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";
import { FILTER } from "../Types/CommonTypes";

const categoriesArray = [
  "audio",
  "mobile",
  "laptop",
  "tv",
  "appliances",
  "gaming",
];

type FILTER_TYPES = {
  setFilters: Dispatch<SetStateAction<FILTER>>;
  filters: FILTER;
};
function Filter(props: FILTER_TYPES) {
  const { filters, setFilters } = props;
  const handleChange = (filterType: keyof FILTER, value: string) => {
    // Correctly spread the previous state and update the selected filter
    setFilters((prevVal: any) => ({ ...prevVal, [filterType]: value }));
  };
  return (
    <div className="flex items-baseline justify-end border-b border-gray-200 pb-6 pt-10 md:pt-24">
      <div className="flex  items-center">
        <Menu as="div" className="relative inline-block text-left mr-[16px]">
          <div>
            <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 capitalize">
              {filters?.category ?? "Category"}
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              {categoriesArray.map((item, index) => {
                return (
                  <MenuItem key={`category-${index}`}>
                    <a
                      onClick={() => handleChange("category", item)}
                      className={
                        "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none text-gray-500 capitalize"
                      }
                    >
                      {item}
                    </a>
                  </MenuItem>
                );
              })}
            </div>
          </MenuItems>
        </Menu>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 capitalize">
              {filters?.sort ?? "Sort"}
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  className={
                    "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none text-gray-500"
                  }
                  onClick={() => handleChange("sort", "lowToHigh")}
                >
                  Price: Low to High
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  className={
                    "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none text-gray-500"
                  }
                  onClick={() => handleChange("sort", "highToLow")}
                >
                  Price: High to Low
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}
export default Filter;
