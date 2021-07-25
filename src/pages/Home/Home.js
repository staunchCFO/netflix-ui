import Feature from '../../components/Feature/Feature'
import List from '../../components/List/List'
import Navbar from '../../components/Navbar/Navbar'
import './style.scss'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Feature type="movie" />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home;
