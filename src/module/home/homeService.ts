// "use client"
import { useEffect, useState } from "react";

import { getDataKomik } from "@/src/repository/home/komikRepository";

const HomeService = () => {
  const [komik, setKomik] = useState<any>([]);

  const getKomik = async () => {
    const resp = await getDataKomik(1);

    if (resp === null) {
      return null;
    }
    // console.log(resp);
    setKomik(resp.result.listData);
  };

  useEffect(() => {
    getKomik();
  }, []);

  return {
    komik,
    setKomik,
    // notify,
  };
};

export default HomeService;
