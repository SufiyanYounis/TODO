import * as yup from "yup"


export const usersignUpSchema = yup.object({
    firstName: yup.string().trim().required("First name is required"),
    lastName: yup.string().trim().required("Last name is required"),
    age: yup
      .number()
      .typeError("Age must be a number")
      .min(18, "Age must be >= 18")
      .max(151, "Age must be <= 151")
      .required("Age is required"),
    contact: yup
      .string()
      .matches(/^\d{11}$/, "Phone must be 11 digits")
      .required("Phone is required"),
    email: yup.string().trim().email("Enter a valid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, "Password must contain one uppercase, one lowercase, one number, and one special character"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("Confirm your password"),
  });


  export type userSignUpForm = yup.InferType<typeof usersignUpSchema>;