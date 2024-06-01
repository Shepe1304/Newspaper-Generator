import React, { useState } from "react";
import "./Main.css";
import Choices from "../layouts/Choices";

const Main = () => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  const [n4, setN4] = useState(0);
  const [n5, setN5] = useState(0);
  const [n6, setN6] = useState(0);
  const [n7, setN7] = useState(0);
  const [n8, setN8] = useState(0);
  const [n9, setN9] = useState(0);
  const [n10, setN10] = useState(0);
  const [n11, setN11] = useState(0);
  const [n12, setN12] = useState(0);
  const [n13, setN13] = useState(0);
  const [n14, setN14] = useState(0);
  const [n15, setN15] = useState(0);
  const [n16, setN16] = useState(0);
  const [n17, setN17] = useState(0);
  const [n18, setN18] = useState(0);
  const [n19, setN19] = useState(0);

  const [firstGenerate, setFirstGenerate] = useState(false);

  const imgbg = "white";

  const Generate = () => {
    if (!firstGenerate) {
      setFirstGenerate(true);
    }

    let tmp1 = Math.floor(Math.random() * 21) + 50;
    let tmp2 = 85 - tmp1;
    setN1(tmp1);
    setN2(tmp2);

    tmp1 = Math.floor(Math.random() * 11) + 20;
    tmp2 = Math.floor(Math.random() * 21) + 35;
    let tmp3 = 100 - 5 - tmp1 - tmp2;
    setN3(tmp1);
    setN4(tmp2);
    setN5(tmp3);

    tmp1 = Math.floor(Math.random() * 11) + 30;
    tmp2 = 100 - 10 - 8 - tmp1;
    setN6(tmp1);
    setN7(tmp2);

    tmp1 = Math.floor(Math.random() * 11) + 30;
    tmp2 = 100 - tmp1;
    tmp3 = Math.floor(Math.random() * 2);
    if (tmp3 == 1) {
      setN8(tmp1);
      setN9(tmp2);
    } else {
      setN8(tmp2);
      setN9(tmp1);
    }

    tmp1 = Math.floor(Math.random() * 11) + 25;
    tmp2 = 100 - 12 - tmp1;
    setN10(tmp1);
    setN11(tmp2);

    tmp1 = Math.floor(Math.random() * 11) + 30;
    tmp2 = 100 - tmp1;
    tmp3 = Math.floor(Math.random() * 2);
    if (tmp3 == 1) {
      setN12(tmp1);
      setN13(tmp2);
    } else {
      setN12(tmp2);
      setN13(tmp1);
    }

    tmp1 = Math.floor(Math.random() * 19) + 15;
    tmp3 = Math.floor(Math.random() * 19) + 15;
    tmp2 = 100 - tmp1 - tmp3;
    setN14(tmp1);
    setN15(tmp2);
    setN16(tmp3);

    tmp1 = Math.floor(Math.random() * 19) + 15;
    tmp3 = Math.floor(Math.random() * 19) + 15;
    tmp2 = 100 - tmp1 - tmp3;
    setN17(tmp1);
    setN18(tmp3);
    setN19(tmp2);
  };

  const [showChoices, setShowChoices] = useState(false);
  const HandleExitClicked = () => {
    setShowChoices(!showChoices)
  };

  return (
    <div className="main">
      {showChoices ? <Choices HandleExitClicked={HandleExitClicked}/> : null}
      {firstGenerate ? (
        <div className="newspaper" style={{ border: "2px solid black" }}>
          <div
            className="newspaper--first_row"
            style={{
              height: "12%",
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid black",
            }}
          >
            <textarea className="newspaper--name">SHEPE PRESS</textarea>
            <textarea className="newspaper--slogan">
              The most honest newspaper in all of Sheepland
            </textarea>
          </div>
          <div
            className="newspaper--second_row"
            style={{ height: "3%", borderBottom: "1px solid black" }}
          >
            <div className="newspaper--date">
              <div contentEditable>12th</div>
              <div contentEditable>Aliozas Month</div>
              <div contentEditable>199 FE</div>
              {/* <textarea contentEditable>12th</textarea>
            <textarea contentEditable>Aliozas Month</textarea>
            <textarea contentEditable>199 FE</textarea> */}
            </div>
            <div className="newspaper--volume_number" contentEditable>
              Vol. 158
            </div>
            {/* <textarea className="newspaper--volume_number" contentEditable>
            Vol. 158
          </textarea> */}
          </div>
          <div className="newspaper--articles" style={{ height: `${n1}%` }}>
            {" "}
            {/* 50-80 */}
            <div
              className="newspaper--article_type1 newspaper--article"
              style={{ width: `${n14}%`, borderRight: "1px solid black" }}
            >
              <textarea
                className="title newspaper--article_type1_title"
                style={{ height: "5%", width: "98%" }}
              >
                TITLE
              </textarea>
              <div
                className="img_box newspaper--article_type1_img"
                style={{ height: `${n3}%` }}
                onClick={HandleExitClicked}
              >
                {" "}
                {/* 20-30 */}
                <img src="" alt="" className="newspaper--article_type1_img1" />
              </div>
              <textarea
                className="paragraph newspaper--article_type1_paragraph"
                style={{ height: `${n4}%`, width: "100%" }}
              >
                Paragraph
              </textarea>{" "}
              {/* 35-55 */}
              <div
                className="img_box newspaper--article_type1_img"
                style={{ height: `${n5}%` }}
                onClick={HandleExitClicked}
              >
                <img src="" alt="" className="newspaper--article_type1_img2" />
              </div>
            </div>
            <div
              className="newspaper--article_type2 newspaper--article"
              style={{ width: `${n15}%`, borderRight: "1px solid black" }}
            >
              <textarea
                className="title newspaper--article_type2_title"
                style={{ height: "10%", fontSize: "25px", width: "100%" }}
              >
                TITLE 2
              </textarea>
              <div
                className="img_box newspaper--article_type2_img"
                style={{ height: `${n6}%` }}
                onClick={HandleExitClicked}
              >
                {" "}
                {/* 30-40 */}
                <img src="" alt="" className="newspaper--article_type2_img1" />
              </div>
              <textarea
                className="subtitle newspaper--article_type2_subtitle"
                style={{ height: "8%", width: "100%" }}
              >
                SUBTITLE
              </textarea>
              <div
                className="newspaper--article_type2_paragraphs"
                style={{ height: `${n7}%` }}
              >
                {" "}
                {/* 42-52 */}
                <textarea
                  className="paragraph newspaper--article_type2_paragraph1"
                  style={{ width: "50%", width: "100%" }}
                >
                  Paragraph
                </textarea>
                <textarea
                  className="paragraph newspaper--article_type2_paragraph2"
                  style={{ width: "50%", width: "100%" }}
                >
                  Paragraph
                </textarea>
              </div>
            </div>
            <div
              className="newspaper--article_type3"
              style={{ width: `${n16}%` }}
            >
              <div
                className="newspaper--article_type3_article1 newspaper--article"
                style={{ height: `${n8}%` }}
              >
                {" "}
                {/* 20-80 */}
                <textarea
                  className="title newspaper--article_type3_title"
                  style={{ height: "12%", width: "100%" }}
                >
                  TITLE 3
                </textarea>
                <div
                  className="img_box newspaper--article_type3_img"
                  style={{ height: `${n10}%` }}
                  onClick={HandleExitClicked}
                >
                  {" "}
                  {/* 25-35 */}
                  <img
                    src=""
                    alt=""
                    className="newspaper--article_type3_img1"
                  />
                </div>
                <textarea
                  className="paragraph newspaper--article_type3_paragraph"
                  style={{ height: `${n11}%`, width: "100%" }}
                >
                  Paragraph
                </textarea>{" "}
                {/* 55-65 */}
              </div>
              <div
                className="newspaper--article_type3_article2 newspaper--article"
                style={{ height: `${n9}%` }}
              >
                {" "}
                {/* 20-80 */}
                <textarea
                  className="title newspaper--article_type3_title"
                  // style={{ height: `${n12}%` }}
                  style={{ height: "10%", width: "100%" }}
                >
                  TITLE 4
                </textarea>
                <textarea
                  className="paragraph newspaper--article_type3_paragraph"
                  style={{ height: "90%", width: "100%" }}
                >
                  Paragraph
                </textarea>
              </div>
            </div>
          </div>
          <div className="newspaper--ads" style={{ height: `${n2}%` }}>
            <div
              className="newspaper--ad"
              style={{ width: `${n17}%`, borderRight: "1px solid black" }}
            >
              <textarea
                className="title newspaper--ad_title"
                style={{
                  height: "15%",
                  width: "100%",
                  borderTop: "1px solid black",
                }}
              >
                Ad 1
              </textarea>
              <div
                className="img_box newspaper--ad_img"
                style={{ height: "40%" }}
                onClick={HandleExitClicked}
              >
                <img src="" alt="" />
              </div>
              <textarea
                className="paragraph newspaper--ad_paragraph"
                style={{ height: "45%", width: "100%" }}
              >
                Ad paragraph
              </textarea>
            </div>
            <div
              className="newspaper--ad"
              style={{
                width: `${n18}%`,
                borderRight: "1px solid black",
              }}
            >
              <textarea
                className="title newspaper--ad_title"
                style={{
                  height: "15%",
                  width: "100%",
                  borderTop: "1px solid black",
                }}
              >
                Ad 2
              </textarea>
              <div
                className="img_box newspaper--ad_img"
                style={{ height: "45%" }}
                onClick={HandleExitClicked}
              >
                <img src="" alt="" />
              </div>
              <textarea
                className="paragraph newspaper--ad_paragraph"
                style={{ height: "40%", width: "100%" }}
              >
                Ad paragraph
              </textarea>
            </div>
            <div
              className="newspaper--ad"
              style={{
                width: `${n19}%`,
              }}
            >
              <textarea
                className="title newspaper--ad_title"
                style={{
                  height: "15%",
                  width: "100%",
                  borderTop: "1px solid black",
                }}
              >
                Ad 3
              </textarea>
              <div
                className="img_box newspaper--ad_img"
                style={{ height: "40%" }}
                onClick={HandleExitClicked}
              >
                <img src="" alt="" />
              </div>
              <textarea
                className="paragraph newspaper--ad_paragraph"
                style={{ height: "45%", width: "100%" }}
              >
                Ad paragraph
              </textarea>
            </div>
          </div>{" "}
          {/* 0-30 */}
        </div>
      ) : (
        <div
          className="newspaper"
          style={{
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>
            CLICK BELOW BUTTON TO GENERATE A TEMPLATE
          </div>
        </div>
      )}
      <button onClick={Generate}>GENERATE</button>
    </div>
  );
};

export default Main;
