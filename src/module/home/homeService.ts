"use client"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { login, register } from "@/src/repository/auth/authRepository";
import { getDataKomik } from "@/src/repository/home/komikRepository";

const HomeService = () => {
    const [komik, setKomik] = useState<any>([]);

    const getKomik = async () => {
        const resp = await getDataKomik(1);

        if (resp === null) {
            return null;
        }
        // console.log(resp);
        setKomik(resp);
    }

    useEffect(() => {
        getKomik();
    }, []);
        

    console.log(komik);
  return {
    komik,
    setKomik,
    // notify,
  };
};

export default HomeService;
