import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { styles } from "../styles"

import { Logo, MenuIcon, CloseIcon } from "../Assets"

const Navbar = (props) => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if(props.scroll) {
        if (scrollTop > 100) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 lg:h-[75px]
      ${
        scrolled ? "bg-[#151919] text-white transition-all duration-500 shadow-lg" : 
          !props.scroll ? "bg-[#151919] text-white shadow-lg" : "bg-transparent transition-all duration-500 text-white"
      }
      `}
    >
      <div className="w-full text-inherit flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          {/* <img src={logo} alt="logo" className=" w-16 h-16 object-contain" /> */}
          <p className="text text-2xl font-bold cursor-pointer flex">
            ICACSDF
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {props.menuItems.data.map((item) => (
            <li
              key={item._id}
              className={`hover:text-blue-500 text-[18px] font-medium cursor-pointer`}
            >
              <Link to={`/${item.href}`}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? CloseIcon : MenuIcon}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {props.menuItems.data.map((item) => (
                <li
                  key={item._id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]  ${location.pathname === item.href ? 'text-blue-500' : 'text-secondary'}`}
                >
                  <Link to={`/${item.href}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
