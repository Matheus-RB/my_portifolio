const DownloadCv = () => {
  const pdfFileName = "Curriculum.pdf";

  const handleDownload = () => {
    const pdfPath = `/pdfs/${pdfFileName}`;
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfFileName;
    link.click();
  };

  return (
    <button
      className="rounded-md border bg-blue-900 w-max p-2"
      onClick={handleDownload}
    >
      Download CV
    </button>
  );
};

export default DownloadCv;
