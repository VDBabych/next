import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";
import navigation from "@/utils/navigation";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <a>Logo</a>
      <ul className={styles.link_list}>
        {navigation.map(({ id, path, title }) => (
          <li key={id}>
            <Link
              className={pathname === path ? styles.active : null}
              href={path}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
