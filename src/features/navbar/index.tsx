"use client";
import { usePathname, useRouter } from "next/navigation";
import NavStyles from "./nav-styles";
import { Button } from "@mui/material";

const selectedStyles = {
  borderBottom: "1px solid #111",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "10%",
};

const unSelectedStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "10%",
};

const Navbar = () => {
  const { Container, MenuContainer, MenuItem } = NavStyles;

  const router = useRouter();
  const pahtname = usePathname();

  return (
    <Container>
      <MenuItem
        style={{
          fontSize: "21px",
          color: "#111",
          fontWeight: 700,
        }}
      >
        Shaik Shoaib
      </MenuItem>
      <MenuContainer>
        <MenuItem
          style={{
            color: pahtname === "/" ? "#111" : "",
          }}
          onClick={() => router.push("/")}
        >
          Home
        </MenuItem>
        <MenuItem
          style={{
            color: pahtname === "/projects" ? "#111" : "",
          }}
          onClick={() => router.push("/projects")}
        >
          Project
        </MenuItem>
        <MenuItem
          style={{
            color: pahtname === "/experience" ? "#111" : "",
          }}
          onClick={() => router.push("/experience")}
        >
          Experience
        </MenuItem>
        <MenuItem
          style={{
            color: pahtname === "/about-me" ? "#111" : "",
          }}
          onClick={() => router.push("/about-me")}
        >
          About Me
        </MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuContainer>
    </Container>
  );
};

export default Navbar;
