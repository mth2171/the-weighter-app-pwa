import { Modal, Box } from "@mui/material";
import { useState } from "react";

const EmailAuth = ({ open, onClose, email, code, setIsSendEmail }) => {
  const [inputCode, setInputCode] = useState("");
  const onClickAuth = () => {
    if (code === inputCode) {
      setIsSendEmail(true);
      alert("인증되었습니다.");
      onClose();
    } else {
      alert("인증코드가 잘못되었습니다.");
      onClose();
    }
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="absolute top-1/3 left-[12.5%] w-3/4 h-1/3 bg-white border-black border-2 rounded-xl">
        <div className="flex w-full h-full justify-center items-center flex-col">
          <div className="flex w-[90%] h-1/3 border-black border-b-2 justify-center items-center flex-col">
            <label className="text-blue-500">{email}</label>
            <label className="text-black">메일 주소로 확인 코드를 발송했습니다.</label>
          </div>
          <input className="flex w-3/4 h-12 border-neutral-400 border-[1px] px-3 rounded-xl mt-4 bg-white text-black" placeholder="인증 코드" onChange={(e) => setInputCode(e.target.value)}/>
          <div className="flex w-3/4 mt-4">
            <button className="flex w-1/2 h-12 bg-neutral-400 justify-center items-center mr-1 rounded-xl text-white" onClick={() => onClose()}>
              닫기
            </button>
            <button className="flex w-1/2 h-12 bg-button justify-center items-center ml-1 rounded-xl text-white" onClick={() => onClickAuth()}>
              인증
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default EmailAuth;
