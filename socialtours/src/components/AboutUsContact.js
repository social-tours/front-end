import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// import Gannon from "./images/gannon.png";

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
    direction: "row",
  },
  masterContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%',

  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Meet The Team
            </Typography>

          </Container>
        </div>
        <div className="masterContainer">
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>







              {/* Gannon */}
              {cards.map(card => (
                <Grid item key={card} xs={3} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image='https://avatars1.githubusercontent.com/u/42745542?s=400&v=4'
                      // img src={Gannon} alt="Gannon"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2"> Gannon Darcy </Typography>
                      <Typography className={"AboutTitle"} variant={"h6"}> Full-Stack Developer </Typography>
                    </CardContent>
                    <CardActions>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/GannonDetroit"> GitHub </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gannon-darcy-b8345073/"> LinkedIn </a>
                    </CardActions>
                  </Card>
                </Grid>
              ))}

              {/* Michael */}
              {cards.map(card => (
                <Grid item key={card} xs={3} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://avatars3.githubusercontent.com/u/42627304?s=460&v=4"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2"> Michael Jenkins </Typography>
                      <Typography className={"AboutTitle"} variant={"h6"}> Full-Stack Developer </Typography>
                    </CardContent>
                    <CardActions>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/mjenkins9605" > GitHub </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michaeljenkins9605/"> LinkedIn </a>
                    </CardActions>
                  </Card>
                </Grid>
              ))}

              {/* Louis */}
              {cards.map(card => (
                <Grid item key={card} xs={3} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://avatars1.githubusercontent.com/u/33568112?s=400&v=4"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2"> Louis Magdaleno </Typography>
                      <Typography className={"AboutTitle"} variant={"h6"}> Full-Stack Developer </Typography>
                    </CardContent>
                    <CardActions>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/louismagdaleno"> GitHub </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/louis-magdaleno/"> LinkedIn </a>
                    </CardActions>
                  </Card>
                </Grid>
              ))}

              {/* Wilfred */}
              {cards.map(card => (
                <Grid item key={card} xs={3} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://avatars2.githubusercontent.com/u/29118899?s=400&v=4"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2"> Wilfred Morgan </Typography>
                      <Typography className={"AboutTitle"} variant={"h6"}> Full-Stack Developer </Typography>
                    </CardContent>
                    <CardActions>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/"> GitHub </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"> LinkedIn </a>
                    </CardActions>
                  </Card>
                </Grid>
              ))}

              {/* Adam */}
              {cards.map(card => (
                <Grid item key={card} xs={3} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://avatars3.githubusercontent.com/u/3193391?s=400&v=4"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2"> Adam Nawrocki </Typography>
                      <Typography className={"AboutTitle"} variant={"h6"}> Full-Stack Developer </Typography>
                    </CardContent>
                    <CardActions>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/bcuz"> GitHub </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/adam-nawrocki-1b0b60b4/"> LinkedIn </a>
                    </CardActions>
                  </Card>
                </Grid>
              ))}

              {/* Greg */}
              {cards.map(card => (
                <Grid item key={card} xs={3} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://avatars2.githubusercontent.com/u/45109302?s=400&v=4"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2"> Greg Urban </Typography>
                      <Typography className={"AboutTitle"} variant={"h6"}> Full-Stack Developer </Typography>
                    </CardContent>
                    <CardActions>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/GregoryUrban"> GitHub </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/glurban/"> LinkedIn </a>
                    </CardActions>
                  </Card>
                </Grid>
              ))}

              {/* Rane */}
              {cards.map(card => (
                <Grid item key={card} xs={3} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://avatars0.githubusercontent.com/u/12719774?s=400&v=4"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2"> Rane Wallin </Typography>
                      <Typography className={"AboutTitle"} variant={"h6"}> Full-Stack Developer </Typography>
                    </CardContent>
                    <CardActions>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/RaneWallin"> GitHub </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rane-wallin"> LinkedIn </a>
                    </CardActions>
                  </Card>
                </Grid>
              ))}

              {/* Wigdor */}
              {cards.map(card => (
                <Grid item key={card} xs={3} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://avatars0.githubusercontent.com/u/7017183?s=400&v=4"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2"> James Wigdor </Typography>
                      <Typography className={"AboutTitle"} variant={"h6"}> Full-Stack Developer </Typography>
                    </CardContent>
                    <CardActions>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/jpwigdor"> GitHub </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jameswigdor/"> LinkedIn </a>
                    </CardActions>
                  </Card>
                </Grid>
              ))}

            </Grid>
          </Container>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </React.Fragment>
  );
}

