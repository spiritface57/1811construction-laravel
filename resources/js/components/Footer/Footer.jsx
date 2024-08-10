import React from "react";
import { footerData } from "../../data/footers.jsx";
import { useRefs } from "../../context/RefsContex";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
    const refs = useRefs();
    const navigate = useNavigate();

    const handleLinkClick = (itemId) => {
        // Navigate to the route
        navigate("/", { replace: true });

        // Use a timeout to allow the page to render before scrolling
        setTimeout(() => {
            if (refs[itemId]) {
                if (refs[itemId] !== "home") {
                    refs[itemId].current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                } else {
                    window.scrollTo(0, 0);
                    window.history.pushState(null, "", "/");
                }
            }
        }, 500); // Adjust the timeout duration if necessary
    };

    return (
        <footer id="footer" className="footer dark-background">
            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 footer-about">
                        <a href="/" className="logo d-flex align-items-center">
                            <span className="sitename">{footerData.logo}</span>
                        </a>
                        <div className="footer-contact pt-3">
                            <p>{footerData.contact.address}</p>
                            <p className="mt-3">
                                <strong>Phone:</strong>{" "}
                                <span>{footerData.contact.phone}</span>
                            </p>
                            <p>
                                <strong>Email:</strong>{" "}
                                <span>{footerData.contact.email}</span>
                            </p>
                        </div>
                        <div className="social-links d-flex mt-4">
                            {footerData.sections[0].items.map((link, index) => (
                                <a href={link.href} key={index}>
                                    <i className={`bi ${link.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {footerData.sections.slice(1).map((section, index) => (
                        <div
                            key={index}
                            className={`${
                                section.title === "About Us"
                                    ? "col-lg-4 col-md-6 ms-lg-auto"
                                    : "col-lg-2 col-md-3"
                            } footer-links`}
                            style={
                                section.title === "About Us"
                                    ? { paddingRight: "15px" }
                                    : {}
                            }
                        >
                            <h4>{section.title}</h4>
                            <ul>
                                {section.items.map((link, index) =>
                                    link.href === "" ? (
                                        <p
                                            style={{ "wordWrap": "break-word" }}
                                            key={index}
                                        >
                                            {link.text}
                                        </p>
                                    ) : (
                                        <li key={index}>
                                            <Link
                                                to={link.href}
                                                onClick={(e) => {
                                                    e.preventDefault(); // Prevent default anchor behavior
                                                    handleLinkClick(link.tag);
                                                }}
                                            >
                                                {link.text}
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container copyright text-center mt-4">
                <p>
                    © <span>Copyright</span>{" "}
                    <strong className="px-1 sitename">{footerData.logo}</strong>{" "}
                    <span>All Rights Reserved</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
