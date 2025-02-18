"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Ads from "@components/Ads";
import Modal from "@components/model";

function Home() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    // Ensures that the component only renders client-side content after hydration
    setIsClient(true);
  }, [isClient]);

  return (


    <div className="flex flex-col gap-6 mx-auto h-max ls:w-[360px] pb-10">
      <div className="flex items-center justify-center font-semibold">
        <img
          alt="Logo"
          className=" w-36 cursor-pointer"
          src="/resources/logo.png"
          onClick={() => router.push("/")}
        />
      </div>



      <div className="flex items-center justify-center px-5  cursor-pointer pt-10">
        <a href="/tools">

          <img src="/resources/buttons/home-btn.png" className="w-full" />
        </a>
      </div>

      <div className="flex items-center justify-center px-5 pt-[8px] cursor-pointer">
        <a href="/elite-booyah-pass">
          <img src="/resources/buttons/elite-home.png" className="w-full" />
        </a>
      </div>

      <div className="flex items-center justify-center px-5 pt-[8px] cursor-pointer">
        <a href="/free-diamonds-coin">
          <img src="/resources/buttons/coin-home.png" className="w-full" />
        </a>
      </div>
      {isClient && (
        <Modal
          outerClassName="border-[1px] border-white"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Ads display={true} data-ad-slot="3246857708" />
        </Modal>
      )}

    </div>



  );
}

export default Home;
