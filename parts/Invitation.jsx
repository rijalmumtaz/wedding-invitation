import React, { useState } from "react";
import Image from "next/image";
import { Fade } from "react-reveal";

import Button from "@/elements/Button";
import InputText from "@/elements/InputText";
import Music from "./Music";

export default function Invitation(props) {
  const { data } = props;

  return (
    <div className="">
      <Music />
      <Fade>
        {/* Quote */}
        <div className="px-[27px] bg-white-bg flex flex-col items-center pt-[50px] pb-[61px]">
          <Fade bottom>
            <Image
              className="mb-3"
              src="/images/Ornamental Leaf.png"
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </Fade>
          <Fade
            bottom
            delay={200}
          >
            <p className="font-kurale font-normal text-base text-center w-[245px] leading-6 mb-6">
              Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
              benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
              berpikir.
            </p>
          </Fade>
          <Fade
            bottom
            delay={400}
          >
            <h3 className="font-kurale text-2xl font-normal">
              QS. Ar-Rum : 21
            </h3>
          </Fade>
        </div>
        {/* Quote End*/}
        {/* Mempelai */}
        <div className="px-[27px] py-12 bg-pink-bg flex flex-col items-center">
          <Fade bottom>
            <p className="font-kurale mb-[58px] w-[309px] text-center text-base">
              Maha Suci Allah yang telah menciptakan semuanya
              berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi
              pernikahan kami
            </p>
          </Fade>
          <div className="relative">
            <Image
              className="absolute mt-28"
              src="/images/&-invitation.svg"
              alt="Picture of the author"
              width={300}
              height={300}
            />
            <div className="text-black font-bad-script text-5xl text-center mb-[19px]">
              <Fade
                bottom
                delay={100}
              >
                <h1>Itmam</h1>
              </Fade>
              <Fade
                bottom
                delay={300}
              >
                <h1>Munawir</h1>
              </Fade>
              <Fade
                bottom
                delay={500}
              >
                <h1>Zarkasyi</h1>
              </Fade>
            </div>
            <Fade
              bottom
              delay={700}
            >
              <p className="font-kurale text-sm text-center mb-[100px]">
                Putra Bpk. Sugeng (Alm) & Ibu Mutamimatul
              </p>
            </Fade>
            <div className="text-black font-bad-script text-5xl text-center mb-[19px]">
              <Fade
                bottom
                delay={100}
              >
                <h1>Nur</h1>
              </Fade>
              <Fade
                bottom
                delay={200}
              >
                <h1>Faiz</h1>
              </Fade>
              <Fade
                bottom
                delay={300}
              >
                <h1>Fauziah</h1>
              </Fade>
            </div>
            <Fade
              bottom
              delay={700}
            >
              <p className="font-kurale text-sm text-center">
                Putri Bpk. Sudiharto (Alm) & Ibu Indriani
              </p>
            </Fade>
          </div>
          <Fade
            bottom
            delay={900}
          >
            <p className="font-kurale mt-[58px] w-[309px] text-center text-base">
              Untuk menjalankan syariat agama-Mu, dan mengikuti sunnah Rasul-Mu,
              untuk membangun keluarga yang sakinah, mawaddah, warrahmah
            </p>
          </Fade>
        </div>
        {/* Mempelai End */}
        {/* Date */}
        <div className="px-[27px] py-12 bg-purple-bg flex flex-col items-center text-center">
          <div className="relative right-36">
            <Fade
              bottom
              delay={200}
            >
              <h1 className="absolute text-8xl font-rozha-one text-white top-2">
                M<span className="text-[67px]">oment</span>
              </h1>
            </Fade>
            <Fade
              bottom
              delay={100}
            >
              <h1 className="absolute font-passions-conflict text-7xl">
                Precious
              </h1>
            </Fade>
          </div>
          <Fade
            bottom
            delay={400}
          >
            <Image
              className="mt-36"
              src="/images/Foto.png"
              alt="Picture of the author"
              width={300}
              height={300}
            />
          </Fade>
          <div className="flex flex-col mt-[83px] text-center">
            <Fade bottom>
              <p className="font-noto-sans-symbols text-sm text-black tracking-widest mb-[25px]">
                ITMAM IIS
              </p>
            </Fade>
            <div className="text-[169px] font-rozha-one text-white leading-none">
              <Fade bottom>
                <h1 className="tracking-wide ">
                  1<span className="tracking-normal">8</span>
                </h1>
              </Fade>
              <Fade bottom>
                <h1 className="tracking-wide ">
                  0<span className="tracking-normal">5</span>
                </h1>
              </Fade>
              <Fade bottom>
                <h1 className="tracking-wide ">
                  2<span className="tracking-normal">3</span>
                </h1>
              </Fade>
            </div>
            <Fade bottom>
              <p className="font-noto-sans-symbols text-sm text-black tracking-widest mt-[25px]">
                SAVE THE DATE
              </p>
            </Fade>
          </div>
          <div className="mt-[130px]">
            <Fade
              bottom
              delay={100}
            >
              <h2 className="font-rozha-one text-white text-5xl tracking-wider">
                9 AM
              </h2>
            </Fade>
            <Fade
              bottom
              delay={300}
            >
              <p className="font-noto-sans-symbols text-black text-xs tracking-widest">
                AKAD
              </p>
            </Fade>
          </div>
          <div className="mt-20">
            <Fade
              bottom
              delay={100}
            >
              <h2 className="font-rozha-one text-white text-5xl tracking-wider">
                11 AM
              </h2>
            </Fade>
            <Fade
              bottom
              delay={300}
            >
              <p className="font-noto-sans-symbols text-black text-xs tracking-widest">
                RESEPSI
              </p>
            </Fade>
          </div>
          <div className="mt-[140px] flex flex-col items-center gap-11">
            <Fade bottom>
              <Image
                src="/images/Line 2.svg"
                alt="Picture of the author"
                width={46}
                height={46}
              />
            </Fade>
            <Fade
              bottom
              delay={200}
            >
              <p className="font-kurale text-sm w-[281px] tracking-wider">
                Jl. Nusa Indah, RT 02 RW 11 (Jenang Maos), Maoslor, Maos,
                Cilacap, Jawa Tengah
              </p>
            </Fade>
            <Fade bottom>
              <Image
                src="/images/Line 2.svg"
                alt="Picture of the author"
                width={46}
                height={46}
              />
            </Fade>
          </div>
          <div className="mt-20 flex flex-col gap-10">
            <Fade bottom>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d988.6963812876905!2d109.1500556!3d-7.598305600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzUnNTMuOSJTIDEwOcKwMDknMDAuMiJF!5e0!3m2!1sen!2sid!4v1681805380795!5m2!1sen!2sid"
                className="w-[237px] h-[237px] border-0 shadow-lg rounded"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Fade>
            <Fade
              bottom
              delay={200}
            >
              <Button
                type="link"
                href="https://goo.gl/maps/p3igjbQq5z1MUmb48"
                isBase
                isExternal
                isOutline
                className="border-white text-black self-center hover:text-white hover:bg-gray-900"
              >
                See Location
              </Button>
            </Fade>
          </div>
        </div>
        {/* Date End */}
        {/* Wish */}
        <div className="px-[27px] bg-pink-bg flex flex-col items-center py-[58px]">
          <Fade bottom>
            <h1 className="font-rozha-one text-4xl text-brown mb-[30px]">
              Give A Wish
            </h1>
          </Fade>
          <div className="flex flex-col gap-[6px] mb-10">
            <Fade
              bottom
              delay={300}
            >
              <InputText
                id="nickname"
                name="nickname"
                value={data.nickname}
                placeholder="Nama"
                onChange={props.onChange}
              />
            </Fade>
            <Fade
              bottom
              delay={400}
            >
              <InputText
                id="wish"
                name="wish"
                type="textarea"
                value={data.wish}
                placeholder="Wish"
                onChange={props.onChange}
              />
            </Fade>
          </div>
          <Fade
            bottom
            delay={600}
          >
            <Button
              type="button"
              isBase
              isExternal
              isPrimary
              className="text-white bg-brown z-30"
              onClick={props.onClick}
            >
              Kirim Wish
            </Button>
          </Fade>
          <Fade>
            {props.message && (
              <span className="font-kurale text-sm text-center mt-3">
                Thanks, Atas Doanya ❤️
              </span>
            )}
          </Fade>
        </div>
        {/* Wish End */}
        {/* Quote */}
        <div className="px-[27px] bg-white-bg flex flex-col items-center pt-[50px] pb-[61px]">
          <Fade bottom>
            <Image
              className="mb-3"
              src="/images/Ornamental Leaf.png"
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </Fade>
          <Fade
            bottom
            delay={200}
          >
            <p className="font-kurale font-normal text-base text-center w-[245px] leading-6 mb-6">
              “Jika seseorang menikah, maka ia telah menyempurnakan separuh
              agamanya. Karenanya, bertakwalah pada Allah pada separuh yang
              lainnya.”
            </p>
          </Fade>
          <Fade
            bottom
            delay={400}
          >
            <h3 className="font-kurale text-2xl font-normal">
              (HR. Al Baihaqi)
            </h3>
          </Fade>
        </div>
        {/* Quote End */}
      </Fade>
    </div>
  );
}
