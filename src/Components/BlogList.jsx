const BlogList = (props) => {
    const blogs = props.blogs || [];


    return ( <>
        <div className="blog-list">
        {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} >
                    <img src={blog.image} alt={blog.title} />
                    <h2>{blog.title}</h2>
                    <p> Written By: {blog.author}</p>
                </div>
            ))}
        </div>
    </> );
}
 
export default BlogList;