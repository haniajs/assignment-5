import React from "react";
import Image from "next/image";
import Header from "@/components/header/Header";

export default function HomePage () {
  return (
    <main>
      <Header></Header>

        <section className="flex gap-6 items-center">

          <div className="flex-1 m-12">
            <h1 className="w-[496px] h-[189px] ml-[176] mt-[90px] font-bold text-[40px] leading-[65.8px]">
              IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1><br />

            <p className="w-[902px] h-[147px] ml-[176] font-medium text-[30px] leading-[49.35px] text-[#787054]">
              An example of intricate workmanship and detail, elegant
               necklaces and long and short chains form a part of our
                desirable collection.</p>

            <button className="w-[288px] h-[58px] ml-[176px] rounded-[10px]
             p-[10px] bg-[#A29875] font-medium text-[#FFFFFF] text-[30px] leading-[37.5px]">
              Explore Now</button>
          </div>

          <div className="flex-1 mt-12">
            <Image src={"/images/jewellary.png"} alt="jewellary_image" width={462} height={647}/>
          </div>
        </section>

    </main>
  )
}