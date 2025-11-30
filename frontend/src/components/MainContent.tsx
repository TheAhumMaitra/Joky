  // Copyright (C)  2025   Ahum Maitra

  //   This program is free software: you can redistribute it and/or modify
  //   it under the terms of the GNU General Public License as published by
  //   the Free Software Foundation, either version 3 of the License, or
  //   (at your option) any later version.

  //   This program is distributed in the hope that it will be useful,
  //   but WITHOUT ANY WARRANTY; without even the implied warranty of
  //   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  //   GNU General Public License for more details.

  //   You should have received a copy of the GNU General Public License
  //   along with this program.  If not, see <https://www.gnu.org/licenses/>

  
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
