import { createContext, useEffect, useState } from "react";

export const SizeProviderContext = createContext<{
  isMobile: boolean;
  isTablet: boolean;
}>({
  isMobile: false,
  isTablet: false,
});

const SizeProvider = ({ children }: { children: React.ReactNode }) => {
  const [device, setDevice] = useState({ isMobile: false, isTablet: false });

  const setSizes = () => {
    if (window.innerWidth <= 780 && window.innerWidth >= 480) {
      setDevice({ isMobile: false, isTablet: true });
    } else if (window.innerWidth <= 480) {
      setDevice({ isMobile: true, isTablet: false });
    } else {
      setDevice({ isMobile: false, isTablet: false });
    }
  };

  useEffect(setSizes, []);
  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(setSizes);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <SizeProviderContext.Provider value={{ ...device }}>
      {children}
    </SizeProviderContext.Provider>
  );
};

export default SizeProvider;
