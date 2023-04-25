import React from "react";
import cls from "./whyChooseUs.module.scss";
import useLocale from "hooks/useLocale";
import { Grid } from "@mui/material";

type Props = {};

export default function WhyChooseUs({}: Props) {
  const { t } = useLocale();

  return (
    <div className={`container ${cls.container}`}>
      <section className={cls.wrapper}>
        <h1 className={cls.title}>{t("why.choose.us")}</h1>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <div className={cls.card} tabIndex={1}>
              <div className={cls.number}>01</div>
              <h3 className={cls.cardTitle}>
                {t("why.choose.us.first.title")}
              </h3>
              <p className={cls.text}>{t("why.choose.us.first.text")}</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={cls.card} tabIndex={2}>
              <div className={cls.number}>02</div>
              <h3 className={cls.cardTitle}>
                {t("why.choose.us.second.title")}
              </h3>
              <p className={cls.text}>{t("why.choose.us.second.text")}</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={cls.card} tabIndex={3}>
              <div className={cls.number}>03</div>
              <h3 className={cls.cardTitle}>
                {t("why.choose.us.third.title")}
              </h3>
              <p className={cls.text}>{t("why.choose.us.third.text")}</p>
            </div>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}
