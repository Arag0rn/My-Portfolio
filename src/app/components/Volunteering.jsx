"use client";
import React, { useState } from "react";
import Image from "next/image";

import { useTranslations } from 'next-intl';



const VolunteeringSection = () => {
const t = useTranslations("Volunteering");

  return (
    <section className="text-white mt-[60px]" id="volunteering">
        <h2 className="text-4xl font-bold text-white mb-4 text-center ">{t("title")}</h2>
        <h3 className="text-xl font-bold text-white mb-4 text-center ">Apr 2022 - Jun 2022</h3>

<div className="md:grid md:grid-cols-2 gap-8 justify-center items-center py-8 px-4 xl:gap-16">
  <Image src="/V/WCK-Full-Horizontal-Color-L.png" alt="Word Ctntral Logo" width={500} height={300} />
  <p className="align-middle">{t("text")}</p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 col-span-2 mt-4 md:mt-0">
  <Image className="w-full max-w-[400px] mx-auto" src="/V/11.jpg" alt="11" width={500} height={300} />
  <Image className="w-full max-w-[400px] mx-auto" src="/V/111.jpg" alt="111" width={500} height={300}/>
  <Image className="w-full max-w-[400px] mx-auto" src="/V/1111.jpg" alt="1111" width={500} height={300}/>
  <Image className="w-full max-w-[400px] mx-auto" src="/V/11111.jpg" alt="11111" width={500} height={300}/>
  <Image className="w-full max-w-[400px] mx-auto" src="/V/1.jpg" alt="1" width={500} height={300}/>
</div>
</div>
    </section>
  );
};

export default VolunteeringSection;