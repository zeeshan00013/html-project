import Home from "./pages/Home";
import Health from "./pages/Health";
import Product from "./pages/Product";
import BestSeller from "./pages/BestSeller";
import Footer from "./pages/Footer";
import EverydayWonders from "./pages/EverydayWonders";
import { Touch } from "./pages/Touch";
import Variety from "./pages/Variety";
import Story from "./pages/Story";

function App() {
  return (
    <>
      <Home />
      <Health />
      <BestSeller />
      <Product />
      <Variety />

      <Touch />
      <Story />
      <EverydayWonders />
      <Footer />
    </>
  );
}

export default App;
