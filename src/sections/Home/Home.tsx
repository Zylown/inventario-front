import { Link } from "react-router-dom";
import { MdOutlineSell } from "react-icons/md";
import { ImTable2 } from "react-icons/im";
import { IoDocumentOutline } from "react-icons/io5";
import { FaBoxes } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col sm:gap-20 gap-12 flex-wrap justify-center sm:h-screen">
      <div className="text-center text-[#ffffff]">
        <h1 className="sm:text-5xl sm:pt-0 pt-8 text-3xl font-semibold">
          Control de inventario
        </h1>
      </div>
      <div className="flex flex-col">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-4">
          <li className="flex flex-col items-center">
            <Link
              className="text-center p-4 items-center flex flex-col hover:scale-110 transition-all duration-300"
              to={""}
            >
              <div className="mb-4 bg-[#044343] rounded-full p-6">
                <MdOutlineSell className="md:text-7xl text-4xl text-[#E4E4E4]" />
              </div>
              <p className="text-[#ffffff] text-2xl font-semibold">Ventas</p>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link
              className="text-center p-4 items-center flex flex-col hover:scale-110 transition-all duration-300"
              to={"/inventario"}
            >
              <div className="mb-4 bg-[#044343] rounded-full p-6">
                <FaBoxes className="md:text-7xl text-4xl text-[#E4E4E4]" />
              </div>
              <p className="text-[#ffffff] text-2xl font-semibold">
                Inventario
              </p>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link
              className="text-center p-4 items-center flex flex-col hover:scale-110 transition-all duration-300"
              to={"/kardex"}
            >
              <div className="mb-4 bg-[#044343] rounded-full p-6">
                <ImTable2 className="md:text-7xl text-4xl text-[#E4E4E4]" />
              </div>
              <p className="text-[#ffffff] text-2xl font-semibold">Kardex</p>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link
              className="text-center p-4 items-center flex flex-col hover:scale-110 transition-all duration-300"
              to={""}
            >
              <div className="mb-4 bg-[#044343] rounded-full p-6">
                <IoDocumentOutline className="md:text-7xl text-4xl text-[#E4E4E4]" />
              </div>
              <p className="text-[#ffffff] text-2xl font-semibold">Registros</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

/*

                <ImTable2 /> Kardex

                <IoDocumentOutline /> Registros
*/
