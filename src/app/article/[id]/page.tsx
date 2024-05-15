"use client";

import { styled } from "styled-components";
import { theme } from "@/styles/theme/index";
import { font } from "@/styles/generator/font";
import { flex } from "@/styles/generator/flex";
import dayjs from "dayjs";
import Link from "next/link";

const ArticleData = {
  id: 1,
  title: "광안리 요가",
  content:
    "광안리 해수욕장에서 함께 요가를 했습니다. 푸른 바다를 보며 하는 요가! 앞으로도 햄벅 크루 많관부~~^^ 광안리 해수욕장에서 함께 요가를 했습니다. 푸른 바다를 보며 하는 요가! 앞으로도 햄벅 크루 많관부~~^^ 광안리 해수욕장에서 함께 요가를 했습니다. 푸른 바다를 보며 하는 요가! 앞으로도 햄벅 크루 많관부~~^^ 광안리 해수욕장에서 함께 요가를 했습니다. 푸른 바다를 보며 하는 요가! 앞으로도 햄벅 크루 많관부~~^^ 광안리 해수욕장에서 함께 요가를 했습니다. 푸른 바다를 보며 하는 요가! 앞으로도 햄벅 크루 많관부~~^^",
  image: [
    "https://i.pinimg.com/564x/9b/5a/b5/9b5ab5002f90187c9900b846132279a7.jpg",
    "https://i.pinimg.com/564x/14/bd/16/14bd1692438a50cc4c451242418798d9.jpg",
    "https://i.pinimg.com/736x/3c/db/2d/3cdb2d7a2ba9037cb6188c8e00632892.jpg",
    "https://i.pinimg.com/564x/fe/f4/72/fef472aaa4a12fb8512ef820fb83e48c.jpg",
  ],
  createdAt: "2024-05-09T03:15:06.616Z",
};

export default function articleDetailPage(id: number) {
  return (
    <>
      <Layout>
        <ArticleHeadBox>
          <TitleWithDateBox>
            <ArticleTitle>{ArticleData.title}</ArticleTitle>
            <ArticleDateText>{dayjs(ArticleData.createdAt).format("YYYY.MM.DD")}</ArticleDateText>
          </TitleWithDateBox>
          <GrayHr />
          <Link href={`/article/${ArticleData.id}/edit`} passHref>
            <EditButton>글 수정하기</EditButton>
          </Link>
        </ArticleHeadBox>
        <ArticleContentBox>
          <ArticleImgBox>
            {ArticleData.image.map((url, index) => (
              <ContentImg key={index} src={url} />
            ))}
          </ArticleImgBox>
          <ArticleContent>{ArticleData.content}</ArticleContent>
        </ArticleContentBox>
      </Layout>
    </>
  );
}

const Layout = styled.div`
  ${flex.COLUMN_CENTER};
  gap: 3.9rem;
  width: 74.72%;
  height: auto;
  padding: 5.1rem 11.3rem;
`;

const ArticleHeadBox = styled.div`
  ${flex.FLEX};
  align-items: flex-end;
  width: 100%;
  gap: 1.125rem;
`;

const TitleWithDateBox = styled.div`
  ${flex.FLEX};
  align-items: flex-end;
  gap: 0.875rem;
`;

const ArticleTitle = styled.p`
  ${font.D3};
  color: "#000000";
`;

const ArticleDateText = styled.p`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 130%;
  letter-spacing: 0.15px;
  color: ${theme.gray[300]};
`;

const GrayHr = styled.hr`
  width: 100%;
  max-width: 42rem;
  border: 0;
  border-top: 1px solid ${theme.gray[200]};
`;

const EditButton = styled.button`
  ${font.btn2};
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  border-radius: 0.3125rem;

  border: 0.5px solid #666;
  color: ${theme.base["white"]};
  background: ${theme.gray[800]};
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.05);
  &:hover {
    cursor: pointer;
  }
`;

const ArticleContentBox = styled.div`
  ${flex.COLUMN_FLEX};
  gap: 1.8rem;
  width: 100%;
`;

const ArticleImgBox = styled.div`
  ${flex.COLUMN_HORIZONTAL};
  align-items: baseline;
  gap: 1.8rem;
`;

const ContentImg = styled.img``;

const ArticleContent = styled.p`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 130%;
  letter-spacing: 0.15px;
`;
