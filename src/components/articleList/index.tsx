import React from "react";

type listProps = {
  articles: {
    title: string;
    body: string;
  }[];
};

const ArticleList = ({ articles }: listProps): JSX.Element => {
  return (
    <div>
      {articles.map((item) => {
        return (
          <div>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
