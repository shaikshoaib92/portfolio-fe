import { useState } from "react";
import ProjectStyles from "../projects-styles";

const HorizontalBoxComponent = ({ data }: any) => {
  const [resize, setResize] = useState(false);

  const { HorizontalBox } = ProjectStyles;

  return (
    <HorizontalBox
      onMouseEnter={() => setResize(true)}
      onMouseLeave={() => setResize(false)}
      style={{
        width: resize ? "25%" : "",
        height: resize ? "35%" : "",
      }}
    >
      <p
        style={{
          color: "wheat",
        }}
      >
        {data.title}
      </p>
    </HorizontalBox>
  );
};

export default HorizontalBoxComponent;
