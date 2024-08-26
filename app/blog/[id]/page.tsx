import { getBlogDetail } from "@/models";
import { ParamsType } from "@/types";
import Image from "next/image";
import React from "react";
import BlogImg from "../../../public/back.jpg";
import Header from "@/components/Header";
import DeleteImage from "../../../public/delete.png";
import EditImage from "../../../public/edit.svg";
import IconCard from "@/components/IconCard";
import Link from "next/link";

const BlogDetail = async ({ params }: ParamsType) => {
  //get blog with id
  const blog = await getBlogDetail(params.id);

  return (
    <div className="p-5">
      <Header />
      <br />
      <div className="bg-white shadow-xl rounded p-6 pr-7 gap-4 grid sm:grid-cols-1 lg:grid-cols-4">
        <Image
          src={BlogImg}
          alt="blog-img"
          width={300}
          height={400}
          className="rounded h-20 lg:h-60"
        />
        <div className="col-span-3">
          <div className="flex justify-between w-full">
            <h1 className="text-purple text-lg font-bold">{blog.title}</h1>
            <div className="hidden lg:block">
              <div className="flex gap-6 items-center">
                <IconCard type="delete" src={DeleteImage} id={blog.id} />
                <IconCard src={EditImage} id={blog.id} />
              </div>
            </div>
          </div>
          <p className="text-gray-500 w-11/12 lg:w-9/12 text-sm font-normal mt-3">
            {blog.body}
          </p>
          <br />
          <div className="block lg:hidden">
            <div className="flex gap-6 items-center">
              <IconCard type="delete" src={DeleteImage} id={blog.id} />
              <IconCard src={EditImage} id={blog.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
