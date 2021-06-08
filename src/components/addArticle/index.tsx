import React from "react";

type listProps = {
  data: string;
};

const AddArticle = ({ data }: listProps) => {
  return <div>{data}</div>;
};

export default AddArticle;
