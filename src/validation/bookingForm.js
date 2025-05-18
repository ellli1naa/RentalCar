import * as Yup from "yup";

export const bookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  date: Yup.date()
    .typeError("Invalid date")
    .min(new Date(), "Booking date must be in the future")
    .required("Booking date is required"),
  comment: Yup.string().max(500, "Comment is too long").optional(),
});
