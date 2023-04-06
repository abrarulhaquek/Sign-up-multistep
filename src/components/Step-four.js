import React from 'react'
import { useForm } from 'react-hook-form';

    export default function Stepfour({ handleNextStep, handleBackStep, formData}) {
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
            // handleNextStep();
          };

          React.useEffect(()=>{
            for (const [key, value] of Object.entries(steptwo)) {

              setValue(key,value);
            }
          },[steptwo , setValue])
    return (
        <>
            <div className="card">
                <img src="/Frame 12.png" alt="" />
                <h2 className='heading'>
                    Sign Up & Start Your Free Trial
                </h2>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">Street*</label>
                    <input type='text' placeholder='Street' {...register("Street", {
                                    required: " Enter your Street",
                                })} />{errors.Street && (
                        <h3 className="errormsg">{errors.Street.message}</h3>
                    )}
                    <label htmlFor="">Street 2*</label>
                    <input type='text' placeholder='Street 2'  {...register("Street2", {
                                    required: " Enter your Street2",
                                })}/>{errors.Street2 && (
                        <h3 className="errormsg">{errors.Street2.message}</h3>
                    )}
                    <div className="flex">
                        <div>
                            <label htmlFor="">City*</label><br />
                            <input type='text' className='flex-input' placeholder='City' {...register("City", {
                                    required: " Enter your City",
                                })} />{errors.City && (
                        <h3 className="errormsg">{errors.City.message}</h3>
                    )}
                        </div>
                        <div>
                            <label htmlFor="">State / Province*</label> <br />
                            <input type='text' className='flex-input' placeholder='State / Province' {...register("State", {
                                    required: " Enter your State / Province",
                                })} />{errors.State && (
                        <h3 className="errormsg error1">{errors.State.message}</h3>
                    )}
                        </div>
                    </div>
                    <label htmlFor="">Country*</label>
                    <select name="" id="" placeholder='Country' {...register("Country", {
                                    required: "Enter your Country",
                                })} >
                        <option value="" hidden>Country</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="India">India</option>
                        <option value="UAE">UAE</option>
                    </select>{errors.Country && (
                        <h3 className="errormsg">{errors.Country.message}</h3>
                    )}
                    <label htmlFor="">Zip / Postal Code*</label>
                    <input type='number' placeholder='Zip / Postal Code' {...register("zip", {
                                    required: " Enter your Zip / Postal Code",
                                })} />
                                {errors.zip && (
                        <h3 className="errormsg">{errors.zip.message}</h3>
                    )}
                    <div className="flex">
                        <button className='back-btn btn-1' onClick={handleBackStep} type="submit">Back</button>
                        <button className='next-btn btn-1'  onClick={handleNextStep} type="submit">Next</button>
                    </div>
                    <p className="login">Already have an account? <a href="/" className='login-btn' >Login</a></p>
                </form>
                <div className='stepper'>
                    <span className="dot dot-blue " onClick={()=> handleBackStep + 2}></span>
                    <span className="dot dot-blue " onClick={()=> handleBackStep + 1}></span>
                    <span className="dot dot-blue " onClick={()=> handleBackStep}></span>
                    <span className="dot  active"></span>
                </div>
            </div>
        </>
    )
}
