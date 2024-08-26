import Image from "next/image";
import React from "react";
import BlogImg from "../public/back.jpg";
import { BlogType } from "@/types";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="relative">
        <Image
          src={BlogImg}
          alt="blog-img"
          width={330}
          height={290}
          className="rounded shadow-xl h-60"
        />
        <div className="flex w-full justify-center">
          <div className="p-2 bg-white pb-2 absolute bottom-2 rounded w-64 shadow-xl">
            <h1 className="text-purple text-lg font-medium mt-1 ellipsis-1-lines">
              {blog.title}
            </h1>
            <div className="max-w-md">
              <p className="text-gray-500 text-sm font-normal ellipsis-2-lines mt-1">
                {blog.body}
              </p>
            </div>
          </div> 
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
