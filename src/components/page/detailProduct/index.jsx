import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { useParams } from "react-router-dom";
import Loading from "../../core/Loading";
import { useContext } from "react";
import { userContext } from "../../../supports/context/useUserContext";
import { toast } from "react-toastify";

export default function DetailProduct() {
  const params = useParams();
  const [product, setProducts] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { userData } = useContext(userContext);

  const onFetchProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/products/${params.productId}`
      );
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleToCart = async () => {
    try {
      if (selectedSize === null) throw new Error("Select Size First!");
      const res = await axios.post("http://localhost:5000/carts", {
        userId: userData.id,
        productId: product.id,
        quantity,
      });
      // console.log(res)
      toast.success("Add to Cart Success!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    onFetchProducts();
  }, []);

  const increment = () => {
    setQuantity((e) => e + 1);
  };

  const decrement = () => {
    setQuantity((f) => f - 1);
  };

  if (product === null) return <Loading />;
  return (
    <>
      <div className="pt-[150px] px-[160px]">
        <div className="grid grid-cols-2 gap-16 ">
          <div>
            <img src={product.imageUrl} alt="" />
          </div>
          <div className="py-2 font-sans tracking-wide  w-[400px]">
            <p className="text-xl font-bold pb-5">{product.nameProduct}</p>
            <p className="text-xl font-bold">Rp {product.price}</p>

            <p className="py-5">
              {product.stock}
              {selectedSize === null ? null : (
                <>
                  <b>Size</b> - {selectedSize.size} : <b>Stock</b> -{" "}
                  {selectedSize.stock} -
                </>
              )}{" "}
              Used - Excellent -{" "}
              <span>
                <u>Wild Fable</u>
              </span>
            </p>
            <p className="text-center pb-2">Qty : {quantity}</p>
            <div className="flex items-center justify-center pb-2">
              <button
                className="btn"
                onClick={decrement}
                disabled={quantity === 1 ? true : false}
              >
                -
              </button>
              <span className="px-10">{quantity}</span>
              <button
                className="btn"
                onClick={increment}
                disabled={selectedSize?.stock === quantity ? true : false}
              >
                +
              </button>
            </div>
            {product?.sizes?.length ? (
              <div className="dropdown w-full">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn rounded-sm border-2 border-black mb-2 w-full"
                >
                  {selectedSize?.size ? selectedSize?.size : "Sizes"}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] p-2 w-full shadow bg-base-100 rounded-sm"
                >
                  {product?.sizes?.map((size, index) => {
                    return (
                      <li
                        onClick={() => setSelectedSize(size)} // {size: ..., stock: ...}
                        className="hover:bg-gray-100 hover:rounded-sm px-2 py-2 text-center"
                      >
                        {size.size}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}

            <div className="flex flex-col gap-2 items-center">
              <button className="btn w-full rounded-none bg-black text-white border-2 border-black hover:bg-red-500 hover:border-red-500 text-[15px] tracking-wide">
                Buy Now
              </button>
              <button onClick={onHandleToCart} className="btn w-full bg-white rounded-none border-2 border-black ext-[15px] tracking-wide hover:border-black">
                Add to Bag
              </button>
            </div>
            <div className="flex pt-10 gap-5 items-center">
              <MdOutlineVerifiedUser size={30} />{" "}
              <span className="text-xs">
                All purchases through Depop are covered by Buyer Protection.{" "}
                <br />
                <span>
                  <u>Learn more</u>
                </span>
              </span>
            </div>
            <div className="divider"></div>
            <h1>Medium Green Long Sleeve Shirt - Wild Fable</h1>
          </div>
        </div>
      </div>
    </>
  );
}
