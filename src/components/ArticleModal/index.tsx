"use client";

import ModalLayout from "@/components/common/layouts/modalLayout";
import { font } from "@/styles/generator/font";
import CloseIcon from "@/styles/svg/closeIcon";
import { theme } from "@/styles/theme/index";
import Row from "@/styles/ui/row";
import { Article } from "@/types/components/Article.type";
import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

interface ArticleModalProps {
  article: Article;
  isOpen: boolean;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
  return (
    <ModalLayout onClick={onClose} animationState={isOpen} brightness="80%" blur="10px">
      <ModalContent>
        <TitleBox>
          <Row width={"100%"} justifyContent={"space-between"}>
            <Title>{article.title}</Title>
            <CloseButton onClick={onClose}>
              <CloseIcon />
            </CloseButton>
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

export default ArticleModal;
