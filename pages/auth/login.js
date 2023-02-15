import CommonLayout from "@/layouts/CommonLayout";
import Link from "next/link";

const Login = () => {
  return (
    <CommonLayout>
      <label className="flex text-3xl">로그인</label>
      <input className="flex w-3/4 h-12 bg-white px-3 rounded-xl border-neutral-400 border-[1px] mt-10" placeholder="이메일" />
      <input className="flex w-3/4 h-12 bg-white px-3 rounded-xl border-neutral-400 border-[1px] mt-4" placeholder="비밀번호" />
      <label className="flex w-3/4 justify-end text-neutral-400 mt-2">비밀번호를 잊으셨나요?</label>
      <button className="flex w-1/3 h-12 bg-button justify-center items-center text-white rounded-xl mt-2">로그인</button>
      <label className="flex w-3/4 justify-center text-neutral-400 mt-4">
        계정이 존재하지 않나요?
        <Link href="./signup">
          <label className="text-button ml-2">계정 만들기</label>
        </Link>
      </label>
    </CommonLayout>
  );
};

export default Login;
