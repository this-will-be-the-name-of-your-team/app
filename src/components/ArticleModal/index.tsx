"use client";

import { instance } from "@/apis/instance/instance";
import ModalLayout from "@/components/common/layouts/modalLayout";
import { Storage } from "@/storage";
import { font } from "@/styles/generator/font";
import CloseIcon from "@/styles/svg/closeIcon";
import { theme } from "@/styles/theme/index";
import Row from "@/styles/ui/row";
import { Article } from "@/types/components/Article.type";
import Image from "next/image";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

interface ArticleModalProps {
  article: Article;
  isOpen: boolean;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const accessToken = process.env.NEXT_PUBLIC_AUTHENTICATED_ACCESS_TOKEN;
  const isAdmin = Storage.getItem("access_token") === accessToken;

  const queryClient = useQueryClient();
  const deleteArticle = async (articleId: number) => {
    const { data } = await instance.delete(`/article/${articleId}`, {
      headers: { Authorization: Storage.getItem("access_token") },
    });
    return data;
  };

  const handleDelete = async () => {
    try {
      await deleteArticle(article.id).then(() => queryClient.invalidateQueries("articles"));
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalLayout onClick={onClose} animationState={isOpen} brightness="80%" blur="10px">
      <ModalContent>
        <TitleBox>
          <Row width={"100%"} justifyContent={"space-between"} alignItems={"center"}>
            <Title>{article.title}</Title>
            <Row gap={1} alignItems={"center"}>
              {isMounted && isAdmin && (
                <DeleteButton onClick={handleDelete}>글 삭제하기</DeleteButton>
              )}
              <CloseButton onClick={onClose}>
                <CloseIcon />
              </CloseButton>
            </Row>
          </Row>
          <GrayHr />
        </TitleBox>
        <ImgBox>
          <StyledImg src={article.image} alt={article.title} objectFit="contain" fill />
        </ImgBox>
      </ModalContent>
    </ModalLayout>
  );
};

const ModalContent = styled.div`
  background-color: ${theme.base["white"]};
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  z-index: 2000;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
`;

const Title = styled.div`
  ${font.H1};
  white-space: pre-wrap;
  word-break: break-all;
`;

const ImgBox = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 50vw;
  height: 50vh;
`;

const StyledImg = styled(Image)`
  width: 100%;
  max-height: 50vh;
  height: fit-content;
  overflow-y: hidden;
`;

const GrayHr = styled.hr`
  width: 100%;
  border-top: 1px solid ${theme.gray[200]};
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #3b3b3b;
  color: ${theme.base["white"]};
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default ArticleModal;
