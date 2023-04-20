import BLogList from '../BlogList'
import UserInfo from '../UserInfo'
import './index.css'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BLogList />
  </div>
)

export default Home
