import React, {useState, useEffect} from 'react';
import cx from 'classnames';
// React Icons
import {AiFillCloseCircle, AiOutlineCheckSquare} from 'react-icons/ai';
import {IoMdCheckmarkCircle} from 'react-icons/io';
// Npm Validator
import ImeiValidator from 'imei';
// React Toastify
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Material Modal
import Modal from '@material-ui/core/Modal';
import styles from '../../css/overlay.module.scss';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

function Overlay(props) {
  let [formState, setFormState] = useState('');

  useEffect(() => {
    //  Generating Form State Object
    // To Render Validity Icons State and Form Input Values
    let formObj = {};
    for (let i = 1; i <= props.quantity; i++) {
      formObj['quantity' + i] = {value: '', validity: false};
    }
    setFormState(formObj);
  }, [props.quantity]);

  //   Generate Form Inputs
  let generateInputs = () => {
    // Checking If formState has been generated having the validity state property for validity icon
    if (
      props.quantity.toString() === Object.keys(formState).length.toString()
    ) {
      let x = [];
      for (let i = 1; i <= props.quantity; i++) {
        x.push(
          <div key={i} className="form-group mb-4">
            <div className={styles.labelsWrapper}>
              <label>Product {i} IMEI</label>
              <label className={styles.skuTxt}>Sku: 123456</label>
            </div>
            <div className={styles.formInputWrapper}>
              <input
                className={cx('form-control', styles.cool)}
                type="number"
                id={'quantity' + i}
                onChange={inputChange}
              />
              {formState['quantity' + i].validity ? (
                <span className={styles.iconWrapper}>
                  <IoMdCheckmarkCircle className={styles.validIcon} />
                </span>
              ) : (
                <span className={styles.iconWrapper}>
                  <AiFillCloseCircle className={styles.inValidIcon} />
                </span>
              )}
            </div>
            <h5 className={styles.genBarCode}>
              <span>
                <AiOutlineCheckSquare />{' '}
                <span className={styles.genBarCodeTxt}>Generate Barcode</span>
              </span>
            </h5>
          </div>
        );
      }
      return x;
    }
  };
  // Form Input Change  --> Input Imei Validation & State Update
  let inputChange = (e) => {
    let name = e.target.id;
    let imei = e.target.value;
    formState[name].value = imei;
    formState[name].validity = ImeiValidator.isValid(imei);
    setFormState({...formState});
  };
  //   Modal Close Handler
  const handleClose = () => {
    props.closeModal();
  };

  // Imei Form Submit
  let overlayFormSubmit = (e) => {
    e.preventDefault();
    let errProducts = '';
    Object.keys(formState).map((formObj, index) => {
      if (formState[formObj].validity === false) {
        errProducts += ` ${index + 1}  ,`;
      }
      return null;
    });
    errProducts = errProducts.substring(0, errProducts.length - 1) + '';
    if (errProducts.length !== 0) {
      const notify = () =>
        toast.error(
          <div>
            Product
            {errProducts}
            <br />
            IMEI Invalid
          </div>,
          {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      notify();
    } else {
      const notify = () =>
        toast.dark(
          <div>
            All Products IMEI Valid <span>&#10003;</span>
          </div>,
          {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      notify();
    }
  };

  //  Modal Body
  const body = (
    <div className={styles.modal}>
      <AiFillCloseCircle
        className={styles.modalCloseBtn}
        onClick={handleClose}
      />
      <div className={styles.modalWrapper}>
        <h4 className={styles.modalTitle}>
          Please Add IMEI for Each Purchased Product
        </h4>
        <form onSubmit={overlayFormSubmit} className={styles.overlayForm}>
          {generateInputs()}
          <div className={cx('row', styles.formSubmitWrapper)}>
            <button type="submit" className={styles.formSubmitBtn}>
              Confirm Now
            </button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={props.modalState}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.modalState}>{body}</Fade>
      </Modal>
    </div>
  );
}

export default Overlay;
