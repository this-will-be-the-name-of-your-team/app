"use client";

import Image from "next/image";
import { styled } from "styled-components";

const Page = () => {
  return (
    <Container>
      <ImageWrap>
        <ContactIamge src="/landing/contact.png" alt="문의" width={9999} height={9999} />
      </ImageWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
  /* overflow-x: hidden; */
`;

const ImageWrap = styled.figure`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const ContactIamge = styled(Image)`
  width: 100%;
  height: auto;
  position: absolute;
`;

export default Page;
