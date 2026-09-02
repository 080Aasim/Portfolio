import DotField from "./DotField";
import "./Home.css";
import TextPressure from "./TextPressure";
import ScrambledText from "./ScrambledText";
import ShinyText from "./ShinyText";

function Home() {
  return (
    <div className="Home overflow-hidden">
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          zIndex: "0",
        }}
      >
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#A855F7"
          gradientTo="#B497CF"
          glowColor="#120F17"
        />
      </div>
      <div className="intro z-10">
        {/* <img src="/src/assets/aasim.png" alt="" className="img" /> */}
        <div className="poster-name" aria-hidden="true">
          AASIM AKHTAR
        </div>
        <div className="img backImg"></div>
        <div className="text">
          <ScrambledText
            className="scrambled-text-demo"
            radius={40}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            <p className=" text-black font-medium text-2xl mt-4">
              I build robust backend systems and APIs <br /> that make
              applications fast, reliable, and scalable.
            </p>
            {/* <h1 className=" text-black">I’m Aasim, a Full Stack Developer.</h1> */}
          </ScrambledText>
          <div style={{ position: "relative", height: "fit-content" }}>
            <TextPressure
              text="I’m Aasim, a Backend Developer."
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#000000"
              strokeColor="#5227FF"
              minFontSize={24}
            />
          </div>
          <h1 className="main-line"></h1>
          <div className="flex gap-4 items-center justify-center ">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              <ShinyText
                text="View Resume"
                className="text-2xl font-serif max-[480px]:text-lg"
                speed={2}
                delay={0}
                color="#6b7280"
                shineColor="#000000"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </a>

            <a
              href="/resume.pdf"
              download="Aasim-Akhtar-Resume.pdf"
              className="resume-btn"
            >
              <ShinyText
                text="Download Resume"
                className="text-2xl font-serif max-[480px]:text-lg"
                speed={2}
                delay={0}
                color="#6b7280"
                shineColor="#000000"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
