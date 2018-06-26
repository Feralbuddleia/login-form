import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../../style/Login.css";

const styles = {
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 35,
    width: 70,
    'font-size': 14,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  input: {
    display: "block",
    width: 200,
    height: 100,
    margin: "0 auto"
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", map: null, open: false };
  }

  componentDidMount() {
    let date = new Date()
      .toISOString()
      .slice(0, 10)
      .replace(/\-/g, "");
    let map = new Map();
    map.set("today", date);
    map.set("tomorrow", Number(date) + 1);
    map.set("yesterday", date - 1);
    this.setState({ map: map });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { history } = this.props;
    if (this.state.map.get(username) == password) {
      history.push("/account");
    } else {
      this.setState({ open: true });
    }
  };

  handleClose = () => {
    this.setState({ open: false, username: "", password: "" });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="login">
        <h1>Sign in to your account</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            required
            id="name"
            label="Name"
            value={this.state.username}
            onChange={this.handleChange("username")}
            margin="normal"
            className={classes.input}
          />
          <TextField
            required
            id="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange("password")}
            margin="normal"
            type="password"
            className={classes.input}
          />
          <ButtonBase
            variant="contained"
            color="secondary"
            focusRipple={true}
            className={classes.button}
            type="submit"
          >
            Login
          </ButtonBase>


          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Opps!"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                It seems like you enter the wrong username or password. Please
                try again.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
