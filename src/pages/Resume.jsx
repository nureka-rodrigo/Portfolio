const Resume = () => {
    const pdfPath = "Resume-Nureka-Rodrigo.pdf";

    return (
        <>
            <embed
                src={pdfPath}
                type="application/pdf"
                width="100%"
                className="min-h-screen"
            />
        </>
    );
};

export default Resume;
