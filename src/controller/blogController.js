import Blog from '../models/blogModel.js'
import { blogSchema } from '../validation/blogValidation.js'

export const createBlog = async (req, res) => {
    try{

    const validatedData = blogSchema.parse(req.body)
        const newBlog = new Blog({
            name: validatedData.name,
            description: validatedData.description,
                });
        await newBlog.save();
        res.status(201).json({
            message:"blog created successfully",
            blog: newBlog
        })
    }catch(err){
        console.error('error creating blog',err)
        if (err.name === 'ZodError') {
            return res.status(400).json({
                message: "Validation error",
                errors: err.errors,
            });
        }
        res.status(500).json({
            message:"error creating blog",
            error: err.message
        })
    }
}
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blogs' });
    }
}

export const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blog' });
    }
}
export const updateBlog = async(req,res)=>{
    try{
        const {id} = req.params;
        const updates = req.body;
        const updateBlog = await Blog.findByIdAndUpdate(id,updates,{
            new:true,
            runValidators
        })
        if(!updateBlog){
            return res.status(404).json({
                message:"blog not found"
            })
        }
        res.status(200).json({
            message:"blog updated successfully",
            blog:updateBlog
        })
    }catch(error){
        console.log('error updating blog',error);
        res.status(500).json({
            message:"Error updating blog",
            error:error.message
        })
    }
}
export  const deleteBlog = async(req,res)=>{
    try{
        const {id} = req.params;
     const deleteBlog = await Blog.findByIdAndDelete(id);
     if(!deleteBlog){
        return res.status(404).json({
            message: "Blog not found"
        })
     }
     res.status(200).json({
        message: "Blog deleted successfully",
        blog: deleteBlog
     })
    }catch(err){
        console.log('error deleting blog', err);
        res.status(500).json({
            message: "Error deleting blog",
            error: err.message
        });
    }
}
