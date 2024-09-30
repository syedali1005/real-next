import { useState } from "react";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Link from "next/link";

function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let validationErrors = {};
    if (!formData.firstname) validationErrors.firstname = "First Name is required";
    if (!formData.lastname) validationErrors.lastname = "Last Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.password) validationErrors.password = "Password is required";
    if (formData.password !== formData.confirmpassword) {
      validationErrors.confirmpassword = "Passwords do not match";
    }
    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({}); // Reset errors if validation passes

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Registration Successful:', data);
        // Optionally redirect or show a success message
      } else {
        const errorData = await response.json();
        console.error('Registration Error:', errorData);
        // Handle registration error (e.g., show error message)
      }
    } catch (error) {
      console.error('Network Error:', error);
      // Handle network error
    }
  };

  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb title="Account" sectionPace="" currentSlug="Register" />

        {/* LOGIN AREA START (Register) */}
        <div className="ltn__login-area pb-110">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="section-title-area text-center">
                  <h1 className="section-title">
                    Register <br />
                    Your Account
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Sit aliquid, Non distinctio vel iste.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={{ span: 6, offset: 3 }}>
                <div className="account-login-inner">
                  <form onSubmit={handleSubmit} className="ltn__form-box contact-form-box">
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                    {errors.firstname && <p className="error">{errors.firstname}</p>}
                    
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                    {errors.lastname && <p className="error">{errors.lastname}</p>}
                    
                    <input
                      type="text"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                    
                    <input
                      type="password"
                      name="password"
                      placeholder="Password*"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                    
                    <input
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password*"
                      value={formData.confirmpassword}
                      onChange={handleChange}
                    />
                    {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}

                    <label className="checkbox-inline">
                      <input type="checkbox" value="" />I consent to Herboil
                      processing my personal data in order to send personalized
                      marketing material in accordance with the consent form and
                      the privacy policy.
                    </label>
                    <label className="checkbox-inline">
                      <input type="checkbox" value="" />
                      By clicking create account, I consent to the privacy
                      policy.
                    </label>
                    <div className="btn-wrapper">
                      <button
                        className="theme-btn-1 btn reverse-color btn-block"
                        type="submit"
                      >
                        CREATE ACCOUNT
                      </button>
                    </div>
                  </form>
                  <div className="by-agree text-center">
                    <p>By creating an account, you agree to our:</p>
                    <p>
                      <Link href="#">
                        TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp;
                        PRIVACY POLICY
                      </Link>
                    </p>
                    <div className="go-to-btn mt-50">
                      <Link href="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* LOGIN AREA END */}

        <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
          <Container>
            <Row>
              <Col xs={12}>
                <CallToAction />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default Register;
