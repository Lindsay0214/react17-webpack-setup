import React from 'react'
import useInputValidate from "./hooks/useInputValidate"

const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
const isNotEmpty = (value) => value.trim() !== "";
const isEmailFormat = (value) => emailRule.test(value);

function Contact() {
    const {
        value: name,
        isValid: nameIsValid,
        hasError: nameError,
        onChangeValue: onChangeName,
        onBlurValue: onBlurName,
        reset: resetName
      } = useInputValidate(isNotEmpty);

    const {
      value: email,
      isValid: emailIsValid,
      hasError: emailError,
      onChangeValue: onChangeEmail,
      onBlurValue: onBlurEmail,
      reset: resetEmail
    } = useInputValidate(isEmailFormat);

    const onFormSubmit = (e) => {
        e.preventDefault();
    
        if (!nameIsValid || !emailIsValid) {
          return;
        }
    
        console.log("submit success!");
        console.log(name, email);
    
        // reset
        resetName();
        resetEmail();
      };

    const nameInputClasses = nameError ? "invalid" : "";
    const emailInputClasses = emailError ? "invalid" : "";

    return (
        <div>
            <div className="grid grid-cols-1 m-10">
                <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" className="hover:opacity-75 w-full h-96 rounded-lg" alt="" />
            </div>
            <form onSubmit={onFormSubmit} className="grid grid-cols-2 gap-4 m-10">
                <div>
                    <h2>聯絡我們</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus iusto esse quis ratione id sint corporis pariatur? Dolorem laboriosam accusantium qui cum non! A id nulla sed ipsum, ducimus fugiat.</p>
                </div>
                <div className='w-96'>
                    <div className="grid grid-cols-1 gap-4">
                        <label htmlFor="name">姓名</label>
                        <input
                            type="text"
                            id="name"
                            onChange={onChangeName}
                            onBlur={onBlurName}
                            value={name}
                            className={nameInputClasses}
                            placeholder='姓名'
                        />
                        {nameError && <p className="text-red-500">必填</p>}
                        <label htmlFor="email">電子信箱</label>
                        <input
                            type="email"
                            id="email"
                            onChange={onChangeEmail}
                            onBlur={onBlurEmail}
                            value={email}
                            className={emailInputClasses}
                            placeholder='電子信箱'
                        />
                        {emailError && <p className="text-red-500">必填</p>}
                        <button className='bg-slate-200 rounded-xl p-2' disabled={!nameIsValid || !emailIsValid}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact;
