import React from 'react';

import Header from "../../components/screens/header/header";
import Main from "../../components/screens/main/Main";
import FirstSlide from "./components/slides/firstSlide/firstSlide";
import SecondSlide from "./components/slides/secondSlide/secondSlide";
import FifthSlide from "./components/slides/fifthSlide/fifthSlide";
import ThirdSlide from "./components/slides/thirdSlide/thirdSlide";
import FourthSlide from "./components/slides/fourthSlide/fourthSlide";
import Footer from "../../components/screens/footer/footer";

function Home() {
    return (
        <>
            <Header/>

            <Main>
                <FirstSlide/>
                <SecondSlide/>
                <FifthSlide/>
                <ThirdSlide/>
                <FourthSlide/>
            </Main>

            <Footer/>
        </>
    );
}

export default Home;