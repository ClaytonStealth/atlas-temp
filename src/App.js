import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import TopBar from "./TopBar";
import Hero from "./Hero";
import Contact from "./Contact";
import options from "./lib/Options";

function App() {
  const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

  return (
    <>
    <TopBar />
      {init && (<Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            className=""
            />)}
            <Hero className=""/>
            <Contact className=""/>
    </>
  );
}

export default App;
