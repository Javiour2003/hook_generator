import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Desktop3 = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  return (
    <a className="[text-decoration:none] relative bg-aliceblue w-full h-[1024px] overflow-hidden text-left text-21xl text-black font-inter">
      <main className="absolute top-[-98px] left-[428px] w-[1114px] h-[1220px] overflow-hidden flex flex-col items-center justify-start">
        <img
          className="relative rounded-[263px] w-[1114px] h-[1175px] object-cover"
          alt=""
          src="/rectangle-1@2x.png"
        />
      </main>
      <div className="absolute top-[208px] left-[499px] w-[614px] h-[608px] overflow-hidden flex flex-col items-center justify-end">
        <input
          className="[border:none] bg-gainsboro relative rounded-3xs w-[614px] h-[68px]"
          type="password"
        />
      </div>
      <div className="absolute top-[34px] left-[1318px] w-[390px] h-[956px] overflow-hidden flex flex-col items-center justify-start">
        <textarea className="[border:none] bg-[transparent] font-inter text-[16px] relative text-black text-left inline-block w-[390px] h-[170px] shrink-0" />
      </div>
      <div className="absolute top-[-10px] left-[35px] w-[53px] h-[1044px] overflow-hidden flex flex-col items-center justify-start">
        <img
          className="relative w-[53px] h-[119px] object-cover"
          alt=""
          src="/imagesremovebgpreview-1@2x.png"
        />
      </div>
      <div className="absolute top-[165px] left-[720px] w-[497px] h-[694px] overflow-hidden flex flex-col items-center justify-start">
        <h4 className="m-0 relative text-inherit font-extrabold font-inherit inline-block w-[497px] h-[110px] shrink-0">
          LOGIN /SIGN UP
        </h4>
      </div>
      <div className="absolute top-[220px] left-[588px] w-[629px] h-[581px] overflow-hidden flex flex-col items-center justify-start">
        <img className="relative w-[629px] h-[3px]" alt="" src="/line-1.svg" />
      </div>
      <div className="absolute top-[399px] left-[494px] w-[614px] h-[226px] overflow-hidden flex flex-col items-center justify-start">
        <input
          className="[border:none] bg-gainsboro relative rounded-3xs w-[614px] h-[68px]"
          type="text"
        />
      </div>
      <div className="absolute top-[330px] left-[483px] w-[404px] h-[364px] overflow-hidden flex flex-col items-center justify-start">
        <h4 className="m-0 relative font-extrabold font-inherit inline-block w-[404px] h-[51px] shrink-0 text-inherit">
          <span>{`  `}</span>
          <span className="text-17xl">USERNAME</span>
        </h4>
      </div>
      <div className="absolute top-[383px] left-[499px] w-[614px] h-[258px] overflow-hidden flex flex-col items-center justify-end">
        <input
          className="[border:none] bg-gainsboro relative rounded-3xs w-[614px] h-[68px]"
          type="email"
        />
      </div>
      <div className="absolute top-[456px] left-[509px] w-[404px] h-28 overflow-hidden flex flex-col items-center justify-end">
        <h4 className="m-0 relative text-inherit font-extrabold font-inherit inline-block w-[404px] h-[51px] shrink-0">
          EMAIL ID
        </h4>
      </div>
      <div className="absolute top-[285px] left-[494px] w-[234px] h-[454px] overflow-hidden flex flex-col items-center justify-end">
        <h4 className="m-0 relative text-inherit font-extrabold font-inherit">
          PASSWORD
        </h4>
      </div>
      <div className="absolute top-[264px] left-[-80px] w-[550px] h-[496px] overflow-hidden flex flex-col items-center justify-start">
        <img
          className="relative w-[550px] h-[450px] object-cover"
          alt=""
          src="/frame-1@2x.png"
        />
      </div>
      <div className="absolute top-[68px] left-[685px] w-[404px] h-[888px] overflow-hidden text-center text-17xl font-archivo-black">
        <button
          className="cursor-pointer [border:none] p-0 bg-mediumaquamarine absolute top-[830px] left-[0px] rounded-3xs w-[404px] h-[58px]"
          autoFocus={true}
          onClick={onRectangleButtonClick}
        />
        <div className="absolute top-[842px] left-[-14px] inline-block w-[404px] h-[58px]">
          LOGIN
        </div>
      </div>
      <div className="absolute top-[118px] left-[825px] w-[319px] h-[788px] overflow-hidden flex flex-col items-center justify-end">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-21xl font-extrabold font-inter text-black text-left inline-block w-[319px] h-2 shrink-0"
          autoFocus={true}
        >
          LOGIN
        </button>
      </div>
      <img
        className="absolute top-[215px] left-[589px] w-[629px] h-[7px]"
        alt=""
        src="/line-1.svg"
      />
    </a>
  );
};

export default Desktop3;
