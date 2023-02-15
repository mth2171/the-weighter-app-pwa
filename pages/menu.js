import CommonLayout from "@/layouts/CommonLayout";
import Link from "next/link";

const Menu = () => {
  return (
    <CommonLayout>
      <div className="flex w-full h-[80vh] justify-center items-center bg-neutral-200 text-black flex-col">
        <Link href="/info" className="flex w-3/4 justify-center items-center border-neutral-400 border-[1px] my-4 radius-lg p-4 rounded-xl">
          서비스 소개
        </Link>
        <Link href="/barcode" className="flex w-3/4 justify-center items-center border-neutral-400 border-[1px] my-4 radius-lg p-4 rounded-xl">
          영양소 분석
        </Link>
        <Link href="/motion" className="flex w-3/4 justify-center items-center border-neutral-400 border-[1px] my-4 radius-lg p-4 rounded-xl">
          운동하기
        </Link>
        <Link href="/board" className="flex w-3/4 justify-center items-center border-neutral-400 border-[1px] my-4 radius-lg p-4 rounded-xl">
          고객 지원
        </Link>
      </div>
    </CommonLayout>
  );
};

export default Menu;
