import Inquiry from "../../Pages/Inquiry/Inquiry";

export  const InquiryRouter =  {
    path: "/inquiry",
    element: (
      <>
         <Header imgUrl={'/product.jpeg'}/>
        <Inquiry />
      </>
    ),
  }
