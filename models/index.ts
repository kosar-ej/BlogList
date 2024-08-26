import { CreateBlogType } from '@/types';
import axios from 'axios'

//function for get list of blogs
export const getBlogs = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return res.data.slice(0,7);
    } catch (error) {
        throw new Error('Failed to fetch users: ' + error);
    }
};

//function to get blog details with id
export const getBlogDetail = async (id: number | string) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return res.data;
    } catch (error) {
        throw new Error('Failed to fetch users: ' + error);
    }
};

//function for create a new blog
export const createBlog = async (data: CreateBlogType, befor: () => void, success: () => void) => {
    befor()
    try {
        const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
        success()
        return res.data;

    } catch (error: any) {
        throw new Error('Failed to create blog post: ' + error.message);
    }
};

//function for update blog with id
export const updateBlog = async (data: CreateBlogType, id : string | number,  befor: () => void, success: () => void) => {
    befor()
    try {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
        success()
        return res.data;

    } catch (error: any) {
        throw new Error('Failed to create blog post: ' + error.message);
    }
};

//handel delete blog with id
export const delteBlog = async ( id : string | number,  befor: () => void, success: () => void) => {
    befor()
    try {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        success()
    } catch (error: any) {
        throw new Error('Failed to create blog post: ' + error.message);
    }
};


