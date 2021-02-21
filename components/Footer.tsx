export default function Footer() {
  const footerLink = [
    {
      title: "About Us",
      sub1: "Request a Demo",
      sub2: "FAQ",
    },
    {
      title: "Product ",
      sub1: "our plans",
      sub2: "Free Trial",
    },
    {
      title: "Support ",
      sub1: "features ",
      sub2: "contact us ",
    },
    {
      title: "Explore ",
      sub1: "find a nonprofit",
      sub2: "corporate solutions",
    },
  ];

  return (
    <footer className="grid-container">
      <div className="col-start-2 col-end-2 border-t border-darkPink pt-20  grid grid-cols-2 md:grid-cols-4 ">
        {footerLink.map(({ title, sub1, sub2 }, index) => (
          <div className="mb-4" key={index}>
            <h1 className="mb-4 text-darkPink font-semibold text-xl">
              {title}
            </h1>
            <p className="mb-2 hover:text-darkPink cursor-pointer capitalize">
              {sub1}
            </p>
            <p className="mb-2 hover:text-darkPink cursor-pointer capitalize">
              {sub2}
            </p>
          </div>
        ))}
      </div>
      <p className="col-start-1 mb-4 col-span-full text-center text-sm">
        CopyRight, All Right Reserved Xypo 2021
      </p>
    </footer>
  );
}
