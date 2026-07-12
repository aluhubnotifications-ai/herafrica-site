import Nav from "./components/Nav";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Problem from "./components/Problem";
import Team from "./components/Team";
import Solution from "./components/Solution";
import Journey from "./components/Journey";
import Impact from "./components/Impact";
import Footer from "./components/Footer";
import { SandWave } from "./components/ui";

const DARK = "#0b1b3b";
const CREAM = "#fbf9f5";
const CREAM_B = "#f6efe4"; // About gradient bottom
const SAND = "#f7f2e9";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <SandWave from={DARK} to={CREAM} />
        <About />
        <SandWave from={CREAM_B} to={DARK} />
        <Mission />
        <SandWave from={DARK} to={SAND} />
        <Problem />
        <SandWave from={SAND} to={DARK} />
        <Team />
        <SandWave from={DARK} to={CREAM} />
        <Solution />
        <SandWave from={CREAM} to={DARK} />
        <Journey />
        <SandWave from={DARK} to={CREAM} />
        <Impact />
        <SandWave from={CREAM} to={DARK} />
      </main>
      <Footer />
    </>
  );
}
