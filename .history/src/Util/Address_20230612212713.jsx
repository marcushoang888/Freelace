import { Link, useLocation } from "react-router-dom";

export default function Address() {
  const { pathname } = useLocation();
  const words = pathname.split("/");
  console.log(words);
  const lon = (
    <span className="font-bold text-[#003d79] text-xl">&gt;&gt;</span>
  );
  return (
    <div className="mb-5">
      <p className="text-lg">
        You are here: {` `}
        <span className="uppercase">
          <Link to={`/${words[1]}`}>
            {lon}

            <span className="underline text-blue-500 ">{words[1]}</span>
          </Link>{" "}
        </span>
        {words[2] &&
          (Number(words[2]) ? (
            <Link to={`/products/${words[2]}`}>
              {lon}
              {
                <span className="underline text-blue-500 ">
                  {
                    products.find((product) => product.id === Number(words[2]))
                      .title
                  }
                </span>
              }
            </Link>
          ) : (
            <Link to={`/products/${words[2]}`}>
              <span className="underline text-blue-500 ">{words[2]}</span>
            </Link>
          ))}
      </p>
    </div>
  );
}
