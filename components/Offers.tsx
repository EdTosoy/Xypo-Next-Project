import Image from "next/image";

export default function Offers() {
  return (
    <div className="relative md:h-80vh pt-20 pb-10" id="Offers">
      <div className="h-72 hidden md:block absolute max-w-xl lg:max-w-3xl md:w-full -z-10 left-0">
        <Image src="/images/offer.png" width={800} height={600} alt="offer" />
      </div>
      <section className="grid-container  md:pt-20  ">
        <div className="col-start-2 grid  md:justify-end content-center col-end-3 md:text-right  px-3 ">
          <div className="max-w-sm ">
            <h1 className="text-3xl font-semibold mb-7">
              Limitless learning,
              <br /> limitless possibilities{" "}
            </h1>
            <p className=" mb-10 text-gray-800">
              There are many variations of passage available, but the majority
              have suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable.
            </p>
            <button className="p-3 px-8 rounded-full border-2 text-darkPink border-darkPink hover:bg-darkPink hover:text-white">
              Start Month Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
