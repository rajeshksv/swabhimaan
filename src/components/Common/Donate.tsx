import React, { useEffect, useRef } from "react";

const DonateButton = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.setAttribute("data-payment_button_id", "pl_HGvGnVps9mIzWs");
    formRef.current.appendChild(script);

    return () => {
      formRef.current.removseChild(script);
    };
  }, []);

  const formRef = useRef(null);

  return <form ref={formRef}></form>;
};

export default DonateButton;
