import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {item} = props
  const {imageUrl, id, title, topic, author, avatarUrl} = item
  return (
    <Link className="link" to={`/blogs/${id}`}>
      <div className="blogItem">
        <img src={imageUrl} alt={title} />
        <p>{topic}</p>
        <h3>{title}</h3>
        <div className="auth">
          <img src={avatarUrl} alt={author} />
          <p>{author}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
