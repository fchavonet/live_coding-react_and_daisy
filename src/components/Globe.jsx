import { useEffect, useRef, useState } from "react";
import { useSpring } from "react-spring";
import createGlobe from "cobe";

function Globe() {
  // References.
  const canvas = useRef();
  const isPointerActive = useRef(null);
  const pointerMovement = useRef(0);
  const globeInstance = useRef(null);

  // Theme state.
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Rotation animation.
  const [{ rotationSpring }, springAPI] = useSpring(() => ({
    rotationSpring: 0,
    config: { mass: 1, tension: 280, friction: 40, precision: 0.001 },
  }));

  // Listen to theme toggle.
  useEffect(() => {
    const themeToggle = document.querySelector(".theme-controller");

    const updateTheme = () => {
      const checked = themeToggle?.checked;
      setIsDarkMode(checked);
    };

    themeToggle?.addEventListener("change", updateTheme);
    updateTheme();

    return () => {
      themeToggle?.removeEventListener("change", updateTheme);
    };
  }, []);

  // Initialize globe.
  useEffect(() => {
    let rotationAngle = 0;
    let canvasWidth = 0;

    const handleResize = () => {
      if (canvas.current) canvasWidth = canvas.current.offsetWidth;
    };

    // Handle window resize.
    window.addEventListener("resize", handleResize);
    handleResize();

    // Destroy previous instance if any.
    if (globeInstance.current) globeInstance.current.destroy();

    // Holberton red color.
    const holbertonRed = [1.0, 0.12, 0.1];

    // Campus markers.
    const markers = [
      { location: [40.4093, 49.8671], size: 0.05, color: holbertonRed },
      { location: [44.8378, -0.5792], size: 0.05, color: holbertonRed },
      { location: [30.0444, 31.2357], size: 0.05, color: holbertonRed },
      { location: [47.322, 5.0415], size: 0.05, color: holbertonRed },
      { location: [43.433, 6.737], size: 0.05, color: holbertonRed },
      { location: [37.1773, -3.5986], size: 0.05, color: holbertonRed },
      { location: [-26.2041, 28.0473], size: 0.05, color: holbertonRed },
      { location: [48.0656, -0.7733], size: 0.05, color: holbertonRed },
      { location: [50.6292, 3.0573], size: 0.05, color: holbertonRed },
      { location: [-29.3151, 27.4869], size: 0.05, color: holbertonRed },
      { location: [48.8566, 2.3522], size: 0.05, color: holbertonRed },
      { location: [-20.1669, 57.5023], size: 0.05, color: holbertonRed },
      { location: [48.1173, -1.6778], size: 0.05, color: holbertonRed },
      { location: [46.3722, 6.4791], size: 0.05, color: holbertonRed },
      { location: [41.3275, 19.8189], size: 0.05, color: holbertonRed },
      { location: [43.6047, 1.4442], size: 0.05, color: holbertonRed },
      { location: [36.8065, 10.05815], size: 0.05, color: holbertonRed },
      { location: [20.6597, -103.3496], size: 0.05, color: holbertonRed },
      { location: [19.4326, -99.1332], size: 0.05, color: holbertonRed },
      { location: [25.7617, -80.1918], size: 0.05, color: holbertonRed },
      { location: [20.9674, -89.5926], size: 0.05, color: holbertonRed },
      { location: [40.7128, -74.006], size: 0.05, color: holbertonRed },
      { location: [18.4655, -66.1057], size: 0.05, color: holbertonRed },
      { location: [10.9639, -74.7964], size: 0.05, color: holbertonRed },
      { location: [4.711, -74.0721], size: 0.05, color: holbertonRed },
      { location: [3.4516, -76.532], size: 0.05, color: holbertonRed },
      { location: [14.6349, -90.5069], size: 0.05, color: holbertonRed },
      { location: [-12.0464, -77.0428], size: 0.05, color: holbertonRed },
      { location: [6.2442, -75.5812], size: 0.05, color: holbertonRed },
      { location: [-34.9011, -56.1645], size: 0.05, color: holbertonRed },
      { location: [8.9824, -79.5199], size: 0.05, color: holbertonRed },
      { location: [-0.1807, -78.4678], size: 0.05, color: holbertonRed },
      { location: [33.8938, 35.5018], size: 0.05, color: holbertonRed },
      { location: [-37.8136, 144.9631], size: 0.05, color: holbertonRed },
      { location: [24.7136, 46.6753], size: 0.05, color: holbertonRed },
      { location: [-33.8688, 151.2093], size: 0.05, color: holbertonRed },
    ];

    // Create globe.
    globeInstance.current = createGlobe(canvas.current, {
      devicePixelRatio: 2,
      width: canvasWidth * 2,
      height: canvasWidth * 2,
      phi: 0,
      theta: 0.3,
      scale: 1.2,
      dark: isDarkMode ? 1 : 0,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: holbertonRed,
      glowColor: isDarkMode ? [0.25, 0.25, 0.25] : [1.25, 1.25, 1.25],
      markers,
      onRender: (state) => {
        if (!isPointerActive.current) rotationAngle += 0.005;

        state.phi = rotationAngle + rotationSpring.get();

        state.width = canvasWidth * 2;
        state.height = canvasWidth * 2;
      },
    });

    // Fade-in animation.
    setTimeout(() => {
      if (canvas.current) canvas.current.style.opacity = "1";
    }, 300);

    // Cleanup.
    return () => {
      globeInstance.current?.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [isDarkMode, rotationSpring]);

  return (
    <div className="relative w-full max-w-[600px] mx-auto mb-20 flex aspect-square  items-center justify-center">
      <canvas
        className="w-full h-full cursor-grab opacity-0 transition-opacity duration-1000 ease-in-out"
        ref={canvas}

        onPointerDown={(event) => {
          isPointerActive.current = event.clientX - pointerMovement.current;
          canvas.current.style.cursor = "grabbing";
        }}

        onPointerUp={() => {
          isPointerActive.current = null;
          canvas.current.style.cursor = "grab";
        }}

        onPointerOut={() => {
          isPointerActive.current = null;
          canvas.current.style.cursor = "grab";
        }}

        onMouseMove={(event) => {
          if (isPointerActive.current !== null) {
            const delta = event.clientX - isPointerActive.current;
            pointerMovement.current = delta;
            springAPI.start({ rotationSpring: delta / 200 });
          }
        }}

        onTouchMove={(event) => {
          if (isPointerActive.current !== null && e.touches[0]) {
            const delta = event.touches[0].clientX - isPointerActive.current;
            pointerMovement.current = delta;
            springAPI.start({ rotationSpring: delta / 100 });
          }
        }}
      />
    </div>
  );
}

export default Globe;