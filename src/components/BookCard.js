import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";

export default function BookCard({ job }) {
  return (
    <Card
      sx={{
        mt: 2,
        height: 230,
        maxWidth: 340,
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontSize={20}>
            {job.title}
          </Typography>
          {job.skills.slice(0, 4).map((skill) => (
            <Chip key={skill} size="small" color="error" label={skill} />
          ))}
          <Typography variant="body2" color="text.secondary">
            {job.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
