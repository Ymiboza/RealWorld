import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  IconButton,
  Link,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import styles from "./Article.module.css";

const Article = () => {
  return (
    <div className={styles.container}>
      <Card id={styles["post"]} style={{height: 940}}>
        <CardContent>
          <div className={styles["post-block"]}>
            <div className={styles["post-link-block"]}>
              <div className={styles["post-icon-block"]}>
                <Link id={styles["post-link"]}>Some article title</Link>
                <IconButton
                  edge="end"
                  aria-label="like"
                  style={{ color: "white" }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
                <span style={{ marginLeft: "12px" }}>12</span>
              </div>
              <Chip
                className={styles["Chip"]}
                variant="outlined"
                label="Tag1"
                style={{ color: "white" }}
              />
            </div>
            <div className={styles["avatar-block"]}>
              <div className={styles["avatar-text"]}>
                <Typography
                  id={styles["avatar-name"]}
                  variant="h2"
                  component="h2"
                >
                  John Doe
                </Typography>
                <Typography id={styles["avatar-date"]} variant="body1">
                  March 5, 2020
                </Typography>
              </div>
              <Avatar sx={{ bgcolor: "#05b577", width: 56, height: 56 }}>
                A
              </Avatar>
            </div>
          </div>
          <Typography style={{ marginBottom: 25, fontFamily: "Regular" }} variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Typography style={{fontFamily: "Regular"}} variant="h4" component="h4">
            Est Ampyciden pater patent
          </Typography>
          <Typography style={{fontFamily: "Regular"}} variant="h4" component="h4">
            Amor saxa inpiger
          </Typography>
          <Typography style={{ marginBottom: 25, fontFamily: "Regular" }} variant="body1">
            Lorem markdownum Stygias neque is referam fudi, breve per. Et
            Achaica tamen: nescia ista occupat, illum se ad potest humum et.
          </Typography>
          <Typography style={{fontFamily: "Regular"}} variant="h4" component="h4">
            Qua deos has fontibus
          </Typography>
          <Typography style={{ marginBottom: 25, fontFamily: "Regular" }} variant="body1">
            Recens nec ferro responsaque dedere armenti opes momorderat pisce,
            vitataque et fugisse. Et iamque incipiens, qua huius suo omnes ne
            pendentia citus pedum.
          </Typography>
          <Typography style={{fontFamily: "Regular"}} variant="h4" component="h4">
            Quamvis pronuba
          </Typography>
          <Typography style={{ marginBottom: 25, fontFamily: "Regular" }} variant="body1">
            Ulli labore facta. Io cervis non nosterque nullae, vides: aethere
            Delphice subit, tamen Romane ob cubilia Rhodopen calentes librata!
            Nihil populorum flava, inrita? Sit hic nunc, hoc formae Esse illo?
            Umeris eram similis, crudelem de est relicto ingemuit finiat Pelia
            uno cernunt Venus draconem, hic, Methymnaeae.
          </Typography>
          <ListItem
            component="div"
            disablePadding
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <ListItemText
              primary={`1.Clamoribus haesit tenentem iube Haec munera`}
              style={{fontFamily: "Regular"}}
            />
            <ListItemText primary={`2.Vincla venae`} style={{fontFamily: "Regular"}}/>
            <ListItemText primary={`3.Paris includere etiam tamen`} style={{fontFamily: "Regular"}}/>
            <ListItemText primary={`4.Superi te putria imagine Deianira`} style={{fontFamily: "Regular"}}/>
            <ListItemText
              primary={`5.Tremore hoste Esse sed perstat capillis siqua`}
              style={{fontFamily: "Regular"}}
            />
          </ListItem>
        </CardContent>
      </Card>
    </div>
  );
};

export default Article;
