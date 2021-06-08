import React from "react";
import ArticleList from "../../components/articleList";
import AddArticle from "../../components/addArticle";
import { useSelector, shallowEqual } from "react-redux";

const Feeds = () => {
  const articles: IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  return (
    <div>
      <AddArticle data="addArticle" />
      <ArticleList articles={articles} />
    </div>
  );
};

export default Feeds;
