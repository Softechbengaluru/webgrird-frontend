import React from "react";
import BillingDetails from "../components/Checkout/BillingDetails";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto p-6 mt-10">
      <div>
        <BillingDetails />
      </div>
    </div>
  );
}