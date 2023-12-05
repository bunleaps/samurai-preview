import React from "react";

function Hero() {
  return (
    <div className="relative h-[600px]">
      <video
        className="object-cover w-screen h-[600px] brightness-50"
        src="/videos/server_room.mp4"
        loop
        autoPlay
        muted
      ></video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-5xl font-bold">Great Software Works Great,</h1>
          <h1 className="text-5xl font-bold shadow bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent p-2">
            But Even Better Together
          </h1>
          <p className="w-2/3 text-center">
            Learn how the SamurAI integrates the world’s leading cybersecurity,
            AI-Driven products, to maximize protection.
          </p>
          <button className="text-secondary bg-primary rounded-full px-10 py-3">
            Learn More
          </button>
        </div>
      </div>
      <div className="z-10 absolute -bottom-16 left-1/2 transform -translate-x-1/2 h-1/4 w-[1000px] shadow p-4 rounded-lg border border-primary backdrop-brightness-50 backdrop-blur-xl">
        <div className="w-full h-full flex justify-around items-center gap-5 px-8">
          <div>
            <p className="text-sm text-primary">Industry Recognition</p>
            <p className="w-3/4">
              Understanding the World through a series of number is what we have
            </p>
          </div>
          <div>
            <p className="text-sm text-primary">Industry Recognition</p>
            <p className="w-3/4">
              Understanding the World through a series of number is what we have
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
