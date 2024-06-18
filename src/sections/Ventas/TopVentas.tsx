import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function TopVentas() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-between text-white py-2 font-semibold flex-wrap items-center sm:gap-0 gap-2">
      <div className="sm:flex hidden">
        <button
          type="button"
          className="flex items-center hover:bg-verde-oscuro transition-all bg-verde-claro px-3 py-2 rounded-lg"
          onClick={handleBack}
        >
          <IoArrowBack />
          <span className="ml-0.5">Regresar</span>
        </button>
      </div>
    </div>
  );
}
