import { StarRate, StarBorder } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

const Mail = () => {
  return (
    <Card sx={{ margin: 1 }}>
      <CardActions disableSpacing>
        <IconButton>
          <CheckBoxOutlineBlankOutlinedIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<StarBorder />}
            checkedIcon={<StarRate sx={{ color: "amber" }} />}
          />
        </IconButton>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Ashikur
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            lor scheme with the MUI documentation, simply select colors using
            the palette and sliders below. Alternatively, you can enter hex
            values in
          </Typography>
        </CardContent>
      </CardActions>
    </Card>
  );
};

export default Mail;
