import express from "express";
import {createBlog, getAllBlogs, getBlogById, updateBlog} from "../controller/blogController.js";

const router = express.Router();


router.post('/create', createBlog);
router.get('/',getAllBlogs);
router.get('/:id', getBlogById);
router.patch('/:id',updateBlog)

export default router;