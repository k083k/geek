import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  date: string;
  title: string;
  link: string;
  description: string;
};

export default function BlogPostCard(props: { post: Props }) {
  const post = props.post;
  return (
    <article className="blog-post h-[609px] w-[405px] max-[600px]:w-[350px] overflow-hidden">
      <div className="blog-post-img h-[285px] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={"blog post image"}
          height={285}
          width={405}
          className="object-cover h-full w-full scale-125 hover:scale-100 transition-all"
        />
      </div>
      <p className="mt-10 mb-3 font-medium opacity-70">{post.date}</p>
      <h6 className="mb-3 line-clamp-3 h-28 overflow-hidden text-ellipsis">
        {post.title}
      </h6>
      <p className="line-clamp-2">{post.description}</p>
      <Link
        href={post.link}
        className="text-pixel-black text-center mt-3 inline-block hover:underline"
        target={"_blank"}
      >
        Read more &#10230;
      </Link>
    </article>
  );
}
