import React from "react";
import { blogPosts } from "@/blogdata";
import "./blog.css";
import Image from "next/image";
import ReadBtn from "@/components/shared/ReadBtn/ReadBtn";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-section-header">
        <h2>وبلاگ</h2>
        <p>جدید ترین مطالب منتشر شده</p>
      </div>

      <div className="blog-posts">
        {blogPosts.map((item) => (
          <div key={item.id} className="blog-post-box">
            <div className="blog-image-container">
              <Image src={item.image} alt={item.title} />
            </div>
            <div className="blog-container-content">
              <h2>{item.title}</h2>
              <p className="blog-text">{item.text.substring(1, 346)} ...</p>
              <div className="blog-info-box">
                <p>
                  <FaUser /> نویسنده: {item.writer}
                </p>
                <p>
                  <FaUsers /> تاریخ انتشار: {item.date}
                </p>
                <p>
                  <CgCalendarDates /> بازدیدها: {item.reviews}
                </p>
              </div>
              <ReadBtn />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
