import express from "express";
import {createBlog, getAllBlogs} from "../controller/blogController.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the blog API'
    });
})


router.post('/create', createBlog)
router.get('getBlogs',getAllBlogs)

export default router;