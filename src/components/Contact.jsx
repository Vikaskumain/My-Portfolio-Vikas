
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
  const [from_name, setFromName] = useState("");
  const [from_email, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  
  const ShowTostclick =()=>{
    

    if (!from_name || !from_email || !message) {
      toast.error("Please fill out all fields!😞😓");
      return;
    } else {
      toast.success("Form Submitted Successfully!😍🤗");
    }

    
  }
   
  const sendEmail = (e) => {
    e.preventDefault();
  
  
    emailjs
      .sendForm('service_8mczjc1', 'template_6lho96s', form.current, {
        publicKey: '9Q7cqWlN_d6x8ljFt',
      })
      .then(
        () => {
          setFromName("");
          setFromEmail("");
          setMessage("");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    

  };


  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            ref={form} onSubmit={sendEmail} className=" flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              required
             value={from_name}
             onChange={(e)=>(setFromName(e.target.value))}
              
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="from_email"
              placeholder="Enter your email"
              required
              value={from_email}
              onChange={(e)=>(setFromEmail(e.target.value))}
              
              
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              value={message}
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button   required  type="submit" onClick={ShowTostclick}  className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300  ">
              Let's talk 
            </button>
            <ToastContainer  />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
