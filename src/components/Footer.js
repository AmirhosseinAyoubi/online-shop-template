import React from 'react'
import style from "./footer.module.css"
import { IoHomeOutline } from "react-icons/io5"
import { HiOutlineMail } from "react-icons/hi"
import { AiOutlineClockCircle } from "react-icons/ai"
import { BsInstagram, BsTwitter, BsTelephone } from "react-icons/bs"
import { FaTelegramPlane, FaPinterestP } from "react-icons/fa"


function Footer() {
    return (
        <div className={style.footer_container}>
            <div className={style.footer_container_top}>
                <div className={style.shop_desc}>
                    <h3>Online Shop</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur a
                        dipisicing elit. Vel explicabo eaque magnam
                        ipsam consequuntur neque nihil asperiores al
                        iquam id necessitatibus.
                    </p>
                </div>
                <div className={style.contact_footer}>
                    <h3>Contact Footer</h3>

                    <ul>
                        <li>
                            <span><IoHomeOutline /> Address:</span>
                            <span>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Maxime, distinctio!
                            </span>
                        </li>
                        <li>
                            <span><HiOutlineMail /> Email:</span>
                            <span>
                                example@mail.com
                            </span>
                        </li>
                        <li>
                            <span><BsTelephone /> Hotline:</span>
                            <span>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Maxime, distinctio!
                            </span>
                        </li>
                        <li>
                            <span><AiOutlineClockCircle /> Opening Hours:</span>

                            <span>
                                Monday - Sunday / 08.00AM - 19.00
                                (Except Holidays)
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={style.follow_us}>
                    <h3>Follow Us</h3>
                    <ul>
                        <li><BsInstagram /></li>
                        <li><FaTelegramPlane /></li>
                        <li><BsTwitter /></li>
                        <li><FaPinterestP /></li>
                    </ul>
                </div>
            </div>
            <div className={style.license}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesenti
                um, qui dolores? Fugiat impedit molestias sequi asperiores illum eum necessitatibus dolorem veritatis, harum obcaeca
                ti! Deserunt sed minus excepturi voluptatem dolores? Et.
            </div>
        </div>
    )
}

export default Footer
