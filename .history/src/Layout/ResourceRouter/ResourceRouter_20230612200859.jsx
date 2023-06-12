export const ResourceRouter =  {
    path: "resources",
    element: <RootLayout/>,
    children: [
        {
            path: "faq",
            element: <FAQ/>
        },
        {
            path: "guide",
            element: <Guide/>
        }
    ]
}