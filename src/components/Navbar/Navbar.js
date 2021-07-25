import { useState } from 'react'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import './style.scss'

const Navbar = () => {

    const [ isScroll , setIsScroll ] = useState(false)

    window.onscroll = () => {
        setIsScroll(window.pageYOffset === 0 ? false : true );
        return () => (window.onscroll = null);
    }

    return (
        <div className={isScroll ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="container__left">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                        className="logo_img"
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="container__right">
                    <Search className="container__right--icons" />
                    <span>KID</span>
                    <Notifications className="container__right--icons" />
                    <img 
                        className=""
                        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                        alt=""
                    />
                    <div className="container__right--profile">
                        <ArrowDropDown className="container__right--icons" />
                        <div className="container__right--profileOptions">
                            <span>Settings</span>
                            <span>Log out</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
