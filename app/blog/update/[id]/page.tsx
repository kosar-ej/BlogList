"use client";
import Header from "@/components/Header";
import MyButton from "@/components/MyButton";
import MyInput from "@/components/MyInput";
import MySkeleton from "@/components/MySkeleton";
import { getBlogDetail, updateBlog } from "@/models";
import { ParamsType } from "@/types";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BlogUpdate = ({ params }: ParamsType) => {
  // Define states
  const [data, setData] = useState({
    title: "",
    body: "",
    userId: 1,
  });
  const [loading, setLoading] = useState(false);
  const [loadingBlog, setLoadingBlog] = useState(true);
  const [updated, setUpdated] = useState(false)

  //request for get blog with id
  const getBlogWithId = async () => {
    setLoadingBlog(true)
    const default_blog = await getBlogDetail(params.id);
    setData({ ...default_blog, userId: 1 });
    setLoadingBlog(false);
  };

  //handel updating blog
  const handelUpdateBlog = () => {
    if (data.title.length === 0) {
      toast.error("Please enter a title!");
    } else if (data.body.length === 0) {
      toast.error("Please enter a description!");
    } else {
      updateBlog(data, params.id, onLoading, onSuccess);
    }
  };

  //handel loading
  const onLoading = () => {
    setLoading(true);
  };

  //handel success
  const onSuccess = () => {
    setLoading(false);
    toast.success("Blog updated successfully");
    setUpdated(!updated)
  };

  useEffect(() => {
    getBlogWithId();
  }, []);

  useEffect(() => {
    getBlogWithId();
  }, [updated]);

  return (
    <div className="p-5">
      <Header />
      <br />
      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          <form className="bg-white shadow-xl rounded px-5 lg:px-10 pt-8 pb-14 mb-4">
            {loadingBlog ? (
              <MySkeleton />
            ) : (
              <>
                <div className="mb-4">
                  <h1 className="text-black text-xl font-bold">Update Blog</h1>
                  <br />
                  <MyInput
                    type="text"
                    onChange={(e) => {
                      setData({ ...data, title: e.target.value });
                    }}
                    label={true}
                    text="Title"
                    defaultValue={data.title}
                  />
                </div>
                <div className="mb-4">
                  <MyInput
                    type="textarea"
                    onChange={(e) => {
                      setData({ ...data, body: e.target.value });
                    }}
                    label={true}
                    text="Description"
                    defaultValue={data.body}
                  />
                </div>
                <br />
                <div className="flex items-center justify-center">
                  <MyButton
                    onClick={handelUpdateBlog}
                    text="Update"
                    loading={loading}
                  />
                  <br />
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogUpdate;
