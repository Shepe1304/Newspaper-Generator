import React, { useState } from "react";
import "./Main.css";

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

  const imgbg = "white";

  const Generate = () => {
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

  return (
    <div className="main">
      <div className="newspaper">
        <div
          className="newspaper--first_row"
          style={{ height: "12%", border: "1px solid black" }}
        >
          <div className="newspaper--name" contentEditable>
            SHEPE PRESS
          </div>
          <div className="newspaper--slogan" contentEditable>
            The most honest newspaper in all of Sheepland
          </div>
        </div>
        <div
          className="newspaper--second_row"
          style={{ height: "3%", border: "1px solid black" }}
        >
          <div className="newspaper--date">
            <div contentEditable>12th</div>
            <div contentEditable>Aliozas Month</div>
            <div contentEditable>199 FE</div>
          </div>
          <div className="newspaper--volume_number" contentEditable>
            Vol. 158
          </div>
        </div>
        <div className="newspaper--articles" style={{ height: `${n1}%` }}>
          {" "}
          {/* 50-80 */}
          <div
            className="newspaper--article_type1 newspaper--article"
            style={{ width: `${n14}%` }}
          >
            <div
              className="title newspaper--article_type1_title"
              style={{ height: "5%" }}
              contentEditable
            >
              TITLE
            </div>
            <div
              className="img_box newspaper--article_type1_img"
              style={{ height: `${n3}%` }}
            >
              {" "}
              {/* 20-30 */}
              <img src="" alt="" className="newspaper--article_type1_img1" />
            </div>
            <div
              className="paragraph newspaper--article_type1_paragraph"
              style={{ height: `${n4}%` }}
              contentEditable
            >
              Paragraph
            </div>{" "}
            {/* 35-55 */}
            <div
              className="img_box newspaper--article_type1_img"
              style={{ height: `${n5}%` }}
            >
              <img src="" alt="" className="newspaper--article_type1_img2" />
            </div>
          </div>
          <div
            className="newspaper--article_type2 newspaper--article"
            style={{ width: `${n15}%` }}
          >
            <div
              className="title newspaper--article_type2_title"
              style={{ height: "10%", fontSize: "25px" }}
              contentEditable
            >
              TITLE 2
            </div>
            <div
              className="img_box newspaper--article_type2_img"
              style={{ height: `${n6}%` }}
            >
              {" "}
              {/* 30-40 */}
              <img src="" alt="" className="newspaper--article_type2_img1" />
            </div>
            <div
              className="subtitle newspaper--article_type2_subtitle"
              style={{ height: "8%" }}
              contentEditable
            >
              SUBTITLE
            </div>
            <div
              className="newspaper--article_type2_paragraphs"
              style={{ height: `${n7}%` }}
            >
              {" "}
              {/* 42-52 */}
              <div
                className="paragraph newspaper--article_type2_paragraph1"
                style={{ width: "50%" }}
                contentEditable
              >
                Paragraph
              </div>
              <div
                className="paragraph newspaper--article_type2_paragraph2"
                style={{ width: "50%" }}
                contentEditable
              >
                Paragraph
              </div>
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
              <div
                className="title newspaper--article_type3_title"
                style={{ height: "12%" }}
                contentEditable
              >
                TITLE 3
              </div>
              <div
                className="img_box newspaper--article_type3_img"
                style={{ height: `${n10}%` }}
              >
                {" "}
                {/* 25-35 */}
                <img src="" alt="" className="newspaper--article_type3_img1" />
              </div>
              <div
                className="paragraph newspaper--article_type3_paragraph"
                style={{ height: `${n11}%` }}
                contentEditable
              >
                Paragraph
              </div>{" "}
              {/* 55-65 */}
            </div>
            <div
              className="newspaper--article_type3_article2 newspaper--article"
              style={{ height: `${n9}%` }}
            >
              {" "}
              {/* 20-80 */}
              <div
                className="title newspaper--article_type3_title"
                // style={{ height: `${n12}%` }}
                style={{ height: "10%" }}
                contentEditable
              >
                TITLE 4
              </div>
              <div
                className="paragraph newspaper--article_type3_paragraph"
                style={{ height: "90%" }}
                contentEditable
              >
                Paragraph
              </div>
            </div>
          </div>
        </div>
        <div className="newspaper--ads" style={{ height: `${n2}%` }}>
          <div
            className="newspaper--ad"
            style={{ width: `${n17}%`, borderRight: "1px solid black" }}
          >
            <div
              className="title newspaper--ad_title"
              style={{ height: "15%" }}
              contentEditable
            >
              Ad 1
            </div>
            <div
              className="img_box newspaper--ad_img"
              style={{ height: "40%" }}
            >
              <img src="" alt="" />
            </div>
            <div
              className="paragraph newspaper--ad_paragraph"
              style={{ height: "45%" }}
              contentEditable
            >
              Ad paragraph
            </div>
          </div>
          <div
            className="newspaper--ad"
            style={{
              width: `${n18}%`,
              borderLeft: "1px solid black",
              borderRight: "1px solid black",
            }}
          >
            <div
              className="title newspaper--ad_title"
              style={{ height: "15%" }}
              contentEditable
            >
              Ad 2
            </div>
            <div
              className="img_box newspaper--ad_img"
              style={{ height: "45%" }}
            >
              <img src="" alt="" />
            </div>
            <div
              className="paragraph newspaper--ad_paragraph"
              style={{ height: "40%" }}
              contentEditable
            >
              Ad paragraph
            </div>
          </div>
          <div
            className="newspaper--ad"
            style={{
              width: `${n19}%`,
              borderLeft: "1px solid black",
            }}
          >
            <div
              className="title newspaper--ad_title"
              style={{ height: "15%" }}
              contentEditable
            >
              Ad 3
            </div>
            <div
              className="img_box newspaper--ad_img"
              style={{ height: "40%" }}
            >
              <img src="" alt="" />
            </div>
            <div
              className="paragraph newspaper--ad_paragraph"
              style={{ height: "45%" }}
              contentEditable
            >
              Ad paragraph
            </div>
          </div>
        </div>{" "}
        {/* 0-30 */}
      </div>
      <button onClick={Generate}>GENERATE</button>
    </div>
  );
};

export default Main;
