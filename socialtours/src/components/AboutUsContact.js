// import React from "react";
// import ReactDOM from "react-dom";
// import { withStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import Divider from "@material-ui/core/Divider";
// import Typography from "@material-ui/core/Typography";

// import "./styles.css";


// const styles = aboutTheme => ({
//   card: {
//     maxWidth: 300,
//     margin: "auto",
//     transition: "0.3s",
//     boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
//     "&:hover": {
//       boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
//     }
//   },
//   media: {
//     paddingTop: "56.25%"
//   },
//   content: {
//     textAlign: "left",
//     padding: aboutTheme.spacing.unit * 3
//   },
//   divider: {
//     margin: `${aboutTheme.spacing.unit * 3}px 0`
//   },
//   heading: {
//     fontWeight: "bold"
//   },
//   subheading: {
//     lineHeight: 1.8
//   },
//   avatar: {
//     display: "inline-block",
//     border: "2px solid white",
//     "&:not(:first-of-type)": {
//       marginLeft: -aboutTheme.spacing.unit
//     }
//   }
// });

// class AboutUsContact extends React.Component {


//   render() {
//     return (
//       <div className="App">
//         <h2>The Crew</h2>
//         <Card className={classes.card}>
//           <CardMedia className={classes.media} image={"../images/gannon.png"} />
//           <CardContent className={classes.content}>
//             <Typography className={"AboutName"} variant={"h6"} gutterBottom> Gannon Darcy </Typography>
//             <Typography className={"AboutTitle"} variant={"h8"}> Full-Stack Developer </Typography>
//             <Divider className={classes.divider} light />
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }
// }
// const WrappedApp = withStyles(styles)(App);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<WrappedApp />, rootElement);

// export default AboutUsContact;


import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Meet The Team
            </Typography>


          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="../socialtours/src/images/gannon.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2"> Gannon Darcy </Typography>
                    <Typography className={"AboutTitle"} variant={"h6"}> Full-Stack Developer </Typography>
                  </CardContent>
                  <CardActions>
                    <a target="_blank" href="https://github.com/GannonDetroit"> GitHub </a>
                    <a target="_blank" href="https://www.linkedin.com/in/gannon-darcy-b8345073/"> LinkedIn </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

