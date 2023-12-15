"use client";
import React from "react";
import { navbar as Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <img
          src="/assets/images/Home/homepage_1.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "120%", height: "10%" }} // optional
          alt="Kimetsu No Yaiba"
        />
        <div className="absolute text-[#15141F] w-2/5 py-5">
          <div className="grid-col">
            <div className="py-10 flex-col">
              <p className="text-4xl font-bold">KIMETSU NO YAIBA</p>
              <p>鬼滅の刃</p>
              <p className="pt-5">
                Kimetsu no Yaiba ( terj. har. "Korps Pembasmi Iblis" [4] ), yang
                diterbitkan di Indonesia dengan judul Demon Slayer: Kimetsu no
                Yaiba, adalah sebuah seri manga Jepang yang ditulis dan
                diilustrasikan oleh Koyoharu Gotōge. Ceritanya mengisahkan tentang
                Tanjiro Kamado, seorang anak laki-laki yang menjadi pembasmi iblis
                setelah keluarganya dibantai oleh iblis dan adik perempuannya yang
                bernama Nezuko diubah menjadi iblis.
              </p>
            </div>
            <div>button</div>
          </div>
          <img src="/assets/images/Home/BannerKNY.png" alt="gambar" />
        </div>
      </div>
      <Footer />
    </>
  );
}