import React,{useState} from "react";
import CommonButton from "../components/CommonButton";
import SVGIcon from "../components/SvgIcon";
import Breadcrumb from "../components/Breadcrumb";

const options = Array.from({ length: 10 }, (_, i) => String(i + 1).padStart(2, "0"));

const cartDetails = [
  { label: "Subtotal:", value: "$1750", border: true },
  { label: "Shipping:", value: "Free", border: true },
  { label: "Total:", value: "$1750", border: false },
];
const initialCart =[
  {
    name: "LCD Monitor",
    price: 650,
    quantity: 1,
    subtotal: 650,
    image: "/assets/icons/monitor.svg",
  },
  {
    name: "HI Gamepad",
    price: 550,
    quantity: 2,
    subtotal: 1100,
    image: "/assets/icons/laptop.svg",
  },
]

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-white"> 
      <nav className="bg-white shadow-md p-4"></nav>
      <div className="max-w-5xl mx-auto p-8 mt-24">
      <Breadcrumb paths={["Cart"]} />
        <div
          className="bg-white p-4 rounded-lg grid grid-cols-4 text-center mt-16"
          style={{ boxShadow: "0px 1px 13px 0px #0000000D" }}
        >
          <div className="text-left pl-4 text-sm">Product</div>
          <div className="text-sm">Price</div>
          <div className="text-sm">Quantity</div>
          <div className="text-right pr-4 text-sm">Subtotal</div>
        </div>
        {cart.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg grid grid-cols-4 items-center text-center mt-4"
            style={{ boxShadow: "0px 1px 13px 0px #0000000D" }}
          >
            <div className="flex items-center gap-3 text-left pl-0 md:pl-4 relative">
              <div className="relative">
                <SVGIcon
                  src="/assets/icons/cancel.svg"
                  className="absolute -top-2 -left-2 w-5 h-5 cursor-pointer"
                  onClick={() => removeItem(index)}
                />
                <SVGIcon
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 text-sm text-normal"
                />
              </div>
              <span className="text-sm text-normal">{item.name}</span>
            </div>
            <div className="text-sm text-normal">${item.price}</div>
            <div>
              <select className="border border-black rounded px-2 py-1 text-sm text-normal">
                {options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
            </div>
            <div className="text-right pr-4 text-sm text-normal">${item.subtotal}</div>
          </div>
        ))}
        <div className="flex flex-wrap justify-between items-center mt-6">
          <CommonButton text="Return To Shop" />
          <CommonButton text="Update Cart" />
        </div>
        <div className="flex items-center mt-12 gap-3">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border px-5 py-3 rounded-md w-1.5/3 sm:w-1/3 border-black text-sm"
          />
          <CommonButton text="Apply Coupon" filled />
        </div>
        <div
          className="bg-white border-black border p-6 w-full max-w-sm ml-auto mt-20 sm:mt-6 relative"
          style={{ boxShadow: "0px 1px 13px 0px #0000000D", top: "-65px" }}
        >
          <h2 className="text-left font-normal text-md mb-4">Cart Total</h2>
          {cartDetails.map((item, index) => (
            <p
              key={index}
              className={`flex justify-between ${item.border ? "border-b border-gray-500" : ""} py-2`}
            >
              <span className="text-sm mt-2 mb-2">{item.label}</span>
              <span className="text-sm mt-2 mb-2">{item.value}</span>
            </p>
          ))}
          <CommonButton text="Proceed to Checkout" filled />
        </div>
      </div>
    </div>
  );
};

export default Cart;
