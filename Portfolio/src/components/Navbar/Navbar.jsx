import React, { useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    //check scroll and change navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)   // lower threshold
        }

        handleScroll() // run once on mount

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);
    const menuItems = [
        { id: 'about', label: "About" },
        { id: 'skills', label: "Skills" },
        // { id: 'experience', label: "Experience" },
        { id: 'work', label: "Projects" },
        { id: 'education', label: "Education" },
    ]
    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId)
        setIsOpen(false)

        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw]
  ${isScrolled
                ? "bg-[#020617]/70 backdrop-blur-md shadow-md"
                : "bg-[#020617]/30 backdrop-blur-sm"}
`}>
            <div className='text-white py-5 flex justify-between items-center'>
                <div className='text-lg font-semibold cursor-pointer'>

                    <span className='text-[#8245ec]'>&lt;</span>
                    <span className='text-white'>Utkarsh</span>
                    <span className='text-[#8245ec]'>/</span>
                    <span className='text-white'>Singh</span>
                    <span className='text-[#8245ec]'>&gt;</span>

                </div>
                {/*Dekstop Menu */}
                <ul className='hidden md:flex space-x-8 text-gray-300 '>
                    {menuItems.map((item) => (
                        <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? 'text-[#8245ec]' : ''}`}>
                            <button className='cursor-pointer' onClick={() => handleMenuItemClick(item.id)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
                {/* //social media icons */}
                <div className='hidden md:flex space-x-4'>
                    <a href="https://github.com/Utkarsh0983" target="_blank" rel="noopener noreferrer" className='text-gray-500 hover:text-[#45ec71]'>
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/utkarsh-singh05" target="_blank" rel="noopener noreferrer" className='text-gray-500 hover:text-[#1759dd]'>
                        <FaLinkedinIn size={24} />
                    </a>
                </div>
                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    {
                        isOpen ? (
                            <FiX className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(false)} />
                        ) : (
                            <FiMenu className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(true)} />
                        )
                    }
                </div>
            </div>
            {/* Mobile menu items */}
            {
                isOpen && (
                    <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#020617] bg-opacity-50 backdrop-blur-lg z-50 rounded-lg shadow-lg'>
                        <ul className='flex flex-col items-center space-y-4 py-3 text-gray-300'>
                            {menuItems.map((item) => (
                                <li key={item.id} className={`cursor-pointer hover:text-white ${activeSection === item.id ? 'text-[#8245ec]' : ''}`} >
                                    <button className='cursor-pointer' onClick={() => handleMenuItemClick(item.id)}>
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                            <div className='flex space-x-4'>
                                <a href="https://github.com/Utkarsh0983" target="_blank" rel="noopener noreferrer" className='text-gray-500 hover:text-[#45ec71]'>
                                    <FaGithub size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/utkarsh-singh05" target="_blank" rel="noopener noreferrer" className='text-gray-500 hover:text-[#1759dd]'>
                                    <FaLinkedinIn size={24} />
                                </a>

                            </div>

                        </ul>

                    </div>

                )}
        </nav>
    )
}

export default Navbar
