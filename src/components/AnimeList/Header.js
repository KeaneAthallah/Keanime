import Link from "next/link";
const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="font-bold text-2xl">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          className="md:text-xl text-md hover:text-indigo-500 transition-all"
          href={linkHref}>
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
