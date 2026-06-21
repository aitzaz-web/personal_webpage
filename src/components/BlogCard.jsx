export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-card-header">
        {post.tags?.length > 0 && (
          <div className="blog-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3>{post.title}</h3>
        {post.date && (
          <p className="blog-date">
            <time>{post.date}</time>
          </p>
        )}
      </div>

      {post.excerpt && <p className="blog-excerpt">{post.excerpt}</p>}

      {post.links?.length > 0 && (
        <div className="card-links">
          {post.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
