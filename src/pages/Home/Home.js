import Feature from '../../components/Feature/Feature'
import Navbar from '../../components/Navbar/Navbar'
import './style.scss'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Feature type="movie" />
            
        </div>
    )
}

export default Home;
