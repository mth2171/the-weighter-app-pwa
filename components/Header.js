import logo from "@/public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="flex w-full h-[10vh] justify-between items-center border-b-2 border-button bg-white">
      <Link href="/" className="my-2 ml-2">
        <Image src={logo} alt="logo" width={70} height={70} />
      </Link>
      <Link href="menu" className="w-16 h-16 my-2 mr-2 text-button">
        <Bars3Icon className="w-16 h-16" />
      </Link>
    </div>
  );
};

export default Header;
