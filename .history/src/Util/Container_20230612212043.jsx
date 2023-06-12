// export default function Container({ children }) {
//   return <div className="p-4 max-w-[1028px] mx-auto my-5">{children}</div>;
// }

export default function Container({ children, bgColor ="transparent"}) {
  return (
      <div className={`bg-${bgColor} my-7`}>
          <div className="mx-auto min-[1220px]:w-[1180px] max-[1219px]:px-5">
              {children}
          </div>
      </div>
  )
}
