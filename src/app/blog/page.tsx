"use client";

import WorkedContentBox from "@/components/workedContentBox";
import * as S from "./style";
import Row from "@/styles/ui/row";

const Blog = () => {
  return (
    <S.Page>
      <Row width="100%" justifyContent="space-between" alignItems="center">
        <S.TitleText>
          <S.WorkText>work </S.WorkText>
          밍글이 걸어온 발자취
        </S.TitleText>
        <S.WriteButton>글 작성하기</S.WriteButton>
      </Row>
      <S.GridBox>
        <WorkedContentBox img="h1" />
      </S.GridBox>
    </S.Page>
  );
};

export default Blog;
