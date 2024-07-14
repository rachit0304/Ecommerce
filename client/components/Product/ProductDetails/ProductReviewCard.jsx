import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { Rating, Box, Typography, Grid } from "@mui/material";

const ProductReviewCard = ({item}) => {

  const splitReview = item.review.split(',');
  const [value, setValue] = useState(0);
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  return (
    <div className="">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              alt={item?.user?.firstName || ""}
              src=""
            >
              {item?.user?.firstName || ""}
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">{item.user?.firstName}</p>
              <p className="opacity-70">{day}-{month}-{year}</p>
            </div>
            <div>
            

              <Rating
                value={splitReview[2]}
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />
             
            </div>
            <p className="font-bold">
              {splitReview[0]}
            </p>
            <p>
              {splitReview[1]}
            </p>
          </div>
        </Grid>
      </Grid>
      <div className="col-span-1 flex"></div>
    </div>
  );
};

export default ProductReviewCard;
