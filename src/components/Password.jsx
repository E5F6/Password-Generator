"use client";
import React, { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+";

    let validChars = "";
    if (includeLowercase) validChars += lowercaseChars;
    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSpecialChars) validChars += specialChars;

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      newPassword += validChars[randomIndex];
    }
    setPassword(newPassword)
  };

  return(
    <section className="flex flex-col justify-center items-center h-screen w-full">
  <div className="flex flex-col justify-center items-center gap-3 p-7 rounded-lg card">
    <h1 className="text-3xl text-slate-200 font-medium">Password Generator</h1>
    <div className="flex flex-col justify-start items-center gap-3">
    <div className="flex flex-col gap-2">
      <label className="flex text-slate-300 font-medium self-start gap-2" htmlFor="">Password Length</label>
      <input className="w-full px-3 py-2 outline-none rounded-md text-slate-200 input" type="number" value={passwordLength} onChange={(e)=> setPasswordLength(parseInt(e.target.value))} />
    </div>
    <div className="flex self-start">
  <label className="flex text-slate-300 self-start gap-2 items-center">
    <input className="mr-2 form-checkbox text-cyan-600" type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
    Include Uppercase Letters
  </label>
</div>
<div className="flex self-start">
  <label className="flex text-slate-300 self-start gap-2 items-center">
    <input className="mr-2 form-checkbox text-cyan-600" type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} />
    Include Lowercase Letters
  </label>
</div>
<div className="flex self-start">
  <label className="flex text-slate-300 self-start gap-2 items-center">
    <input className="mr-2 form-checkbox text-cyan-600" type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
    Include Numbers
  </label>
</div>
<div className="flex self-start">
  <label className="flex text-slate-300 self-start gap-2 items-center">
    <input className="mr-2 form-checkbox text-cyan-600" type="checkbox" checked={includeSpecialChars} onChange={() => setIncludeSpecialChars(!includeSpecialChars)} />
    Include Special Characters
  </label>
</div>
    <button className="px-4 py-2 rounded-md font-medium text-slate-200 bg-cyan-600 hover:bg-cyan-700 transition ease-in-out" onClick={generatePassword}>Generate Password</button>
    <div className="flex flex-col gap-2 self-start">
      <label className="flex text-slate-300 self-start font-medium gap-2">Generated Password:</label>
      <input className="w-full px-3 py-2 outline-none rounded-md text-slate-200 input" type="text" value={password} readOnly />
    </div>
    </div>
    </div>
  </section>
  )
};

export default Password;