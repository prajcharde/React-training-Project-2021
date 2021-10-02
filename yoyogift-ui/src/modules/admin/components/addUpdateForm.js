import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { adminAddCard, adminUpdateCard,fetchCard } from "../../gifts/state/actions/index"
import history from '../../common/components/history';
import {DateFormatter} from '../../common/components/DateFormatter';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

class addUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.clearInput = this.clearInput.bind(this);
 };

 updatePayload = {
  // id: Math.floor((Math.random() * 100) + 1),
};
currentGiftCard = {};
componentDidMount () {
  if(this.props.match.params.id)
   this.props.fetchCard(this.props.match.params.id);
}

 clearInput() {
  this.setState(
    {
      cardNameValue: '',
      cardNameError: false,
      cardNameHelperText: '',
      cardPointsValue: '',
      cardPointsError: false,
      cardPointsHelperText: '',
      cardCategoryValue: '',
      cardCategoryError: false,
      cardCategoryHelperText: '',
      cardRetailerValue: '',
      cardRetailerError: false,
      cardRetailerHelperText: '',
      cardExpiryDateValue: '',
      cardExpiryDateError: false,
      cardExpiryDateHelperText: '',
      cardCountValue: '',
      cardCountError: false,
      cardCountHelperText: '',
      cardImageValue: '',
      cardImageError: false,
      cardImageHelperText: '',
      cardVendorValue: '',
      cardVendorError: false,
      cardVendorHelperText: '',
      cardShortDescValue: '',
      cardShortDescError: false,
      cardShortDescHelperText: '',
      cardLongDescValue: '',
      cardLongDescError: false,
      cardLongDescHelperText: ''
    }
  );
}

  cardObject = {}

  addUpdateCard = (values) => {
    if(!(this.props.match.params.id)) {
      let cardExpiryDateValue = new Date(values);
      this.cardObject = {
        id: Math.floor((Math.random() * 100) + 1),
        cardName: values.cardName,
        cardPoints: values.cardPoints,
        cardCategory: values.cardCategory,
        cardRetailer: values.cardRetailer,
        cardIssueDate: new Date(),
        cardExpiryDate: cardExpiryDateValue,
        cardCount: values.cardCount,
        cardImage: values.cardImage,
        cardVendor: values.cardVendor,
        cardShortDesc: values.cardShortDesc,
        cardLongDesc: values.cardLongDesc,
        cardComments: []
      }
      this.props.adminAddCard(this.cardObject).then(() => {
        this.setState({
          showSuccessSnackBar: true
        });
        setTimeout(() => {
          this.setState({
            showSuccessSnackBar: false
          });
        history.push('/giftCards');
        }, 2000);
      })
    } else {
      if (Object.keys(values).length !== 0) {
              this.props.adminUpdateCard(this.currentGiftCard.id, values).then((response) => {
                setTimeout(() => {
                history.push('/giftCards');
                }, 2000);
                })
        }
      } 
  };

  render() {
    this.currentGiftCard = this.props.giftCard;
    return(
      <React.Fragment>
        <Formik
              initialValues={{ 
                cardName: this.currentGiftCard.cardName ? this.currentGiftCard.cardName : '',
                cardPoints: this.currentGiftCard.cardPoints ? this.currentGiftCard.cardPoints : '', 
                cardCategory: this.currentGiftCard.cardCategory ? this.currentGiftCard.cardCategory : '', 
                cardRetailer: this.currentGiftCard.cardRetailer ? this.currentGiftCard.cardRetailer : '', 
                cardExpiryDate: this.currentGiftCard.cardExpiryDate ? DateFormatter(this.currentGiftCard.cardExpiryDate) : '',
                cardCount: this.currentGiftCard.cardCount ? this.currentGiftCard.cardCount : '',
                cardImage: this.currentGiftCard.cardImage ? this.currentGiftCard.cardImage : '',
                cardVendor: this.currentGiftCard.cardVendor ? this.currentGiftCard.cardVendor : '',
                cardShortDesc: this.currentGiftCard.cardShortDesc ? this.currentGiftCard.cardShortDesc : '',
                cardLongDesc: this.currentGiftCard.cardLongDesc ? this.currentGiftCard.cardLongDesc : ''
               }}
               enableReinitialize={true}
              validationSchema={AddUpdateCardSchema}
              onSubmit={(values) => {
                alert("Form is validated! Submitting the form...");
                //setSubmitting(false);
                console.log(values);
                this.addUpdateCard(values);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="cardName">Card Name</label>
                    <Field
                      type="text"
                      name="cardName"
                      placeholder="Enter CardName"
                      className={`form-control ${
                        touched.cardName && errors.cardName ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="cardName"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cardPoints">Card Points</label>
                    <Field
                      type="number"
                      name="cardPoints"
                      placeholder="Enter Points"
                      className={`form-control ${
                        touched.cardPoints && errors.cardPoints ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="cardPoints"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cardCategory">Category</label>
                    <Field
                      type="text"
                      name="cardCategory"
                      placeholder="Enter category"
                      className={`form-control ${
                        touched.cardCategory && errors.cardCategory ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="cardCategory"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cardRetailer">Retailer</label>
                    <Field
                      type="text"
                      name="cardRetailer"
                      placeholder="Enter Retailer"
                      className={`form-control ${
                        touched.cardRetailer && errors.cardRetailer ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="retailer"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cardExpiryDate">Expiry Date</label>
                    <Field
                      type="date"
                      name="cardExpiryDate"
                      placeholder="Enter ExpiryDate"
                      className={`form-control ${
                        touched.cardExpiryDate && errors.cardExpiryDate ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="cardExpiryDate"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cardCount">Card Count</label>
                    <Field
                      type="number"
                      name="cardCount"
                      placeholder="Enter Count"
                      className={`form-control ${
                        touched.cardCount && errors.cardCount ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="cardCount"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cardImage">Card Image</label>
                    <Field
                      type="text"
                      name="cardImage"
                      placeholder="Enter image Url"
                      className={`form-control ${
                        touched.cardImage && errors.cardImage ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="cardImage"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cardVendor">Card Vendor</label>
                    <Field
                      type="text"
                      name="cardVendor"
                      placeholder="Enter Vendor"
                      className={`form-control ${
                        touched.cardVendor && errors.cardVendor ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="cardVendor"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cardShortDesc">Card ShortDesc</label>
                    <Field
                      type="text"
                      name="cardShortDesc"
                      placeholder="Enter ShortDesc"
                      className={`form-control ${
                        touched.cardShortDesc && errors.cardShortDesc ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="cardShortDesc"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cardLongDesc">Card Longdesc</label>
                    <Field
                      type="text"
                      name="cardLongDesc"
                      placeholder="Enter LongDesc"
                      className={`form-control ${
                        touched.cardLongDesc && errors.cardLongDesc ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="cardLongDesc"
                      className="invalid-feedback"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    {"Submit"}
                  </button>
                </Form>
              )}
            </Formik>
      </React.Fragment>
    );

  }
}

const AddUpdateCardSchema = Yup.object().shape({
  cardName: Yup.string()
    .min(3 ,"Invalid Card Name")
    .required("CardName is required"),
  cardPoints: Yup.number()
    .min(1, "Add accurate points")
    .max(100, "Maximum limit is 100")
    .required("Points are required"),
  cardCategory: Yup.string()
    .min(3, "Invalid Category")
    .required("Category is required"),
  cardRetailer :Yup.string()
    .min(3, "Invalid retailer")
    .required("Retailer is required"),
  cardExpiryDate :Yup.date()
    .min(new Date(), "Invalid Date")
    .required("Expiry Date is required"),
  cardCount: Yup.number()
    .required("Points are required"),
  cardImage :Yup.string()
    .required("Image is required"),
  cardVendor :Yup.string()
    .min(3, "Invalid Vendor")
    .required("Vendor is required"),
  cardShortDesc :Yup.string()
    .min(3, "Invalid ShortDesc")
    .required("ShortDesc is required"),
  cardLongDesc :Yup.string()
    .min(3, "Invalid LongDesc")
    .required("LongDesc is required")
});

const mapStateToProps = (state) => {
  return {
    giftCard: state.gifts.giftCard,
    giftCards: state.gifts.giftCards
  }
}

export default connect(mapStateToProps, {adminAddCard, adminUpdateCard, fetchCard})(withRouter(addUpdateForm));
