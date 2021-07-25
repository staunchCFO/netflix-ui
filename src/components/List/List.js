import { useState , useRef } from 'react'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import ListItem from '../ListItem/ListItem'
import './style.scss'

const List = () => {
    const [ isMoved , setIsMoved ] = useState(false)
    const [ slideNumber , setSlideNumber ] = useState(0)

    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        const distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && slideNumber > 0){
            setSlideNumber( slideNumber - 1 )

            listRef.current.style.transform = `translate(${ 230 + distance }px)`
        }

        if(direction === "right" && slideNumber < 4){
            setSlideNumber( slideNumber + 1)
            listRef.current.style.transform = `translate(${ -230 + distance }px)`
        }
    }

    return (
        <div className="list">
            <span className="list__Title">Continue to watch</span>
            <div className="list__wrapper">
                <ArrowBackIosOutlined 
                    className="list__SliderArrow left" 
                    onClick={() => handleClick("left")} 
                    style={{display: !isMoved && "none"}}
                />
                <div className="list__movieContainer" ref={listRef} >
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined className="list__SliderArrow right" onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List
