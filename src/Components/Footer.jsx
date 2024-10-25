export default function Footer() {
    return (
        <footer className="flex justify-between items-center p-10 bg-lime-900">
            <div>
                <img 
                    src="https://edufundgh.org/landing/assets/img/edufund-hero-image.png" 
                    alt="footer-img"
                    className="w-32"
                /> 
            </div>
            <div>
                <a href="https://paystack.com/pay/edufund" target="_blank" rel="noopener noreferrer">
                    <span className="text-sm text-white mx-3">DONATE</span>
                </a>
                <a href="https://t.me/thepresiding" target="_blank" rel="noopener noreferrer">
                    <span className="text-sm text-white mx-3">CONTACT: +233 30 358 0427</span>    
                </a>            
            </div>
            <div className="flex justify-center items-center">
                <a href="https://twitter.com/EduFundGhana" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://p7.hiclipart.com/preview/119/625/108/5bbc4e994bb29.jpg"
                        alt="twitter"
                        className="w-6 rounded-full mr-10"
                    />
                </a>

                <a href="https://www.facebook.com/EduFund-Ghana-104576088576349" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://www.freeiconspng.com/uploads/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png--32.png" 
                        alt="facebook"
                        className="w-8 rounded-full"
                    />
                </a>
                
            </div>
        </footer>
    )
}

// className="flex justify-center items-center mr-auto"
