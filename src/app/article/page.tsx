"use client";

import { styled } from "styled-components";
import { useState } from "react";
import { useQuery } from "react-query";
import ArticleModal from "@/components/ArticleModal";
import { Article } from "@/types/components/Article.type";
import { flex } from "@/styles/generator/flex";

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
    <ArticleBox>
      <ArticleList>
        {data?.data.map((article: Article) => (
          <ArticleItem key={article.id} onClick={() => handleOpenModal(article)}>
            {article.title}
          </ArticleItem>
        ))}
      </ArticleList>
      {selectedArticle && (
        <ArticleModal article={selectedArticle} isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </ArticleBox>
  );
}

const ArticleBox = styled.div`
  ${flex.COLUMN_CENTER};
  height: 100vh;
  overflow-x: hidden;
`;

const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ArticleItem = styled.div`
  cursor: pointer;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: #e0e0e0;
  }
`;
