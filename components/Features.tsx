import Image from "next/image";
export default function Features() {
  const features = [
    {
      name: "Learn Anywhere ",
      image: "/images/pic-1.png",
      text: "Switch between your computer tables or mobile d device ",
    },
    {
      name: "Expert Teachers",
      image: "/images/pic-2.png",
      text: "Learn from industry experts who are passionate about teeaching",
    },
    {
      name: "Unlimited Access ",
      image: "/images/pic-3.png",
      text:
        "Choose what you'd like to learn from our extensive subscription library",
    },
  ];

  return (
    <section className="grid-container pt-20 pb-10" id="Features" >
      <main className="col-start-2 col-end-2 grid md:grid-cols-3 gap-4">
        {features.map(({ text, name, image }) => (
          <div className="bg-white rounded-lg p-4 border shadow-md text-center mb-10">
            <div className="">
              <Image src={image} width={150} height={100} alt={name} />
            </div>
            <h1 className="font-semibold text-xl mb-2">{name}</h1>
            <p>{text}</p>
          </div>
        ))}
      </main>
      <div className="col-start-2 col-end-3 mt-10 text-center">
        <button className="p-3 px-8 rounded-full border-2   bg-pink hover:bg-darkPink text-white">
          Start Free Trial
        </button>
      </div>
    </section>
  );
}
