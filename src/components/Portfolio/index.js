import React, { useState } from "react";
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
import Horiseon from "../../assets/Dinner-N-Movie.png";

const portfolio = [
  {
    Project: 1,
    title: "Horiseon",
    website: "https://riveradenisse.github.io/HoriseonW1/",
    image: Horiseon,
    repository: "https://github.com/RiveraDenisse/HoriseonW1",
  },
];

function Gallery() {
  const [classes] = useState([]);
  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="xl">
        <Typography variant="h2">Projects</Typography>
        <Grid container spacing={3} style={{ marginTop: "3rem" }}>
          {portfolio.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card} style={{ alignContent: "center" }}>
                <CardMedia
                  className={classes.cardMedia}
                  image={project.image}
                  title="Image title"
                />
                <CardContent className={classes.CardContent}>
                  <Typography gutterBottom variant="h5">
                    {project.title}
                  </Typography>
                </CardContent>
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
