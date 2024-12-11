import React, { useState } from 'react';
import PaymentPopup from './PaymentPopup';

const CustomerDashboard = () => {
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);

  const openPaymentPopup = () => {
    setIsPaymentPopupOpen(true);
  };

  const closePaymentPopup = () => {
    setIsPaymentPopupOpen(false);
  };

  const handlePaymentSubmit = (paymentDetails) => {
    // Handle the payment submission here
    console.log('Payment submitted:', paymentDetails);
    // You would typically send this data to your server or payment processor
  };

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='common-container'>
            <h1>Customer Dashboard</h1>
            <hr />

            <div className="vendor-inputs">
            <div className="vendor-input">
                    <label htmlFor="role"></label>
                    <select id="role" className="px-20 py-2 border">
                    <option value="Event1">Name of the Event 1</option>
                    <option value="Event2">Name of the Event 2</option>
                    <option value="Event3">Name of the Event 3</option>
                    <option value="Event4">Name of the Event 4</option>
                    <option value="Event5">Name of the Event 5</option>
                    <option value="Event6">Name of the Event 6</option>
                    </select>
                </div>
                
                <div className='vendor-input'>
                    <label htmlFor="email" className='block text-gray-700'></label>
                    <input type="email" placeholder='Enter Number of Tickets' className='w-full px-3 py-2 border' name="email"/>
                </div>

                <div>
                    <button onClick={openPaymentPopup} className="btn btn-primary bg-black text-white border-black"><b>Make Payment</b></button>
                    <PaymentPopup isOpen={isPaymentPopupOpen} onClose={closePaymentPopup} onSubmit={handlePaymentSubmit}/>
                </div>
            </div>

            <h1>Manage Tickets</h1>
            <hr />

            <div className='manage-tickets'>
                <div className='manage-event-ticket'>Name of the event and number of tickets</div>
                <button className="btn btn-primary bg-black text-white border-black"><b>Remove</b></button>
            </div>

            <div className='manage-tickets'>
                <div className='manage-event-ticket'>Name of the event and number of tickets</div>
                <button className="btn btn-primary bg-black text-white border-black"><b>Remove</b></button>
            </div>

            <div className='manage-tickets'>
                <div className='manage-event-ticket'>Name of the event and number of tickets</div>
                <button className="btn btn-primary bg-black text-white border-black"><b>Remove</b></button>
            </div>
        </div>
    </div>
  )
}

export default CustomerDashboard