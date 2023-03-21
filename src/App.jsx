import { About, Hero, Navbar, Work } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-[320px] md:w-[768px] lg:w-[1024px] px-5 mx-auto">
        <Hero />
        <About />
        <Work />
      </div>
    </>
  );
}

export default App;
