import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <div className="flex w-full h-[10vh] justify-end items-center flex-row bg-button">
      <Link href="/auth/login" className="w-12 h-12 mr-4 text-white">
        <UserIcon />
      </Link>
    </div>
  );
};

export default Footer;
