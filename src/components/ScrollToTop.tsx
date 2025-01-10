import * as React  from "react";
import { useState , useEffect } from "react";

type ScrollToTopProps = {
  threshold?: number; 
  smooth?: boolean;   
  className?: string; 
  style?: React.CSSProperties;
};

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  threshold = 200,
  smooth = true,
  className,
  style,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  
  const handleScroll = () => {
    setIsVisible(window.scrollY > threshold);
  };

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={className}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 1000,
        width: "3.5rem",
        height: "3.5rem",
        borderRadius: "50%",
        backgroundColor: "#2563EB", 
        color: "#fff",
        border: "none",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.15)", 
        transition: "all 0.3s ease-in-out",
        ...style,
        
      }}
      aria-label="Scroll to top"
    >
      🡅
    </button>
  );
};

export default ScrollToTop;

