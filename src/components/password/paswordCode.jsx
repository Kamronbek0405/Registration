import { useState } from "react";
export const PaswordCode = ({ error, ...rest }) => {
    const [paswordCode, setShowPassword] = useState(false);

    return (
      <div className=" ">
        <input className=" w-[295px] bg-white h-10 ml-16 mt-5 border-solid border-2 border-black outline-slate-400 rounded-md px-2"
          type={paswordCode ? 'text' : 'password'}
          placeholder="Ikkinchi parol kiriting"
          
        />
        <button className="ml-2  bg-blue-400 px-2 py-1 rounded-md     hover:shadow-blue-600   shadow-lg hover:text-white"
          type="button"
          onClick={() => setShowPassword(!paswordCode)}
        >
          {paswordCode ? 'yopish' : 'korish'}
        </button>
        {error && <p>{error.message}</p>}
      </div>
    );
}
