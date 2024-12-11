import React from 'react'

function VendorDashboard() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='common-container'>
            <h1>Vendor Dashboard</h1>
            <hr />

            <div className="vendor-inputs">
                <div className='vendor-input'>
                    <label htmlFor="email" className='block text-gray-700'>Event Name</label>
                    <input type="email" placeholder='Enter Event Name' className='w-full px-3 py-2 border' name="email"/>
                </div>
                
                <div className='vendor-input'>
                    <label htmlFor="email" className='block text-gray-700'>Maximum Number of Tickets</label>
                    <input type="email" placeholder='Enter Maximum Number of Tickets' className='w-full px-3 py-2 border' name="email"/>
                </div>

                <div className='vendor-sumbit'>
                    <button className="btn btn-primary bg-black text-white border-black"><b>Submit</b></button>
                </div>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default VendorDashboard