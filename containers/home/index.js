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


    <div className="flex  flex-col gap-6 px-5 mx-auto h-max ls:w-[360px] pb-10">
      <div className="flex items-center justify-center font-semibold">
        <img
          alt="Logo"
          className=" w-36 cursor-pointer"
          src="/resources/logo.png"
          onClick={() => router.push("/")}
        />
      </div>
      <Ads
        data-ad-slot="3211837376"
        data-ad-format="auto"
        data-full-width-responsive="true" />
      <div className="text-center   font-bold text-xl text-white">Diamonds, Skins and Free Fire Pass</div>
      <div className="">Here are the details on how to acquire Diamonds and other rewards in Free Fire. Read on to explore the complete methods.</div>
      <div>If you have any questions, make sure you read to the end to get all the information you need! Imagine yourself dreaming of amassing a treasure trove of diamonds in free fire.</div>
      <div>Ready to unlock stunning skins, exclusive characters and powerful weapons. We recognize how electrifying and rewarding it can be to enhance your gaming experience with these valuable resources.</div>
      <Ads
        data-ad-slot="3211837376"
        data-ad-format="auto"
        data-full-width-responsive="true" />

      <div className="flex items-center justify-center   cursor-pointer pt-10">
        <a href="/tools">

          <img src="/resources/buttons/home-btn.png" className="w-full" />
        </a>
      </div>

      <div className="flex items-center justify-center  pt-[8px] cursor-pointer">
        <a href="/elite-booyah-pass">
          <img src="/resources/buttons/elite-home.png" className="w-full" />
        </a>
      </div>

      <div className="flex items-center justify-center  pt-[8px] cursor-pointer">
        <a href="/free-diamonds-coin">
          <img src="/resources/buttons/coin-home.png" className="w-full" />
        </a>
      </div>

      <div>And the best part? You can now win diamonds without spending a single penny! Our homepage is your gateway to exploring foolproof methods of earning diamonds for free in Free Fire. Diamonds represent the game's premium currency, essential for unlocking a variety of exclusive items that take your gameplay to the next level.</div>
      <div>
        Our tried and trusted methods not only reveal how to get free diamonds, but also explain in detail how each approach works. From exciting sweepstakes to strategic missions, the world of diamonds is at your fingertips.
      </div>
      <div className="flex items-center justify-center  pt-[8px] cursor-pointer">
        <a href="/free-diamonds-coin">
          <img src="/resources/unnamed.png" className="w-full" />
        </a>
      </div>
      <div className="text-center   font-bold text-xl text-white">Methods to Earn Diamonds in Free Fire</div>
      <div className="">There are methods for acquiring diamonds and skins in Free Fire, which are divided into two types: internal and external. Internal methods use tools provided by the game itself, while external methods generally reward players with codes redeemable in the game.</div>
      <div className=' '><strong className="text-[20px] md:text-[18px]">Seasonal events : </strong> Take advantage of the events offered by the developer on a regular basis. Among the unique rewards of skins and emotes, there's also the chance to win diamonds! </div>
      <div className=' '><strong className="text-[20px] md:text-[18px]">Redemption codes : </strong> Codes are the best way to get diamonds and skins in Free Fire. Knowing how and where to get these codes is key to maximizing your winnings! </div>
      <div className=' '><strong className="text-[20px] md:text-[18px]">Applications:  </strong>There are external apps that offer options for redeeming diamonds in Free Fire, as well as other rewards, via codes or balances. </div>
      <div className=' '><strong className="text-[20px] md:text-[18px]">Tournaments:  </strong> Taking part in tournaments can earn you diamonds and other rewards. Keep an eye out for them and take advantage of every opportunity, as well as being aware of the best strategies to stand out. </div>
      <Ads
        data-ad-slot="3211837376"
        data-ad-format="auto"
        data-full-width-responsive="true" />
      <div className="font-bold text-xl text-white">Why Use These Methods?</div>
      <div className="">You may be wondering why you should dedicate yourself to these methods of earning free diamonds. The answer is straightforward: to satisfy your in-game needs. Whether it's to acquire the most stylish skins, the most powerful characters or to gain a competitive edge, diamonds are essential to achieving these goals. Our exclusive methods are not only ways to save money, but also to realize your ambitions in Free Fire.</div>

      <div className="font-bold text-xl text-white">Unlocking Incredible Advantages</div>
      <div className="">We understand that you are already familiar with the methods in general. However, here we provide information that goes beyond the basics. Increase your chances in draws, optimize your participation in events and maximize your daily earnings. Our expert insights will ensure that you are well prepared to make the most of each method.</div>
      <div className="">Now that you've discovered the secrets of free diamonds in Free Fire and understand why these methods are essential to enhancing your gaming experience, it's time to take action! Don't waste any more time! Click on the button b</div>


      {isClient && (
        <Modal
          outerClassName="border-[1px] border-white"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className=" md:mt-[18px] mt-[20px]">

            <Ads display={true} data-ad-slot="5279181955" />
          </div>
        </Modal>
      )}

    </div>



  );
}

export default Home;
