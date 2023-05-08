import React, { useState } from "react";
import style from "./mainContainer.module.css";
import InputMask from "react-input-mask";
import { FaGreaterThan } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MainContainer = () => {
  const [asideClick, setAsideClick] = useState("open_account");
  const [dashBoardSelection, setDashboardSelection] = useState("submited");

  const [formData, setFormData] = useState({
    relationshipManagerName: "",
    customerName: "",
    address: "",
    pan: "",
    adharNumber: "",
    dob: "",
    email: "",
    phoneNumber: "",
    selectedOptions: [],
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleProductSelection = (event) => {
    const option = event.target.value;
    console.log(option);
    if (formData.selectedOptions.includes(option)) {
      setFormData({
        ...formData,
        selectedOptions: formData.selectedOptions.filter(
          (selectedOption) => selectedOption !== option
        ),
      });
    } else {
      setFormData({
        ...formData,
        selectedOptions: [...formData.selectedOptions, option],
      });
    }
  };

  const handleFormSaveData = async () => {
    console.log("formData", formData);
    setAsideClick("product_selection");
  };

  const handleMoveToSummary = async () => {
    // for (let i = 0; i < formData.selectedOptions.length; i++) {
    //   console.log("index " + i + " " + formData.selectedOptions[i]);
    // }
    setAsideClick("summary_page");
  };

  const handleSaveAsDraft = () => {
    setFormData({
      relationshipManagerName: "",
      customerName: "",
      address: "",
      pan: "",
      adharNumber: "",
      dob: "",
      email: "",
      phoneNumber: "",
      selectedOptions: [],
    });
    setAsideClick("open_account");
    toast.success("Application saved as draft");
    //todo : here you need to call and save status as draft
  };
  const handleApplicationSubmit = () => {
    setFormData({
      relationshipManagerName: "",
      customerName: "",
      address: "",
      pan: "",
      adharNumber: "",
      dob: "",
      email: "",
      phoneNumber: "",
      selectedOptions: [],
    });
    setAsideClick("open_account");
    toast.success("Applicatoin submited successfully");

    //todo : here you need to call backend and status as pending
  };

  return (
    <div className={style.mainContaintContainer}>
      <div className={style.asideContainer}>
        <div
          className={style.asideOptionWrapper}
          onClick={() => setAsideClick("open_account")}
        >
          <span className={style.asideOptionsHeading}> Open Account</span>
        </div>
        <div
          className={style.asideOptionWrapper}
          onClick={() => setAsideClick("dashboard")}
        >
          <span className={style.asideOptionsHeading}> Dashboard</span>
        </div>
      </div>
      <div className={style.mainFeedContainer}>
        {asideClick === "open_account" && (
          <>
            <div className={style.openingAccountFormWrapper}>
              <div className={style.accountDetailsWrapper}>
                <div className={style.inputFeildWrapper}>
                  <div className={style.inputlableWrapper}>
                    <span className={style.labelStyle}>
                      Relationship Manager Name:
                    </span>
                  </div>
                  <div className={style.inputWrapper}>
                    <input
                      type="text"
                      name="relationshipManagerName"
                      value={formData.relationshipManagerName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={style.inputFeildWrapper}>
                  <div className={style.inputlableWrapper}>
                    <span className={style.labelStyle}>Customer Name:</span>
                  </div>
                  <div className={style.inputWrapper}>
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={style.inputFeildWrapper}>
                  <div className={style.inputlableWrapper}>
                    <span className={style.labelStyle}>Address:</span>
                  </div>
                  <div className={style.inputWrapper}>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={style.inputFeildWrapper}>
                  <div className={style.inputlableWrapper}>
                    <span className={style.labelStyle}>PAN:</span>
                  </div>
                  <div className={style.inputWrapper}>
                    <input
                      type="text"
                      name="pan"
                      value={formData.pan}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={style.inputFeildWrapper}>
                  <div className={style.inputlableWrapper}>
                    <span className={style.labelStyle}>Adhar Number:</span>
                  </div>
                  <div className={style.inputWrapper}>
                    <InputMask
                      mask="9999 9999 9999"
                      name="adharNumber"
                      value={formData.adharNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={style.inputFeildWrapper}>
                  <div className={style.inputlableWrapper}>
                    <span className={style.labelStyle}>DOB:</span>
                  </div>
                  <div className={style.inputWrapper}>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={style.inputFeildWrapper}>
                  <div className={style.inputlableWrapper}>
                    <span className={style.labelStyle}> Email:</span>
                  </div>
                  <div className={style.inputWrapper}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={style.inputFeildWrapper}>
                  <div className={style.inputlableWrapper}>
                    <span className={style.labelStyle}>Phone Number:</span>
                  </div>
                  <div className={style.inputWrapper}>
                    <InputMask
                      mask="+91 99999 99999"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className={style.navigationWrapper}>
                <div className={style.footerNavigationLeft}></div>
                <div className={style.footerNavigationRight}>
                  <button
                    className={style.nextButton}
                    onClick={handleFormSaveData}
                  >
                    move to product selection
                    <FaGreaterThan className={style.logoStyle} />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {asideClick === "product_selection" && (
          <>
            <div className={style.productSelectionContainer}>
              <div className={style.producutListWrapper}>
                <div className={style.productListHeading}>Select Products:</div>
                <div className={style.productList}>
                  <div className={style.productWrapper}>
                    <label>
                      <input
                        className={style.productCheckBox}
                        type="checkbox"
                        value="Saving Account with minimum 10k"
                        onChange={handleProductSelection}
                      />
                      Saving Account with minimum 10k
                    </label>
                  </div>

                  <div className={style.productWrapper}>
                    <label>
                      <input
                        className={style.productCheckBox}
                        type="checkbox"
                        value="Premium Saving Account with minimum 80K"
                        onChange={handleProductSelection}
                      />
                      Premium Saving Account with minimum 80K
                    </label>
                  </div>

                  <div className={style.productWrapper}>
                    <label>
                      <input
                        className={style.productCheckBox}
                        type="checkbox"
                        value="Salary Account"
                        onChange={handleProductSelection}
                      />
                      Salary Account
                    </label>
                  </div>

                  <div className={style.productWrapper}>
                    <label>
                      <input
                        className={style.productCheckBox}
                        type="checkbox"
                        value="Student Account"
                        onChange={handleProductSelection}
                      />
                      Student Account
                    </label>
                  </div>

                  <div className={style.productWrapper}>
                    <label>
                      <input
                        className={style.productCheckBox}
                        type="checkbox"
                        value="Minor Account"
                        onChange={handleProductSelection}
                      />
                      Minor Account
                    </label>
                  </div>

                  <div className={style.productWrapper}>
                    <label>
                      <input
                        className={style.productCheckBox}
                        type="checkbox"
                        value="Current Account"
                        onChange={handleProductSelection}
                      />
                      Current Account
                    </label>
                  </div>

                  <div className={style.productWrapper}>
                    <label>
                      <input
                        className={style.productCheckBox}
                        type="checkbox"
                        value="Special Pension Scheme"
                        onChange={handleProductSelection}
                      />
                      Special Pension Scheme
                    </label>
                  </div>
                </div>
              </div>
              <div className={style.navigationWrapper}>
                <div className={style.footerNavigationLeft}></div>
                <div className={style.footerNavigationRight}>
                  <button
                    className={style.nextButton}
                    onClick={handleMoveToSummary}
                  >
                    move to summary
                    <FaGreaterThan className={style.logoStyle} />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {asideClick === "summary_page" && (
          <>
            <div className={style.summaryContainer}>
              <div className={style.summaryTableWrapper}>
                <div className={style.tableFeildWrapper}>
                  <div className={style.tableFeildName}>
                    <span className={style.tableFeildHeadingName}>
                      Relationship Manager Name
                    </span>
                  </div>
                  <div className={style.tableFeildValue}></div>
                </div>

                <div className={style.tableFeildWrapper}>
                  <div className={style.tableFeildName}>
                    <span className={style.tableFeildHeadingName}>
                      Customer Name
                    </span>
                  </div>
                  <div className={style.tableFeildValue}></div>
                </div>

                <div className={style.tableFeildWrapper}>
                  <div className={style.tableFeildName}>
                    <span className={style.tableFeildHeadingName}>Address</span>
                  </div>
                  <div className={style.tableFeildValue}></div>
                </div>

                <div className={style.tableFeildWrapper}>
                  <div className={style.tableFeildName}>
                    <span className={style.tableFeildHeadingName}>PAN</span>
                  </div>
                  <div className={style.tableFeildValue}></div>
                </div>

                <div className={style.tableFeildWrapper}>
                  <div className={style.tableFeildName}>
                    <span className={style.tableFeildHeadingName}>
                      Adhar Number
                    </span>
                  </div>
                  <div className={style.tableFeildValue}></div>
                </div>

                <div className={style.tableFeildWrapper}>
                  <div className={style.tableFeildName}>
                    <span className={style.tableFeildHeadingName}>DOB</span>
                  </div>
                  <div className={style.tableFeildValue}></div>
                </div>

                <div className={style.tableFeildWrapper}>
                  <div className={style.tableFeildName}>
                    <span className={style.tableFeildHeadingName}>Email</span>
                  </div>
                  <div className={style.tableFeildValue}></div>
                </div>

                <div className={style.tableFeildWrapper}>
                  <div className={style.tableFeildName}>
                    <span className={style.tableFeildHeadingName}>
                      Phone Number
                    </span>
                  </div>
                  <div className={style.tableFeildValue}></div>
                </div>

                <div className={style.selectedProductWrapper}>
                  <div className={style.tableSelectedProdctHeading}>
                    <span className={style.tableFeildHeadingName}>
                      Selected Products :
                    </span>
                  </div>
                  <div className={style.tableSelectedProductWrapper}>
                    <ul>
                      <li className={style.productListItem}>
                        Saving Account with minimum 10k
                      </li>
                      <li className={style.productListItem}>
                        Premium Saving Account with minimum 80K
                      </li>
                      <li className={style.productListItem}>Salary Account</li>
                      <li className={style.productListItem}>Student Account</li>
                      <li className={style.productListItem}>Minor Account</li>
                      <li className={style.productListItem}>Current Account</li>
                      <li className={style.productListItem}>
                        Special Pension Scheme
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={style.buttonNavigation}>
                <div className={style.buttonWrapper}>
                  <button
                    className={style.saveDraftButton}
                    onClick={handleSaveAsDraft}
                  >
                    Save Draft
                  </button>
                  <button
                    className={style.submitButton}
                    onClick={handleApplicationSubmit}
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {asideClick === "dashboard" && (
          <>
            <div className={style.dashboardContainer}>
              <div className={style.dashboardCart}>
                <div className={style.dashBoardStateWrapper}>
                  <div
                    className={style.formStatusHeading}
                    onClick={() => {
                      setDashboardSelection("submited");
                    }}
                  >
                    <span className={style.statusHeadingText}>Submited</span>
                  </div>
                  <div className={style.formStatusCount}>
                    <span className={style.statusHeadingCount}>03</span>
                  </div>
                </div>

                <div
                  className={style.dashBoardStateWrapper}
                  onClick={() => {
                    setDashboardSelection("drafted");
                  }}
                >
                  <div className={style.formStatusHeading}>
                    <span className={style.statusHeadingText}>Drafts</span>
                  </div>
                  <div className={style.formStatusCount}>
                    <span className={style.statusHeadingCount}>04</span>
                  </div>
                </div>
              </div>
              <div className={style.cartResult}>
                {dashBoardSelection === "submited" && (
                  <>
                    <div className={style.appBarContainer}>
                      <div className={style.appBarInfoWrapper}>
                        <div className={style.applicationBarInfo}>
                          <span className={style.barInfoHeading}>
                            Relationship Manager Name :
                          </span>
                          <span className={style.barInfoResult}>
                            Pratik Bakare
                          </span>
                        </div>
                        <div className={style.applicationBarInfo}>
                          <span className={style.barInfoHeading}>
                            Customer Name :
                          </span>
                          <span className={style.barInfoResult}>
                            Pratik Bakare
                          </span>
                        </div>
                        <div className={style.applicationBarInfo}>
                          <span className={style.barInfoHeading}>Status :</span>
                          <span className={style.barInfoResult}>pending</span>
                        </div>
                      </div>
                      <div className={style.appBarButtonWrapper}>
                        <button className={style.appBarViewButton}>View</button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MainContainer;
