import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  introduction: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 80,
    marginTop: 80,
    padding: [50, 50],
    background: theme.palette.secondary,
    boxShadow: [0, 0, 10, "rgba(0, 0, 0, 0.1)"],
    borderRadius: 30,
    width: "70%",
    margin: "auto", // Centering the section horizontally
  },
  title: {
    color: theme.palette.primary,
    margin: [0, 0 , 20, 20],
    fontSize: 40,
    lineHeight: "30px",
    fontWeight: 600,
  },
  description: {
    color: theme.palette.primary,
    margin: 0,
    fontSize: 18,
  }
}));

function Introduction(props) {
  const classes = useStyles(props);

  return (
    <section className={classes.introduction}>
        <h1 className={classes.title}>SlapSticker</h1>
        <p className={classes.description}>
          Have you ever said something so dumb, you just wanted to slap
          yourself? Well now you can! 👋
        </p>
      </section>
  );
}

export default Introduction;
