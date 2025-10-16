"use client";
import toast, { Toaster } from "react-hot-toast";
import welcome from "@/lottie/welcome.json";
import { useState } from "react";
import Lottie from "react-lottie-player";
import { iranPhoneRegex } from "@/helper/rejex";

function LoginModal() {
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>("");
  const [sendCode, setSendCode] = useState<boolean>(false);

  const sendCodeHandler = () => {
    if (!userPhoneNumber) {
      toast.error("شماره تلفن را وارد کنید");
    }
    if (iranPhoneRegex.test(userPhoneNumber)) {
      setSendCode(true);
    } else {
      toast.error("فرمت شماره صحیح نیست !");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white pt-2 pb-8">
      <h2 className="text-titleColor mr-2 font-medium">
        به{" "}
        <span className="text-mainbg mx-2 font-sans text-lg font-semibold">
          گـــرمه جـــا
        </span>{" "}
        خوش اومدی
      </h2>
      <div>
        <Lottie
          animationData={welcome}
          loop
          play
          style={{
            width: 200,
            height: 150,
            cursor: "pointer",
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <label className="text-titleColor text-sm font-medium" htmlFor="number">
          برای ادامه شماره تلفنتو بزن !
        </label>
        <input
          id="number"
          type="number"
          placeholder="مثال : 091212345678"
          value={userPhoneNumber}
          onChange={(e) => setUserPhoneNumber(e.target.value)}
          className="border-mainbg text-titleColor rounded-lg border-2 px-2 py-1 text-center placeholder:text-center placeholder:text-sm focus:outline-none"
        />
      </div>
      <button
        onClick={() => sendCodeHandler()}
        className="bg-mainbg rounded-lg px-2 py-2 text-sm font-medium text-white disabled:opacity-55"
        disabled={!userPhoneNumber}
      >
        ارسال کد
      </button>

      <Toaster />
    </div>
  );
}

export default LoginModal;
