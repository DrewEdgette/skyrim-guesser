import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { ChallengeContext } from "../contexts/ChallengeContext";

function ChallengeCard({ challengeInfo, classes }) {
  const { setMode } = useContext(ChallengeContext);

  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to={`/challenge/${challengeInfo.id}`}>
        <CardMedia
          className={classes.media}
          image={challengeInfo ? challengeInfo.url : null}
          title={challengeInfo ? challengeInfo.name : null}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {challengeInfo ? challengeInfo.name : "Map Title"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {challengeInfo ? challengeInfo.description : "Map Description"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Typography gutterBottom variant="h5" component="h2">
        <TextField
          id="url"
          label="URL"
          value={window.location.href}
          InputProps={{
            readOnly: true,
          }}
        />
        <Button
          size="small"
          color="primary"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
          }}
        >
          Copy
        </Button>
      </Typography>

      <CardActions>
        <Button size="small" color="primary" onClick={() => setMode("play")}>
          Play
        </Button>
      </CardActions>
    </Card>
  );
}

export default ChallengeCard;