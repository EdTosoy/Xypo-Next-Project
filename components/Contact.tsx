import Image from "next/image";

export default function Contact() {
  return (
    <section className="grid-container mb-10  md:pt-20 md:my-20  " id="Contact">
      <div className="col-start-2 relative md:grid grid-cols-2 col-end-3 text-left  px-3 ">
        <div className="max-w-sm">
          <h1 className="text-3xl font-semibold mb-4 mt-10">
            Sign Up To Join <br /> Our Learning Community
          </h1>

          <form>
            <div className="mb-4 border-2 border-darkPink rounded-sm">
              <input
              className="p-2 w-full"
                type="text"
                name="name"
                id="name"
                aria-label="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-4 border-2 border-darkPink rounded-sm">
              <input
              className="p-2 w-full"
                type="email"
                name="email"
                id="email"
                aria-label="email"
                placeholder="Enter Your Email Here"
              />
            </div>
            <div className="mb-4">
              <input
              className="p-2 w-full border-2 border-darkPink rounded-sm "
                type="password"
                name="password"
                id="password"
                aria-label="password"
                placeholder="Password"
              />
            </div>
          </form>

          <button className="p-3 px-8 text-white rounded-full bg-pink hover:bg-darkPink">
            Sign Up
          </button>
        </div>
        <div className="h-72 hidden md:block absolute top-3.5 right-0 -z-10 left-2/4 ">
          <Image src="/images/contact.png" width={600} height={400} alt="contact" />
        </div>
      </div>
    </section>
  );
}
