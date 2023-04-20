import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blog: '', isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    let blg = await response.json()

    blg = {
      imageUrl: blg.image_url,
      author: blg.author,
      content: blg.content,
      title: blg.title,
      topic: blg.topic,
      avatarUrl: blg.avatar_url,
      id: blg.id,
    }
    this.setState({blog: blg, isLoading: false})
  }

  render() {
    const {isLoading, blog} = this.state
    const {title, author, content, imageUrl, avatarUrl} = blog
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog">
            <h2>{title}</h2>
            <div className="auth">
              <img src={avatarUrl} alt={author} />
              <span>{author}</span>
            </div>
            <img src={imageUrl} alt={title} />
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
