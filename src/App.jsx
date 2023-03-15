import { Hero, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-[320px] md:w-[768px] lg:w-[1024px] px-5 mx-auto">
        <Hero />
      </div>
    </>
  );
}

export default App;
