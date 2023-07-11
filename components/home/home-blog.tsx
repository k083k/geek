import { blogPosts } from "@/core/shared/constants";
import BlogPostCard from "./blog-post-card";

export default function HomeBlog() {
  return (
    <section className="home-blog container mx-auto padding-x bg-white">
      <h2>Our Blog</h2>
      <div className="home-blog-posts flex-center flex-col md:flex-row gap-5 justify-evenly">
        {blogPosts.map((post, index) => {
          return <BlogPostCard post={post} key={index}></BlogPostCard>;
        })}
      </div>
    </section>
  );
}
