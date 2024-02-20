import React, { ReactNode } from "react"

import "./article.css"

interface ArticleProps {
  children: ReactNode
}

const Article = ({ children, ...rest }: ArticleProps) => {
  return <article {...rest}>{children}</article>
}
export default Article
