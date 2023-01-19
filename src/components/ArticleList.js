import React from "react";
import Article from "./Article";


function ArticleList({ posts }) {
    const articleElement = posts.map((article) => {
        return(
            <Article 
            key={article.id}
            title={article.title}
            date={article.date}
            preview={article.preview}
            minutes={article.minutes}
            />
        )
    })           

    return <main>{articleElement}</main>

}

export default ArticleList;
