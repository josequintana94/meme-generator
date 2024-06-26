import React from "react";
import Button from "../ui/Button";
import TextBox from "../ui/TextBox";
import SelectBox from "../ui/SelectBox";
import style from "./Meme.module.css";
import Preview from "./Preview";
import {sizeItems, fontItems} from "../../data/constants/constants";
import {MemeAction} from "../../data/enum";
import FileUpload from "../ui/FileUpload";
import {IinitialStateProps} from "../../data/interface";

interface IMemeProps {
  state: IinitialStateProps,
  dispatchContext: (type: MemeAction, payload: string) => void,
  downloadMomo: () => void,
  memoRef: React.RefObject<HTMLDivElement>,
}

const Meme = ({
  state,
  dispatchContext,
  downloadMomo,
  memoRef
}: IMemeProps) => {

  const isValidFileUploaded = (file: string) => {
    const validExtensions = ["png", "jpeg", "jpg", "gif"];
    const fileExtension = file.split("/")[1];
    return validExtensions.includes(fileExtension);
  };

  const FileUploadChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      if (isValidFileUploaded(e.target.files[0].type)) {
        dispatchContext(MemeAction.SetBackgroundImage, URL.createObjectURL(e.target.files[0]));
      }
    }
  });

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.headerContent}>
          <div className={style.headerText}>
            <h1>10GUY</h1>
            <p>Now on Solana</p>
            <p>[10] Guy (also known as &quot;Really High Guy&quot; and &quot;Stoner Stanley&quot;) is an advice
              animal image macro series featuring a photo of a young man who appears to be under the influence of marijuana.
              The captions typically portray stereotypical stoner behavior, similar to Stoner Dog, such as giving invalid answers to misunderstood
              questions and craving junk food. In April 2021, UK-based resident Connor Sinclair revealed himself to be the man depicted in 10 Guy
              after nearly a decade of anonymity.</p>
            <br></br>

            <button onClick={
              () => window.open("https://pump.fun/7bzfccb4jFt1JXqLAs96fQLrr21S4wCebVg8gADWpump", "_blank")
            }>Pump.Fun</button>
            <br></br>
            <br></br>

            <button onClick={
              () => window.open("https://x.com/10GUYSolana", "_blank")
            }>Twitter</button>
            <br></br>
            <br></br>

            <button onClick={
              () => window.open("https://t.me/solana_10guy", "_blank")
            }>Telegram</button>
            <br></br>
            <br></br>

          </div>
          <div className={style.headerImage}>
            <img src="/10guylogo.jpg" alt="Meme Header Image" />
          </div>
        </div>
      </header>

      <div className={style.memeGenerator}>
        <h1 className={style.sectionTitle}>Meme generator</h1>
        <div className={style.row1}>

          <div className={style.row1col1}>
            <TextBox
              id="upperText"
              className={style.input}
              value={state.topText}
              type="textArea"
              placeholder="Upper Text"
              onChange={(e) => dispatchContext(MemeAction.SetTopText, e.target.value)} />
            <TextBox
              id="downText"
              className={style.input}
              value={state.bottomText}
              type="textArea"
              placeholder="Down Text"
              onChange={(e) => dispatchContext(MemeAction.SetBottomText, e.target.value)} />
          </div>

          <div className={style.row1col2}>
            <Button
              id="downlaod"
              type="button"
              className={style.button}
              onClick={downloadMomo}
            >
              Download Image
            </Button>
          </div>

        </div>

        <div className={style.row2}>
          <Preview
            state={state}
            ref={memoRef}
          />
        </div>
      </div>

      <section className={style.gallery}>
        <h1 className={style.sectionTitle}>Legend</h1>
        <div className={style.slideGallery}>
          <iframe className={style.video} src="https://www.youtube.com/embed/_bFGfKgsV8I?si=zjZHBaeBrARzFhOt"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </section>
    </div>
  );
};

export default Meme;