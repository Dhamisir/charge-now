import React from "react";
import style from "../../../styles/payment.module.css";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/Router";
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
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTg1LjQ0IDE2NS45NSIgd2lkdGg9IjEwNnB4IiBoZWlnaHQ9IjMwcHgiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6bm9uZTsKICAgICAgfQogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMzMzQ3NWI7CiAgICAgICAgY2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoKTsKICAgICAgfQogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6ICNmZjdhNTk7CiAgICAgICAgY2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoLTIpOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPgogICAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSI1ODUuNDQiIGhlaWdodD0iMTY1Ljk2Ii8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+CiAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMzc2LjA0IiB3aWR0aD0iMTU2LjE0IiBoZWlnaHQ9IjE2My42MiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPHRpdGxlPkxvZ28gLSBGdWxsIChDb2xvcik8L3RpdGxlPgogIDxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPgogICAgPGcgY2xhc3M9ImNscy0yIj4KICAgICAgPHBvbHlnb24gcG9pbnRzPSI2My40IDI3LjQ3IDYzLjQgNzQuMjggMjAuNDEgNzQuMjggMjAuNDEgMjcuNDcgMCAyNy40NyAwIDEzOS4yMSAyMC40MSAxMzkuMjEgMjAuNDEgOTMuOTIgNjMuNCA5My45MiA2My40IDEzOS4yMSA4My44MSAxMzkuMjEgODMuODEgMjcuNDcgNjMuNCAyNy40NyIvPgogICAgICA8cGF0aCBkPSJNMTQ5LjEzLDEwMy4wOWExNi44OCwxNi44OCwwLDAsMS0zMy43NywwVjU1LjIzSDk2djQ3Ljg2YTM2LjIxLDM2LjIxLDAsMCwwLDcyLjQyLDBWNTUuMjNIMTQ5LjEzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogICAgICA8cGF0aCBkPSJNMjkyLjU3LDYwLjE2YzAtOS44MSw2LjQ5LTEyLjkyLDEzLjYtMTIuOTIsNS43MywwLDEzLjMsNC4zNiwxOC4yNSw5LjY1TDMzNy4xLDQxLjk1Yy02LjMzLTguNTYtMTkuMTctMTQuNDgtMjkuNjgtMTQuNDgtMjEsMC0zNi4xOSwxMi4zLTM2LjE5LDMyLjY5LDAsMzcuODMsNDYuMjQsMjUuODMsNDYuMjQsNDcsMCw2LjUzLTYuMzQsMTIuMy0xMy42LDEyLjMtMTEuNDUsMC0xNS4xNi01LjYtMjAuNDItMTEuNTJsLTE0LjA3LDE0LjYzYzksMTEuMDUsMjAuMSwxNi42NiwzMy40LDE2LjY2LDE5Ljk1LDAsMzYtMTIuNDUsMzYtMzEuOTEsMC00Mi00Ni4yNC0yOC45NS00Ni4yNC00Ny4xNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogICAgICA8cGF0aCBkPSJNNTc4LjYzLDEyMS4zNmMtMTEuNDQsMC0xNC42OS00Ljk1LTE0LjY5LTEyLjUzVjc1LjI4aDE3Ljc4di0xN0g1NjMuOTRWMzUuODVsLTE5LjYzLDguODFWMTEzYzAsMTcuNDgsMTIuMDYsMjYuMjksMjguNiwyNi4yOWEzOS42MiwzOS42MiwwLDAsMCw3Ljc0LS42Mmw0Ljc5LTE3LjYzYy0yLjE2LjE1LTQuNjQuMy02LjgxLjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICAgICAgPHBhdGggZD0iTTIyMi44Miw1NS43OWMtOS41OSwwLTE2LjI4LDIuNzgtMjIuNzUsOS4xM1YyOC4xNEgxODAuNjhWOTYuMzFjMCwyNS41MiwxOC40NSw0MywzOS4xOCw0MywyMywwLDQzLjIzLTE3Ljc5LDQzLjIzLTQxLjc1LDAtMjMuNjYtMTguNjItNDEuNzYtNDAuMjctNDEuNzZtLS4xMiw2NGEyMiwyMiwwLDEsMSwyMi0yMiwyMiwyMiwwLDAsMS0yMiwyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogICAgICA8cGF0aCBkPSJNNDMzLjM2LDk2LjU0YzAtMjQtMjAuMTktNDEuNzUtNDMuMjMtNDEuNzUtMjAuNzMsMC0zOS4xOCwxNy40OC0zOS4xOCw0M1YxNjZoMTkuMzlWMTI5LjE3YzYuNDYsNi4zNCwxMy4xNiw5LjEzLDIyLjc0LDkuMTMsMjEuNjUsMCw0MC4yNy0xOC4wOSw0MC4yNy00MS43Nk00MTUsOTYuM2EyMiwyMiwwLDEsMS0yMi0yMiwyMiwyMiwwLDAsMSwyMiwyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogICAgPC9nPgogICAgPGcgY2xhc3M9ImNscy0zIj4KICAgICAgPHBhdGggZD0iTTQ5Niw1My44NVYzNC4zN2ExNSwxNSwwLDAsMCw4LjY1LTEzLjUydi0uNDVhMTUsMTUsMCwwLDAtMTUtMTVoLS40NWExNSwxNSwwLDAsMC0xNSwxNXYuNDVhMTUsMTUsMCwwLDAsOC42NSwxMy41MlY1My44NWE0Mi40OCw0Mi40OCwwLDAsMC0yMC4yLDguODlMNDA5LjIzLDIxLjEzYTE2Ljc1LDE2Ljc1LDAsMCwwLC42LTQuMjEsMTYuOSwxNi45LDAsMSwwLTE2LjkyLDE2Ljg3LDE2LjcyLDE2LjcyLDAsMCwwLDguMzItMi4yNmw1Mi42MSw0MC45M2E0Mi42MSw0Mi42MSwwLDAsMCwuNjUsNDhsLTE2LDE2YTEzLjc0LDEzLjc0LDAsMCwwLTQtLjY1LDEzLjg4LDEzLjg4LDAsMSwwLDEzLjg5LDEzLjg5LDEzLjcsMTMuNywwLDAsMC0uNjUtNGwxNS44My0xNS44M0E0Mi42OCw0Mi42OCwwLDEsMCw0OTYsNTMuODVtLTYuNTYsNjQuMDZBMjEuOSwyMS45LDAsMSwxLDUxMS4zNiw5NmEyMS45LDIxLjksMCwwLDEtMjEuOSwyMS45IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"
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
