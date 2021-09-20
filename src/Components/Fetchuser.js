import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { UserDataGet, fetchUserById } from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../Components/UserInfo";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    backGround: "Red",
    height: "400px",
    color: "red",
    margin: "40px auto 50px auto",
  },
  paper: {
    color: "red",
  },
  card: {
    margin: "10px",
  },
}));

const Fetchuser = () => {
  useEffect(() => {
    const getData = async () => {
      const responseData = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(UserDataGet(responseData.data));
    };
    fetchUserById();
    getData();
  }, []);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.counter);
  return (
    <div>
      <Grid container className={classes.root}>
        {users.map((items, idx) => {
          return (
            <div key={idx}>
              <Grid item xs={12} lg={1} md={2} className={classes.card}>
                <UserCard
                  name={items.name}
                  id={items.id}
                  email={items.email}
                  phone={items.phone}
                  website={items.website}
                />
              </Grid>
            </div>
          );
        })}
      </Grid>
    </div>
  );
};
export default Fetchuser;
