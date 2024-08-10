import React, { useState } from "react";

import axios from "axios";
import ThreeDot from "react-loading-indicators/ThreeDot";
import { BiMailSend } from "react-icons/bi";
import Toast from "../toast/Toast";
import "./contactus.css";

function StartedSection({}) {
    const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [submitMessage, setSubmitMessage] = useState("");
    const [button, setButton] = useState(false);
    const [toast, setToast] = useState({ type: "info", message: "" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const errors = {};
        const regex = /^([^0-9]*[0-9]){7,11}[^0-9]*$/;

        if (!formData.name) {
            errors.name = "Please specify your name.";
            setButton(false);
            setSubmitMessage("");
            setToast({ type: "info", message: "" });
        }

        if (!formData.email) {
            errors.email = "Please specify your email.";
            setButton(false);
            setSubmitMessage("");
            setToast({ type: "info", message: "" });
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "The email entered is not valid.";
            setButton(false);
            setSubmitMessage("");
            setToast({ type: "info", message: "" });
        }

        if (!formData.phone) {
            errors.phone = "Phone number is required.";
            setButton(false);
            setSubmitMessage("");
            setToast({ type: "info", message: "" });
        } else if (!regex.test(formData.phone)) {
            errors.phone = "The entered phone number is not valid.";
            setButton(false);
            setSubmitMessage("");
            setToast({ type: "info", message: "" });
        } else if (formData.phone.length < 10 || formData.phone.length > 11) {
            errors.phone = "Phone number must be at least 10 digits.";
            setButton(false);
            setSubmitMessage("");
            setToast({ type: "info", message: "" });
        }
        if (!formData.message) {
            errors.message = "Please specify your message.";
            setButton(false);
            setSubmitMessage("");
            setToast({ type: "info", message: "" });
        } else if (formData.message.length < 2) {
            errors.message = "Your message must be more than 10 characters.";
            setButton(false);
            setSubmitMessage("");
            setToast({ type: "info", message: "" });
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButton(true);
        setToast({ type: "info", message: "" });
        setSubmitMessage("");
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios
                    .post("/api/data", formData, {
                        headers: {
                            "X-CSRF-TOKEN": { csrfToken },
                        },
                    })
                    .catch((error) => {
                        //setButtonDisabled(false);
                        if (error.response) {
                            // Server responded with a status other than 2xx
                            setToast({
                                type: "error",
                                message:
                                    "There was an issue with your submission. Please try again.",
                            });
                            setErrors(error.response.data.errors || {});
                        } else if (error.request) {
                            // Request was made but no response received
                            setToast({
                                type: "error",
                                message:
                                    "No response received from the server. Please try again later.",
                            });
                        } else {
                            // Something else happened
                            setToast({
                                type: "error",
                                message:
                                    "An unexpected error occurred. Please try again.",
                            });
                        }
                    });
                setToast({
                    type: "success",
                    message: `Your message was successfully sent.`,
                });
                setSubmitMessage(response.data.message);
                setButton(false);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            } catch (error) {
                if (error.response && error.response.data.errors) {
                    setButton(false);
                    console.log(error);
                    setToast({
                        type: "error",
                        message: error.response.data,
                    });
                    setErrors(error.response);
                } else {
                    setButton(false);
                    console.log(error);
                    setSubmitMessage(error.response.data);
                    setToast({
                        type: "error",
                        message: error.response.data,
                    });
                }
            }
        }
    };

    return (
        <section id="contact" className="get-started section contact">
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact Us</h2>
            </div>
            <div className="container">
                <div className="row justify-content-between gy-4">
                    <div
                        className="col-lg-6 d-flex align-items-center"
                        data-aos="zoom-out"
                        data-aos-delay="100"
                    >
                        <div className="content">
                            <h3>Get in Touch with Us</h3>
                            <p>
                                Have questions or need assistance with our
                                renovation and construction services? Our team
                                is here to help. Whether you’re looking for more
                                information, need a quote, or want to discuss
                                your project in detail, we’re just a message
                                away.
                            </p>
                            <p>
                                Reach out to us through the contact form below,
                                and we will get back to you promptly. We look
                                forward to working with you to bring your vision
                                to life.
                            </p>
                            <p>
                                Your satisfaction is our priority. We are
                                committed to providing exceptional service and
                                support throughout your renovation journey. Let
                                us know how we can assist you today!
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-lg-5"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="php-email-form rounded"
                        >
                            <h3>Get a Quote</h3>
                            <p>
                                Ready to start your next project? Our team is
                                here to help you transform your space with our
                                top-notch renovation and construction services.
                                Whether you have a detailed plan or just a rough
                                idea, we can provide a customized quote tailored
                                to your needs.
                            </p>
                            <p>
                                Simply fill out the form below with your project
                                details, and we'll get back to you promptly with
                                an accurate estimate. Let’s work together to
                                make your vision a reality!
                            </p>
                            <p>
                                Have any questions or need more information
                                before getting a quote? Feel free to reach out
                                to us directly or schedule a consultation. We're
                                here to ensure your project runs smoothly from
                                start to finish.
                            </p>
                            <div className="row gy-3">
                                <div className="col-12">
                                    <input
                                        type="text"
                                        value={formData.name}
                                        name="name"
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Name"
                                        required=""
                                        title="First Name"
                                    />
                                    {errors.name && (
                                        <p className="text-danger">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="col-12 ">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required=""
                                    />
                                    {errors.email && (
                                        <p className="text-danger text-xs italic">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required=""
                                    />
                                    {errors.phone && (
                                        <p className="text-danger text-xs italic">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                <div className="col-12">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows="6"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required=""
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-danger text-xs italic">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                <div className="col-12 text-center">
                                    <button type="submit" disabled={button}>
                                        Get a quote
                                        {button ? (
                                            <ThreeDot
                                                variant="brick-stack"
                                                color="#ffffff"
                                                style={{
                                                    fontSize: "8px",
                                                    marginLeft: "8px",
                                                }}
                                            />
                                        ) : (
                                            <BiMailSend
                                                style={{
                                                    fontSize: "20px",
                                                    marginLeft: "8px",
                                                }}
                                            />
                                        )}
                                    </button>
                                </div>
                                {submitMessage && (
                                    <>
                                        <p className="mt-4 text-success">
                                            {submitMessage}
                                        </p>
                                        <Toast
                                            type={toast.type}
                                            message={toast.message}
                                        />
                                    </>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StartedSection;
