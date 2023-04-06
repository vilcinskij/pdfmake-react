import logo from "./logo.svg";
import "./App.css";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
// import { useEffect, useState } from "react";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function App() {
  var docInfo = {
    info: {
      title: "tested PDF",
      author: "vilcinskij.com",
      subject: "subject",
      keywords: "words",
    },
    pageSize: "A4",
    pageMargins: [50, 50, 30, 60],
    header: function (currentPage, pageCount) {
      return {
        text: currentPage.toString() + "from" + pageCount,
        alignment: "right",
        margin: [0, 30, 10, 50],
      };
    },
    footer: [
      {
        text: "нижний колонтитул",
        alignment: "center",
      },
    ],
    content: [
      {
        text: "ТЕКСТ ПАРАГРАФА",
      },
    ],
  };
  const [url, setUrl] = useState(null);

  const createPdf = () => {
    const pdfGenerator = pdfMake.createPdf(docInfo);
    pdfGenerator.download("cmr.pdf");
  };

  return (
    <div className="App">
      <button onClick={createPdf}>Generate PDF</button>
    </div>
  );
}

export default App;
