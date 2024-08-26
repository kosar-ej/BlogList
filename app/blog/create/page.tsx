"use client";
import Header from "@/components/Header";
import MyButton from "@/components/MyButton";
import MyInput from "@/components/MyInput";
import { createBlog } from "@/models";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation'

const BlogCreate = () => {
  // Define states
  const [data, setData] = useState({
    title: "",
    body: "",
    userId: 1,
  });
  const [loading, setLoading] = useState(false);

  //define variabels
  const router = useRouter()

  //function for create blog
  const handelCreateBlog = () => {
    if (data.title.length === 0) {
      toast.error("Please enter a title!");
    } else if (data.body.length === 0) {
      toast.error("Please enter a description!");
    } else {
      createBlog(data, onLoading, onSuccess);
    }
  };

  //handel loading
  const onLoading = () => {
    setLoading(true);
  };

  //handel success
  const onSuccess = () => {
    router.push('/')
    setLoading(false);
    toast.success("New blog created successfully");
  };

  return (
    <div className="p-5">
      <Header />
      <br />
      <br />
      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          <form className="bg-white shadow-xl rounded px-5 lg:px-10 pt-8 pb-14 mb-4">
            <div className="mb-4">
              <h1 className="text-black text-xl font-bold">Create Blog</h1>
              <br />
              <MyInput
                type="text"
                onChange={(e) => {
                  setData({ ...data, title: e.target.value });
                }}
                name="Title"
                label={true}
                text="Title"
              />
            </div>
            <div className="mb-4 mt-3">
              <MyInput
                type="textarea"
                onChange={(e) => {
                  setData({ ...data, body: e.target.value });
                }}
                label={true}
                text="Description"
              />
            </div>
            <br />
            <div className="flex items-center justify-center">
              <MyButton
                onClick={handelCreateBlog}
                text="Create"
                loading={loading}
              />
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogCreate;
