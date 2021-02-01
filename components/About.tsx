import Image from "next/image";

export default function About() {
  return (
    <div className="relative md:pt-20 pb-10" id="About" >
      <div className="h-72 hidden md:block absolute  w-full -z-10 left-0">
        <Image src="/images/about.png" width={800} height={600} />
      </div>
      <section className="grid-container  md:pt-20  ">
        <div className="col-start-2 grid  md:justify-end content-center col-end-3 md:text-right  px-3 ">
          <div className="max-w-sm ">
            <h1 className="text-3xl font-semibold mb-4">About Us </h1>
            <p className=" mb-10 text-gray-800">
              There are many variations of passage available, but the majority
              have suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable.
            </p>
            <q className="text-xl block font-semibold mb-4">
              Learning is not attained by chance, it must be sought for with
              ardor and attended to with diligence
            </q>
            <cite className="text-darkPink">- Abigail Adams</cite>
          </div>
        </div>
      </section>
    </div>
  );
}
