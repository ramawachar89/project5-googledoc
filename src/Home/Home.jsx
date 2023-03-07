import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Navbar1 from "../Navbar1/Navbar1";
import style from "./Home.module.css";
import DownloadIcon from '@mui/icons-material/Download';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Home() {
const[value,setValue]=useState('Untitled Document')


  function handleremoveFormat(color) {
    document.execCommand("removeFormat");
  }


    async function downloadFile() {
      const sheetContent = document.getElementById('edit');
      const canvas = await html2canvas(sheetContent, { dpi: 300 });
      const imageData = canvas.toDataURL("image/png", 1.0);
      const pdfDoc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: false,
      });
      pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST");
      pdfDoc.save(`${value}.pdf`);
    }
  
  

  return (
    <div className={style.main}>
      <Navbar1 
      setValue={setValue}
      value={value}
      />
      <Navbar
        handleremoveFormat={handleremoveFormat}
        downloadFile={downloadFile}
      />

      <div className={style.box} >
        <p id="edit" className={style.txt} 
      contentEditable={true}
        ></p>
    
      </div>
    <button onClick={ downloadFile}  className={style.floaticon}><DownloadIcon style={{fontSize:"35px",color:"white"}}/></button>
    </div>
  );
}

export default Home;
