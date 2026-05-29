"use client"

import { UseQueryString } from "@/hooks/use-querystring";

type Props = {
  groupId: string;
  item: {
    id: string;
    label: string;
  }
}

export const FilterItem = ({ groupId, item }: Props) => {
  const queryString = UseQueryString();

  const toggleFilter = (groupId: string, itemId: string) => {
    const queryGroup = queryString.get(groupId);
    let currentFilter = queryGroup ? queryGroup.split('|') : [];

    if (currentFilter.includes(itemId)) {
      currentFilter = currentFilter.filter(item => item !== itemId);
    } else {
      currentFilter.push(itemId)
    }

    queryString.set(groupId, currentFilter.join('|'));
  }

  const hasFilter = (groupId: string, itemId: string) => {
    let currentFilter = queryString.get(groupId)?.split('|')
    return currentFilter && currentFilter.includes(itemId) ? true : false;
  }

  return (
    <div className="flex gap-4 items-center mt-4">
      <input
        type="checkbox"
        className="size-6"
        id={`ck-${item.id}`}
        onChange={() => toggleFilter(groupId, item.id)}
        checked={hasFilter(groupId, item.id)}
      />
      <label htmlFor={`ck-${item.id}`} className="text-lg text-gray-500">{item.label}</label>
    </div>
  );
}