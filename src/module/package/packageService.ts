import { useEffect, useState } from "react";

import { getDataPackage } from "@/src/repository/package/packageRepository";

export interface packageType {
  id: number;
  name: string;
  price: number;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  DetailPackage: DetailPackage[];
}

export interface DetailPackage {
  id: number;
  packageId: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}

const PackageService = () => {
  const [listPackage, setListPackage] = useState<packageType[] | null>();

  const getPackage = async () => {
    const resp = await getDataPackage();

    console.log(resp);
    setListPackage(resp.data);
  };

  useEffect(() => {
    getPackage();
  }, []);

  return {
    listPackage,
    setListPackage,
  };
};

export default PackageService;
