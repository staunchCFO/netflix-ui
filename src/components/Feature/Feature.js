import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './style.scss'

const Feature = ({type}) => {
    return (
        <div className="feature">
            {type && (
                <div className="feature__category">
                    <span>{ type === "movie" ? "Movies" : "Series" }</span>
                    <select name="genre" id="gnder">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                        <option value="wild-life">Wild-life</option>
                    </select> 
                </div>
            )}
            <img 
                src="https://cdn.vox-cdn.com/thumbor/0i_tyUccjw8RJv29XMAHSW-dK-U=/0x0:2700x1350/1200x800/filters:focal(1134x459:1566x891)/cdn.vox-cdn.com/uploads/chorus_image/image/58026259/jumanjicover.0.jpg"
                alt="Jumanji"
                className="feature__img"
            />
            <div className="feature__info">
                <img 
                    src="https://o.remove.bg/downloads/557fc23c-d0fd-4d29-b2c9-04c0372a6eca/download-removebg-preview.png"
                    alt="Jumanji"
                    className="feature__img"
                />
                <span className="feature__description">
                    Helooloahsduhuhduhdhghudhuhcgucgugdugiudsiohduohifhiuodhiuchdhiohiheuhioh
                    shgihguhuhuhhihshsihihihsd8yhbhbbdbdhudhuhduhduhduhuwowhohuwu9u9wu9uw9uww\w
                    wygwgygwygwygwygwygywgge7ey7y7y7y7wy7yq7y7q7y7yw7yq7y7qy7w7ywydwhbsvvxgvygwygws
                    wywgygwygwygwygygwygwygwygwygdygwygdygygygygyygygdywygwygdygwygwygwywywygwyw
                </span>
                <div className="feature__btn">
                    <button className="feature__playBtn">
                        <PlayArrow /> 
                        <span>Play</span>
                    </button>
                    <button className="feature__moreBtn">
                        <InfoOutlined /> 
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Feature
