export const AboutRouter =  {
    path: "about",
    element: <About/>,
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