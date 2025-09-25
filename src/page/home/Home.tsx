import { memo } from "react";

import HeroHome from "../../components/Hero-home/hero-home";

function Home(){
    return (
        <>
            <HeroHome/>
        </>
    )
}

export default memo(Home);