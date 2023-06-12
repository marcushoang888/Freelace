import FAQ from "../../Pages/Resources/pages/FAQ";
import Guide from "../../Pages/Resources/pages/Guide";

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