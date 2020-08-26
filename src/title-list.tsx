import React from "react";
import Box from "@material-ui/core/Box";

interface Props {
  company: string;
}

export const TitleList: React.FC<Props> = (props) => {
  const { company } = props;

  return (
    <Box
      p={4}
      fontFamily="fontFamily"
      fontWeight="fontWeightBold"
      fontSize={24}
    >
      Member's List of {company} company
    </Box>
  );
};
