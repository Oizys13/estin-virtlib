'use client'
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from 'react';




const Login: NextPage = () => {
  const router = useRouter();

  const { status, data: session } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      router.push('/main'); 
    }
  }, [status,router]);
  return (
    <div className="w-full h-screen  relative bg-white overflow-hidden flex flex-row items-start justify-between py-2.5 pl-[214px] pr-[9px] box-border leading-[normal] tracking-[normal] gap-5 text-center text-21xl text-gray-500 font-montserrat mq900:pl-[53px] mq900:box-border mq1300:pl-[107px] mq1300:box-border mq1650:flex-wrap">

      <div className="h-screen w-[464px] flex flex-col items-start justify-start pt-[100px] px-0 pb-0 box-border min-w-[464px] max-w-full mq900:pt-[73px] mq900:box-border mq900:min-w-full mq450:h-auto mq1300:pt-[113px] mq1300:box-border mq1650:flex-1">
        <div className="self-stretch flex flex-col items-center justify-start gap-[217px] max-w-full shrink-0 mq450:gap-[108px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[98px] max-w-full mq450:gap-[49px]">
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-[26px] box-border gap-[7px] max-w-full">
              <h1 className="m-0 h-[49px] relative text-inherit tracking-[0.03em] uppercase font-bold font-[inherit] inline-block max-w-full mq900:text-13xl mq450:text-[24px]">
                Welcome back
              </h1>
              <div className="self-stretch relative text-xl leading-[26px] text-darkgray-100 mq450:text-base mq450:leading-[21px]">
                Sign in to continue to your Digital Library
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[38px] max-w-full text-left text-lg text-small-title mq450:gap-[19px]">
              <div className="self-stretch flex flex-col items-center justify-start gap-6 max-w-full">
                <button onClick={() => signIn('google')} className="bg-[#F6FBFF] rounded-lg bg-ghostwhite border-stroke border-[1px] border-solid flex flex-row items-center justify-center py-4 px-[47px] gap-[23px] whitespace-nowrap mq450:pl-[23px] mq450:pr-[23px] mq450:box-border">
                  <img
                    className="h-[31px] w-[31px] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <div className="relative tracking-[0.01em] leading-[100%] font-medium ">
                    Connexion avec Google @estin.dz
                  </div>
                </button>
                <div className="w-[388px] flex flex-row items-center justify-center py-2.5 px-0 box-border gap-4 max-w-full text-center text-base text-darkgray-500 font-roboto">
                  <div className="h-px w-[119px] relative border-gainsboro-400 border-t-[1px] border-solid box-border shrink-0" />
                  <div className="relative tracking-[0.01em] leading-[100%] shrink-0">
                    or sign in with email
                  </div>
                  <div className="h-px w-[119px] relative border-gainsboro-400 border-t-[1px] border-solid box-border shrink-0" />
                </div>
              </div>
              <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[53px] max-w-full mq450:gap-[26px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-1">
                    <div className="self-stretch relative text-xl tracking-[0.01em] font-medium font-montserrat text-small-title text-left mq450:text-base">
                      Utilisateur
                    </div>
                    <input
                      className="px-[20px] border-stroke border-[1px] border-solid [outline:none] bg-[transparent] self-stretch h-[63px] rounded-lg box-border min-w-[250px]"
                      type="text"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-1">
                    <div className="self-stretch relative text-xl tracking-[0.01em] font-medium font-montserrat text-small-title text-left mq450:text-base">
                      Mot de passe
                    </div>
                    <div className="self-stretch rounded-lg border-stroke border-[1px] border-solid flex items-center py-[21px] px-3.5 relative">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full h-full bg-transparent border-none outline-none pr-10"
                      />
                      <img
                        className="h-[17px] w-5 absolute right-3 top-1/2 transform -translate-y-1/2"
                        alt=""
                        src="/input-icon.svg"
                      />
                    </div>

                    <div className="relative text-base [text-decoration:underline] leading-[100%] font-montserrat text-dimgray-600 text-left">
                      Forgot password?
                    </div>
                  </div>


                </div>
                <div className="w-[421px] hidden flex-row items-center justify-between py-0 pl-0 pr-px box-border min-h-[63px] gap-5 max-w-full mq450:flex-wrap">
                  <div className="h-14 w-[147px] flex flex-row items-center justify-start py-5 px-0 box-border gap-2">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                      alt=""
                      src="/checkbox--default.svg"
                    />
                    <div className="self-stretch flex-1 relative text-base leading-[100%] font-montserrat text-dimgray-600 text-left">
                      Remember me
                    </div>
                  </div>
                  <a href="" className="w-36 relative text-base [text-decoration:underline] leading-[100%] font-montserrat text-dimgray-600 text-center inline-block">
                    Forgot password?
                  </a>
                </div>
                <button
                  className="bg-[#fa7d55] text-white cursor-pointer [border:none] py-[21.5px] px-4 bg-main self-stretch rounded-lg flex flex-row items-center justify-center box-border max-w-full hover:bg-chocolate"

                >

                  Connexion

                </button>
              </form>
            </div>
          </div>
          <div className="self-stretch relative text-base tracking-[0.01em] leading-[100%] font-roboto text-lightslategray">
            © 2024 ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
      <img
        className="w-[956px] relative rounded-[28px] h-full object-cover max-w-full mq1650:flex-1"
        loading="lazy"
        alt=""
        src="/unsplashhh4wbgnyltc@2x.png"
      />
    </div>
  );
};

export default Login;
