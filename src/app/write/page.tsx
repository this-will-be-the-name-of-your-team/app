"use client";

import { flex } from "@/styles/generator/flex";
import { theme } from "@/styles/theme";
import Row from "@/styles/ui/row";
import Image from "next/image";
import { styled } from "styled-components";

const Page = () => {
  return (
    <Container>
      <LandingSection>
        <Input placeholder="제목을 입력해주세요." />
        <NoneDisplayFileInput
          // onChange={onChangeFiles}
          type="file"
          id="fileUpload"
          multiple={true}
        />
        <DragDropButton
          // style={isDragging ? { backgroundColor: "#274168", color: "white" } : {}}
          htmlFor="fileUpload"
        >
          <UploadImageIcon src="/landing/upload.png" width={999} height={999} alt="이미지 업로드" />
        </DragDropButton>
        <Row gap={1.5} alignItems="flex-end" justifyContent="flex-end" width="100%">
          <CancelButton>글 작성 취소</CancelButton>
          <UploadButton>글 올리기</UploadButton>
        </Row>
      </LandingSection>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;

  overflow-x: hidden;
`;

const LandingSection = styled.section`
  width: 100vw;
  height: 100vh;
  ${flex.COLUMN_FLEX};
  padding: 10rem 14rem 0 14rem;
  gap: 3rem;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  background-color: ${theme.gray[80]};
  padding: 0 14px;
  font-size: 25px;
  font-weight: 300;
`;

const NoneDisplayFileInput = styled.input`
  display: none;
`;

const DragDropButton = styled.label`
  width: 70%;
  height: 60%;
  background-color: ${theme.gray[80]};
  border-radius: 20px;
  border: 2px solid ${theme.gray[200]};
  ${flex.CENTER};
  cursor: pointer;
`;

const UploadImageIcon = styled(Image)`
  width: 90px;
  height: auto;
`;

const CancelButton = styled.button`
  padding: 10px 24px;
  background-color: transparent;
  border: 1px solid ${theme.primary[500]};
  color: ${theme.primary[500]};
  border-radius: 5px;
  font-size: 15px;
  ${flex.CENTER};
`;

const UploadButton = styled(CancelButton)`
  background-color: ${theme.primary[500]};
  color: ${theme.gray[50]};
`;

export default Page;
