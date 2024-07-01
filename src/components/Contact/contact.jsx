import React, { useState, useEffect } from "react";
import "../Contact/contact.css";
import { Button } from "antd";
import contactImg from "../../assets/contactImg.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        console.log("Before update:", formData);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        
        setShowPopup(true);
        console.log("After", showPopup);
        console.log("After update:", formData);
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div
      className="w-full h-[70vh] flex justify-center items-center contact"
      id="contact"
    >
      <div className="w-[90%] h-[60vh] flex justify-center items-center border-2 border-[#008bc6] rounded-xl bg-[#c2ebfeb1] minContact">
        <div className="w-[40%] pl-10 subContact">
          <h1 className="text-[#008bc6] text-[40px] inline-block font-medium border-b-2 border-[#008bc6] mb-6">
            Contact me
          </h1>
          <form className="block">
            <div className="flex mb-4">
              <div>
                <label className="text-[17px] font-semibold block">Name:</label>
                <input
                  placeholder="Enter Fname"
                  type="email"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-[200px] text-[15px] p-2 rounded border-[1px] border-neutral-400"
                />
              </div>
            </div>
            <div>
              <label className="text-[17px] font-semibold block">Email:</label>
              <input
                placeholder="Enter email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-[100%] text-[15px] p-2 rounded border-[1px] border-neutral-400"
              />
            </div>
            <div>
              <label className="text-[17px] font-semibold block">
                Message:
              </label>
              <textarea
                placeholder="enter your message here"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-[100%] resize-none text-[15px] p-2 rounded border-[1px] border-neutral-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex justify-center items-center px-3 mt-2 mb-2 rounded-sm py-2 bg-[#008bc6] text-white"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center  imgDiv">
          <img src={contactImg} className=" w-[100%] h-[400px]" alt="Contact" />
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <span>Message received! 📩 </span>
          {/* <span role="img" aria-label="tick-mark">
            ✅
          </span> */}
        </div>
      )}
    </div>
  );
}

export default Contact;
