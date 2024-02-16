"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export const Contact = () => {
  const handleEmailButtonClick = () => {
    window.location.href = `mailto:shaikshoaib9537@gmail.com`;
  };
  const router = useRouter();

  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Button variant="outlined" onClick={handleEmailButtonClick}>
        Mail
      </Button>
      <img
        src="./linkdin.png"
        style={{
          width: 40,
          height: 35,
          cursor: "pointer",
        }}
        onClick={() =>
          router.push("https://www.linkedin.com/in/shaik-shoaib-dev/")
        }
      />
      <img
        src="./twitter.png"
        style={{
          width: 40,
          height: 35,
        }}
      />
    </div>
  );
};
