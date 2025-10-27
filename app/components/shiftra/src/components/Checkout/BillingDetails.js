import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import CommonInput from "../CommonInput";
import CommonButton from "../CommonButton";
import SVGIcon from "../SvgIcon";

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

const totalAmount = initialCart.reduce((sum, item) => sum + item.subtotal, 0);

export const BillingDetails = () => {
    return (
        <div className="mt-10">
        <Breadcrumb paths={["My Account","Product","View Cart ","Checkout"]} />
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mt-6">    
                <div className="text-left md:col-span-3">
                    <h1 className="text-xl sm:text-2xl sm:font-semibold">Billing Details</h1>
                    <div className="mt-6">
                        <form className="mt-4 flex flex-col gap-4">
                            {[
                            { label: "First Name", required: true },
                            { label: "Company Name", required: false },
                            { label: "Street Address", required: true },
                            { label: "Apartment, floor, etc. (optional)", required: false },
                            { label: "Town/City", required: true },
                            { label: "Phone Number", required: true },
                            { label: "Email Address", required: true },
                            ].map(({ label, required }, index) => (
                            <div key={index} className="flex flex-col w-full sm:w-[470px]">
                                <label className="text-sm font-medium text-gray-500 mb-1">
                                {label}
                                {required && <span className="text-red-400">*</span>}
                                </label>
                                <CommonInput type="text" required={required} />
                            </div>
                            ))}
                            <div className="flex items-center gap-2 mt-2">
                            <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5 accent-red-500" />
                            <label className="text-sm sm:text-base text-gray-700">
                                Save this information for faster checkout next time
                            </label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="md:col-span-3 w-full mt-6 md:mt-20">
                <div className="pb-4 mb-4 w-full max-w-[422px]">
                    {initialCart.map((item) => (
                        <div key={item.name} className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <SVGIcon src={item.image} alt={item.name} className="object-cover" zoomOut={2.5} />
                            <span className="base font-normal text-gray-700">{item.name}</span>
                        </div>
                        <span className="base font-semibold">${item.subtotal}</span>
                        </div>
                    ))}
                </div>
                    <div className="pb-4 w-full  max-w-[422px]">
                        <div className="flex justify-between text-gray-700 base mb-2 w-full">
                        <span>Subtotal:</span>
                        <span className="font-semibold">${totalAmount}</span>
                        </div>
                        <hr className="border-black my-2 w-full" />
                        <div className="flex justify-between text-gray-700 base mb-2 w-full">
                        <span>Shipping:</span>
                        <span className="font-semibold">Free</span>
                        </div>
                        <hr className="border-black my-2 w-full" />
                        <div className="flex justify-between font-semibold base w-full">
                        <span>Total:</span>
                        <span>${totalAmount}</span>
                        </div>
                    </div>

                    <div className="mb-4  max-w-[422px]">
                        <label className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                            <input type="radio" name="payment" className="accent-red-500" />
                            <span className="base text-gray-700">Bank</span>
                        </div>
                        <div className="flex gap-2">
                            <SVGIcon src="/assets/icons/mastercard.svg" alt="Bank Icon 1" zoomOut={1.5} />
                            <SVGIcon src="/assets/icons/visa.svg" alt="Bank Icon 2" zoomOut={1.5}/>
                            <SVGIcon src="/assets/icons/bkash.svg" alt="Bank Icon 3" zoomOut={1.5}/>
                            <SVGIcon src="/assets/icons/hindi.svg" alt="Bank Icon 4" zoomOut={1.5}/>
                        </div>
                        </label>
                        <label className="flex items-center gap-2 mt-2 w-full">
                        <input type="radio" name="payment" className="accent-red-500" checked />
                        <span className="base text-gray-700">Cash on delivery</span>
                        </label>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full max-w-md">
                        <input
                        type="text"
                        placeholder="Coupon Code"
                        className="border px-5 py-3 rounded-md w-full sm:w-1/2 border-black text-sm"
                        />
                        <CommonButton text="Apply Coupon" className="w-full sm:w-auto" filled />
                    </div>
                    <div className="flex justify-start mt-6">
                        <CommonButton text="Place Order" className="px-6 py-2 sm:px-10" filled />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillingDetails;
