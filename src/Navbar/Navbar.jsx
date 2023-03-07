import React, { useState, useRef } from "react";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";

import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import style from "./Navbar.module.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { icons, textPosition, textalign, Emoji,fontFamilyList } from "../ConstData/ConstData";

function Navbar(props) {

  const [show1, setShow1] = useState(false);
  const [show3, setShow3] = useState(false);

  const inputRef = useRef(null);
  
  function handleAlignment(element) {
    document.execCommand(element.action);
  }

  function handleColor(e) {
    document.execCommand("foreColor", "", e.target.value);
  }
  function handleFont(e) {
    document.execCommand("fontSize", "", e.target.value);
  }
  function handlebackgroundhighlight(e) {
    document.execCommand("backColor", "", e.target.value);
  }
  function handlePosition(element) {
    document.execCommand(element.action);
  }
  function handlefamily(e){
    document.execCommand("fontName", "", e.target.value);
  }


  function handleemoji(e) {

    if(e.target.value === 'smile'){
      document.execCommand("insertHTML", false, "&#128516");
    }
    if(e.target.value === 'angry'){
      document.execCommand("insertHTML", false, "&#128520");
    }
    if(e.target.value === 'love'){
      document.execCommand("insertHTML", false, "&#128525");
    }
    if(e.target.value === 'kiss'){
      document.execCommand("insertHTML", false, "&#128536");
    }
    if(e.target.value === 'thumup'){
      document.execCommand("insertHTML", false, "&#128077");
    }
    if(e.target.value === 'thumdown'){
      document.execCommand("insertHTML", false, "&#128078");
    }
   
  }
  function handleImageOpen() {
    inputRef.current.click()
  }
  function captureImage(event) {
    if (event.target.files[0] ) {
      console.log(event.target.files[0])
      document.execCommand("insertImage","",URL.createObjectURL(event.target.files[0]));
    }
  }


  return (
    <div className={style.main}>
      <span className={style.container1}>
        {textPosition.map((element) => (
          <span onClick={() => handlePosition(element)}>{element.icon}</span>
        ))}

        <span className={style.colorbox}>
          <ColorLensIcon
            style={{ fontSize: "19px",marginTop:'-0.5rem' }}
            onClick={() => setShow1(!show1)}
          />
          {show1 ? (
            <>
              <input
                className={style.inputbox}
                type="color"
                onChange={(e) => handleColor(e)}
              />
            </>
          ) : null}
        </span>
        <span className={style.colorbox}>
          <BorderColorIcon
            style={{ fontSize: "18px",marginTop:'-0.5rem'  }}
            onClick={() => setShow3(!show3)}
          />
          {show3 ? (
            <>
              <input
                className={style.inputbox}
                type="color"
                onChange={(e) => handlebackgroundhighlight(e)}
              />
            </>
          ) : null}
        </span>
      </span>

      <span className={style.container1}>
        <div className={style.fontsizecontainer}>
          {/* <AddReactionIcon
            style={{ fontSize: "18px", fontWeight: "400",marginTop:'-0.5rem'  }}
          /> */}
              <div className={style.fontlist}>
              <select onChange={(e) => handleemoji(e)}>
                <option>emojis</option>
                {Emoji.map((element) => (
                   <option >{element.icon}</option>
                ))}
                </select>
              </div>
          
        </div>
        <div>
          <AddPhotoAlternateIcon
          onClick={handleImageOpen}
            style={{ fontSize: "20", marginLeft: "7px",marginTop:'-0.5rem',fontWeight:'lighter' }}
          />
          <input 
          onChange={captureImage}
          hidden
          ref={inputRef}
          type="file"
          />
        </div>
      </span>

      <span className={style.container1}>
        <div className={style.fontsizecontainer}>

            <div className={style.fontlist}>
              <select onChange={(e) => handleFont(e)}>
              <option>1</option>
              {icons.map((element) => (
                  <option >{element.icon}</option>
              
              ))}
              </select>
            </div>
          
        </div>
      </span>

      <span className={style.container1}>
        {textalign.map((element) => (
          <p onClick={() => handleAlignment(element)}>{element.icon}</p>
        ))}
      </span>
    
      <span className={style.container1}>
        <p>Normal</p>
        <UnfoldMoreIcon onClick={props.handleremoveFormat} />
      </span>
      <span className={style.container1}>
        <TextFormatIcon style={{ fontSize: "21" }} />
        <FormatShapesIcon style={{ fontSize: "21" }} />
      </span>
      <span className={style.container1}>
      <div className={style.fontlist}>
              <select onChange={(e) => handlefamily(e)}>
              <option>san-sherif</option>
              {fontFamilyList.map((element) => (
                  <option >{element}</option>
              
              ))}
              </select>
            </div>
      </span>
    </div>
  );
}

export default Navbar;
