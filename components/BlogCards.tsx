import React from "react";
import Container from "./Container";
import { Category } from "@/types/Category";
import Image from "next/image";
import Link from "next/link";

type Props = {
  categories: Category[];
  images: string[];
}

const BlogCards = ({ categories, images }: Props) => {
  const active = (categories || []).filter((c) => c.is_active)

  return (
    <section className="blog-section">
      <Container className="">
        {active.length === 0 ? (
          <div className="empty">
            <span>📝</span>
            <p>No categories available</p>
          </div>
        ) : (
          <div className="blog-grid">
            {active.map((cat, i) => {
              const date = new Date(cat.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })

              return (
                <div key={cat.id} className="blog-card">
                  <div className="card-img-wrap">
                    <Image
                      src={images[i]}
                      alt={cat.name}
                      fill
                      className="card-img"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="card-body">
                    <span className="card-date">{date}</span>
                    <h3 className="card-title">{cat.name}</h3>
                    {cat.description && (
                      <p className="card-desc">{cat.description}</p>
                    )}
                    <Link href={`/blog/${cat.slug}`} className="btn-read">
                      Read More
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </Container>

      <style>{`
        .blog-section {
          background: #fff;
          padding: 56px 0 72px;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 80px 32px;
        }
        .blog-card {
          display: flex;
          flex-direction: column;
        }
        .card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 18px;
        }
        .card-img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .blog-card:hover .card-img { transform: scale(1.04); }
        .card-body {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .card-date {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          color: #fff;
          background: #1BBC9B;
          padding: 4px 12px;
          border-radius: 4px;
          width: fit-content;
        }
        .card-title {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0;
          line-height: 1.3;
        }
        .card-desc {
          font-size: 14px;
          color: #777;
          line-height: 1.65;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .btn-read {
          display: inline-block;
          margin-top: 4px;
          background: #1BBC9B;
          color: #fff;
          text-decoration: none;
          padding: 9px 22px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          width: fit-content;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-read:hover { background: #17a789; transform: scale(1.03); }
        .empty {
          text-align: center;
          padding: 80px 20px;
          color: #aaa;
          font-size: 15px;
        }
        .empty span { font-size: 48px; display: block; margin-bottom: 12px; }

        @media (max-width: 768px) {
          .blog-section { padding: 40px 0 56px; }
          .blog-grid { gap: 32px 20px; }
          .card-title { font-size: 19px; }
        }
        @media (max-width: 560px) {
          .blog-grid { grid-template-columns: 1fr; gap: 36px; }
          .card-img-wrap { aspect-ratio: 16 / 9; }
        }
      `}</style>
    </section>
  )
}

export default BlogCards