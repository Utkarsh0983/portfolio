import React from 'react'
import { useRef } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    // Implement email sending logic here
    
    emailjs.sendForm('service_3lkkerl', "template_qv6gve7", form.current, "xJqHPzVdFv5O_6cd8")
    .then(
      () => {
        setIsSent(true);
        form.current.reset(); // Reset form fields after sending
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      },
      (error) => {
        console.error("Failed to send message:", error);
        toast.error("Failed to send message. Please try again later.", {        
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,   
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,  
          theme: "dark",
        });
      }

    )
  };
  return (
    <section id='contact' className='flex flex-col items-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] justify-center'>
      <ToastContainer />
       {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Contact</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Feel free to reach out to me for collaborations, inquiries, or just to say hello!
        </p>
      </div>
      {/* Contact Form */}
      
      <div className='w-full max-w-md mt-8 bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
        <h3 className='text-xl font-semibold text-white text-center'>Connect With Me</h3>
     

      <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4'>
        <input type="email" name='user_email' placeholder='Your Email' required className='w-full p-3 rounded-md border-gray-600 bg-[#131025] border text-white focus:outline-none focus:border-purple-500' />
        <input type="text" name='user_name' placeholder='Your Name' required className='w-full p-3 rounded-md border-gray-600 bg-[#131025] border text-white focus:outline-none focus:border-purple-500' />
         <input type="text" name='subject' placeholder='Subject' required className='w-full p-3 rounded-md border-gray-600 bg-[#131025] border text-white focus:outline-none focus:border-purple-500' />
        <textarea name='message' rows='4' placeholder='Your Message' required className='w-full p-3 rounded-md border-gray-600 bg-[#131025] border text-white focus:outline-none focus:border-purple-500'></textarea>
{/* send button */}
     <button
  type="submit"
  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
>
  Send
</button>
      </form>
       </div>
    </section>
  )
}

export default Contact
