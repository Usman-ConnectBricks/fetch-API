import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeItem } from "../features/counter/counterSlice";
import { useDispatch } from "react-redux";
const useStyles = makeStyles({
  root: {
    width: "300px",
    height: "250px",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    fontSize: "15px",
    marginTop: "10px",
  },
  cardAction: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function UserCard(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [edit, setedit] = useState(false);
  const editButton = () => {
    setedit((prevstate) => !prevstate);
    console.log("Asdas");
  };
  const removeUser = () => {
    if (window.confirm("are you sure ")) {
      dispatch(removeItem(props.id));
    }
  };
  console.log("render from userinfo");
  return (
    <Card className={classes.root}>
      <CardActions>
        <Button size="small" onClick={removeUser}>
          <DeleteIcon color="error" />
        </Button>
        <Button size="small">
          <EditIcon color="primary" />
        </Button>
      </CardActions>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom>
          id: {props.id}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography className={classes.pos}>Phone:{props.phone}</Typography>
        <Typography variant="body2" component="p">
          {props.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
