import CommonLayout from "@/layouts/CommonLayout";
import { useState } from "react";
import INFO_MESSAGE from "@/constants/INFO_MESSAGE";
import info1 from "@/public/info1.png";
import info2 from "@/public/info2.png";
import info3 from "@/public/info3.png";
import Image from "next/image";

const Info = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onClickImage = (number) => {
    setTitle(INFO_MESSAGE[number].title);
    setDescription(INFO_MESSAGE[number].description);
  };

  return (
    <CommonLayout>
      <div className="flex w-3/4 flex-row">
        <Image src={info1} alt="info1" width={100} height={100} className="rounded-l-xl" onClick={() => onClickImage(0)} />
        <Image src={info2} alt="info2" width={100} height={100} onClick={() => onClickImage(1)} />
        <Image src={info3} alt="info3" width={100} height={100} className="rounded-r-xl" onClick={() => onClickImage(2)} />
      </div>
      <div className="flex w-4/5 bg-neutral-400 min-h-[50] items-center p-4 text-xl mt-4 rounded-t-xl">{title}</div>
      <div className="flex w-4/5 min-h-[50] bg-white items-center p-4 text-md border-neutral-400 border-[1px] rounded-b-xl">{description}</div>
    </CommonLayout>
  );
};

export default Info;
