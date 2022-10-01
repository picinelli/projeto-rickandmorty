import React, { useContext, useEffect } from "react";
import { styled, keyframes } from "@stitches/react";
import {
  violet,
  blackA,
  mauve,
  green,
  blue,
  red,
  orange,
} from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useLocation, useNavigate } from "react-router-dom";
import DataContext from "../../providers/DataContext";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 25,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&:focus": { outline: "none" },
});

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
}

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: 17,
});

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogClose = DialogPrimitive.Close;

const Flex = styled("div", { display: "flex" });

const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 30px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: "white",
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: mauve.mauve3 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      blue: {
        backgroundColor: blue.blue9,
        width: "100px",
        color: "white",
        fontWeight: "bold",
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: blue.blue10 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: green.green9,
        width: "100px",
        color: "white",
        fontWeight: "bold",
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: green.green10 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      red: {
        backgroundColor: red.red9,
        width: "100px",
        color: "white",
        fontWeight: "bold",
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: red.red10 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      orange: {
        backgroundColor: orange.orange9,
        width: "100px",
        color: "white",
        fontWeight: "bold",
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: orange.orange10 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
    },
  },

  defaultVariants: {
    variant: "violet",
  },
});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": { backgroundColor: violet.violet4 },
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

function Menu() {
  const navigate = useNavigate();
  const { data, setData } = useContext(DataContext);
  const location = useLocation();

  function logout() {
    localStorage.removeItem("token");
    setData({ ...data, token: null });
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setData({ ...data, token });
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="large">Menu</Button>
      </DialogTrigger>
      <DialogContent>
        <Flex css={{ marginTop: 15 }}>
          <DialogTitle css={{ fontWeight: "bold" }}>Conta</DialogTitle>
        </Flex>

        {data.token ? (
          <Flex css={{ marginTop: 25, justifyContent: "center" }}>
            <DialogClose asChild>
              <Button
                onClick={() => {
                  logout();
                }}
                variant="red"
              >
                Sair
              </Button>
            </DialogClose>
          </Flex>
        ) : (
          <>
            <Flex css={{ marginTop: 25, justifyContent: "center" }}>
              <DialogClose asChild>
                <Button
                  variant="blue"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
              </DialogClose>
            </Flex>

            <Flex css={{ marginTop: 25, justifyContent: "center" }}>
              <DialogClose asChild>
                <Button
                  variant="green"
                  onClick={() => {
                    navigate("/registro");
                  }}
                >
                  Registrar
                </Button>
              </DialogClose>
            </Flex>
          </>
        )}

        <DialogTitle css={{ marginTop: 50, fontWeight: "bold" }}>
          Perfil
        </DialogTitle>

        <Flex css={{ marginTop: 25, justifyContent: "center" }}>
          <DialogClose asChild>
            {location.pathname === "/favoritos" ? (
              <Button
                variant="orange"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Button>
            ) : (
              <Button
                variant="orange"
                onClick={() => {
                  navigate("/favoritos");
                }}
              >
                Favoritados
              </Button>
            )}
          </DialogClose>
        </Flex>

        <DialogClose asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export default Menu;
