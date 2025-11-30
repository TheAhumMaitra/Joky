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


import Footer from "@/components/Footer";
import JokePage from "@/components/GetJoke";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import PixelBlast from "@/components/PixelBlast";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 h-2 backdrop-blur-md">
        <Header />
      </div>

      <main>
        <MainContent />
      </main>

      <div className="sticky bottom-0">
        <Footer />
      </div>
    </>
  );
}
