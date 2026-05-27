"use client"

import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
  icon: string;
  label?: string;
  onClick?: () => void
}

export const FooterButton = ({ href, icon, label, onClick }: Props) => {
  const content = (
    <div className="flex items-center gap-4 border border-gray-700 rounded-sm p-4 hover:bg-blue-950/60 cursor-pointer">
      <Image
        src={icon}
        alt=""
        width={24}
        height={24}
      />
      {label &&
        <p className="flex-1">{label}</p>
      }
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block w-full">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick}>
      {content}
    </button>
  )
}