export default function Details() {
    return(
        <section className="px-20 h-full mb-20">
            <article className='flex justify-evenly mb-20'>
               <div>
                    <span className="text-zinc-400 ">GET STARTED AS A </span>
                    <h3 className="text-4xl my-10">Funder (Investor)</h3>
                    <img 
                        src="https://www.edufundgh.org/assets/img/search_icon.svg" 
                        alt="search-icon"
                        className="w-6 mb-2"
                    />
                    <h5 className="font-bold">Find a Fund Request</h5>
                    <p className="mb-5">Start by selecting a student you would like to support </p>
                    <img 
                        src="https://www.edufundgh.org/assets/img/donation_icon.svg" 
                        alt="funding-icon"
                        className="w-6 mb-2"
                    />
                    <h5 className="font-bold">Donate to Fund Request </h5>
                    <p>Contribute to the fund request </p>
               </div>
               <div>
                    <img 
                        src="https://edufundgh.org/landing/assets/img/student.svg" 
                        alt="funding-img"
                        className="detailsImg"
                    />
               </div>
            </article>
            <article className='flex justify-evenly'>
               
                    <img 
                        src="https://www.edufundgh.org/assets/img/student.svg"
                        alt="fundee-img"
                        className="w-72 detailsImg self-center"
                    />
                
                <div>
                    <span className="text-zinc-400 ">GET STARTED AS A </span>
                    <h3 className="text-4xl my-10">Fundee (Student) </h3>
                    <img 
                        src="https://www.edufundgh.org/assets/img/apply_icon.svg" 
                        alt="request-img"
                        className="w-6 mb-2"
                    />
                    <h5 className="font-bold">Create a Fund Request </h5>
                    <p className="mb-5">Tell your story and submit a request for the amount you need </p>
                    
                    <img 
                        src="https://www.edufundgh.org/assets/img/share_icon.svg" 
                        alt="sharing-img"
                        className="w-6 mb-2"
                    />
                    <h5 className="font-bold">Share with family & friends </h5>
                    <p className="mb-5"> Share your approved request on social media platforms </p>
                    
                    <img 
                        src="https://www.edufundgh.org/assets/img/document_icon.svg" 
                        alt="receive-funds-img"
                        className="w-6 mb-2"
                    />
                    <h5>Receive Funds </h5>
                    <p className="mb-5">Get contributions from people around the globe </p>
                </div>
            </article>
        </section>
    )
}
