import {
  TwitterLogo,
  FacebookLogo,
  LinkedinLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

export default function Footer() {
  const logoSize = 32;
  return (
    <div className="flex  items-center justify-center lg:mx-20 mb-28 mt-14 flex-col">
      <div className="flex  items-center justify-center lg:mr-auto">
        <Logo />
        <div className="flex flex-col gap-0">
          <div className="text-dark font-medium  text-xl font-sans">
            SEAMLESS WEB{" "}
          </div>
          <div className="  font-sans"> Digital Agency</div>
        </div>
      </div>
      <div className="flex items-center  lg:flex-row lg:w-full justify-center flex-col">
        <div className=" mt-4 lg:mt-0 font-sans text-gray-700 lg:mr-auto">
          © 2025, SeamlessWeb. All rights reserved.
        </div>
        <div className="flex items-center justify-center gap-8 mt-5 lg:mt-0 text-gray-700  ">
          {/* <TwitterLogo size={logoSize} weight={"fill"} /> */}
          <FacebookLogo size={logoSize} weight={"fill"} />
          {/* <LinkedinLogo size={logoSize} weight={"fill"} /> */}
          <InstagramLogo size={logoSize} weight={"fill"} />
        </div>
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <div className="font-sans pointer-cursor text-primary-500 relative w-fit h-fit text-xl p-2 lg:p-0 lg:pr-2 rounded-md  font-normal">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 26"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.78277 0.133736H0C0 17.8866 18.1778 12.4833 18.1778 25.8959H23.9605C23.9621 8.14304 5.78277 13.5463 5.78277 0.133736ZM12.0688 0.133736H17.9002C18.4694 3.7119 20.7948 6.71304 23.9636 8.22146V14.3899C17.5756 12.5287 12.765 6.93258 12.0688 0.133736ZM0 17.8082C3.16891 19.3166 5.49426 22.3177 6.06342 25.8959H11.8948C11.1955 19.097 6.38645 13.4993 0 11.6381V17.8066V17.8082Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};
