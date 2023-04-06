import React from 'react'
import { useForm } from 'react-hook-form';

export default function Stepthree({ handleNextStep, handleBackStep, formData }) {
    const {
        register,
        handleSubmit, watch,
        setValue,
        formState: { errors },
    } = useForm({ defaultValues: formData });

    const [steptwo] = React.useState(localStorage?.steptwo ? JSON.parse(localStorage?.steptwo) : "");

    const password = React.useRef({});
    password.current = watch("Password", "");

    const onSubmit = (d) => {
        console.log(d, "data");
        localStorage['steptwo'] = JSON.stringify(d);
        handleNextStep();
    };

    React.useEffect(() => {
        for (const [key, value] of Object.entries(steptwo)) {

            setValue(key, value);
        }
    }, [steptwo , setValue])
    return (
        <>
            <div className="card">
                <img src="/Frame 12.png" alt="" />
                <h2 className='heading'>
                    Sign Up & Start Your Free Trial
                </h2>
                <form  onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Role*</label>
                    <select name="" id="" placeholder='Role' {...register("role", {
                                    required: "Select your Role",
                                })} >
                        <option value="" hidden>Role</option>
                        <option value="Intern">Intern</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Senior">Senior</option>
                    </select>{errors.role && (
                        <h3 className="errormsg">{errors.role.message}</h3>
                    )}


                    <label htmlFor="">Select your firm*</label>
                    <select name="" id="" placeholder='Select your firm' {...register("firm", {
                                    required: "Select your firm",
                                })} >
                       <option value="" hidden>Select your firm</option>
                        <option value="Partnership ">Partnership </option>
                        <option value="Corporation">Corporation</option>
                        <option value="Financial Co-operative">Financial Co-operative</option>
                        <option value="Sole Proprietorships">Sole Proprietorships</option>
                    </select>{errors.firm && (
                        <h3 className="errormsg">{errors.firm.message}</h3>
                    )}

                    <div className="flex">
                        <button className='back-btn btn-1' onClick={handleBackStep} type="submit">Back</button>
                        <button className='next-btn btn-1' onClick={handleSubmit(onSubmit)} type="submit">Next</button>
                    </div>
                    <h3 className="login">Already have an account? <a href="/" className='login-btn' >Login</a></h3>
                </form>
                <div className='stepper'>
                    <span className="dot dot-blue " onClick={handleBackStep}></span>
                    <span className="dot dot-blue" onClick={handleBackStep}></span>
                    <span className="dot active"></span>
                    <span className="dot  "></span>
                </div>
            </div>
        </>
    )
}
