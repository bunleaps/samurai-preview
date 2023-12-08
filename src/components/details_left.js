import React from "react";
import TitleLine from "./title_line";
import Image from "next/image";
import { AiFillSafetyCertificate } from "react-icons/ai";

function DetailsLeftContact({
  image,
  title,
  header,
  slug,
  description,
  points,
}) {
  return (
    <div className="my-16 w-full flex gap-16">
      <div className="w-1/2">
        <TitleLine title={title} />
        <h1 className="text-3xl font-semibold mt-2">{header}</h1>
        <p className="text-sm mt-2">{slug}</p>
        <div className="mt-2 flex flex-wrap">
          {points &&
            points.length > 0 &&
            points.map((point, index) => (
              <div className="flex items-center text-primary p-2" key={index}>
                <AiFillSafetyCertificate />
                <p className="ml-4 text-white">{point}</p>
              </div>
            ))}
        </div>
        <p className="text-sm mt-2">{description}</p>
        <button className="mt-3 text-secondary bg-primary rounded-full px-10 py-3">
          Contact Us
        </button>
      </div>
      <div className="w-1/2">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex items-center">
            <div className="ml-52 w-[350px] h-[350px] rounded-full border border-gray-600 border-dashed"></div>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="ml-64 w-[250px] h-[250px] rounded-full border border-gray-600 border-dashed"></div>
          </div>
          <div className="absolute inset-0 flex justify-start items-center">
            <Image src={image} alt="header" width={434} height={308} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailsLeftReadMore({
  image_up,
  image_down,
  title,
  header,
  slug,
  description,
  points,
}) {
  return (
    <div className="my-16 w-full flex gap-16">
      <div className="w-1/2">
        <TitleLine title={title} />
        <h1 className="text-3xl font-semibold mt-2">{header}</h1>
        <p className="text-sm mt-2">{slug}</p>
        <div className="mt-2 flex flex-wrap">
          {points &&
            points.length > 0 &&
            points.map((point, index) => (
              <div className="flex items-center text-primary p-2" key={index}>
                <AiFillSafetyCertificate />
                <p className="ml-4 text-white">{point}</p>
              </div>
            ))}
        </div>
        <p className="text-sm mt-2">{description}</p>
        <button className="mt-3 text-primary border-primary border-2 rounded-full px-10 py-3 flex items-center gap-3">
          Read More
        </button>
      </div>
      <div className="w-1/2">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="ml-52 w-[350px] h-[350px] rounded-full border border-gray-600 border-dashed"></div>
          </div>
          <div className="absolute inset-0 flex justify-start items-center">
            <div className="ml-64 w-[250px] h-[250px] rounded-full border border-gray-600 border-dashed"></div>
          </div>
          <div className="absolute inset-0 flex justify-start items-end">
            <svg
              className="mr-28"
              xmlns="http://www.w3.org/2000/svg"
              width="136"
              height="49"
              viewBox="0 0 136 49"
              fill="none"
            >
              <circle
                cx="3.147"
                cy="2.88235"
                r="2.88235"
                fill="url(#paint0_linear_838_10544)"
              />
              <circle
                cx="31.9702"
                cy="2.88235"
                r="2.88235"
                fill="url(#paint1_linear_838_10544)"
              />
              <circle
                cx="60.7945"
                cy="2.88235"
                r="2.88235"
                fill="url(#paint2_linear_838_10544)"
              />
              <circle
                cx="89.6176"
                cy="2.88235"
                r="2.88235"
                fill="url(#paint3_linear_838_10544)"
              />
              <circle
                cx="118.441"
                cy="2.88235"
                r="2.88235"
                fill="url(#paint4_linear_838_10544)"
              />
              <circle
                cx="17.5591"
                cy="2.88235"
                r="2.88235"
                fill="url(#paint5_linear_838_10544)"
              />
              <circle
                cx="46.3824"
                cy="2.88235"
                r="2.88235"
                fill="url(#paint6_linear_838_10544)"
              />
              <circle
                cx="75.2056"
                cy="2.88235"
                r="2.88235"
                fill="url(#paint7_linear_838_10544)"
              />
              <circle
                cx="104.03"
                cy="2.88235"
                r="2.88235"
                fill="url(#paint8_linear_838_10544)"
              />
              <circle
                cx="132.853"
                cy="2.88235"
                r="2.88235"
                fill="url(#paint9_linear_838_10544)"
              />
              <circle
                cx="3.14706"
                cy="17.2945"
                r="2.88235"
                fill="url(#paint10_linear_838_10544)"
              />
              <circle
                cx="31.9703"
                cy="17.2945"
                r="2.88235"
                fill="url(#paint11_linear_838_10544)"
              />
              <circle
                cx="60.7945"
                cy="17.2945"
                r="2.88235"
                fill="url(#paint12_linear_838_10544)"
              />
              <circle
                cx="89.6177"
                cy="17.2945"
                r="2.88235"
                fill="url(#paint13_linear_838_10544)"
              />
              <circle
                cx="118.441"
                cy="17.2945"
                r="2.88235"
                fill="url(#paint14_linear_838_10544)"
              />
              <circle
                cx="17.5592"
                cy="17.2945"
                r="2.88235"
                fill="url(#paint15_linear_838_10544)"
              />
              <circle
                cx="46.3824"
                cy="17.2945"
                r="2.88235"
                fill="url(#paint16_linear_838_10544)"
              />
              <circle
                cx="75.2057"
                cy="17.2945"
                r="2.88235"
                fill="url(#paint17_linear_838_10544)"
              />
              <circle
                cx="104.03"
                cy="17.2945"
                r="2.88235"
                fill="url(#paint18_linear_838_10544)"
              />
              <circle
                cx="132.853"
                cy="17.2945"
                r="2.88235"
                fill="url(#paint19_linear_838_10544)"
              />
              <circle
                cx="3.14706"
                cy="31.7056"
                r="2.88235"
                fill="url(#paint20_linear_838_10544)"
              />
              <circle
                cx="31.9703"
                cy="31.7056"
                r="2.88235"
                fill="url(#paint21_linear_838_10544)"
              />
              <circle
                cx="60.7945"
                cy="31.7056"
                r="2.88235"
                fill="url(#paint22_linear_838_10544)"
              />
              <circle
                cx="89.6177"
                cy="31.7056"
                r="2.88235"
                fill="url(#paint23_linear_838_10544)"
              />
              <circle
                cx="118.441"
                cy="31.7056"
                r="2.88235"
                fill="url(#paint24_linear_838_10544)"
              />
              <circle
                cx="17.5592"
                cy="31.7056"
                r="2.88235"
                fill="url(#paint25_linear_838_10544)"
              />
              <circle
                cx="46.3824"
                cy="31.7056"
                r="2.88235"
                fill="url(#paint26_linear_838_10544)"
              />
              <circle
                cx="75.2057"
                cy="31.7056"
                r="2.88235"
                fill="url(#paint27_linear_838_10544)"
              />
              <circle
                cx="104.03"
                cy="31.7056"
                r="2.88235"
                fill="url(#paint28_linear_838_10544)"
              />
              <circle
                cx="132.853"
                cy="31.7056"
                r="2.88235"
                fill="url(#paint29_linear_838_10544)"
              />
              <circle
                cx="3.14706"
                cy="46.1177"
                r="2.88235"
                fill="url(#paint30_linear_838_10544)"
              />
              <circle
                cx="31.9703"
                cy="46.1177"
                r="2.88235"
                fill="url(#paint31_linear_838_10544)"
              />
              <circle
                cx="60.7945"
                cy="46.1177"
                r="2.88235"
                fill="url(#paint32_linear_838_10544)"
              />
              <circle
                cx="89.6177"
                cy="46.1177"
                r="2.88235"
                fill="url(#paint33_linear_838_10544)"
              />
              <circle
                cx="118.441"
                cy="46.1177"
                r="2.88235"
                fill="url(#paint34_linear_838_10544)"
              />
              <circle
                cx="17.5592"
                cy="46.1177"
                r="2.88235"
                fill="url(#paint35_linear_838_10544)"
              />
              <circle
                cx="46.3824"
                cy="46.1177"
                r="2.88235"
                fill="url(#paint36_linear_838_10544)"
              />
              <circle
                cx="75.2057"
                cy="46.1177"
                r="2.88235"
                fill="url(#paint37_linear_838_10544)"
              />
              <circle
                cx="104.03"
                cy="46.1177"
                r="2.88235"
                fill="url(#paint38_linear_838_10544)"
              />
              <circle
                cx="132.853"
                cy="46.1177"
                r="2.88235"
                fill="url(#paint39_linear_838_10544)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_838_10544"
                  x1="0.264648"
                  y1="2.91474"
                  x2="7.17526"
                  y2="3.59469"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_838_10544"
                  x1="29.0879"
                  y1="2.91474"
                  x2="35.9985"
                  y2="3.59469"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_838_10544"
                  x1="57.9121"
                  y1="2.91474"
                  x2="64.8227"
                  y2="3.59469"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_838_10544"
                  x1="86.7353"
                  y1="2.91474"
                  x2="93.6459"
                  y2="3.59469"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_838_10544"
                  x1="115.559"
                  y1="2.91474"
                  x2="122.469"
                  y2="3.59469"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_838_10544"
                  x1="14.6768"
                  y1="2.91474"
                  x2="21.5874"
                  y2="3.59469"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_838_10544"
                  x1="43.5"
                  y1="2.91474"
                  x2="50.4106"
                  y2="3.59469"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_838_10544"
                  x1="72.3232"
                  y1="2.91474"
                  x2="79.2338"
                  y2="3.59469"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_838_10544"
                  x1="101.147"
                  y1="2.91474"
                  x2="108.058"
                  y2="3.59469"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_838_10544"
                  x1="129.971"
                  y1="2.91474"
                  x2="136.881"
                  y2="3.59469"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_838_10544"
                  x1="0.264709"
                  y1="17.3268"
                  x2="7.17532"
                  y2="18.0068"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear_838_10544"
                  x1="29.088"
                  y1="17.3268"
                  x2="35.9986"
                  y2="18.0068"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint12_linear_838_10544"
                  x1="57.9122"
                  y1="17.3268"
                  x2="64.8228"
                  y2="18.0068"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint13_linear_838_10544"
                  x1="86.7354"
                  y1="17.3268"
                  x2="93.646"
                  y2="18.0068"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint14_linear_838_10544"
                  x1="115.559"
                  y1="17.3268"
                  x2="122.47"
                  y2="18.0068"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint15_linear_838_10544"
                  x1="14.6768"
                  y1="17.3268"
                  x2="21.5874"
                  y2="18.0068"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint16_linear_838_10544"
                  x1="43.5001"
                  y1="17.3268"
                  x2="50.4107"
                  y2="18.0068"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint17_linear_838_10544"
                  x1="72.3233"
                  y1="17.3268"
                  x2="79.2339"
                  y2="18.0068"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint18_linear_838_10544"
                  x1="101.148"
                  y1="17.3268"
                  x2="108.058"
                  y2="18.0068"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint19_linear_838_10544"
                  x1="129.971"
                  y1="17.3268"
                  x2="136.881"
                  y2="18.0068"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint20_linear_838_10544"
                  x1="0.264709"
                  y1="31.738"
                  x2="7.17532"
                  y2="32.4179"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint21_linear_838_10544"
                  x1="29.088"
                  y1="31.738"
                  x2="35.9986"
                  y2="32.4179"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint22_linear_838_10544"
                  x1="57.9122"
                  y1="31.738"
                  x2="64.8228"
                  y2="32.4179"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint23_linear_838_10544"
                  x1="86.7354"
                  y1="31.738"
                  x2="93.646"
                  y2="32.4179"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint24_linear_838_10544"
                  x1="115.559"
                  y1="31.738"
                  x2="122.47"
                  y2="32.4179"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint25_linear_838_10544"
                  x1="14.6768"
                  y1="31.738"
                  x2="21.5874"
                  y2="32.4179"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint26_linear_838_10544"
                  x1="43.5001"
                  y1="31.738"
                  x2="50.4107"
                  y2="32.4179"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint27_linear_838_10544"
                  x1="72.3233"
                  y1="31.738"
                  x2="79.2339"
                  y2="32.4179"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint28_linear_838_10544"
                  x1="101.148"
                  y1="31.738"
                  x2="108.058"
                  y2="32.4179"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint29_linear_838_10544"
                  x1="129.971"
                  y1="31.738"
                  x2="136.881"
                  y2="32.4179"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint30_linear_838_10544"
                  x1="0.264709"
                  y1="46.1501"
                  x2="7.17532"
                  y2="46.83"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint31_linear_838_10544"
                  x1="29.088"
                  y1="46.1501"
                  x2="35.9986"
                  y2="46.83"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint32_linear_838_10544"
                  x1="57.9122"
                  y1="46.1501"
                  x2="64.8228"
                  y2="46.83"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint33_linear_838_10544"
                  x1="86.7354"
                  y1="46.1501"
                  x2="93.646"
                  y2="46.83"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint34_linear_838_10544"
                  x1="115.559"
                  y1="46.1501"
                  x2="122.47"
                  y2="46.83"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint35_linear_838_10544"
                  x1="14.6768"
                  y1="46.1501"
                  x2="21.5874"
                  y2="46.83"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint36_linear_838_10544"
                  x1="43.5001"
                  y1="46.1501"
                  x2="50.4107"
                  y2="46.83"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint37_linear_838_10544"
                  x1="72.3233"
                  y1="46.1501"
                  x2="79.2339"
                  y2="46.83"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint38_linear_838_10544"
                  x1="101.148"
                  y1="46.1501"
                  x2="108.058"
                  y2="46.83"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
                <linearGradient
                  id="paint39_linear_838_10544"
                  x1="129.971"
                  y1="46.1501"
                  x2="136.881"
                  y2="46.83"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.191752" stop-color="#34AC9B" />
                  <stop offset="1" stop-color="#5457ED" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-0 flex justify-start items-start">
            <div className="ml-5 w-[70px] h-[70px] rounded-tl-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          </div>
          <div className="absolute inset-0 flex justify-start items-start">
            <Image
              className="ml-28"
              src={image_up}
              alt="header"
              width={315}
              height={329}
            />
          </div>
          <div className="absolute inset-0 flex justify-start items-center">
            <Image src={image_down} alt="header" width={168} height={168} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { DetailsLeftContact, DetailsLeftReadMore };
