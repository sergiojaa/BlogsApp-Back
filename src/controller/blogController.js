import Blog from '../models/blogModel.js'

export const createBlog = async (req, res) => {
    // const { name, description } = req.body;
// name and desctiption egreve
    await Blog.create({
        name: req.body.name,
        description: req.body.description,
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
