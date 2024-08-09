import './Testimonials.css'
import MaleTestimonial from './TestimonialMale.avif';
import FemaleTestimonial from './TestimonialFemale.avif';

const Testimonials = () => {
    return (
        <div id='Testimonials' className="TestimonialsContainer">
          <h2>Testimonials</h2>
            <div className='memberCards'>
             <div className='item'>
                <div className='T-card text-center'>
                   <img className='card-img-top' src={MaleTestimonial} alt=''/>
                   <div className='card-body'>
                   <h5>Michael Johnson <br/>
                            <span>Founder of Innovate Tech Solutions</span>
                        </h5>
                        <p>"Attractify transformed our online presence with their exceptional web development skills.
                            Our new website is not only visually stunning but also highly functional, thanks to their
                            expertise."
                        </p>
                   </div>
                </div>
             </div>
             <div className='item'>
             <div className='T-card text-center'>
                   <img className='card-img-top' src={FemaleTestimonial} alt=''/>
                   <div className='card-body'>
                   <h5>Missy Limana <br/>
                            <span>Marketing Manager at Bright Ideas Co.</span>
                        </h5>
                        <p>“Choosing Attractify was the best decision for our project. They were attentive to our needs,
                        responsive to feedback, and delivered a website that perfectly represents our brand."
                        </p>
                   </div>
                </div>
             </div>
             <div className='item'>
             <div className='T-card text-center'>
                   <img className='card-img-top' src={MaleTestimonial} alt=''/>
                   <div className='card-body'>
                   <h5>David Johnson<br/>
                            <span>Founder of Bloom Boutique</span>
                        </h5>
                        <p>"Attractify's team is incredibly talented and professional. They took the time to understand
                            our business goals and delivered a website that not only looks amazing but also drives
                            results. We couldn't be happier with the outcome."
                        </p>
                   </div>
                </div>
             </div>
             <div className='item'>
             </div>
          </div>
        </div>
    )
}
export default Testimonials;