import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import { useState } from "react";
import Materialtable from "./Materialtable";
import { useEffect } from "react";


const usestyle = makeStyles((theme) => ({
  container: {
    height: "100vh",
    background: "linear-gradient(45deg, #21abcb, #58b370)",
    color: "white",
    paddingTop: "100px"
  }
}))
const List = () => {
  const [data, setdata] = useState([]);
  const [nextLink, setnextLink] = useState("http://gutendex.com/books")
  const classes = usestyle()

  useEffect(() => {
    getdata(nextLink);
  }, []);

  const clickhandler = () => {
    getdata(nextLink);
  }
  const getdata = (link) => {
    axios.get(link).then(res => {
      setdata([...data, ...res.data.results]);
      setnextLink(res.data.next);
    }).catch(err => { console.log(err.message) })
  }

  return (
    <Box className={classes.container}>
      <Typography variant="h3">List Of Books</Typography>
      <Materialtable data={data} />
      <Button onClick={clickhandler} >Load More</Button>
    </Box>
  );
}
export default List;