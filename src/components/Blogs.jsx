import "./Sections.css";
import PageHeader from "./PageHeader";
import BlogCard from "./BlogCard";
import blogs from "../data/blogs";

export default function Blogs() {
  return (
    <section id="blogs" className="blogs">
      <PageHeader
        eyebrow="Writing"
        title="Blog"
        description="Notes on building systems, ML research, and lessons from shipping products."
      />

      {blogs.length === 0 ? (
        <div className="blogs-empty">
          <p className="blogs-empty-title">Coming soon</p>
          <p className="blogs-empty-text">
            I&apos;m working on posts about agentic systems, HPC, and scalable infrastructure.
            Check back later.
          </p>
        </div>
      ) : (
        <div className="blog-list">
          {blogs.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
