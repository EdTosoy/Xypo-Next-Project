import Image from "next/image";

export default function Header() {
  const nav = [
    {
      name: "Home",
      id: "",
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
    <header className="grid-container border-b z-50 sticky top-0 bg-white ">
      <div className="col-start-2 col-end-3  p-3  flex  justify-between items-center ">
        <div className="">
          <a href="#">
            <Image src="/images/logo.png" width={80} height={40} />
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
