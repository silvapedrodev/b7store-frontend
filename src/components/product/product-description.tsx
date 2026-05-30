"use client"

import Image from "next/image";
import { useState } from "react";

type Props = {
  text: string;
}

export const ProductDescription = ({ text }: Props) => {
  const [opened, setOpened] = useState(true);

  return (
    <div className="bg-white border border-gray-200 px-7 md:px-10 mt-10 md:mt-20 rounded-sm">
      <div className={`flex justify-between items-center py-6 md:py-10 ${opened ? 'border-b' : 'border-0'} border-gray-200`}>
        <div className="font-medium text-base md:text-2xl">Informações do produto</div>
        <div
          onClick={() => setOpened(prev => !prev)}
          className="size-12 md:size-14 border border-gray-200 flex justify-center items-center rounded-sm cursor-pointer"
        >
          <Image
            src={'/assets/ui/arrow-left-s-line.png'}
            alt=""
            width={24}
            height={24}
            className={`${opened ? 'rotate-0' : 'rotate-180'} transition-all`}
          />
        </div>
      </div>
      {opened &&
        <div className="text-gray-500 my-8 md:my-12">
          {text}
        </div>
      }
    </div>
  );
}