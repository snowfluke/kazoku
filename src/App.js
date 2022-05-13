function App() {
  return (
    <div className="App print:hidden">
      <div className="absolute top-0 h-20 w-full pt-5 text-center bg-white z-20">
        <h1 className="text-3xl center">
          🩸 <b>Kazoku</b>, build your{" "}
          <span className=" text-red-500">bloodline.</span>
        </h1>
        <p className="mt-2 p-2 bg-yellow-200 rounded-md">
          ⚠️ Currently, there is no save or publish button. We'll continue to
          work on to make your genealogy stays on earth.
        </p>
      </div>
      <iframe
        className="absolute top-0"
        id="kaizoku"
        loading="eager"
        title="kazoku"
        src="https://www.familyecho.com/#"
        width={"100%"}
        height={"100%"}
      ></iframe>
      <div className="absolute bottom-0 h-20 w-full bg-white z-20 border-t-[1px] border-me p-2">
        <p>
          Don't forget to follow KB program for not making a wild forest ✌️
          Built so 😎 using React, Tailwindcss and FamilyEcho Display Engine.
        </p>
        <p>
          {" "}
          <a
            href="https://github.com/snowfluke"
            className=" text-red-500 font-bold"
          >
            @snowfluke
          </a>{" "}
          2022 - See more useful tools in my Github repos. Presented as
          information system's assignment.
        </p>
      </div>
    </div>
  );
}

export default App;
