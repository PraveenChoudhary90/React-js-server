import { useState } from "react";

const Fromvalid = () => {
  let [inputname, setInput] = useState({
    username: "",
    address: "",
    email:"",
    number:"",
    password:"",
  });

  const hinput = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);
    setInput({
      ...inputname,
      [name]: value
    });
  };

  const finalsubmit = (event) => {
    event.preventDafault();
    console.log(inputname);
  };

  return (
    <>
      <form onSubmit={finalsubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="username" value={inputname.username} onChange={hinput} />
        <br />
        <br />

        <label htmlFor="">Address</label>
        <input type="text" name="address" value={inputname.address} onChange={hinput} />
        <br />
        <br />
         <label htmlFor="">Email</label>
        <input type="text" name="email" value={inputname.email} onChange={hinput} />
        <br />
        <br />
         <label htmlFor="">Number</label>
        <input type="text" name="number" value={inputname.number} onChange={hinput} />
        <br />
        <br />
         <label htmlFor="">Password</label>
        <input type="text" name="password" value={inputname.password} onChange={hinput} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};
export default Fromvalid;
