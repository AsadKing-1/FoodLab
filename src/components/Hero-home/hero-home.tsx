import "./hero-home.scss";

import SplitText from "../split-text/split-text";

import { Link } from "wouter";

export default function HeroHome() {
    return (
        <div className="hero-home">
            <div className="hero-center-div">
                <svg className="blob-1 blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#f27121" d="M32.7,-48C41.2,-51.7,46.2,-40.6,43.8,-30.2C41.5,-19.7,31.8,-9.8,26.2,-3.2C20.5,3.4,19,6.8,22.3,18.8C25.6,30.8,33.6,51.5,30.7,53.6C27.8,55.8,13.9,39.5,-1,41.1C-15.8,42.8,-31.6,62.4,-42.7,65C-53.7,67.5,-60.1,52.9,-55.3,39.3C-50.4,25.6,-34.4,12.8,-31.7,1.6C-28.9,-9.6,-39.5,-19.3,-39.3,-24.2C-39.1,-29.2,-28.1,-29.4,-19.8,-25.9C-11.4,-22.3,-5.7,-15,3.2,-20.5C12.1,-26,24.2,-44.4,32.7,-48Z" transform="translate(100 100)" />
                </svg>
                <svg className="blob-2 blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#8a2387" d="M31,-48C36.1,-50.7,33.4,-34.2,36.5,-23C39.5,-11.8,48.4,-5.9,44.6,-2.2C40.7,1.5,24.2,2.9,20.5,13C16.7,23.1,25.8,41.8,24.5,55.3C23.3,68.8,11.6,77.3,3.4,71.4C-4.8,65.5,-9.7,45.3,-22.8,38.6C-35.8,31.9,-57.1,38.6,-60.5,34.4C-63.9,30.2,-49.3,15.1,-47.3,1.2C-45.3,-12.8,-55.9,-25.6,-53.5,-31.5C-51.2,-37.5,-35.9,-36.6,-24.8,-30.4C-13.7,-24.2,-6.9,-12.8,3,-18C12.9,-23.3,25.9,-45.3,31,-48Z" transform="translate(100 100)" />
                </svg>

                <svg className="blob-3 blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#8a2387" d="M26.3,-45.4C30.9,-42.9,29.3,-29.4,39.2,-20C49.1,-10.6,70.6,-5.3,73.2,1.5C75.9,8.4,59.7,16.7,52,30C44.3,43.2,45.1,61.3,37.8,66.4C30.6,71.5,15.3,63.6,5.2,54.6C-4.9,45.6,-9.8,35.5,-20.5,32.4C-31.3,29.4,-47.9,33.3,-52.8,29.1C-57.7,24.8,-50.9,12.4,-54.3,-2C-57.8,-16.4,-71.4,-32.7,-70,-43C-68.6,-53.3,-52.1,-57.4,-37.9,-54.4C-23.7,-51.3,-11.9,-41,-0.5,-40.2C10.9,-39.3,21.7,-47.9,26.3,-45.4Z" transform="translate(100 100)" />
                </svg>

                <svg className="blob-4 blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF0066" d="M18,-23.7C28.9,-24.9,47.1,-31.3,61.4,-28.2C75.7,-25.1,86.2,-12.6,82.4,-2.2C78.6,8.1,60.4,16.3,50.7,27.4C41,38.5,39.7,52.5,32.6,61.5C25.6,70.6,12.8,74.8,2.1,71.2C-8.7,67.6,-17.3,56.3,-26.3,48.3C-35.2,40.3,-44.5,35.7,-47,28.2C-49.6,20.7,-45.3,10.4,-43.5,1.1C-41.6,-8.2,-42.1,-16.4,-38.8,-22.5C-35.5,-28.7,-28.4,-32.8,-21.3,-33.8C-14.2,-34.8,-7.1,-32.7,-1.8,-29.6C3.5,-26.5,7.1,-22.5,18,-23.7Z" transform="translate(100 100)" />
                </svg>
                <SplitText splitType="words, chars" text="Welcome to Foodlab!" className="hero-text" />
                <div className="group-btn">
                    <Link className="hero-link" to="/recepts">Recepts
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </Link>
                    <Link className="hero-link" to="/about">About Us
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}