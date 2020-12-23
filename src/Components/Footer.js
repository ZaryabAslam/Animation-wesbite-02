// import React from 'react'
// import '../App.css';


// function Footer() {
//   return (
//     <div>
//       <div>

//       </div>
//     </div>
//   );
// }

// export default Footer;

import React from "react";

//mui
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//images
import FacebookIcon from "../images/facebook.png";
import TwitterIcon from "../images/twitter.png";
import GmailIcon from "../images/google.png";

const useStyle = makeStyles((theme) => ({
  footerRoot: {
    background: [theme.palette.black],
    color: "white",
  },
  Socialicons: {
    padding: "0 6px",
    cursor: "pointer",
  },
}));
const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.footerRoot}>
      <Box p={4}>
        <Grid container>
          <Grid item xs={6} container alignItems="center">
            Created by Hamzah Syed
          </Grid>
          <Grid item xs={6} container justify="flex-end" alignItems="center">
            <img
              src={FacebookIcon}
              alt="facebook"
              className={classes.Socialicons}
              width="32px"
              height="32px"
            />
            <img
              src={TwitterIcon}
              alt="facebook"
              className={classes.Socialicons}
              width="32px"
              height="32px"
            />
            <img
              src={GmailIcon}
              alt="facebook"
              className={classes.Socialicons}
              width="32px"
              height="32px"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
