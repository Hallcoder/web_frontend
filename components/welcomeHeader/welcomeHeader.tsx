import React, { useContext } from "react";
import cls from "./welcomeHeader.module.scss";
import dynamic from "next/dynamic";
import Link from "next/link";
import { BrandLogo, BrandLogoDark } from "components/icons";
import SecondaryButton from "components/button/secondaryButton";
import { useAuth } from "contexts/auth/auth.context";
import { ThemeContext } from "contexts/theme/theme.context";
import { useRouter } from "next/router";
import useLocale from "hooks/useLocale";
import useModal from "hooks/useModal";

const AppDrawer = dynamic(() => import("components/appDrawer/appDrawer"));
const ProfileDropdown = dynamic(
  () => import("components/profileDropdown/profileDropdown")
);

type Props = {};

export default function WelcomeHeader({}: Props) {
  const { isDarkMode } = useContext(ThemeContext);
  const { isAuthenticated, user } = useAuth();
  const { push } = useRouter();
  const { t } = useLocale();
  const [appDrawer, handleOpenAppDrawer, handleCloseAppDrawer] = useModal();

  return (
    <>
      <header className={`container ${cls.header}`}>
        <div className={cls.navItem}>
          <button className={cls.menuBtn} onClick={handleOpenAppDrawer}>
            menu
          </button>
          <Link href="/" className={cls.brandLogo}>
            {isDarkMode ? <BrandLogoDark /> : <BrandLogo />}
          </Link>
        </div>
        <div className={cls.searchBar}></div>
        <div className={cls.navItem}>
          <div className={cls.actions}>
            <Link href="/about" className={cls.itemLink}>
              {t("about")}
            </Link>
            <Link href="/blog" className={cls.itemLink}>
              {t("blog")}
            </Link>
            <Link href="/careers" className={cls.itemLink}>
              {t("careers")}
            </Link>
          </div>
          {isAuthenticated ? (
            <ProfileDropdown data={user} />
          ) : (
            <SecondaryButton onClick={() => push("/login")}>
              {t("login")}
            </SecondaryButton>
          )}
        </div>
      </header>

      <AppDrawer open={appDrawer} handleClose={handleCloseAppDrawer} />
    </>
  );
}
