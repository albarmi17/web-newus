import { useState } from 'react';
import axios from 'axios';
import contactInfo from '@data/Contact/form.json';

const Form = ({ style = "4" }) => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    option: "",
    message: ""
  });

  const contactInfoData = contactInfo;

  const handleFormChange = (e) => {
    setFormdata(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formValues = new FormData();

    formValues.append('name', formData.name);
    formValues.append('email', formData.email);
    formValues.append('phone', formData.phone);
    formValues.append('website', formData.website);
    formValues.append('option', formData.option);
    formValues.append('message', formData.message);
    
    const res = await axios.post('/contact.php', formValues)
      .catch(err => alert(err.message));

    if (!res) return;

    alert('Form submitted successfully.')
  }

  return (
    <section className={`contact section-padding pt-${style === '4' ? '0':'50'} style-6`}>
      {
        style === '5' && (
          <>
            <div className="section-head text-center mb-20 style-5">
              <h2 className="mb-20">{'Get In' } <span>{'Touch' }</span> </h2>
              <p>{'We will contact again after receive your request in 24h' }</p>
            </div>
            <div className="text-center mb-100">
              <h2 className="ltspc-20 text-uppercase fs-1 lh-1 mb-50 mt-30 color-blue5">{ contactInfoData.phone }</h2>
              <h4 className="fw-normal mb-20 color-000">{ contactInfoData.email }</h4>
              <h4 className="fw-normal mb-10 color-000">{ contactInfoData.address }</h4>
            </div>
          </>
        )
      }
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form action="contact.php" className="form" method="post" onSubmit={handleFormSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input type="text" name="name" className="form-control" placeholder={ "Nama" } onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input type="text" name="email" className="form-control" placeholder={  "Email *" } onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input type="text" name="phone" className="form-control" placeholder={ "Nomor HP (option)" } onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input type="text" name="website" className="form-control" placeholder={  "Website (option)" } onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-20">
                      <select className="form-select" defaultValue={ "Apa yang dapat kami bantu?" } name="option" onChange={handleFormChange}>
                        <option value="Apa yang dapat kami bantu?">{ 'Apa yang dapat kami bantu?' }</option>
                        <option value="Saya ingin melakukan pemesanan aplikasi Alinapps ">{ 'Saya ingin melakukan pemesanan aplikasi Alinapps ' }</option>
                        <option value="Saya ingin membuat website company profile">{ 'Saya ingin membuat website company profile' }</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea rows="10" name="message" className="form-control" placeholder={ "Apa yang dapat kami bantu?" } onChange={handleFormChange}></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <div className="form-check d-inline-flex mt-30 mb-30">
                      <input className="form-check-input me-2 mt-0" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label small" htmlFor="flexCheckDefault">
                        { 'By submitting, i???m agreed to the' } <a href="#" className="text-decoration-underline">{ 'Terms & Conditons' }</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <input type="submit" value={ 'Send Your Request' } className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <img src="/assets/img/icons/contact_a.png" alt="" className="contact_a" />
          <img src="/assets/img/icons/contact_message.png" alt="" className="contact_message" />
        </div>
      </div>
    </section>
  )
}

export default Form