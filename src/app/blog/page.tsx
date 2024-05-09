"use client";

import * as S from "./style";
import BlogContentBot from "./contentsComponent";
import Row from "@/styles/ui/row";

const Blog = () => {
  return (
    <S.Page>
        <Row justifyContent="space-between" alignItems="center">
          <S.TitleText>
            <S.GalleryText>Gallery</S.GalleryText>
            밍글이 걸어온 발자취
          </S.TitleText>
          <div>버튼</div>
        </Row>
      <S.GridBox>
        <BlogContentBot />
      </S.GridBox>
    </S.Page>
  );
};

export default Blog;
