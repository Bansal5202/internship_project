import { Box, Container, Divider,Button, Grid } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Shared from "../../utils/shared";
import { useMemo } from "react";
import { RoutePaths } from "../../utils/enum";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/auth";
import {Chip} from "@material-ui/core";
const linkStyle = {
  textDecoration: "none",
};

const Navbar = () => {
  const authContext = useAuthContext();

  const items = useMemo(() => {
    return Shared.NavigationItems.filter(
      (item) =>
        !item.access.length || item.access.includes(authContext.user.roleId)
    );
  }, [authContext.user]);

  const logOut = () => {
    authContext.signOut();
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "92px",
          width:"100%"
        }}
      >
        <Link
          to={RoutePaths.BookListing}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img src="#"alt="logo" style={{ width: "180px" }} />
        </Link>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {!!authContext.user.id && (
            <Chip
              label={`Welcome, ${authContext.user.firstName} ${authContext.user.lastName}`}
              sx={{ backgroundColor: "#ffdbd3", fontSize: "16px" }}
            />
          )}

          <Grid
          container
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
          >
            {!authContext.user.id && (
              <>
                <Link to={RoutePaths.Login} style={linkStyle}>
                  <Button
                    variant="text"
                    className="text-red-800"
                    sx={{ textTransform: "capitalize" }}
                  >
                    Login
                  </Button>
                </Link>
                <Link to={RoutePaths.Register} style={linkStyle}>
                  <Button
                    variant="text"
                    
                    sx={{ textTransform: "capitalize" }}
                  >
                    Register
                  </Button>
                </Link>
              </>
            )}
            {items.map((item, index) => {
              return (
                <Link to={item.route} style={linkStyle} key={index}>
                  <Button
                    variant="text"
                   
                    sx={{ textTransform: "capitalize" }}
                  >
                    {item.name}
                  </Button>
                </Link>
              );
            })}
            {/* <Link to="/book" style={linkStyle}>
              <Button
                variant="text"
                color="error"
                sx={{ textTransform: "capitalize" }}
              >
                Books
              </Button>
            </Link> */}
          </Grid>
          <Link to="/cart" style={linkStyle}>
            <Button
              variant="outlined"
              className="text-red-800"
              startIcon={<ShoppingCart style={{ color: "#c62828" }} />}
            >
              <span style={{ color: "#c62828", marginRight: "5px" }}>0</span>
              Cart
            </Button>
          </Link>
          {!!authContext.user.id && (
            <Link to="/book" style={linkStyle}>
              <Button
                variant="text"
                className="text-red-800"
                sx={{ textTransform: "capitalize" }}
                onClick={logOut}
              >
                Logout
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
