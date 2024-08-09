import './Question.css'

const Question = () => {
    return (
        <div id='FAQ' className='QuestionContainer'>
            <div className='faq-container'>
              <h2>Frequently Asked Questions</h2>
              <div className='accordion'>
                 <div className='accordion-item'>
                    <button aria-expanded="false">
                        <span className="accordion-title">How much does it cost to build a website?</span>
                        <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                        <p>
                            The cost of a website depends totally on your needs which is said by every person in the
                            market or in industry.
                        </p>
                    </div>
                 </div>
                 <div className='accordion-item'>
                    <button aria-expanded="false">
                        <span className="accordion-title">What services does your website development company offer?
                        </span>
                        <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                        <p>
                            E-commerce,
                            Website maintenance,
                            Web development,
                            Content management,
                            Web design,
                            Web optimization,
                            Graphic design,
                            Hosting
                        </p>
                    </div>
                 </div>
                 <div className='accordion-item'>
                    <button aria-expanded="false">
                        <span className="accordion-title">Do you offer responsive and mobile-friendly design?</span>
                        <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                        <p>
                            Yes, our websites are fully responsive and mobile-friendly. </p>
                    </div>
                 </div>
                 <div className='accordion-item'>
                    <button  aria-expanded="false">
                        <span className="accordion-title">Can you help with website hosting and domain registration?
                        </span>
                        <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                        <p>
                            yes we help with website hosting and domain services.
                        </p>
                    </div>
                 </div>   
                 <div className='accordion-item'>
                 <button aria-expanded="false">
                        <span className="accordion-title">How long does it taketo develop a website?</span>
                        <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                        <p>
                            depends on your website design and features.
                        </p>
                    </div>
                 </div>
              </div>
            </div>
        </div>
    )
}
export default Question;