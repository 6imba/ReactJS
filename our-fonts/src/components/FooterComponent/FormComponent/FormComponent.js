import "./FormComponent.css"

const FormComponent = () => {
  return (
    <div className='footer-form'>
        Stay in the loop:{" "}
        <input type="email" name="" id="" placeholder="you@domain.com" className="email-field"/>
        <button className="sign-up-btn">Sign Up</button>
    </div>
  )
}

export default FormComponent