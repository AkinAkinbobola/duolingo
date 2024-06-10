import { Button } from "@/components/ui/button";
import Image from "next/image";
import {flags} from "@/constants";

const Footer = () => {
  return (
    <footer
      className={"hidden lg:block h-20 w-full border-t-2 p-2 border-slate-200"}
    >
      <div
        className={
          "max-w-screen-lg mx-auto flex items-center justify-evenly h-full"
        }
      >
        {
          flags.map((flag, id) => (
              <Button size={"lg"} variant={"ghost"} className={"w-full"} key={id}>
                <Image
                    src={flag.path}
                    alt={`${flag.name} Flag`}
                    width={40}
                    height={32}
                    className={"mr-4 rounded-md"}
                />
                {flag.name}
              </Button>
          ))
        }

      </div>
    </footer>
  );
};

export default Footer;
