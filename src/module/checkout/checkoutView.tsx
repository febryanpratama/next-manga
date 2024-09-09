import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React from "react";
import Image from "next/image";

import useCheckoutService from "./checkoutService";

import { usePackage } from "@/src/app/(front)/package/PackageContext";

const CheckoutView = () => {
  const { selectedPackage } = usePackage(); // Get the selected package data from context

  const {
    // listPaymentChannel,
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
    paymentMethod,
    setPaymentMethod,
    packageId,
    setPackageId,
    isCombine,
    setIsCombine,
    isMatch,
    setIsMatch,
    submit,
    checkEmail,
    checkUsername,
    funcCheckEmail,
    funcCheckUsername,
  } = useCheckoutService();

  const listPaymentChannel = [
    {
      group: "Virtual Account",
      code: "BNIVA",
      name: "BNI Virtual Account",
      type: "direct",
      fee_merchant: {
        flat: 0,
        percent: 0,
      },
      fee_customer: {
        flat: 4250,
        percent: 0,
      },
      total_fee: {
        flat: 4250,
        percent: "0.00",
      },
      minimum_fee: null,
      maximum_fee: null,
      minimum_amount: 10000,
      maximum_amount: 10000000,
      icon_url:
        "https://assets.tripay.co.id/upload/payment-icon/n22Qsh8jMa1583433577.png",
      active: true,
    },
    {
      group: "Virtual Account",
      code: "BRIVA",
      name: "BRI Virtual Account",
      type: "direct",
      fee_merchant: {
        flat: 0,
        percent: 0,
      },
      fee_customer: {
        flat: 4250,
        percent: 0,
      },
      total_fee: {
        flat: 4250,
        percent: "0.00",
      },
      minimum_fee: null,
      maximum_fee: null,
      minimum_amount: 10000,
      maximum_amount: 10000000,
      icon_url:
        "https://assets.tripay.co.id/upload/payment-icon/8WQ3APST5s1579461828.png",
      active: true,
    },
    {
      group: "Virtual Account",
      code: "BCAVA",
      name: "BCA Virtual Account",
      type: "direct",
      fee_merchant: {
        flat: 5500,
        percent: 0,
      },
      fee_customer: {
        flat: 0,
        percent: 0,
      },
      total_fee: {
        flat: 5500,
        percent: "0.00",
      },
      minimum_fee: null,
      maximum_fee: null,
      minimum_amount: 10000,
      maximum_amount: 10000000,
      icon_url:
        "https://assets.tripay.co.id/upload/payment-icon/ytBKvaleGy1605201833.png",
      active: true,
    },
    {
      group: "E-Wallet",
      code: "QRISC",
      name: "QRIS (Customizable)",
      type: "direct",
      fee_merchant: {
        flat: 750,
        percent: 0.7,
      },
      fee_customer: {
        flat: 0,
        percent: 0,
      },
      total_fee: {
        flat: 750,
        percent: "0.70",
      },
      minimum_fee: null,
      maximum_fee: null,
      minimum_amount: 1000,
      maximum_amount: 5000000,
      icon_url:
        "https://assets.tripay.co.id/upload/payment-icon/m9FtFwaBCg1623157494.png",
      active: true,
    },
  ];

  const numberFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // const regex = new RegExp('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/');

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    const isValid = regex.test(password);

    setIsCombine(isValid);
  };

  const checkPasswordMatch = (password: string, confirmation: string) => {
    setIsMatch(password === confirmation);
  };

  // console.log(selectedPackage);
  if (!selectedPackage) {
    return <div>No package selected. Please go back and select a package.</div>;
  }

  return (
    <div className="flex flex-col px-5 py-10 justify-center items-center">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3 border-1 border-gray-500 rounded-t-2xl">
            <div className="relative">
              <div className="absolute top-0 flex w-full h-5 rounded-t-2xl bg-blue-600 justify-center">
                {/* <div className='text-2xl font-bold text-center'>Checkout</div>
                                <div className='text-xl font-semibold mt-4'>Informasi Pengiriman</div> */}
              </div>
              <div className="py-10 px-20">
                <div className="text-2xl font-bold text-center text-violetgradient">
                  Detail Paket
                </div>
                <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-evenly">
                  {/* <div className={`text-xl font-semibold mt-4`}>Monthly</div>
                                    <div className='text-xl font-semibold mt-4'>Rp. 25.000</div> */}
                  <div className={`text-xl font-semibold mt-4`}>
                    {selectedPackage?.name}
                  </div>
                  <div className="text-xl font-semibold mt-4">
                    {numberFormat.format(Number(selectedPackage?.price))}
                  </div>
                </div>
                <hr className="my-8 border-violetgradient" />
                <div className="text-2xl font-bold text-center text-violetgradient">
                  Informasi Akun
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                  <Input
                    color={checkEmail ? "success" : "danger"}
                    label="Email"
                    type="email"
                    value={email}
                    variant="bordered"
                    onChange={(e) => {
                      setEmail(e.target.value), funcCheckEmail();
                    }}
                  />
                  <Input
                    color={checkUsername ? "success" : "danger"}
                    label="Username"
                    type="text"
                    value={username}
                    variant="bordered"
                    onChange={(e) => {
                      setUsername(e.target.value);
                      funcCheckUsername();
                    }}
                  />
                  <div>
                    <Input
                      color={isCombine ? "success" : "danger"}
                      label="Password"
                      type="password"
                      value={password}
                      variant="bordered"
                      onChange={(e) => {
                        setPassword(e.target.value);
                        validatePassword(e.target.value);
                      }}
                    />
                    {isCombine ? (
                      <div className="text-sm text-success">
                        Password Kombinasi
                      </div>
                    ) : (
                      <div className="text-sm text-danger">
                        Password harus mengandung huruf besar, huruf kecil,
                        angka, dan karakter spesial
                      </div>
                    )}
                  </div>
                  <div>
                    <Input
                      color={isMatch ? "success" : "danger"}
                      label="Re-Password"
                      type="password"
                      value={passwordConfirmation}
                      variant="bordered"
                      onChange={(e) => {
                        checkPasswordMatch(password, e.target.value);
                        setPasswordConfirmation(e.target.value);
                      }}
                    />
                    {isMatch ? (
                      <div className="text-sm text-success">Password Cocok</div>
                    ) : (
                      <div className="text-sm text-danger">
                        Password tidak cocok
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-10">
                  <Button
                    color="primary"
                    size="lg"
                    variant="ghost"
                    onClick={() => {
                      submit();
                    }}
                  >
                    Pesan Sekarang
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative  flex flex-col border-1 border-gray-500 rounded-2xl bg-opacity-5">
            <div className="absolute top-0 flex w-full h-5 rounded-t-2xl z-40 bg-blue-600 justify-center" />
            <div className="overflow-auto lg:col-span-1 h-96 hide-scrollbar">
              {/* Input Column */}
              <div className="py-10 px-5 flex-grow">
                {/* <div className='text-2xl font-bold text-center'>Checkout</div> */}
                <div className="text-xl font-semibold text-violetgradient mt-4">
                  Metode Pembayaran
                </div>
                {listPaymentChannel.map((item: any, index: number) => (
                  // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
                  <div
                    key={index}
                    className={`border-1 border-gray-500 rounded-3xl px-3 py-4 flex justify-start gap-4 my-4 ${item.code == paymentMethod ? "bg-blue-600" : ""}`}
                    onClick={() => {
                      setPaymentMethod(item.code);
                    }}
                  >
                    <div className="flex flex-col justify-center items-center">
                      <Image
                        alt=""
                        className="bg-white p-1 rounded-xl"
                        height={100}
                        objectFit="contain"
                        src={item.icon_url}
                        width={80}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{item.name}</div>
                      <div className="text-sm">
                        Biaya Admin: {item.total_fee.flat}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutView;
