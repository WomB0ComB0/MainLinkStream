import { useState, useEffect, Suspense } from 'react';
import { Header, Picture } from '../semantics/index';
import { BlackHole } from '../images/index';

const HeaderSection = () => {
  const [roles, setRoles] = useState<string[] | null>(null);
  const loopText = (text: string[]) => {
    let i = 0;
    const interval = setInterval(() => {
      setRoles([text[i]]);
      i = (i + 1) % text.length;
    }, 2000);
    return () => clearInterval(interval);
  };
  useEffect(() => {
    const text = ['Developer', 'Designer', 'Creator', 'Student'];
    loopText(text);
  }, []);
  return (
    <Header
      className={`
      w-full h-[90vh] relative flex flex-col justify-center items-center    
    `}
    >
      <Suspense
        fallback={
          <Picture
            className={`
            absolute h-full w-full
          `}
          >
            <BlackHole
              className={`
            
          `}
            />
          </Picture>
        }
      >
        <video autoPlay muted loop className="rotate-180 absolute  h-full w-full left-0 z-[1] object-cover ">
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      </Suspense>
      <div className="flex items-center justify-center">
        <h1 className="px-10 text-3xl font-semibold select-none md:text-5xl lg:text-6xl sm:text-4xl">
          <span className="mr-3">I am a</span>
          {!roles ? 'Developer' : roles}
        </h1>
      </div>
    </Header>
  );
};

export default HeaderSection;
