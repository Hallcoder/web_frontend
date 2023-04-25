import React from "react";
import cls from "./welcomeBlog.module.scss";
import { Grid } from "@mui/material";
import { IBlog } from "interfaces";
import FallbackImage from "components/fallbackImage/fallbackImage";

type Props = {
  data?: IBlog;
};

export default function WelcomeBlog({ data }: Props) {
  return (
    <div className={`container ${cls.container}`}>
      <div className={cls.wrapper}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <div className={cls.imgWrapper}>
              <FallbackImage src={data?.img} alt={data?.translation?.title} />
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className={cls.card}>
              <h3 className={cls.title}>{data?.translation?.title}</h3>
              <p className={cls.text}>{data?.translation?.short_desc}</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
