import BlogCard from "../components/BlogCard";
import Header from "../components/Header";
import { getBlogs } from "../models";
import { BlogType } from "../types";

const Home = async () => {
  const blogs = await getBlogs();

  return (
    <main className="px-6 py-5">
      <Header />
      <br />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 justify-center"> 
        {!blogs && blogs.length < 0 ? (
          <h1> No Data !</h1>
        ) : (
          blogs.map((blog: BlogType, index: number) => {
            return <BlogCard key={index} blog={blog} />;
          })
        )}
      </div>
    </main>
  );
};

export default Home;
