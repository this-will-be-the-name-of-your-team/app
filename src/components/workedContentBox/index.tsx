"use client";

import React from "react";
import Image from "next/image";
import { styled } from "styled-components";

const WorkedContentBox = ({ img }: { img: string }) => {
  return (
    <Box>
      <Image src="" fill objectFit="cover" alt="workContentBox image" />
    </Box>
  );
};

export default WorkedContentBox;

const Box = styled.div`
  width: 50%;
  height: 18rem;
`;
