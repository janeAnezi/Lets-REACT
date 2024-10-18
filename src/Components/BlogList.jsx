const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs || [];
    // const title = props.title;


    return ( <>
        <div className="blog-list">
            <h2>{title}</h2>
        {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} >
                    <img src={blog.image} alt={blog.title} />
                    <h2>{blog.title}</h2>
                    <p> Written By: {blog.author}</p>
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete Post</button> */}
                </div>
            ))}
        </div>
    </> );
}
 
export default BlogList;