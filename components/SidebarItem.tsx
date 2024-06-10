"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};
const SidebarItem = ({ label, iconSrc, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <div>
      <Button
        variant={active ? "sidebarOutline" : "sidebar"}
        className={"justify-start h-[52px] w-full"}
        asChild
      >
        <Link href={href} className={"flex items-center gap-5"}>
          <Image
            src={iconSrc}
            alt={label}
            width={32}
            height={32}
          />
          <p>{label}</p>
        </Link>
      </Button>
    </div>
  );
};

export default SidebarItem;
