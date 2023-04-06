import React from 'react';
import { useForm } from 'react-hook-form';

export default function Steptwo({ handleNextStep, handleBackStep, formData }) {
  const {
    register,
    handleSubmit,watch,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const [steptwo] = React.useState(localStorage?.steptwo ? JSON.parse(localStorage?.steptwo) : "");

  const password = React.useRef({});
  password.current = watch("Password", "");

  const onSubmit = (d) => {
    console.log(d, "data");
    localStorage['steptwo']=JSON.stringify(d);
    handleNextStep();
  };

  React.useEffect(()=>{
    for (const [key, value] of Object.entries(steptwo)) {

      setValue(key,value);
    }
  },[steptwo])


  return (
    <>
      <div className="card">
        <img src="/Frame 12.png" alt="" />
        <h2 className="heading">Sign Up & Start Your Free Trial</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Email Address*</label>
          <input
            type="email"
            placeholder="Email Address"
            {...register("Email", {
              required: " Enter your Email",
            })}
          />
          {errors.Email && (
            <h3 className="errormsg">{errors.Email.message}</h3>
          )}
          <label htmlFor="">Password*</label>
          <input
            type="password"
            placeholder="Password"
            autoComplete="password"
            {...register("Password", {
              required: " Enter your Password",
            })}
          />
          {errors.Password && (
            <h3 className="errormsg">{errors.Password.message}</h3>
          )}
          <label htmlFor="">Confirm Password*</label>
          <input
            type="password"
            placeholder="Confirm Password"
            autoComplete="password"
            {...register("Confirm", {
              required: " Enter your Confirm Password",
            })}
          />
          {errors.Confirm && (
            <h3 className="errormsg">{errors.Confirm.message}</h3>
          )}
          <div className="flex">
            <button className="back-btn btn-1" onClick={handleBackStep} type="button">
              Back
            </button>
            <button className="next-btn btn-1" onClick={handleSubmit(onSubmit)} type="button">
              Next
            </button>
          </div>
          <span className="login">
            Already have an account? <a href="/" className="login-btn">Login</a>
          </span>
        </form>
        <div className="stepper">
          <span className="dot dot-blue" onClick={handleBackStep}></span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </>
  );
}
