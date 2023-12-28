import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import CheckHeader from "../../../component/duoheader/CheckHeader";

export const FastResult = () => {
  const [backToDelivery, setBackToDelivery] = useState(false);

  const renderFastResultPage = () => {
    return (
      <>
        <CheckHeader />
      </>
    );
  };
  const render = () => {
    if (backToDelivery) {
      return <Navigate to="/duolingo/checkout/delivery" />;
    } else {
      return renderFastResultPage();
    }
  };
  return render();
};
