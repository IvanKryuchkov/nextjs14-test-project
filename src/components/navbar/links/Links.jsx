import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const links = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = () => {
  return (
    <div className={styles.container}>
      {links.map((link) => {
        return <NavLink item={link} key={link.title} />;
      })}
    </div>
  );
};

export default Links;
