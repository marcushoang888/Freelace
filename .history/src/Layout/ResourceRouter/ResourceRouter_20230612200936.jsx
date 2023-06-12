import FAQ from "../../Pages/Resources/pages/FAQ";

export const ResourceRouter =  {
    path: "resources",
    element: <ResourceRouter/>,
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