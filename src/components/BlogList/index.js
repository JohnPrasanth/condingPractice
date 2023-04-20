import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {list: [], isLoading: true}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const response = await fetch('https:apis.ccbp.in/blogs')
    let bList = await response.json()
    console.log(bList)
    bList = bList.map(each => ({
      id: each.id,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
      author: each.author,
      avatarUrl: each.avatar_url,
    }))
    this.setState({list: bList, isLoading: false})
  }

  render() {
    const {isLoading, list} = this.state
    return (
      <div className="main">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          list.map(each => <BlogItem item={each} key={each.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
