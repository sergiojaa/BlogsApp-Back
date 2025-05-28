import express from "express";
import {createBlog, getAllBlogs, getBlogById} from "../controller/blogController.js";

const router = express.Router();

router.post('/create', createBlog);
router.get('/',getAllBlogs);
router.get('/:id', getBlogById);

export default router;