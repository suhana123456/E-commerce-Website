'use client'
import Link from "next/link";
import { FaAngleRight, FaCaretDown, FaCaretUp } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

function Sale() {
  // State for managing the sidebar toggle in mobile view
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex flex-col lg:flex-row gap-10 mb-20">
        {/* Sidebar Section */}
        <div className="lg:w-[250px] w-full">
          {/* Mobile toggle button */}
          <div className="flex justify-between items-center lg:hidden mt-6 mb-2">
            <h3 className="text-lg font-semibold">Categories</h3>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-xl"
            >
              {isSidebarOpen ? <FaCaretUp /> : <FaCaretDown />}
            </button>
          </div>

          {/* Categories list */}
          <ul
            className={`flex flex-col gap-6 border-r border-gray-300 pt-10 pr-6 lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:flex`}
          >
            {[
              "Women's Fashion",
              "Men's Fashion",
              "Hoodies & Sweatshirts",
              "Tops & T-shirts",
              "Shorts",
              "Sports & Outdoor",
              "Trackcuits",
              "Jumpsuits & Rompers",
              "Socks",
              "Accessories & Equipment"
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center w-full cursor-pointer hover:text-gray-500"
              >
                <Link href="#" className="text-sm sm:text-base">
                  {item}
                </Link>
                {index < 2 && (
                  <FaAngleRight className="text-sm hidden lg:block mr-4" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <div className="font-bold text-slate-600">
            <Image src={"/s1.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike Air Force 1 React</p>
            <p>Men's Shoes</p>
            <p>MRP : ₹ 13 295.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s2.png"} alt={"shoes"} width={300} height={200} />
            <p> Air Jordon 1 Elevate Low </p>
            <p>Women shoes</p>
            <p>₹ 11 895.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s3.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike Standard Issue</p>
            <p>Women Basketball Jersey</p>
            <p>₹ 2 895.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s4.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike dunk Low Retro SE</p>
            <p>Men's shoes</p>
            <p>₹ 9 695.00</p>
          </div>

          <div className="font-bold text-slate-600">
            <Image src={"/s5.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike Air Max 97 SE</p>
            <p>Men's shoes</p>
            <p>₹ 9 695.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s6.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike Dri-Fit UV Hyverse</p>
            <p>Men's short</p>
            <p>₹ 2 495.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s7.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike Court Vision Low</p>
            <p>Men's shoes</p>
            <p>₹ 5 695.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s8.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike Dri-FT Ready</p>
            <p>Men's short</p>
            <p>₹ 2 495.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s9.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike One Leak Protection:Period</p>
            <p>Women Mid-Rise 18cm Biker Shorts</p>
            <p>₹ 3 395.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s10.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike Air Force 1 LV8 3</p>
            <p>Older Kids</p>
            <p>₹ 7 495.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s11.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike Blazer Low Platform</p>
            <p>Women shoes</p>
            <p>₹ 8 195.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s12.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike Air Force 1'07</p>
            <p>Women shoes</p>
            <p>₹ 8 195.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s13.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike Pro Dri-FIT</p>
            <p>Men's Tidht-FitSleeveless Top</p>
            <p>₹ 1 495.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s14.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike Dunk Low Retro</p>
            <p>Men's shoes</p>
            <p>₹ 8 695.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s15.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike Air Max SC</p>
            <p>Women shoes</p>
            <p>₹ 5 995.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s16.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike Dri-FIT UV Miler</p>
            <p>Men's short-Sleeve Running Top</p>
            <p>₹ 1 695.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s17.png"} alt={"shoes"} width={300} height={200} />
            <p>Nike Swoosh</p>
            <p>Women Medium-padded Sports</p>
            <p>₹ 3 095.00</p>
          </div>
          <div className="font-bold text-slate-600">
            <Image src={"/s18.png"} alt={"shoes"} width={300} height={200} />
            <p>NikeDri-FIT Challenger </p>
            <p>Men's 18cm Versatile Shorts</p>
            <p>₹ 2 495.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sale;