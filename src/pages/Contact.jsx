import React,{useState} from 'react';
import Footer  from "../Components/Footer.jsx";
import "../styles/Contact.css"

function Contact() {
  const[formData,setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };
  function handleSubmit(e){
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thankyou for reaching out!");
    setFormData({name: "", email: "", message: ""});
  };
  return (
    <div className='wrap'>
      <div className="contact-wrapper">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-section">
          <div className="contact-map">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30430.73188051967!2d78.42640221118927!3d17.562732102804436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8ff8652b6823%3A0x981713dbb4b708c3!2sMalla%20Reddy%20University!5e0!3m2!1sen!2sin!4v1753856687864!5m2!1sen!2sin"
            width="600" 
            height="450" 
            style={{border:0}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">

            </iframe>

            

          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit} netlify>
              <label>Your Name</label>
              <input type="text" name="name" value={formData.name} 
              required onChange={handleChange}
              placeholder='Enter your Name'/>

              <label>Your Email</label>
              <input type="email" name='email' value={formData.email} required onChange={handleChange}
              placeholder='Enter your Email'/>

              <label>Your Message</label>
              <textarea name="message" value={formData.message}
              required onChange={handleChange} 
              rows="5" placeholder='Write your Message here..!'>

              </textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        </div> 

<Footer/>
    </div>
  );
};

export default Contact;