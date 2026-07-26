import { PixelifySans } from "@/fonts/fonts";
import AboutMe from "./AboutMe";
import CardCarousel from "./CardCarousel";
import Redirect from "./Redirect";
import Skills from "./Skills";


export default function MainSection({onRedirect}) {
    return(
        <div className="h-screen flex flex-col">
            <div className="flex justify-around pt-45">
                <div>
                    <AboutMe />
                    <Skills />
                </div>
                <CardCarousel />
            </div>

            <div className="mt-auto pb-24">
                <Redirect  onClick={onRedirect} className={`${PixelifySans.className} text-4xl`} />
            </div>
        </div>
    )
}