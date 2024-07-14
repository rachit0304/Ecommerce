import {
  Button,
  Divider,
  Grid,
  Rating,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../src/Redux/Customers/Review/Action";
import { useNavigate, useParams } from "react-router-dom";
import { findProductById } from "../../src/Redux/Customers/Product/Action";
import CustomerRoutes from "../../src/Routers/CustomerRoutes";

const RateProduct = () => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [rating, setRating] = useState(0);
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const dispatch = useDispatch();
  const { customersProduct } = useSelector((store) => store);
  const { productId } = useParams();
  const navigate=useNavigate();

  const handleRateProduct = (e, value) => {
    setRating(value);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    dispatch(createReview({review:formData.title,productId,rating}))
    setFormData({title:"",description:""})
    navigate(`/product/${productId}`)

  };
  useEffect(() => {
    dispatch(findProductById({ productId }));
  }, []);
  return (
    <div className=" mb-4">
      <h1 className="text-xl p-5 shadow-lg mb-4 font-bold">
        Rate & Review Product
      </h1>
      <Grid sx={{ justifyContent: "space-between" }} container>
  
        <Grid item xs={12} lg={6}>
          <div className={`${!isLargeScreen ? "py-10" : ""} space-y-5`}>
            <div className="shadow-md border rounded-md p-5">
              <Typography className="font-semibold" component="legend">
                Rate This Product
              </Typography>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  handleRateProduct(event, newValue);
                }}
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-5 shadow-md border rounded-md"
            >
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.title}
                onChange={handleChange}
                name="title"
              />
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={formData.description}
                onChange={handleChange}
                name="description"
              />
              <Button type="submit" variant="contained" color="primary">
                Submit Review
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RateProduct;
