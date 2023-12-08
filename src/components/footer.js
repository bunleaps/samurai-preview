import React from "react";
import Image from "next/image";
import News from "@/app/news";
import Newsletter from "./newsletter";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  const quickLinks = [
    "Home",
    "Solutions",
    "Services",
    "Industries",
    "Partners",
  ];
  const UsefulLinks = [
    "View appointment details",
    "Register Your Account",
    "Why SamurAI?",
    "Company & Code",
  ];
  const ExtraLinks = [
    "Privacy Policy",
    "Create new Account",
    "Forgot Password",
    "Sitemap",
  ];

  return (
    <div>
      <News />
      <Newsletter />
      <div className="py-10 flex flex-col items-center gap-4">
        <div className="w-3/5 flex justify-between">
          <div className="w-1/3">
            <Image src="logo.svg" alt="SamurAi Logo" width={165} height={52} />
            <p className="mt-4">
              We at BookRx are devoted to make the communication between Users
              and Pharmacies easy at every level possible. Users can easily book
              appointments with pharmacies, And our platform.
            </p>
            <p className="mt-3 mb-1">Extra Links</p>
            <div className="social flex gap-3 text-xl">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
          <div className="flex gap-16">
            <div>
              <h3 className="font-semibold text-primary">Quick Links</h3>
              <ul>
                {quickLinks.map((link) => (
                  <li className="mt-2 cursor-pointer" key={link}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Useful Links</h3>
              <ul>
                {UsefulLinks.map((link) => (
                  <li className="mt-2 cursor-pointer" key={link}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Extra Links</h3>
              <ul>
                {ExtraLinks.map((link) => (
                  <li className="mt-2 cursor-pointer" key={link}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-slate-700 py-5">
        <p className="text-center">© Copyright 2023, All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
