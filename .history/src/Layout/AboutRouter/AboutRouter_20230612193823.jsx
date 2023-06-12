export const AboutRouter =  {
    path: "about",
    element: <RootLayout/>,
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