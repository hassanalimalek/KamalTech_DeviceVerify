import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PurchaseForm from './components/purchase_form/purchaseForm';
import Overlay from './components/overlay/overlay';

function App() {
  let [modalState, setModalState] = useState(false);
  let [quantity, setQuantity] = useState('');

  // Purchase Form
  let formSubmit = (formQuantity) => {
    setQuantity(formQuantity);
    setModalState(true);
  };

  let closeModal = () => {
    setModalState(false);
  };

  return (
    <div className="appWrapper">
      <PurchaseForm formSubmit={formSubmit} />
      <Overlay
        modalState={modalState}
        closeModal={closeModal}
        quantity={quantity}
      />
    </div>
  );
}

export default App;
