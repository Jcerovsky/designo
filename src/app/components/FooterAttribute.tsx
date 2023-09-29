import React from "react";

function FooterAttribute() {
  return (
    <div className="text-zinc-50 bg-gradient-to-r from-[#D3CCE3] to-[#0F2027] py-[1.5rem] flex flex-col items-center justify-center">
      <h3 className="tracking-widest">Coded by Jakub Cerovsky</h3>
      <div className="text-center">
        <span>Do you like what you see? </span>
        <span>{"I'm open to collaboration."}</span>
        <div>
          <p className="text-center mt-3">
            Email me:{" "}
            <a href="mailto:jcerovsky8@gmail.com" className="hover:underline">
              jcerovsky8@gmail.com
            </a>
          </p>
          <div className="flex justify-center gap-2">
            <a href="https://www.linkedin.com/in/jakub-cerovsky-288161173/">
              <img
                src="/assets/shared/desktop/linkedin.png"
                alt="linked-in-icon"
                className="w-6 hover:opacity-80 hover:scale-95 "
              />
            </a>
            <a href="https://github.com/Jcerovsky">
              <img
                src="/assets/shared/desktop/github-mark.svg"
                alt="github-icon"
                className="w-6 hover:opacity-80 hover:scale-95 "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterAttribute;
