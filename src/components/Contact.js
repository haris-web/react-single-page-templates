import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>
                Contact us
            </h1>
            <form action="">
                <div>
                    <label >Name </label>
                        <input type="text" required  placeholder='full name'/>
                   
                </div>
                <div>
                    <label >Email </label>
                        <input type="email" required  placeholder='abc@gmail.com'/>
                   
                </div>
                <div>
                    <label >Message </label>
                        <input type="text" required  placeholder='tell us about'/>
                   
                </div>
                <button className='button'>Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Contact
