import React from "react";
import style from "../../../styles/payment.module.css";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from 'next/head'
const CheckOut = () => {
  const nav = useRouter()
  return (
    <>
      <Head>
        <title>
          Charge Now / Paytm
        </title>
      </Head>
      <div className={style.CheckOutDiv}>
        <div>
          {" "}
          <img
            className="style.CheckOutDiv1"
            src="https://user-images.githubusercontent.com/96005514/207302177-50735bbb-84cc-4e33-9d53-81460dfc4258.png"
            alt=""
            width="100px"
            height="30px"
          />
        </div>
        <p className={style.checkOutdiv2}> Your Payment was successful</p>
        <img
          style={{
            textAlign: "center",
            marginBottom: "10px",
            margin: "auto",
            height: "150px",
            width: "150px",
          }}
          src="https://fcs3pub.s3.amazonaws.com/photo-book/images/payment/success.gif"
          alt=""
        />
        <div>
          <p className={style.checkOutDiv3}>
            Thank you for your payment. we will be in contact with more details
            shortly.
          </p>
        </div>
        <Button colorScheme="orange" onClick={() => {
          nav.push("/dashboard/home")
        }}>Back to Home</Button>
      </div>
    </>
  );
};

export default CheckOut;
