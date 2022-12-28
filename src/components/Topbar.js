import React, { useRef, useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../assets/icons";
import { Logo } from "../assets/logos";
import { Box, Button, Flex, Dropdown } from "../primitives";
import AuthContext from "../stores/authContext";

const Topbar = ({
  onClick_signup,
  onClickSignIn,
  onClickRightArrow,
  onClickLeftArrow,
  AnimateLeft,
  AnimateRight,
  AnimateModal,
  loggedIn,
  signedOut,
}) => {
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log(user);

  const ArrowLeft = {
    open: { rotate: 180, transition: { duration: 0.2 } },
    closed: { rotate: 0, transition: { duration: 0.2 } },
  };

  const ArrowRight = {
    open: { rotate: 0, transition: { duration: 0.2 } },
    closed: { rotate: 180, transition: { duration: 0.2 } },
  };

  const [setDropdown, setDropdownActive] = useState(false);
  const [setWallet, setWalletActive] = useState(false);

  // let menuRef = useRef();

  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setDropdown(false);
  //       console.log(menuRef.current);
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });

  return (
    <Box
      width="100%"
      padding="24px 16px 40px"
      position="sticky"
      top="0"
      left="0"
      background="linear-gradient(180deg, rgba(15,19,24,1) 0%, rgba(15,19,24,1) 24%, rgba(15,19,24,0) 100%)"
    >
      <Flex>
        <Flex alignItems="center" flexGrow="1">
          <Box mr="24px">
            <Button.TopbarArrow
              iconName="arrow_left"
              Variants={ArrowLeft}
              Animate={AnimateLeft}
              onClick={onClickLeftArrow}
            />
          </Box>

          <Link to="/">
            <Logo name="chips" />
          </Link>
        </Flex>
        {authReady && (
          <Flex alignItems="center">
            {!user && (
              <Flex alignItems="center" justifyContent="end" flexGrow="1">
                <Link to="/sign-up">
                  <Button.IconLeft
                    sort="secondary"
                    size="md"
                    iconName="games"
                    width="16px"
                    height="16px"
                    mr={2}
                  >
                    Sign Up
                  </Button.IconLeft>
                </Link>

                {/* <Button sort="primary" size="md" onClick={onClickSignIn}>
              Sign In
            </Button> */}

                <Button ml={2} sort="primary" size="md" onClick={login}>
                  Sign In Netlify
                </Button>
              </Flex>
            )}

            {user && (
              <Flex alignItems="center" justifyContent="end" flexGrow="1">
                <Link to="">
                  <Button sort="primary" size="md" mr={2}>
                    Deposit
                  </Button>
                </Link>

                <Dropdown.Wallet
                  bgColor="black800"
                  mr={3}
                  Placeholder="0,00"
                  ArrowLabel="BTC"
                  onClickArrow={() => setWalletActive(!setWallet)}
                  animateMenu={setWallet ? "open" : "closed"}
                  animateIcon={setWallet ? "open" : "closed"}
                  IconLeft
                  IconLeftName="cryto_btc"
                  menuWidth="166px"
                />

                <Button.IconOnly
                  sort="secondary"
                  size="md-icon-only"
                  iconName="notification"
                  height="16px"
                  width="16px"
                  mr={3}
                />

                <Dropdown.Username
                  bgColor="black800"
                  Placeholder={user.user_metadata.full_name}
                  onClickLogout={logout}
                  onClickArrow={() => setDropdownActive(!setDropdown)}
                  animateMenu={setDropdown ? "open" : "closed"}
                  animateIcon={setDropdown ? "open" : "closed"}
                  menuWidth="166px"
                />

                {/* <Button sort="secondary" size="md" onClick={logout}>
                  Log out
                </Button> */}
              </Flex>
            )}

            <Box ml="24px">
              <Button.TopbarArrow
                iconName="arrow_right"
                Variants={ArrowRight}
                Animate={AnimateRight}
                onClick={onClickRightArrow}
              />
            </Box>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Topbar;
