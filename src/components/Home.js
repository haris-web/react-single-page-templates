import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle,AiFillYoutube,AiFillAmazonCircle,AiFillInstagram} from 'react-icons/ai'

export default function Home() {
  return (
    <>
    <div className="home" id='Home'>
        <main>
            <h1>Futurre Star</h1>
            <p> solution to all problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt='graphic'  />
        <div>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda deleniti dolorum, obcaecati voluptate consequatur iste ad unde labore dignissimos laudantium fugiat deserunt.
            </p>
        </div>
      </div>
  
  <div className="home3" id='About'>
    <div>
    <h1>
        Who are you?
    </h1>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem repudiandae iusto labore similique quo quos tenetur unde atque aspernatur, amet, quod eligendi necessitatibus numquam cupiditate maxime possimus placeat asperiores id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolore ipsa ex commodi fuga eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque architecto, reprehenderit ea, consequuntur vitae quod unde quasi, veritatis nam possimus debitis distinctio.
    </p>
    </div>
  </div>
  
  <div className="home4" id='Brands'>
    <div className='home-div'>
        <h1>Brands </h1>
        <article>
            <div
            style={
                {
                    animationDelay:"0.3s"
                }
            }
            >
                <div>
            <AiFillGoogleCircle/>
            <p>Google</p>
           </div>

            </div>
            <div
            style={
                {
                    animationDelay:"0.5s"
                }
            }
            >
                <div>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
           </div>
           

            </div>
            <div
            style={
                {
                    animationDelay:"0.7s"
                }
            }
            >
                <div>
            <AiFillYoutube/>
            <p>Youtbe</p>
           </div>
           

            </div>
            <div
            style={
                {
                    animationDelay:"0.5s"
                }
            }
            >
                <div>
            <AiFillInstagram/>
            <p>Instagram</p>
           </div>
           

            </div>
           
           
        </article>
    </div>
  </div>

    </>
  )
}
