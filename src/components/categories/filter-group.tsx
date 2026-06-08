"use client"

import Image from "next/image";
import { FilterItem } from "./filter-item";
import { useState } from "react";
import { CategoryMetadataValue } from "@/types/category";

type Props = {
  id: string;
  name: string;
  values: CategoryMetadataValue[];
}

export const FilterGroup = ({ id, name, values }: Props) => {
  const [opened, setOpened] = useState(true);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div className="flex-1 font-medium text-xl">{name}</div>
        <div onClick={() => setOpened(prev => !prev)} className="size-8 flex justify-center items-center cursor-pointer">
          <Image
            src={'/assets/ui/arrow-left-s-line.png'}
            alt=""
            width={24}
            height={24}
            className={`${opened ? 'rotate-0' : 'rotate-180'} transition-all`}
          />
        </div>
      </div>
      <div className={`overflow-y-hidden ${opened ? 'max-h-96' : 'max-h-0'} transition-all`}>
        {values.map(item => (
          <FilterItem
            key={item.id}
            groupId={id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}