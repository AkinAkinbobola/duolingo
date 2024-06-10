import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "@/components/SidebarItem";
import { sidebarItems } from "@/constants";
import { ClerkLoaded, ClerkLoading, SignOutButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 flex flex-col lg:border-r-2",
        className,
      )}
    >
      <Link href={"/learn"}>
        <div className={"pt-8 pl-4 pb-7 flex items-center gap-x-3"}>
          <Image
            src={"/icons/favicon.svg"}
            alt={"Mascot"}
            width={40}
            height={40}
          />
          <h1 className={"text-2xl font-bold text-green-600 tracking-wide"}>
            Duolingo
          </h1>
        </div>
      </Link>

      <div className={"flex flex-col gap-y-2 flex-1"}>
        {sidebarItems.map((item, i) => (
          <SidebarItem
            key={i}
            label={item.label}
            href={item.href}
            iconSrc={item.iconSrc}
          />
        ))}
      </div>

      <div className={"p-4"}>
        <ClerkLoading>
          <Loader className={"h-5 w-5 text-muted-foreground animate-spin"} />
        </ClerkLoading>

        <ClerkLoaded>
          <SignOutButton redirectUrl={"/"}>
            <Button
              size={"lg"}
              variant={"danger"}
              className={"justify-start h-[52px] w-full"}
            >
              Sign out
            </Button>
          </SignOutButton>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
