import OurStory from "../../Pages/About/pages/OurStory";
import AboutLayout from "./AboutLayout";

export const AboutRouter =  {
    path: "about",
    element: <AboutLayout/>,
    children: [
        {
            path: "our-story",
            element: <OurStory/>
        },
        {
            path: "our-advantage",
            element: <OurAdvantage/>
        },
    ]
}