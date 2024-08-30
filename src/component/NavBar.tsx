import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";

const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "#",
    },
    {
      id: 2,
      title: "Categories",
      link: "#",
    },
    {
      id: 3,
      title: "Blog",
      link: "#",
    },
    {
      id: 4,
      title: "About",
      link: "#",
    },
    {
      id: 5,
      title: "Contact",
      link: "#",
    },
  ];

const NavBar = () => {
  return (
    <nav className="text-white  py-8">
         <div className="container flex justify-between items-center">
            {/* log */}
            <div>
                <img src="https://raw.githubusercontent.com/dilshad-ahmed/creative-fanta/main/src/assets/logo.png" alt="No image is found" className="max-w-[100px] invert"  />
            </div>
            {/* menusection */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-4  ">
                   {NavbarMenu.map((item)=>(
                    <li key={item.id}><Link to={item.link} className="inline-block text-base font-semibold py-2 px-3 uppercase">{item.title}</Link></li>
                   ))}
                   <button className="text-xl ml-14"> <FaRegUser/> </button>
                </ul>
            </div>
            {/* Hamburgsection */}
            <div className="md:hidden">
                <GiHamburgerMenu className="text-3xl cursor-pointer" />
            </div>

         </div>
    </nav>
  )
}

export default NavBar