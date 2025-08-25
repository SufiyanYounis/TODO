import * as yup from "yup"

export const userLogInSchema = yup.object(
    {
        email:yup.string().trim().email("Enter a valid email").required("Email is required"),
        password : yup.string().required("Password is required").min(8,"Password must be at least 8 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, "Password must contain one uppercase, one lowercase, one number, and one special character")
    }
);
export type userLoginForm = yup.InferType<typeof userLogInSchema>;