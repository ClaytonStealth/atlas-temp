import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { validator } from "./lib/validator";
import { FaChevronRight } from "react-icons/fa";

export default function Constact(props) {
  const [tyMessage, setTyMessage] = useState("");
  const form = useRef();
  const [rsvpState, setRsvpState] = useState({
    user_email: "",
    user_fName: "",
    user_lName: "",
    user_affiliation: "",
  });

  const [touched, setTouched] = useState({
    user_fName: false,
    user_lName: false,
    user_email: false,
    user_affiliation: false,
  });

  const [shakeFields, setShakeFields] = useState([]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));

    setRsvpState({ ...rsvpState, [name]: value });
  };

  const isValidObj = validator(rsvpState);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending Email");

    emailjs
      .sendForm(
        "service_chwkmbo",
        "template_9p2imej",
        form.current,
        "NHoQwlFQpc2euGO3O"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (shakeFields.length > 0) {
      // Reset shake animation after a short delay
      const timeoutId = setTimeout(() => {
        setShakeFields([]);
      }, 600); // Adjust the delay as needed

      return () => clearTimeout(timeoutId);
    }
  }, [shakeFields]);

  const handleButtonClick = (e) => {
    // Check input validation
    const fieldsToShake = [];
    if (isValidObj.user_fName.error) fieldsToShake.push("user_fName");
    if (isValidObj.user_lName.error) fieldsToShake.push("user_lName");
    if (isValidObj.user_email.error) fieldsToShake.push("user_email");

    if (fieldsToShake.length > 0) {
      // Shake the specified fields
      setShakeFields(fieldsToShake);
    } else {
      // No errors, proceed with sending email
      setTyMessage(`Thank you ${rsvpState.user_fName}!`);
      sendEmail(e);
    }
    e.preventDefault();
  };

  return (
    <div
      method="post"
      name="rsvp"
      className=" w-full min-h-screen flex items-center justify-center absolute z-[2]"
    >
      {/* RSVP Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-[400px] w-full mx-auto shadow-2xl p-8 rounded-lg"
      >
        <div
          className={`flex flex-col mb-8 ${
            shakeFields.includes("user_fName") ? "animate-shake" : ""
          }`}
        >
          <input
            className="bg-gray-200 p-2 rounded-2xl shadow-2xl "
            type="text"
            placeholder="First Name"
            name="user_fName"
            onChange={onChangeHandler}
          />
          {touched.user_fName && isValidObj.user_fName.error && (
            <p className="text-red-700 text-xs font-bold mb-1">
              Field Required
            </p>
          )}
        </div>
        <div
          className={`flex flex-col mb-8 ${
            shakeFields.includes("user_lName") ? "animate-shake" : ""
          }`}
        >
          <input
            className="bg-gray-200 p-2 rounded-2xl shadow-2xl "
            type="text"
            placeholder="Last Name"
            name="user_lName"
            onChange={onChangeHandler}
          />
          {touched.user_lName && isValidObj.user_lName.error && (
            <p className="text-red-700 text-xs font-bold mb-1">
              Field Required
            </p>
          )}
        </div>
        <div
          className={`flex flex-col mb-8 ${
            shakeFields.includes("user_email") ? "animate-shake" : ""
          }`}
        >
          <input
            className="bg-gray-200 p-2 rounded-2xl shadow-2xl"
            type="email"
            placeholder="Email"
            name="user_email"
            onChange={onChangeHandler}
          />
          {touched.user_email && isValidObj.user_email.error && (
            <p className="text-red-700 text-xs font-bold mb-1">
              Field Required
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            className="p-2 rounded-2xl shadow-2xl bg-gray-200"
            type="text"
            placeholder="Company Affiliation (Optional)"
            name="user_affiliation"
            onChange={onChangeHandler}
          />
        </div>
            <div className="flex justify-center items-center">
        <button
          type="submit"
          className="group text-lg h-[40px] font-bold py-3 flex justify-center items-center mt-8 bg-white text-black rounded-lg w-[180px]"
          onClick={handleButtonClick}
        >
          SUBMIT
          <FaChevronRight className=" group-hover:translate-x-2 duration-300 ml-4" />
        </button>

            </div>
        {tyMessage && <p className="text-center mt-4 text-white font-bold">{tyMessage}</p>}
      </form>
    </div>
  );
}
