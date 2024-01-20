import down from "/images/down.gif"

const DownloadCv = () => {
  const pdfFileName = "MatheusReis-CV.pdf";

  const handleDownload = () => {
    const pdfPath = `/pdfs/${pdfFileName}`;
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfFileName;
    link.click();
  };

  return (
    <button
      className="rounded-md border bg-[#1f3a8b] hover:bg-blue-400 font-bold w-max p-2 flex items-center justify-center text-gray-900"
      onClick={handleDownload}
    >
      CURRICULUM
      <img src={down} width={20} height={20} />
    </button>
  );
};

export default DownloadCv;
