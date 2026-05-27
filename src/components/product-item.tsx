"use client"

import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  data: Product;
}

export const ProductItem = ({ data }: Props) => {
  const link = `/product/${data.id}`

  const [linked, setLinked] = useState(data.liked)

  const toggleLiked = () => {
    setLinked(prev => !prev);
  }

  return (
    <div className="bg-white border border-gray-200 rounded-sm p-6">
      <div className="flex justify-end">
        <div onClick={toggleLiked} className="size-12 border border-gray-200 rounded-s flex justify-center items-center cursor-pointer">
          {linked ? (
            <Image
              src={'/assets/ui/heart-3-fill.png'}
              alt="favoritado"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src={'/assets/ui/heart-3-line.png'}
              alt="favoritado"
              width={24}
              height={24}
            />
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <Link href={link}>
          <Image
            src={data.image}
            alt={data.label}
            width={200}
            height={200}
            className="w-auto h-48"
          />
        </Link>
      </div>
      <div className="mt-9 text-lg font-medium">
        <Link href={link}>{data.label}</Link>
      </div>
      <div className="text-2xl font-semibold text-blue-600 mt-3">
        <Link href={link}>
          R$ {data.price.toFixed(2)}
        </Link>
      </div>
      <div className="mt-5 text-base text-gray-400">Em até 12x sem juros.</div>
    </div>
  )
}