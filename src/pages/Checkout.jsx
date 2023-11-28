import React, { useState, useContext } from "react";
import backgroundImage from "../assets/images/leaves_background_01.webp";
import treeIcon from "../assets/images/tree_icon.svg";
import footerImage from "../assets/images/biobaum_gallery_footer_img.webp";
import { TextInput, Label } from "flowbite-react";
import { CartContext } from "../store/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartProducts, getTreeQuantity, getItemTotalPrice } =
    useContext(CartContext);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postcode: "",
    stateCountry: "",
    country: "",
  });

  const handleInputChange = (fieldName, value) => {
    setFormValues({
      ...formValues,
      [fieldName]: value,
    });
  };

  const handleUpdate = () => {
    console.log("Form values:", formValues);
  };

  return (
    <main>
      <div className="relative w-full mx-auto xs:p-0 p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex items-center justify-center text-font-family-color">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-top z-[-1]"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}
        ></div>

        <div className="w-[100%] xl:w-[90%] 2xl:w-[80%] bg-white rounded-[15px] p-6 xs:p-2 md:p-4 lg:p-8 z-9 shadow-lg mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px]">
          <div className="flex flex-col-reverse lg:flex-row mt-10 gap-[1rem] sm:gap-[2rem]">
            <div className="w-full lg:w-[50%] flex flex-col sm:gap-[2rem] bg-white rounded-[10px] border border-bg-header-footer mt-4 p-4 items-center">
              <div className="bg-secondary-color rounded-[15px] w-[100%] p-4 mx-auto text-white flex flex-row">
                <div
                  className="rounded-full bg-white w-[40px] h-[40px] mr-[10px]"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={treeIcon}
                    alt=""
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                  />
                </div>{" "}
                <h3 className="text-4xl font-main-font">Checkout</h3>
              </div>{" "}
              {/* Form Fields */}
              <div className="w-full grid grid-cols-1 gap-2 lg:gap-4 mt-10">
                {/* User Details */}
                <div className="flex items-center mb-4">
                  <img
                    src="/src/assets/tree.png"
                    alt="Tree Icon"
                    className="w-[40px] h-[40px] mr-2"
                  />{" "}
                  <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                    Details
                  </h3>
                </div>

                {/* First Name */}
                <div className="mb-4">
                  <Label htmlFor="firstName" className="visually-hidden">
                    First Name
                  </Label>
                  <TextInput
                    required
                    id="firstName"
                    placeholder="First Name *"
                    value={formValues.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    style={{
                      backgroundColor: "var(--bg-white-color)",
                      borderColor: "var(--bg-header-footer)",
                      outlineColor: "var(--secondary-color)",
                      padding: "1.15rem",
                      color: "var(--font-family-color)",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                  <Label htmlFor="lastName" className="visually-hidden">
                    Last Name
                  </Label>
                  <TextInput
                    required
                    id="lastName"
                    placeholder="Last Name *"
                    value={formValues.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    style={{
                      backgroundColor: "var(--bg-white-color)",
                      borderColor: "var(--bg-header-footer)",
                      outlineColor: "var(--secondary-color)",
                      padding: "1.15rem",
                      color: "var(--font-family-color)",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                {/* Email Address */}
                <div className="mb-4">
                  <Label htmlFor="email" className="visually-hidden">
                    Email Address
                  </Label>
                  <TextInput
                    required
                    id="email"
                    placeholder="Email Address *"
                    value={formValues.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    style={{
                      backgroundColor: "var(--bg-white-color)",
                      borderColor: "var(--bg-header-footer)",
                      outlineColor: "var(--secondary-color)",
                      padding: "1.15rem",
                      color: "var(--font-family-color)",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                {/* Delivery Address Info */}
                <div className="flex items-center mb-4 mt-6">
                  <img
                    src="/src/assets/tree.png"
                    alt="Tree Icon"
                    className="w-[40px] h-[40px] mr-2"
                  />{" "}
                  <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                    Delivery
                  </h3>
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                  <Label htmlFor="phoneNumber" className="visually-hidden">
                    Phone Number
                  </Label>
                  <TextInput
                    required
                    id="phoneNumber"
                    placeholder="Phone Number *"
                    value={formValues.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                    style={{
                      backgroundColor: "var(--bg-white-color)",
                      borderColor: "var(--bg-header-footer)",
                      outlineColor: "var(--secondary-color)",
                      padding: "1.15rem",
                      color: "var(--font-family-color)",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                {/* Address Line 1 */}
                <div className="mb-4">
                  <Label htmlFor="addressLine1" className="visually-hidden">
                    Address Line 1
                  </Label>
                  <TextInput
                    required
                    id="addressLine1"
                    placeholder="Address Line 1 *"
                    value={formValues.addressLine1}
                    onChange={(e) =>
                      handleInputChange("addressLine1", e.target.value)
                    }
                    style={{
                      backgroundColor: "var(--bg-white-color)",
                      borderColor: "var(--bg-header-footer)",
                      outlineColor: "var(--secondary-color)",
                      padding: "1.15rem",
                      color: "var(--font-family-color)",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                {/* Address Line 2 */}
                <div className="mb-4">
                  <Label htmlFor="addressLine2" className="visually-hidden">
                    Address Line 2
                  </Label>
                  <TextInput
                    id="addressLine2"
                    placeholder="Address Line 2"
                    value={formValues.addressLine2}
                    onChange={(e) =>
                      handleInputChange("addressLine2", e.target.value)
                    }
                    style={{
                      backgroundColor: "var(--bg-white-color)",
                      borderColor: "var(--bg-header-footer)",
                      outlineColor: "var(--secondary-color)",
                      padding: "1.15rem",
                      color: "var(--font-family-color)",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                {/* City */}
                <div className="mb-4">
                  <Label htmlFor="city" className="visually-hidden">
                    City
                  </Label>
                  <TextInput
                    required
                    id="city"
                    placeholder="City *"
                    value={formValues.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    style={{
                      backgroundColor: "var(--bg-white-color)",
                      borderColor: "var(--bg-header-footer)",
                      outlineColor: "var(--secondary-color)",
                      padding: "1.15rem",
                      color: "var(--font-family-color)",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                {/* Postcode */}
                <div className="mb-4">
                  <Label htmlFor="postcode" className="visually-hidden">
                    Postcode
                  </Label>
                  <TextInput
                    required
                    id="postcode"
                    placeholder="Postcode *"
                    value={formValues.postcode}
                    onChange={(e) =>
                      handleInputChange("postcode", e.target.value)
                    }
                    style={{
                      backgroundColor: "var(--bg-white-color)",
                      borderColor: "var(--bg-header-footer)",
                      outlineColor: "var(--secondary-color)",
                      padding: "1.15rem",
                      color: "var(--font-family-color)",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                {/* State/Country */}
                <div className="mb-4">
                  <Label htmlFor="stateCountry" className="visually-hidden">
                    State/Country
                  </Label>
                  <TextInput
                    id="stateCountry"
                    placeholder="State/Country"
                    value={formValues.stateCountry}
                    onChange={(e) =>
                      handleInputChange("stateCountry", e.target.value)
                    }
                    style={{
                      backgroundColor: "var(--bg-white-color)",
                      borderColor: "var(--bg-header-footer)",
                      outlineColor: "var(--secondary-color)",
                      padding: "1.15rem",
                      color: "var(--font-family-color)",
                      fontSize: "1rem",
                    }}
                  />
                </div>

                {/* Country */}
                <div className="mb-4">
                  <Label htmlFor="country" className="visually-hidden">
                    Country
                  </Label>
                  <TextInput
                    required
                    id="country"
                    placeholder="Country *"
                    value={formValues.country}
                    onChange={(e) =>
                      handleInputChange("country", e.target.value)
                    }
                    style={{
                      backgroundColor: "var(--bg-white-color)",
                      borderColor: "var(--bg-header-footer)",
                      outlineColor: "var(--secondary-color)",
                      padding: "1.15rem",
                      color: "var(--font-family-color)",
                      fontSize: "1rem",
                    }}
                  />
                </div>
              </div>
            </div>
            {/* Sponsorship Summary */}
            <div
              style={{ minHeight: 0 }}
              className="w-full lg:w-[50%] flex flex-col sm:gap-[2rem] bg-white rounded-[10px] border border-bg-header-footer mt-4 p-4 items-center"
            >
              <div className="bg-secondary-color rounded-[15px] w-[100%] p-4 mx-auto text-white flex flex-row">
                <div
                  className="rounded-full bg-white w-[40px] h-[40px] mr-[10px]"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={treeIcon}
                    alt=""
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <h3 className="text-4xl font-main-font">Sponsorship Summary</h3>
              </div>

              {cartProducts.map((product) => (
                <div
                  key={product._id}
                  className="flex flex-col sm:flex-row justify-between items-start gap-[0.5rem] sm:gap-[2rem] pt-0 w-full"
                >
                  {/* Tree Photo and Name */}
                  <div className="w-full sm:w-[65%] flex flex-col items-center sm:items-start pt-0 mt-10 sm:mt-0">
                    <div className="hidden sm:flex flex-row items-center text-xl font-main-font text-secondary-color tracking-wide pb-2">
                      <img
                        src="/src/assets/tree.png"
                        alt="Tree Icon"
                        className="w-[30px] h-[30px] mr-2"
                      />
                      Tree
                    </div>
                    <Link to={`/trees/${product._id}`}>
                      <div className="flex flex-col-reverse sm:flex-row">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full sm:w-[60px] h-[400px] sm:h-[60px] object-cover mr-0 sm:mr-2 rounded-[10px] mt-2 mb-6 sm:mb-0"
                        />
                        <div
                          className={`text-2xl sm:text-[1rem] font-main-font sm:font-general-font text-secondary-color sm:text-dark-gray text-center sm:text-start`}
                        >
                          {product.name}
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Tree Qty */}
                  <div className="w-full sm:w-[25%] flex flex-col items-start">
                    <div className="hidden sm:flex-1 sm:block flex-row justify-center items-center text-xl font-main-font text-secondary-color tracking-wide pb-0 sm:pb-2">
                      Qty
                    </div>
                    <div className="flex flex-row p-[0px] sm:p-[4px] text-dark-gray mx-auto sm:mx-0">
                      <span className="mx-2 text-lg">
                        {getTreeQuantity(product._id)}
                      </span>
                    </div>
                  </div>

                  {/* Tree Price */}
                  <div className="w-full sm:w-[25%] flex flex-col items-start">
                    <div className="hidden sm:flex text-xl font-main-font text-secondary-color tracking-wide pb-2">
                      Price
                    </div>
                    <div className="flex flex-col mx-auto sm:mx-0 text-center sm:text-left">
                      <div className="text-dark-gray text-lg">
                        € {getItemTotalPrice(product).toFixed(2)}
                      </div>
                      <div className="text-md">
                        {" "}
                        €{" "}
                        {product.price && product.price.$numberDecimal
                          ? product.price.$numberDecimal
                          : "N/A"}{" "}
                        each
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Horizontal Line */}
              <hr className="w-[70%] mx-auto border-t-2 border-bg-header-footer my-2" />

              {/* Complete Sponsorship */}
              <Link
                to="/order/place_order"
                className="text-center w-full px-4 py-2 bg-darker-secondary text-white-color rounded-[10px] hover:bg-lighter-secondary hover:text-secondary-color transition duration-4000 ease-linear mt-4 sm:mt-0"
                aria-label="Complete Sponsorship page/Payment"
              >
                Complete Sponsorship
              </Link>
              {/* Back to Cart */}
              <Link
                to="/cart"
                className="text-center w-full px-4 py-2 bg-bg-header-footer text-font-family-color rounded-[10px]   hover:bg-lighter-primary transition duration-4000 ease-linear mt-4 sm:mt-0"
                aria-label="Sponsor Tree page"
              >
                Back to Cart
              </Link>

              {/* POWERED BY STRIPE */}
              <div
                className="text-center w-[70%] mx-auto px-4 py-2 bg-[#f4f5f3] text-secondary-color rounded-[10px] border border-secondary-color mt-4 sm:mt-0"
                aria-label="Powered by Stripe"
              >
                Powered by <span className="font-bold">stripe</span>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <img
        src={footerImage}
        alt="Footer Image"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </main>
  );
};

export default Checkout;
