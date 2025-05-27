import Blog from '../models/blogModel.js'

export const createBlog = async (req, res) => {
    await Blog.create({
        name: 'ბლოგი',
        description: 'ეს არის ბლოგის აღწერა',
    })
    res.json('hello')
}
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blogs' });
    }
}
