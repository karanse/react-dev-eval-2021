import { useState } from "react";
import { createUseStyles } from "react-jss";
import { useWebcamCapture } from "../useWebcamCapture";
import logo from "../images/slap.png";
import fish from "../images/fish.png";
import ouch from "../images/ouch.png";
import punch from "../images/punch.png";
import slap from "../images/slap.png";


const useStyles = createUseStyles((theme) => ({

  card: {
    position: "relative",
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: [50, 50],
    background: theme.palette.secondary,
    boxShadow: [0, 0, 10, "rgba(0, 0, 0, 0.1)"],
    borderRadius: 30,
    width: "50%",
    height: '80px',
    margin: "auto"
  },
  cardNo: {
    display: "flex",
    width: 70,
    height: 70,
    fontSize: 35,
    borderRadius: 50,
    backgroundColor: theme.palette.background,
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center"
  },
  cardInfo: {
    padding: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"

  },
  cardTitle: {
    margin: 0,
    fontSize: 18,
    fontWeight: "bold",
    color: theme.palette.background,

  },

  // Header: {
  //   "&  h1": {
  //     fontFamily: "sans-serif",
  //     cursor: "pointer",
  //     fontSize: "4rem",
  //   },
  // },
  Main: {
    background: theme.palette.background,

    "& canvas": {
      width: "100%",
      height: "auto",
    },
    "& video": {
      display: "none",
    },
  },
  Stickers: {
    display: "flex",
    justifyContent: "space-between",
    "& img": {
      height: "4rem",
    },
  },

  stickerButton: {
    marginRight: 5,
    marginLeft: 5,
    "&:last-child": {
      marginRight: 0,
    },
    "&:hover": {
      cursor: "pointer",
    },
  },

  video: { display: "none" },
  canvas: { width: "100%", height: "auto" },

  Picture: {
    background: "black",
    padding: 4,
    position: "relative",
    display: "inline-block",
    "& h3": {
      padding: 8,
      textAlign: "center",
      width: "100%",
    },
  },
}));

const stickers = [fish, ouch, punch, slap].map((url) => {
  const img = document.createElement("img");
  img.src = url;
  return { img, url };
});


function Home(props) {
   // css classes from JSS hook
   const classes = useStyles(props);
   // currently active sticker
   const [sticker, setSticker] = useState();
   // title for the picture that will be captured
   const [title, setTitle] = useState("SLAPPE!");

   // webcam behavior hook
   const [
     handleVideoRef, // callback function to set ref for invisible video element
     handleCanvasRef, // callback function to set ref for main canvas element
     handleCapture, // callback function to trigger taking the picture
     picture, // latest captured picture data object
   ] = useWebcamCapture(sticker?.img, title);

  return (
    <main className={classes.Main}>
      <section className={classes.card}>
        <div className={classes.cardNo}>1</div>
        <div className={classes.cardInfo}>
        <h2 className={classes.cardTitle}>Give it a name</h2>
        <input
          type="text"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        </div>
      </section>
      <section className={classes.card}>
        <div className={classes.cardNo}>2</div>
        <div className={classes.cardInfo}>
          <h2 className={classes.cardTitle}>Select your sticker</h2>
          <div className={classes.Stickers}>
            {stickers.map((el) => (
              <button
                className={classes.stickerButton}
                onClick={() => setSticker(el)}
                key={el.url}
              >
                <img className={classes.stickerImage} src={el.url} />
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className={classes.card}>
      <div className={classes.cardNo}>3</div>
      <div className={classes.cardInfo}>
        <h2 className={classes.cardTitle}>Slap your self!</h2>
        <div>
          <video ref={handleVideoRef} className={classes.video} />
          <canvas
          className={classes.canvas}
            ref={handleCanvasRef}
            width={2}
            height={2}
            onClick={handleCapture}
          />

        </div>

        </div>
      </section>
      <section className={`${classes.card} ${classes.Gallery}`}>
      <div className={classes.cardNo}>4</div>
      <div className={classes.cardInfo}>
        <h2 className={classes.cardTitle}>Cherish this moment forever</h2>
          {picture && (
          <div className={classes.Picture}>
            <img src={picture.dataUri} />
            <h3>{picture.title}</h3>
          </div>
        )}
      </div>
      </section>
    </main>
  )
}

export default Home;
