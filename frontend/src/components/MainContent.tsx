import PixelBlast from "./PixelBlast";
import JokePage from "./GetJoke";

export default function MainContent() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "700px",
          position: "relative",
          bottom: 190,
        }}
      >
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#227303"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
        <div className="absolute flex justify-center items-center p-20 inset-30 top-89">
          <JokePage />
        </div>
      </div>
    </>
  );
}
