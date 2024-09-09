// components/PackageView.tsx
"use client";
import { Button } from "@nextui-org/button";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

import PackageService from "./packageService";

import { usePackage } from "@/src/app/(front)/package/PackageContext";

const PackageView: React.FC = () => {
  const { listPackage } = PackageService();
  const { selectedPackage, setSelectedPackage } = usePackage(); // Get the setter from context

  const numberFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const handleOrderClick = (item: any) => {
    setSelectedPackage(item); // Set the selected package data in context
    console.log("Item saved to context:", item); // Debugging log
  };

  return (
    <div className="flex flex-col py-10 justify-center items-center">
      <div className="container">
        <div className="text-4xl font-bold text-white text-center">Paket</div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {listPackage?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="border-1 p-5 rounded-lg border-gray-500 flex flex-col justify-center items-center duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="text-2xl font-semibold">{item.name}</div>
                <div className="text-2xl font-bold mt-2">
                  {numberFormat.format(item.price)} / {item.duration} hari
                </div>
                <div className="text-xl mt-4 mb-2">Rincian Paket</div>
                <div className="flex flex-col">
                  {item.DetailPackage?.map(
                    (detail: any, detailIndex: number) => (
                      <div key={detailIndex} className="flex gap-4 my-1">
                        <FaCheck className="mt-1" />
                        <div>{detail.description}</div>
                      </div>
                    ),
                  )}
                </div>

                <Button
                  className="mt-10"
                  color="default"
                  size="lg"
                  variant="bordered"
                  onClick={() => handleOrderClick(item)} // Handle the click event
                >
                  <Link href="/checkout">Pesan Sekarang</Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PackageView;
