import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MySkeleton = () => {
  return (
    <>
      <Skeleton width={50} height={50} circle={true} />
      <Skeleton width={100} className="mt-3" />
      <Skeleton width={200} className="mt-3" />
      <Skeleton width={250} className="mt-3" />
      <Skeleton width={290} className="mt-3" />

    </>
  );
};

export default MySkeleton;
