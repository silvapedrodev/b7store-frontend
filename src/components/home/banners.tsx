"use client"

import { Banner } from "@/types/banner";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";

type Props = {
  list: Banner[]
}

let bannerTimer: ReturnType<typeof setTimeout>;
let bannerTime = 3000;

export const Banners = ({ list }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(currentImage => {
      if (currentImage + 1 >= list.length) {
        return 0;
      } else {
        return currentImage + 1;
      }
    })
  }

  const handleBannerClick = (index: SetStateAction<number>) => {
    setCurrentImage(index);
    clearInterval(bannerTimer);
    bannerTimer = setInterval(nextImage, bannerTime);
  }

  useEffect(() => {
    bannerTimer = setInterval(nextImage, bannerTime);
    return () => clearInterval(bannerTimer);
  }, [])

  return (
    <div>
      <div className="relative aspect-3/1">
        {list.map((banner, index) => (
          <Link
            key={index}
            href={banner.link}
            className="transition-all absolute inset-0"
            style={{ opacity: currentImage === index ? 1 : 0 }}
          >
            <Image
              src={banner.img}
              alt=""
              width={1200}
              height={400}
              className="rounded-sm"
              priority={index === 0}
            />
          </Link>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-4">
        {list.map((banner, index) => (
          <div
            key={index}
            className="size-3 bg-blue-600 rounded-full cursor-pointer"
            style={{ opacity: currentImage === index ? 1 : 0.3 }}
            onClick={() => handleBannerClick(index)}
          >
          </div>
        ))}
      </div>
    </div>
  );
}