"use client";

import { instance } from "@/apis/instance/instance";
import { Storage } from "@/storage";
import { flex } from "@/styles/generator/flex";
import { theme } from "@/styles/theme";
import Row from "@/styles/ui/row";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";

const Page = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<string>();

  const handleChangeFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      const file = files[0];
      const formData = new FormData();
      formData.append("file", file);
      const { data } = await instance.post("/api/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (data.status === 201) setImage(data.url);
      else alert("Upload Error");
    }
  };

  const handleClickUplaodPost = async () => {
    try {
      const headers = { Authorization: Storage.getItem("access_token") };
      const data = { title, image };
      await instance.post("/api/article", data, { headers });
      router.push("/");
    } catch {
      alert("Internal Server Error");
    }
  };

  return (
    <Container>
      <LandingSection>
        <Input
          onChange={({ target: { value } }) => setTitle(value)}
          value={title}
          placeholder="제목을 입력해주세요."
        />
        <NoneDisplayFileInput
          onChange={handleChangeFileUpload}
          type="file"
          id="fileUpload"
          multiple={true}
        />
        <DragDropButton
          // style={isDragging ? { backgroundColor: "#274168", color: "white" } : {}}
          htmlFor="fileUpload"
        >
          {image ? (
            <UploadPreview src={image} alt="image" width={9999} height={9999} />
          ) : (
            <UploadImageIcon
              src="/landing/upload.png"
              width={999}
              height={999}
              alt="이미지 업로드"
            />
          )}
        </DragDropButton>
        <Row gap={1.5} alignItems="flex-end" justifyContent="flex-end" width="100%">
          <CancelButton onClick={() => router.push("/")}>글 작성 취소</CancelButton>
          <UploadButton onClick={handleClickUplaodPost}>글 올리기</UploadButton>
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
  cursor: pointer;
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

const UploadPreview = styled(Image)`
  width: auto;
  height: 100%;
  opacity: 0.3;
`;

export default Page;
