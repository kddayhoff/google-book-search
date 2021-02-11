import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Button, Link  } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SavedBookCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.authors}
        </Typography>

        <CardMedia
          className={classes.media}
          image={props.image}
          title="book image"
        />
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" color="primary"
          onClick={props.saveBtn}>
              {props.btnText} 
        </Button>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.description}</Typography>
          <Link to={props.link}>View more info</Link>
        </CardContent>
      </Collapse>
    </Card>
  );
}
