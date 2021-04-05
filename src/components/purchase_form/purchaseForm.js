import React from 'react';
import cx from 'classnames';
import styles from '../../css/purchaseForm.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Purchase_form(props) {
  let submitForm = (e) => {
    // Submitting only Quantity as of Now
    e.preventDefault();
    let quantity = e.target.quantity.value;
    props.formSubmit(quantity);
  };

  return (
    <div className={styles.form}>
      <div className={styles.formContainer}>
        <form onSubmit={submitForm}>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="form-group mb-4">
                <label className={styles.formLabel} htmlFor="supplier">
                  Supplier
                </label>
                <select className="form-control" id="supplier">
                  <option>John Smith</option>
                  <option>Will Champion</option>
                  <option>Ray Jordan</option>
                </select>
              </div>
              <div className="form-group mb-4">
                <label className={styles.formLabel} htmlFor="category">
                  Category
                </label>
                <select className="form-control" id="category">
                  <option>Electronics</option>
                  <option>Sports</option>
                  <option>General</option>
                </select>
              </div>
              <div className="form-group mb-4">
                <label className={styles.formLabel} htmlFor="subCategory">
                  Sub Category
                </label>
                <select className="form-control" id="subCategory">
                  <option>Mobiles</option>
                  <option>Laptops</option>
                  <option>Accessories</option>
                </select>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="itemName">Item Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="itemName"
                  //   required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="model">Model</label>
                <input
                  type="text"
                  className="form-control"
                  id="model"
                  //   required
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="form-group mb-4">
                <label htmlFor="description">Description</label>
                <textarea
                  className={cx('form-control', styles.formDescription)}
                  id="description"
                  //   required
                ></textarea>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  min="1"
                  max="20"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="quantity">Identified By</label>
                <br />
                <div className="form-check form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="identifiedBy"
                    id="imei"
                    value="imei"
                    // required
                  />
                  <label
                    className={cx('form-check-label', styles.radioLabel)}
                    htmlFor="imei"
                  >
                    IMEI
                  </label>
                </div>
                <div className="form-check form-check-inline mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="identifiedBy"
                    id="serialNumber"
                    value="serialNumber"
                    defaultChecked
                  />
                  <label
                    className={cx('form-check-label', styles.radioLabel)}
                    htmlFor="serialNumber"
                  >
                    Serial Number
                  </label>
                </div>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="warranty">Warranty</label>
                <input
                  type="text"
                  className="form-control"
                  id="warranty"
                  //   required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="publishedToWeb">Published to Web Store?</label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="publishedToWeb"
                    id="yes"
                    value="yes"
                    defaultChecked
                  />
                  <label
                    className={cx('form-check-label', styles.radioLabel)}
                    htmlFor="yes"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="publishedToWeb"
                    id="no"
                    value="no"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="form-group mb-4">
                <label htmlFor="purchasePrice">Purchase Price</label>
                <input
                  type="price"
                  className="form-control"
                  id="purchasePrice"
                  //   required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="clientPrice">Client Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="clientPrice"
                  //   required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="shopkeeperPrice">Shopkeeper Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="shopkeeperPrice"
                  //   required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="takeAwayPrice">Take Away Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="takeAwayPrice"
                  //   required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="vipPrice">Vip Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="vipPrice"
                  //   required
                />
              </div>
            </div>
          </div>
          <div className={cx('row', styles.formSubmitWrapper)}>
            <button type="submit" className={styles.formSubmitBtn}>
              Add Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Purchase_form;
