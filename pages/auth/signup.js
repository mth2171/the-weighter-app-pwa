import EmailAuth from "@/components/modals/EmailAuth";
import CommonLayout from "@/layouts/CommonLayout";
import axios from "axios";
import { useState, useEffect } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [isConfirmEmail, setIsConfirmEmail] = useState(false);
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);

  const [phone, setPhone] = useState("");

  const onClickEmailCheck = () => {
    const reg = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email.match(reg)) {
      axios
        .post("/signup/emailCheck", { email })
        .then((res) => setIsConfirmEmail(res.data))
        .catch((err) => console.error(err));
    } else {
      alert("이메일 형식이 올바르지 않습니다.");
    }
  };

  const onClickSubmit = () => {
    if (firstName && lastName && isConfirmEmail && phone && isConfirmPassword) {
      axios
        .post("/signup/post", { name: firstName + lastName, email, phone, password })
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    } else {
      alert("정보를 다시 확인해 주세요.");
    }
  };

  const onClickEmailAuth = () => {
    setOpen(true);
    axios
      .post("/signup/evf", { email })
      .then((res) => setCode(res.data.sendEvfcode))
      .catch((err) => console.error(err));
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setIsConfirmEmail(false);
    setIsSendEmail(false);
  }, [email]);

  useEffect(() => {
    const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if (password.match(reg) && password === passwordConfirm) {
      setIsConfirmPassword(true);
    } else {
      setIsConfirmPassword(false);
    }
  }, [password, passwordConfirm]);

  return (
    <CommonLayout>
      <div className="flex w-full h-[80vh] justify-center items-center bg-neutral-200 text-black flex-col">
        <label className="flex text-3xl">회원가입</label>
        <div className="flex w-3/4 flex-row mt-10">
          <input
            className="flex w-1/2 h-12 mr-2 bg-white border-neutral-400 border-[1px] px-3 rounded-xl"
            placeholder="성"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="flex w-1/2 h-12 ml-2 bg-white border-neutral-400 border-[1px] px-3 rounded-xl"
            placeholder="이름"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex w-3/4 mt-4">
          <input
            className="flex w-3/4 h-12 bg-white border-neutral-400 border-y-[1px] border-l-[1px]  px-3 rounded-l-xl"
            placeholder="이메일"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <button className="flex w-1/4 h-12 text-white justify-center items-center bg-button rounded-r-xl" onClick={() => onClickEmailCheck()}>
            확인
          </button>
        </div>
        <div className="flex w-3/4 justify-end mt-2">
          {isConfirmEmail && isSendEmail ? (
            <label className="text-blue-500">이메일이 확인되었습니다.</label>
          ) : isConfirmEmail ? (
            <div className="flex w-full justify-end items-center">
              <label className="text-green-500">사용가능한 이메일입니다.</label>
              <button className="flex w-1/3 h-8 bg-button text-white ml-2 justify-center items-center rounded-xl" onClick={() => onClickEmailAuth()}>
                이메일 인증
              </button>
            </div>
          ) : (
            <label className="text-red-500">이메일을 확인해주세요</label>
          )}
        </div>
        <input
          className="flex w-3/4 h-12 bg-white border-neutral-400 border-[1px] px-3 rounded-xl mt-2"
          placeholder="전화번호"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="flex w-3/4 h-12 bg-white border-neutral-400 border-[1px] px-3 rounded-xl mt-4"
          placeholder="비밀번호"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex w-3/4 items-end mt-2 flex-col">
          <label className="text-neutral-400">8 - 14자 사이 입력 (0-9, a-z, A-Z)</label>
          <label className="text-neutral-400">특수 문자 필요 (!, @, #, $, %)</label>
        </div>
        <input
          className="flex w-3/4 h-12 bg-white border-neutral-400 border-[1px] px-3 rounded-xl mt-2"
          placeholder="비밀번호 확인"
          type="password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <div className="flex w-3/4 justify-end mt-2">
          {isConfirmPassword ? (
            <label className="text-blue-500">비밀번호가 일치합니다.</label>
          ) : (
            <label className="text-red-500">비밀번호가 일치하지 않습니다.</label>
          )}
        </div>
        <button className="flex w-1/3 h-12 bg-button justify-center items-center text-white rounded-xl mt-4" onClick={() => onClickSubmit()}>
          계정 생성
        </button>
        <EmailAuth open={open} email={email} onClose={onClose} setIsSendEmail={setIsSendEmail} code={code} />
      </div>
    </CommonLayout>
  );
};

export default Signup;
