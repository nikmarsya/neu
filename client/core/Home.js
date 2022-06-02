import React from "react";
//import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import niknor from './../assets/images/niknor.jpg'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  card: {
  maxWidth: 600,
  margin: 'auto',
  marginTop: theme.spacing(5)
  },
  title: {
  padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px
  ${theme.spacing(2)}px`,
  color: theme.palette.openTitle
  },
  media: {
  minHeight: 1000
  }
  }))

/*  
const Home = () => {
    return (
    <div>
    <h1 className="title is-1">This is the Home Page</h1>
    <nav 
    style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
        <Link to='appori'>Appori</Link>|{" "}
        <Link to='hello'>Hello World</Link>
    </nav>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
      risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
      nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
      lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
    </p>
    </div>)
  };
*/
const Home = () => {
  const classes = useStyles()
  return (
  <Card className={classes.card}>
  <Typography variant="h6" className={classes.title}>
  Home Page
  </Typography>

  <CardMedia className={classes.media}
image={niknor} title="Nik Nor"/>
  <CardContent>
  <Typography variant="body2" component="p">
  Welcome to the MERN Skeleton home page.
  </Typography>
  </CardContent>
  </Card>
  )
  }
  export default Home;