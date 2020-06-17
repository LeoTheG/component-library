import { makeStyles, Theme } from "@material-ui/core/styles";

const buttonTheme = { background: "white", boxShadow: 0 };

const styles = makeStyles((theme:Theme, background:string, boxShadow:number) =>{
  button: {
    background: props.background,
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 35,
    width: 90,
    padding: "0 30px",
    boxShadow: props.boxShadow,
    position: "absolute",
  },
  bar: {
    background: props.background,
    display: "list-item",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1),
    margin: 0,
  },
}));

const classes = styles(buttonTheme);
