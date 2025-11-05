import Header from "./components/Header";
import About from "./components/About";
import Methodology from "./components/Methodology";
import Programs from "./components/Programs";
import Campuses from "./components/Campuses";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <About />
        <Methodology />
        <Programs />
        <Campuses />
      </main>

      <Footer />
    </>
  );
}

export default App;
