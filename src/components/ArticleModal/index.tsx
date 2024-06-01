import React from "react";
import { styled } from "styled-components";
import Row from "@/styles/ui/row";
import { theme } from "@/styles/theme/index";
import { font } from "@/styles/generator/font";
import ModalLayout from "@/components/common/layouts/modalLayout";
import CloseIcon from "@/styles/svg/closeIcon";
import { Article } from "@/types/components/Article.type";

interface ArticleModalProps {
  article: Article;
  isOpen: boolean;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, isOpen, onClose }) => {
  return (
    <ModalLayout animationState={isOpen} brightness="80%" blur="10px">
      <ModalContent>
        <TitleBox>
          <Row width={"100%"} justifyContent={"space-between"}>
            <Title>{article.title}</Title>
            <CloseButton onClick={onClose}>
              <CloseIcon width={2} height={2} color={theme.base["black"]} />
            </CloseButton>
          </Row>
          <GrayHr />
        </TitleBox>
        <ImgBox>
          <StyledImg src={article.image} alt={article.title} />
        </ImgBox>
      </ModalContent>
    </ModalLayout>
  );
};

const ModalContent = styled.div`
  background-color: ${theme.base["white"]};
  padding: 4rem 4rem;
  border-radius: 1rem;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 15%;
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
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
`;

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
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
