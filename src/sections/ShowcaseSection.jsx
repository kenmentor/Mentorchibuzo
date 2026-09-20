import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const apexRef = useRef(null);
  const agentRef = useRef(null);
  const stefieRef = useRef(null);
  const oledRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      apexRef.current,
      agentRef.current,
      stefieRef.current,
      oledRef.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={apexRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Apex education platform" />
            </div>
            <div className="text-content">
              <h2>
                Apex — an education platform helping students study more
                effectively
              </h2>
              <p className="text-white-50 md:text-xl">
                Built with React, Next.js, Node.js & MongoDB — serving 3,000
                daily visitors and 2,000+ registered learners.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={agentRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Agent With Me rental application"
                />
              </div>
              <h2>Agent With Me — fully digital rental application</h2>
              <p className="text-white-50 md:text-base mt-2">
                100+ users onboard. React, Node.js & MongoDB.
              </p>
            </div>

            <div className="project" ref={stefieRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img
                  src="/images/project3.png"
                  alt="Stefie AI realtime translation engine"
                />
              </div>
              <h2>Stefie AI — realtime translation engine for conferences</h2>
              <p className="text-white-50 md:text-base mt-2">
                Live speech translation. Python, React & WebSockets.
              </p>
            </div>

            <div className="project" ref={oledRef}>
              <div className="image-wrapper bg-[#E8F5E9]">
                <img
                  src="/images/devices.png"
                  alt="Oled Studio accented audio generator"
                />
              </div>
              <h2>Oled Studio — realtime Nigerian-accented audio generator</h2>
              <p className="text-white-50 md:text-base mt-2">
                Natural accented voice synthesis. Python, React & Three.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
