export default function VTable() {
  return (
    <>
      <div>
        <div className="flex justify-end items-center">
          <label className="text-white font-semibold text-lg text-nowrap mr-4">
            NRO. SERIE
          </label>
          <input
            type="text"
            className="p-2 bg-crema rounded-lg outline-none transition-all opacity-80"
            disabled
          />
        </div>
        <div>table</div>
      </div>
    </>
  );
}
