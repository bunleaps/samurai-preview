import React from "react";
import TitleLine from "./title_line_white";

function Newsletter() {
  return (
    <div className="py-16 flex flex-col items-center gap-4 bg-gradient-to-r from-cyan-500 to-blue-700">
      <div className="w-3/5 flex">
        <div className="w-1/2">
          <TitleLine title="Newsletter" />
          <h1 className="text-3xl font-bold tracking-wide">
            Subscribe Our Newsletter
          </h1>
          <p className="w-2/3 text-sm">
            This Newsletter Provides the latest news about Professional Cyber
            Security Services. Hope you like it.
          </p>
        </div>
        <div className="w-1/2 flex flex-col items-center gap-3">
          <form className="mt-4 w-full flex flex-row">
            <input
              className="h-16 bg-white w-full py-3 px-6 outline-none text-lg text-secondary rounded rounded-l-full"
              type="text"
              placeholder="Enter your email address"
            />
            <span className="flex items-center bg-white rounded rounded-r-full pr-2">
              <button className="bg-gredient-dark hover:bg-gredient-light text-lg text-secondary bg-primary font-semibold py-3 px-7 rounded-full">
                Subscribe
              </button>
            </span>
          </form>
          <p>We Promise not to Spam you!</p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
