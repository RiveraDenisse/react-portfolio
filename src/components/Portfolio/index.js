import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  CardActions,
} from "@material-ui/core";
import Horiseon from "../../assets/img/Horiseon.png";
import passwordGen from "../../assets/img/passwordgen.png";
import dinner from "../../assets/img/dinnernmovie.png";
import hi5 from "../../assets/img/hi5.png";
import useStyles from "../../style";

const portfolio = [
  {
    Project: 1,
    title: "Horiseon",
    website: "https://riveradenisse.github.io/HoriseonW1/",
    image: Horiseon,
    repository: "https://github.com/RiveraDenisse/HoriseonW1",
  },
  {
    Project: 2,
    title: "Password Generator",
    website: "https://riveradenisse.github.io/genmypassword/",
    image: passwordGen,
    repository: "https://github.com/RiveraDenisse/genmypassword",
  },
  {
    Project: 3,
    title: "Dinner-N-Movie",
    website: "https://hsafiya.github.io/dinner_n_movie/",
    image: dinner,
    repository: "https://github.com/RiveraDenisse/dinner_n_movie",
  },
  {
    Project: 4,
    title: "Hi-5",
    website: "https://evening-oasis-97339.herokuapp.com/",
    image: hi5,
    repository: "https://github.com/RiveraDenisse/high-five",
  },
];

function Gallery() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="xl">
        <Typography variant="h2">Projects</Typography>
        <Grid container spacing={4} style={{ marginTop: "4rem" }}>
          {portfolio.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{ alignContent: "center" }}>
                <CardContent className={classes.CardContent}>
                  <Typography gutterBottom variant="h4">
                    {project.title}
                  </Typography>
                </CardContent>
                <CardMedia
                  className={classes.cardMedia}
                  image={project.image}
                  title={project.title}
                />
                <CardActions>
                  <a href={project.repository} target="_blank" rel="noreferrer">
                    Github Repository
                  </a>

                  <a href={project.website} target="_blank" rel="noreferrer">
                    Project Website
                  </a>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
export default Gallery;
