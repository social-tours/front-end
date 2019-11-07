import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import styled from "styled-components";
import { colors } from "./DesignComponents/theme";

import Gannon from "../images/gannon.png";
import Michael from "../images/michael.png";
import Louis from "../images/louis.png";
import Wilfred from "../images/wilfred.png";
import Adam from "../images/adam.png";
import Greg from "../images/greg.png";
import Rane from "../images/rane.png";
import James from "../images/james.png";
// import { typography } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
	icon: {
		marginRight: theme.spacing(2)
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6)
	},
	heroButtons: {
		marginTop: theme.spacing(4)
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
		direction: "row"
	},
	masterContainer: {
		height: "100%",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap"
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column"
	},
	cardContent: {
		flexGrow: 1
	},
	contact: {
		backgroundColor: theme.palette.background.paper
	},
	form: {
		margin: "0 100px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: "100%",
		margin: "15px auto"
	},
	button: {
		margin: "0 auto"
	}
}));

const StlyedIoLogoGithub = styled(IoLogoGithub)`
	width: 2.5rem;
	height: 2.5rem;
`;
const StlyedIoLogoLinkedin = styled(IoLogoLinkedin)`
	width: 2.5rem;
	height: 2.5rem;
`;

const StlyedIoLogoTwitter = styled(IoLogoTwitter)`
	width: 2.5rem;
	height: 2.5rem;
`;
const Wrapper = styled.div`
	background-color: #fff;
	padding: 48px 0;
`;

const cards = [1];

export default function About() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<main>
				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="textPrimary"
							gutterBottom
						>
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
										<img src={Gannon} alt="Gannon" height="300" width="300" />
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												{" "}
												Gannon Darcy{" "}
											</Typography>
											<Typography className={"AboutTitle"} variant={"p"}>
												{" "}
												Full-Stack Developer{" "}
											</Typography>
											<Typography>
												<a
													target="_blank"
													rel="noopener noreferrer"
													href="https://www.gannon.dev"
												>
													Portfolio Website
												</a>
											</Typography>
										</CardContent>
										<CardActions>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://github.com/GannonDetroit"
											>
												{" "}
												<StlyedIoLogoGithub />{" "}
											</a>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://www.linkedin.com/in/gannon-darcy-b8345073/"
											>
												{" "}
												<StlyedIoLogoLinkedin />{" "}
											</a>
										</CardActions>
									</Card>
								</Grid>
							))}

							{/* Michael */}
							{cards.map(card => (
								<Grid item key={card} xs={3} sm={6} md={4}>
									<Card className={classes.card}>
										<img src={Michael} alt="Michael" height="300" width="300" />
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												{" "}
												Michael Jenkins{" "}
											</Typography>
											<Typography className={"AboutTitle"} variant={"p"}>
												{" "}
												Full-Stack Developer{" "}
											</Typography>
										</CardContent>
										<CardActions>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://github.com/mjenkins9605"
											>
												{" "}
												<StlyedIoLogoGithub />{" "}
											</a>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://www.linkedin.com/in/michaeljenkins9605/"
											>
												{" "}
												<StlyedIoLogoLinkedin />{" "}
											</a>
										</CardActions>
									</Card>
								</Grid>
							))}

							{/* Louis */}
							{cards.map(card => (
								<Grid item key={card} xs={3} sm={6} md={4}>
									<Card className={classes.card}>
										<img src={Louis} alt="Louis" height="300" width="300" />
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												{" "}
												Louis Magdaleno{" "}
											</Typography>
											<Typography className={"AboutTitle"} variant={"p"}>
												{" "}
												Full-Stack Developer{" "}
											</Typography>
										</CardContent>
										<CardActions>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://github.com/louismagdaleno"
											>
												{" "}
												<StlyedIoLogoGithub />{" "}
											</a>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://www.linkedin.com/in/louis-magdaleno/"
											>
												{" "}
												<StlyedIoLogoLinkedin />{" "}
											</a>
										</CardActions>
									</Card>
								</Grid>
							))}

							{/* Wilfred */}
							{cards.map(card => (
								<Grid item key={card} xs={3} sm={6} md={4}>
									<Card className={classes.card}>
										<img src={Wilfred} alt="Wilfred" height="300" width="300" />
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												{" "}
												Wilfred Morgan{" "}
											</Typography>
											<Typography className={"AboutTitle"} variant={"p"}>
												{" "}
												Full-Stack Developer{" "}
											</Typography>
										</CardContent>
										<CardActions>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://github.com/"
											>
												{" "}
												<StlyedIoLogoGithub />{" "}
											</a>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://www.linkedin.com/"
											>
												{" "}
												<StlyedIoLogoLinkedin />{" "}
											</a>
										</CardActions>
									</Card>
								</Grid>
							))}

							{/* Adam */}
							{cards.map(card => (
								<Grid item key={card} xs={3} sm={6} md={4}>
									<Card className={classes.card}>
										<img src={Adam} alt="Adam" height="300" width="300" />
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												{" "}
												Adam Nawrocki{" "}
											</Typography>
											<Typography className={"AboutTitle"} variant={"p"}>
												{" "}
												Full-Stack Developer{" "}
											</Typography>
										</CardContent>
										<CardActions>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://github.com/bcuz"
											>
												{" "}
												<StlyedIoLogoGithub />{" "}
											</a>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://www.linkedin.com/in/adam-nawrocki-1b0b60b4/"
											>
												{" "}
												<StlyedIoLogoLinkedin />{" "}
											</a>
										</CardActions>
									</Card>
								</Grid>
							))}

							{/* Greg */}
							{cards.map(card => (
								<Grid item key={card} xs={3} sm={6} md={4}>
									<Card className={classes.card}>
										<img src={Greg} alt="Greg" height="300" width="300" />
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												{" "}
												Greg Urban{" "}
											</Typography>
											<Typography className={"AboutTitle"} variant={"p"}>
												{" "}
												Full-Stack Developer{" "}
											</Typography>
											<Typography>
												<a
													target="_blank"
													rel="noopener noreferrer"
													href="https://fullstackurban.com"
												>
													Portfolio Website
												</a>
											</Typography>
										</CardContent>
										<CardActions>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://github.com/GregoryUrban"
											>
												{" "}
												<StlyedIoLogoGithub />{" "}
											</a>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://www.linkedin.com/in/glurban/"
											>
												{" "}
												<StlyedIoLogoLinkedin />{" "}
											</a>
										</CardActions>
									</Card>
								</Grid>
							))}

							{/* Rane */}
							{cards.map(card => (
								<Grid item key={card} xs={3} sm={6} md={4}>
									<Card className={classes.card}>
										<img src={Rane} alt="Rane" height="300" width="300" />
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												{" "}
												Rane Wallin{" "}
											</Typography>
											<Typography className={"AboutTitle"} variant={"p"}>
												{" "}
												Full-Stack Developer{" "}
											</Typography>
											<Typography>
												<a
													target="_blank"
													rel="noopener noreferrer"
													href="https://blasph.me"
												>
													Portfolio Website
												</a>
											</Typography>
										</CardContent>
										<CardActions>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://github.com/RaneWallin"
											>
												{" "}
												<StlyedIoLogoGithub />{" "}
											</a>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://www.linkedin.com/in/rane-wallin"
											>
												{" "}
												<StlyedIoLogoLinkedin />{" "}
											</a>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://twitter.com/rane_wallin"
											>
												{" "}
												<StlyedIoLogoTwitter />{" "}
											</a>
										</CardActions>
									</Card>
								</Grid>
							))}

							{/* Wigdor */}
							{cards.map(card => (
								<Grid item key={card} xs={3} sm={6} md={4}>
									<Card className={classes.card}>
										<img src={James} alt="James" height="300" width="300" />
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												{" "}
												James Wigdor{" "}
											</Typography>
											<Typography className={"AboutTitle"} variant={"p"}>
												{" "}
												Full-Stack Developer{" "}
											</Typography>
										</CardContent>
										<CardActions>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://github.com/jpwigdor"
											>
												{" "}
												<StlyedIoLogoGithub />{" "}
											</a>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://www.linkedin.com/in/jameswigdor/"
											>
												{" "}
												<StlyedIoLogoLinkedin />{" "}
											</a>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href="https://twitter.com/Jim_Wig"
											>
												{" "}
												<StlyedIoLogoTwitter />{" "}
											</a>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					</Container>
				</div>
			</main>

			<Wrapper>
				<contact className={classes.contact}>
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="textPrimary"
						gutterBottom
					>
						Contact Us
					</Typography>
					<form className={classes.form} name="contact">
						<input type="hidden" name="form-name" value="contact" />
						<TextField
							label="Name"
							className={classes.textField}
							margin="normal"
							name="contact-name"
							variant="outlined"
							required
						/>
						<TextField
							label="Email"
							className={classes.textField}
							margin="normal"
							name="contact-email"
							variant="outlined"
							required
						/>
						<TextField
							label="Message"
							className={classes.textField}
							margin="normal"
							name="contact-message"
							multiline
							rows="8"
							placeholder="Type your message here"
							variant="outlined"
							required
						/>
						<Button className={classes.button} type="submit" variant="outlined">
							Submit
						</Button>
					</form>
				</contact>
			</Wrapper>
		</React.Fragment>
	);
}
