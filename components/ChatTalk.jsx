import React, { useEffect, useRef, useState } from "react";
import Picker from "emoji-picker-react";
import { motion } from "framer-motion";
import { AiOutlineSend } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { GiPaperClip } from "react-icons/gi";
import { FaExclamation } from "react-icons/fa";
// import { HiOutlineGif } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";

function ChatTalk() {
  const [divHeight, setDivHeight] = useState(0);
  const textinputRef = useRef(null);
  const [text, setText] = useState("");
  const [ImagePopUp, setImagePopUp] = useState("");
  const [isPicker, setisPicker] = useState(false);
  const [messages, setMessages] = useState([]);

  // Function to update the div height
  const updateDivHeight = () => {
    const screenHeight = window.innerHeight;
    setDivHeight(screenHeight - 205);
  };

  useEffect(() => {
    // Initial update
    updateDivHeight();

    // Event listener to update the height on window resize
    window.addEventListener("resize", updateDivHeight);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateDivHeight);
    };
  }, []);

  const autoResize = () => {
    const textarea = textinputRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setText(textarea.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      // Add your logic to save the message to the messages array or send it to the backend here
      console.log("Message sent:", text);
      setMessages([...messages, { id: Date.now(), text, sender: "user" }]);
      setText(""); // Clear the input after sending the message
      autoResize(); // Reset the textarea height after clearing the input
    }
  };

  const EmojiClick = (emojiObject) => {
    console.log(emojiObject);
    const emoji = emojiObject.emoji;
    // console.log("Selected emoji:", emoji);
    setText((previousInput) => {
      // console.log("Previous input:", previousInput);
      return previousInput + emoji;
    });
    setisPicker(false);
  };
  // console.log(text);
  return (
    <div>
      {ImagePopUp && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-[#ffffff82] flex justify-center items-center"
          onClick={() => setImagePopUp(false)}
        >
          <img
            className=" text-[12px] text-gray-800 fixed z-30 border border-gray-400 rounded-md p-2 w-[60%]"
            src="yeti.png"
          />
          {/* <div className=" w-[80%] h-[80%] bg-white"></div> */}
        </div>
      )}
      <div
        style={{ height: `${divHeight}px` }}
        className={`overflow-y-scroll px-4 bg-gray-100`}
      >
        <div className=" w-[80%] px-5 flex items-center  text-white space-x-3 my-5">
          <div className="w-8 h-8 rounded-full bg-rose flex justify-center items-center">
            <div className="w-8 h-8 rounded-full bg-rose flex justify-center items-center">
              <p className="">ZA</p>
            </div>
          </div>
          <div className=" text-[12px] text-gray-800  md:max-w-[65%] ">
            <div className="flex space-x-2 px-1">
              <p>Zaid</p>
              <p>12:00 PM</p>
            </div>
            <div className=" text-[12px] text-gray-800 bg-white rounded-md p-2   ">
              I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am
              Groot! I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am Groot!
              I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am
              Groot! I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am Groot!
              I Am Groot! I Am Groot! I Am Groot! I Am Groot!
            </div>
          </div>
        </div>
        <div className=" text-[12px] text-gray-800 w-[100%]  my-4">
          <div className="flex space-x-2 justify-end mr-[5%]">
            <p>12:00 PM</p>
          </div>
          <div className=" text-[12px] text-gray-800 w-[100%] flex justify-between pr-[5%]">
            <div className=" text-[12px] w-[35%]"></div>
            <div className=" text-[12px] px-5 text-gray-800 md:max-w-[65%]  bg-[#e7e4e3] rounded-md p-2 ">
              I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am
              Groot! I Am Groot! I Am Groot! I Am Groot!
            </div>
          </div>
        </div>

        <div className=" w-[80%] px-5 flex items-center text-white space-x-3 my-5">
          <div className="w-8 h-8 rounded-full bg-rose flex justify-center items-center">
            <div className="w-8 h-8 rounded-full bg-rose flex justify-center items-center">
              <p className="">ZA</p>
            </div>
          </div>
          <div className=" text-[12px] text-gray-800  md:max-w-[65%] ">
            <div className="flex space-x-2 px-1">
              <p>Zaid</p>
              <p>12:00 PM</p>
            </div>
            <div className=" text-[12px] text-gray-800 bg-white rounded-md p-2   ">
              I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am
              Groot! I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am Groot!
              I Am Groot! I Am Groot! I Am Groot! I Am Groot!
            </div>
          </div>
        </div>
        <div className=" text-[12px] text-gray-800 w-[100%]  my-4">
          <div className="flex space-x-2 justify-end mr-[5%]">
            <p>12:10 PM</p>
          </div>
          <div className=" text-[12px] text-gray-800 w-[100%] flex justify-between pr-[5%]">
            <div className=" text-[12px] w-[35%]"></div>
            <div className=" text-[12px] px-5 text-gray-800 md:max-w-[65%] bg-[#e7e4e3] rounded-md p-2 ">
              I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am
              Groot! I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am Groot!
              I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am Groot! I Am
              Groot! I Am Groot!
            </div>
          </div>
        </div>

        <div className=" w-[80%] px-5 flex items-center text-white space-x-3 my-5">
          <div className="w-8 h-8 rounded-full bg-rose flex justify-center items-center">
            <div className="w-8 h-8 rounded-full bg-rose flex justify-center items-center">
              <p className="">ZA</p>
            </div>
          </div>
          <img
            onClick={() => setImagePopUp(true)}
            className=" text-[12px] text-gray-800 cursor-pointer bg-white rounded-md p-2 w-[240px] md:w-[400px]"
            src="yeti.png"
          />
        </div>
        <div className="flex justify-between items-center text-blue-900 text-[12px] space-x-2 px-6 ">
          <div className="h-[1px] bg-blue-800 w-[50%]"></div>
          <div>Today</div>
          <div className="h-[1px] bg-blue-800 w-[50%]"></div>
        </div>
        <div className=" text-[12px] text-gray-800 w-[100%] my-4 flex justify-between pr-[5%]  ">
          <div className=" text-[12px] w-[35%]"></div>
          <div className=" text-[12px] px-5 text-gray-800 md:max-w-[65%]  bg-[#e7e4e3] rounded-md p-2 ">
            Aur Batao Makhmoor Bhai Kya Krna hai is k ilawa! aur bhi kuch hai to
            bta do!
          </div>
        </div>
        <div>
          {/* Display messages */}
          {messages.map((message) => (
            <div key={message.id}>
              {message.sender === "user" ? (
                <div className=" text-[12px] text-gray-800 w-[100%] my-8 justify-between pr-[5%] flex">
                  <div className=" text-[12px] w-[35%]"></div>
                  <div className=" text-[12px]  text-gray-800 md:max-w-[65%] p-2 bg-[#e7e4e3] rounded-md px-5 ">
                    {message.text}
                  </div>
                </div>
              ) : (
                <div>{message.text}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="h-[95px] w-[100%] bg-gray-100 flex flex-col items-center justify-between py-2 relative text-white">
        <div className="w-[100%] flex items-center text-white">
          {isPicker && (
            <motion.div
              animate={{ y: [500, 0] }}
              transition={{ ease: "easeOut", duration: 0.6 }}
              className="fixed bottom-[75px]"
            >
              <Picker onEmojiClick={EmojiClick} />
            </motion.div>
          )}
          <form
            onSubmit={handleSubmit}
            className="w-[100%] duration-300 flex flex-col items-center text-black font-semibold text-[14px] absolute bottom-0 py-2"
          >
            <textarea
              ref={textinputRef}
              value={text}
              onChange={autoResize}
              placeholder="Type a new message"
              id="center-placeholder"
              className="w-[88%] h-[50px] placeholder:text-gray-600 placeholder:font-normal placeholder:text-[15px] placeholder:mt-2 rounded-sm border pt-2 max-h-[200px]  px-3 text-black text-[14px]  "
            />
            <div className="flex justify-between w-[88%] items-end mt-1">
              <div className="w-[100%] h-5 flex space-x-2 items-end px-4">
                <GiPaperClip
                  size={18}
                  className="text-gray-800 hover:text-black cursor-pointer"
                />
                {/* {text} */}
                <BiSmile
                  onClick={() => setisPicker(!isPicker)}
                  size={18}
                  className="text-gray-800 hover:text-black cursor-pointer"
                />
              </div>
              <button type="submit" className="text-black">
                <AiOutlineSend size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatTalk;
