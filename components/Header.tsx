import Image from "next/image";
import { useContext } from "react";
import { MenuContext } from "../ContextAPI/menuContext";

export default function Header() {
  const { openMenu, setOpenMenu } = useContext(MenuContext);
  const nav = [
    {
      name: "Home",
      id: "Home",
    },
    {
      name: "About",
      id: "About",
    },
    {
      name: "Features",
      id: "Features",
    },
    {
      name: "Courses",
      id: "Courses",
    },
    {
      name: "Offers",
      id: "Offers",
    },
    {
      name: "Contact",
      id: "Contact",
    },
  ];
  return (
    <header
      className="grid-container border-b z-50 sticky top-0 bg-white "
      onClick={() => {
        setOpenMenu((prev) => !prev);
        console.log(openMenu);
      }}
    >
      {openMenu && (
        <div className="col-start-1 md:hidden  col-end-4">
          <div className="top-16 border-t border-b shadow-xl absolute w-full  text-center  p-6 bg-white ">
            {nav.map(({ name, id }) => (
              <a href={`#${id}`} key={name}>
                <nav className="cursor-pointer navigation my-4 text-gray-600 hover:text-darkPink ">
                  {name}
                </nav>
              </a>
            ))}
          </div>
        </div>
      )}
      <div className="col-start-2 col-end-3  p-3  flex  justify-between items-center ">
        <div className="">
          <a href="#">
            <Image src="/images/logo.png" width={80} height={40} alt="logo" />
          </a>
        </div>
        <div className="hidden md:flex">
          {nav.map(({ name, id }) => (
            <nav className="ml-8  text-gray-600 hover:text-darkPink" key={id}>
              <a href={`#${id}`}>{name}</a>
            </nav>
          ))}
        </div>
        <div className="md:hidden grid place-content-center cursor-pointer">
          <box-icon name="menu-alt-right" color="#e2899e"></box-icon>
        </div>
      </div>
    </header>
  );
}
