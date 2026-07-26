import AboutMe from "./AboutMe";
import CardCarousel from "./CardCarousel";
import Skills from "./Skills";


export default function MainSection() {

    return(
        <>
            <div className="flex justify-around pt-45">
                <div>
                    <AboutMe></AboutMe>
                     <Skills></Skills>
                </div>
           
                <CardCarousel></CardCarousel>
            </div>
           
        </>
    )

}