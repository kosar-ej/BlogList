"use client";
import Image from "next/image";
import React, { useState } from "react";
import CustomModal from "./CustomModal";
import Link from "next/link";
import { IconcardType } from "@/types";
import { delteBlog } from "@/models";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const IconCard = ({ src, type, id }: IconcardType) => {
  //define states
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  //define variabels
  const router = useRouter()

  //after delete blog successfully
  const onSuccess = () => {
    router.push('/')
    setLoading(false)
    toast.success("Blog deleted successfully")
  }

  //handel delete blog with id
  const handelDelete = async () => {
    delteBlog(
      id,
      () => {
        setLoading(true);
      },
      onSuccess
    );
  };

  if (type === "delete") {
    return (
      <>
        <div
          onClick={() => setIsOpen(true)}
          className="w-9 h-9 rounded-full flex justify-center items-center bg-default cursor-pointer"
        >
          <Image src={src} alt="icon" width={23} height={23} />
        </div>
        <CustomModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Delete blog"
          description="Are you sure you want to delete this blog?"
          onOk={handelDelete}
          loading={loading}
        />
      </>
    );
  }

  return (
    <Link href={`/blog/update/${id}`}>
      <div className="w-9 h-9 rounded-full flex justify-center items-center bg-default">
        <Image src={src} alt="icon" width={23} height={23} />
      </div>
    </Link>
  );
};

export default IconCard;
