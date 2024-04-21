import React from "react"
import Article from "./Article"
import blogData from "../data/blog"

function ArticleList() {

    const {posts} = blogData
    const postsMap = posts.map((post) => {
        return <Article key={post.id} post={post} />
    })

    return(
        <main>{postsMap}</main>
    )
}

export default ArticleList