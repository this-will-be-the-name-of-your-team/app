"use client";

import ArticleModal from "@/components/ArticleModal";
import { Storage } from "@/storage";
import { flex } from "@/styles/generator/flex";
import { font } from "@/styles/generator/font";
import { theme } from "@/styles/theme";
import { Article } from "@/types/components/Article.type";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useQuery } from "react-query";
import { styled } from "styled-components";

const fetchArticles = async () => {
  const response = await fetch("/api/article");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export default function ArticlePage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accessToken = process.env.NEXT_PUBLIC_AUTHENTICATED_ACCESS_TOKEN;
  const isAdmin = Storage.getItem("access_token") === accessToken;
  const router = useRouter();
  const { data, error } = useQuery<{ data: Article[] }, Error>("articles", fetchArticles);

  const handleOpenModal = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
    setIsModalOpen(false);
  };

  if (error) return <>{error.message}</>;

  return (
    <Container>
      <LandingSection>
        <HGroup>
          <Title>work</Title>
          <SubTitle>밍글이 걸어온 발자취</SubTitle>
          {isAdmin && (
            <UploadButton onClick={() => router.push("/write")}>글 작성하기</UploadButton>
          )}
        </HGroup>
        <ArticleBox>
          <ArticleList>
            {data?.data.map((article: Article) => (
              <ArticleItem
                url={article.image.replaceAll(" ", "%20")}
                key={article.id}
                onClick={() => handleOpenModal(article)}
              >
                <Text>{article.title}</Text>
              </ArticleItem>
            ))}
          </ArticleList>
          {selectedArticle && (
            <ArticleModal
              article={selectedArticle}
              isOpen={isModalOpen}
              onClose={handleCloseModal}
            />
          )}
        </ArticleBox>
      </LandingSection>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  ${flex.COLUMN_FLEX};
`;

const LandingSection = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 8rem 6rem 8rem 6rem;
  box-sizing: border-box;
`;

const HGroup = styled.div`
  gap: 12px;
  height: fit-content;
  margin: 0;
  padding: 0;
  ${flex.VERTICAL}
`;

const Title = styled.h1`
  ${font.H1};
  margin: 0;
  padding: 0;
  color: ${theme.primary[500]};
`;

const SubTitle = styled.span`
  ${font.H4};
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: ${theme.gray[500]};
`;

const ArticleBox = styled.div`
  ${flex.COLUMN_FLEX};
`;

const ArticleList = styled.div`
  ${flex.FLEX};
  flex-wrap: wrap;
`;

const ArticleItem = styled.div<{ url: string }>`
  cursor: pointer;
  width: 50%;
  height: 44vh;
  padding: 20px 0;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const Text = styled.span`
  margin: 20px;
  ${font.H4};
`;

const UploadButton = styled.button`
  padding: 10px 24px;
  background-color: transparent;
  border: 1px solid ${theme.primary[500]};
  color: ${theme.primary[500]};
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  ${flex.CENTER};
  background-color: ${theme.primary[500]};
  color: ${theme.gray[50]};
  margin-left: auto;
`;
