import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const usestyle = makeStyles((theme) => ({
  main: {
    height: "100vh",
    width: "100%",
    background: "linear-gradient(45deg, #21abcb, #58b370)",
    color: "white"
  },
  container: {
    margin: "0 auto",
    backgroundColor: "white",
    color: "black",
    height: "auto",
    width: "500px",
    borderRadius: "20px",
    padding: "20px"
  },
  table: {
    display: "flex",
  },
}))

const Description = (props) => {
  const history = useHistory()

  const classes = usestyle();
  const { id } = useParams();
  const [data, setdata] = useState("")
  useEffect(() => {
    axios.get(`http://gutendex.com/books/${id}`).then(res => {
      if (res.status === 200) setdata(res.data);
    }).catch(err => console.log(err.message))
  }, []);
  return (
    <Box className={classes.main}>
      <Typography variant="h4">The description of the selected id is : </Typography>
      {typeof data === "object" ?
        <Box className={classes.container}>
          <img src={data.formats['image/jpeg']}></img>
          <Typography variant="h5">Id   <Typography> {id}</Typography></Typography>
          <Typography variant="h5">Title  <Typography> {data?.title} </Typography></Typography>
          <Typography variant="h5"> Subjects <Typography> {data?.subjects.map(item => item).join(', ')} </Typography> </Typography>

          <Typography variant="h5"> Authors  </Typography>
          <Box className={classes.table}>
            <Typography variant="h5"> Author Name  <Typography>  {data?.authors.map(item => item.name).join(', ')} </Typography> </Typography>
            <Typography variant="h5"> Author Birthyear   <Typography> {data?.authors.map(item => item.birth_year)} </Typography> </Typography>
            <Typography variant="h5"> Author Deathyear <Typography> {data?.authors.map(item => item.death_year)} </Typography> </Typography>
          </Box>
          <Typography variant="h5"> Bookshelves<Typography> {data?.bookshelves.map(item => item).join(', ')}</Typography> </Typography>
          <Typography variant="h5"> Language<Typography> {data?.languages.map(item => item)}</Typography> </Typography>
          <Typography variant="h5"> Copyright<Typography> Bool</Typography> </Typography>
          <Typography variant="h5"> Media Type<Typography> {data?.media_type}</Typography> </Typography>
          <Typography variant="h5"> Download Counts <Typography> {data?.download_count}</Typography> </Typography>
        </Box>
        : <Box>Hasn't loaded yet</Box>
      }
      <Button onClick={() => history.goBack()} >Back</Button>
    </Box>
  );
}
export default Description;