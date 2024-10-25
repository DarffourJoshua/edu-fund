import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const handleClick = () => navigate('/');

    return (
        <header className="h-screen px-10">
            <div className="flex p-10 header-div">
                <img 
                    src="https://edufundgh.org/landing/assets/img/edufund-hero-image.png"
                    alt="header-logo"
                    onClick={handleClick}
                    className="w-32 mr-auto header-logo"
                />
                <button >
                <a href="https://play.google.com/store/apps/details?id=com.anudsc.edufundgh" target="_blank" rel="noreferrer">
                    <img 
                        src="https://e7.pngegg.com/pngimages/275/263/png-clipart-hamburger-button-computer-icons-menu-menu-collateral-films-%D0%BC%D0%B5%D0%BD%D1%8E.png" 
                        alt="menu-img"
                        className="w-8 hidden menu-btn"
                    />
                </a>
                   
                </button>
                <button className="download-menu-btn bg-zinc-500 hover:bg-zinc-700 px-3.5 border-0 rounded-md text-white">
                    <a href="https://play.google.com/store/apps/details?id=com.anudsc.edufundgh" target="_blank" rel="noreferrer">
                        Download
                    </a>
                </button>
            </div>
            <section className="flex flex-row align-start justify-between mt-5 px-10 header-section">
                <article className="article">
                    <h3 className="header-text text-5xl text-lime-600 font-bold mb-10">
                        Help a student <br />
                        continue schooling
                    </h3>
                    <p className="mb-5">
                        Invest in the future, fund a student today 
                    </p>
                    <button 
                        className="bg-lime-600 text-white py-3 hover:bg-lime-700 rounded-sm mb-5 header-btn"
                        style={{width: '18rem',}}
                    >
                        <a href="https://play.google.com/store/apps/details?id=com.anudsc.edufundgh" target="_blank" rel="noreferrer">Get funding for your education</a>
                        
                        </button>
                    <button
                        className="header-btn"
                        style={{
                            display: 'block',
                            border: '1px solid lime',
                            width : '18rem',
                            color: 'lime',
                            padding: '0.5rem 0'
                        }}
                    >
                        <a href="https://paystack.com/pay/edufund" target="_blank" rel="noreferrer">Support a Student</a>
                        
                    </button>
                </article>
                <article>
                    <img 
                        src="https://edufundgh.org/landing/assets/img/edufund-hero-image.png" 
                        alt="info-img"
                        className="w-80"
                    />
                </article>
            </section>
        </header>
    );
}
