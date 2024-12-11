import React from 'react'

function AdminDashboard() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='common-container'>
            <h1>Admin Dashboard</h1>
            <hr />

            <div className='admin-container'>
                <div className='event-list'>
                    <div className='admin-events'>Event 1</div>
                    <div className='admin-events1'>
                        <button className="btn btn-primary bg-black text-white px-3 border-black"><b>Remove</b></button>
                        <button className="btn btn-primary text-black px-3 border-black"><b>Approve</b></button>
                    </div>
                </div>
                
                <div className='event-list'>
                    <div className='admin-events'>Event 2</div>
                    <div className='admin-events1'>
                        <button className="btn btn-primary bg-black text-white px-3 border-black"><b>Remove</b></button>
                        <button className="btn btn-primary text-black px-3 border-black"><b>Approve</b></button>
                    </div>
                </div>

                <div className='event-list'>
                    <div className='admin-events'>Event 3</div>
                    <div className='admin-events1'>
                        <button className="btn btn-primary bg-black text-white px-3 border-black"><b>Remove</b></button>
                        <button className="btn btn-primary text-black px-3 border-black"><b>Approve</b></button>
                    </div>
                </div>

                <div className='event-list'>
                    <div className='admin-events'>Event 4</div>
                    <div className='admin-events1'>
                        <button className="btn btn-primary bg-black text-white px-3 border-black"><b>Remove</b></button>
                        <button className="btn btn-primary text-black px-3 border-black"><b>Approve</b></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard