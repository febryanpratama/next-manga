// "use client"
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { getDataKomik } from "@/src/repository/home/komikRepository";

const HomeService = () => {
  const [komik, setKomik] = useState<any>([]);
  const [embla] = useEmblaCarousel({ loop: true }, [Autoplay()]);

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
    embla,
  };
};

export default HomeService;
