import Image from "next/image";

export default function Courses() {
  return (
    <section className="grid-container   md:pt-20 md:my-20  " id="Courses">
      <div className="col-start-2 relative md:grid grid-cols-2 col-end-3 text-left  px-3 ">
        <div className="max-w-sm">
          <h1 className="text-3xl font-semibold mb-4 mt-10">
            Browse our top <br/> courses
          </h1>
          <p className=" mb-10 text-gray-800">
            There are many variations of passage available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable.
          </p>
          
          <button className="p-3 px-8 rounded-full border-2 text-darkPink border-darkPink hover:bg-darkPink hover:text-white">
          View All Courses
        </button>
        </div>
        <div className="h-72 hidden md:block absolute top-3.5 right-0 -z-10 left-2/4 ">
          <Image src="/images/course.png" width={600} height={400} alt="course" />
        </div>
      </div>
    </section>
  );
}
