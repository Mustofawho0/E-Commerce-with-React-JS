import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardProduct } from "../../CardProduct";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState(null);

  const onFetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      // console.log(res)
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onFetchProducts();
  }, []);

  if (products === null) return <h1>Loadinggg....</h1>;

  return (
    <>
      <div className="pt-[150px] px-[160px]">
        <div className="flex items-center gap-3 tracking-wide text-2xl">
          <span className="font-bold">Men's Tops</span>
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className=" m-1">
              <RiArrowDropDownLine />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <span>
                Look no further than a T-shirt for the ultimate wardrobe staple.
                Block colours, long sleeved, stripey, statement and the classic
                white cotton tee. For active days at the gym, easy weekends or
                styling down a crisp suit. A classic T-shirt is the perfect
                casual item for any outfit, no matter the season, the occasion
                or your budget.
              </span>
            </ul>
          </div>
        </div>
        <div className="flex gap-5 pt-[20px] text-[14px]">
          <button className="border-2 border-gray-600 w-[100px] h-auto rounded-full">
            T-shirt
          </button>
          <button className="border-2 border-gray-600 w-[100px] h-auto rounded-full">
            Sweatshirts
          </button>
          <button className="border-2 border-gray-600 w-[100px] h-auto rounded-full">
            Hoodies
          </button>
          <button className="border-2 border-gray-600 w-[100px] h-auto rounded-full">
            Jumpers
          </button>
          <button className="border-2 border-gray-600 w-[100px] h-auto rounded-full">
            Polo Shirts
          </button>
          <button className="border-2 border-gray-600 w-[100px] h-auto rounded-full">
            Vests
          </button>
        </div>
        <div className="flex gap-4 pt-[50px] text-[15px] tracking-wide">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="border-2 border-gray-600 w-[100px] h-auto rounded-lg text-center"
            >
              Category
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-sm my-2"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <button className="border-2 border-gray-600 w-[100px] h-auto rounded-lg">
            Subcategory
          </button>
          <button className="border-2 border-gray-600 w-[100px] h-auto rounded-lg">
            Brand
          </button>
          <button className="border-2 border-gray-600 w-[100px] h-auto rounded-lg">
            Size
          </button>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="border-2 border-gray-600 w-[100px] h-auto rounded-lg flex justify-center"
            >
              Price
            </div>
            <div
              tabIndex={0}
              className="flex flex-col gap-3 dropdown-content z-[1] p-2 shadow bg-base-100 rounded-sm my-2"
            >
              <div className="flex items-center gap-10 ">
                <input
                  type="text"
                  placeholder="Minimum"
                  className="input rounded-none border border-black"
                />
                -
                <input
                  type="text"
                  placeholder="Maximum"
                  className="input rounded-none border border-black"
                />
              </div>
              <button className="btn bg-black text-white w-full rounded-none">
                Search
              </button>
            </div>
          </div>
          <button className="border-2 border-gray-600 w-[100px] h-auto rounded-lg">
            Colour
          </button>
          <button className="border-2 border-gray-600 w-[100px] h-auto rounded-lg">
            Condition
          </button>
          <button className="border-2 border-gray-600 w-[100px] h-auto rounded-lg">
            Sort
          </button>
        </div>
        <div className="grid grid-cols-12 gap-10 py-10">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-span-3">
                <Link to={`/detail/${product.id}`}>
                  <CardProduct
                    key={index}
                    image={product.imageUrl}
                    name = {product.nameProduct}
                    price={product.price}
                    size={product.sizes}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
