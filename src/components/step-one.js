import React from 'react'
import { useForm } from 'react-hook-form';

export default function Stepone({ handleNextStep, formData}) {
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
        <h2 className='heading'>
          Sign Up & Start Your Free Trial
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">First Name*</label>
          <input
            type="text"
            placeholder='First Name'
            {...register("firstName", {
              required: "Enter your First Name",
            })}
          />
          {errors.firstName && (
            <h3 className="errormsg">{errors.firstName.message}</h3>
          )}
          <label htmlFor="">Last Name*</label>
          <input
            type="text"
            placeholder='Last Name'
            {...register("LastName", {
              required: "Enter your Last Name",
            })}
          />
          {errors.LastName && (
            <h3 className="errormsg">{errors.LastName.message}</h3>
          )}
          <button
            className='next-btn'
            onClick={handleSubmit(onSubmit)}
            type="button"
          >
            Next
          </button>
          <p className="login">
            Already have an account? <a href="/" className='login-btn' >Login</a>
          </p>
        </form>
        <div className='stepper'>
          <span className="dot active"></span>
          <span className="dot "></span>
          <span className="dot "></span>
          <span className="dot "></span>
        </div>
      </div>
    </>
  )
}
