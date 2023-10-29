import { Section, Picture } from '../../semantics/index';
import { StarsCanvas } from '../../visuals/index';

const ScreenLoader = () => (
  <>
    <Section className="flex items-center justify-center h-screen bg-[rgb(36,36,36)] text-white flex-col">
      <StarsCanvas />
      <>
        <div className="loader" />
      </>
      <Picture
        className={`
          relative transition-all select-none animate-pulse h-52 w-52
        `}
      >
        <img
          className="absolute mt-2 transition-all select-none animate-pulse h-52 w-52"
          src="/assets/images/MyLogo.png"
          alt="Loading..."
          loading="eager"
          width={200}
          height={200}
        />
      </Picture>
      <div id="universe">
        <div id="galaxy">
          <div className="circle" />
          <div className="circle2" />
          <div className="circle3" />
          <div id="orbit0">
            <div id="pos0">
              <div id="dot0" />
            </div>
          </div>
          <div id="orbit1">
            <div id="pos1">
              <div id="dot1" />
            </div>
          </div>
          <div id="orbit2">
            <div id="pos2">
              <div id="dot2" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  </>
);

export default ScreenLoader;
