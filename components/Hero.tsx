export default function Hero() {
  const icons = ["facebook", "twitter", "instagram", "linkedin"];
  return (
    <main className="grid-container bg-Hero bg-clip-border bg-cover h-screen hero" id="Home">
      <div className="col-start-2 col-end-3  max-w-xs -mt-20 px-3 ">
        <h1 className="text-3xl font-semibold mb-4">
          The purpose is to teach, bring learning to people
        </h1>
        <p className=" mb-10 text-gray-800">
          There are many variations of passage available, but the majority have
          suffered alteration in some form, by injected humour, or randomised
          words which don't look even slightly believable.
        </p>

        <button className="p-3 px-8 text-white rounded-full bg-pink hover:bg-darkPink">
          Read More
        </button>
        <div className="mt-5 flex gap-4">
          {icons.map((icon) => (
            <div
              className="p-2 hover:bg-gray-200 rounded-full cursor-pointer grid place-content-center"
              key={icon}
            >
              <box-icon name={icon} color="#e2899e" type="logo"></box-icon>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
