"use client";

import * as S from "./style";
import BlogContentBot from "./contentsComponent";
import Row from "@/styles/ui/row";

const Blog = () => {
  return (
    <S.Page>
      <Row justifyContent="center" alignItems="center">
        <S.GalleryText>Gallery</S.GalleryText>
        <S.TitleText>밍글이 걸어온 발자취</S.TitleText>
      </Row>
      <S.GridBox>
        <BlogContentBot />
        <BlogContentBot />
        <BlogContentBot />
        <BlogContentBot />
      </S.GridBox>
    </S.Page>
  );
};

export default Blog;
