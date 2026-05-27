import { Banners } from "@/components/home/banners";
import { MostSoldProducts } from "@/components/home/most-sold-products";
import { MostViewedProducts } from "@/components/home/most-viewed-products";
import { ProductListSkeleton } from "@/components/home/product-list-skeleton";
import { data } from "@/data";
import Image from "next/image";
import { Suspense } from "react";

const features = [
  {
    image: "truck-line.png",
    label: "Frete Grátis",
    description: "Para todo o Nordeste.",
  },
  {
    image: "discount-percent-line.png",
    label: "Muitas ofertas",
    description: "Ofertas imbatíveis.",
  },
  {
    image: "arrow-left-right-line.png",
    label: "Troca fácil",
    description: "No período de 30 dias.",
  },
];

type Props = {
  image: string;
  label: string;
  description: string;
}

const FeatureCard = ({ image, label, description }: Props) => {
  return (
    <div className="flex flex-1 py-6 border border-gray-200 rounded-sm mt-6 md:mt-12">
      <div className="w-32 border-r border-gray-200 flex justify-center items-center">
        <Image
          src={`/assets/ui/${image}`}
          alt={label}
          width={40}
          height={40}
        />
      </div>
      <div className="flex-1 pl-8">
        <div className="font-bold text-xl">{label}</div>
        <div className="text-gray-500 text-sm">{description}</div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div className="">
      <Banners list={data.banners} />
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {features.map((item, index) => (
          <FeatureCard
            key={index}
            image={item.image}
            label={item.label}
            description={item.description}
          />
        ))}
      </div>

      <Suspense fallback={<ProductListSkeleton />}>
        <MostViewedProducts />
      </Suspense>
      <Suspense fallback={<ProductListSkeleton />}>
        <MostSoldProducts />
      </Suspense>
    </div>
  )
}
