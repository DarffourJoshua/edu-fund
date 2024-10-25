function About() {
     
    return (
        <article className="bg-zinc-100/50 h-full text-center mb-20 p-10">
            <h3 className="text-4xl mb-5 font-bold text-zinc-500">About</h3>
            <p className="text-md">
                EduFund is a platform that helps students to solicit financial support <br />
                from individuals and organizations. The aim of EduFund is to remove the <br />
                financial barrier preventing students from achieving their dreams. 
            </p>
        </article>
    )
}

function Download() {
    return (
        <article className="bg-zinc-100/50 h-full text-center mb-20 p-10">
            <h3 className="text-4xl mb-5 font-bold text-zinc-500">Download</h3>
            <p>Get the app to start applying for funds. Funders can also download the <br />
                app to view all approved requests for funding
            </p>
            <button className=" bg-lime-600 text-white w-64 ml-auto mr-auto mt-5 rounded-sm py-2">
                <a className="flex justify-center items-center" href="https://play.google.com/store/apps/details?id=com.anudsc.edufundgh" target="_blank" rel="noreferrer">
                <img 
                    src="https://edufundgh.org/landing/assets/img/google_play.svg" 
                    alt="playstore-img"
                    className="w-8 mr-1.5"
                />
                <span>Download for Android</span>
                </a>
            </button>
        </article>
    )
}

function SponsersAndPartners() {
    return (
       <article className="bg-zinc-100/50">
            <h3 className="text-4xl mb-5 font-bold text-zinc-500 text-center">Sponsors & Partners </h3>
            <div className="flex">
                <a href="http://step-inapconsult.com/" target="_blank" rel="noreferrer">
                    <img 
                        src="https://edufundgh.org/landing/assets/img/stepinap_logo.svg" 
                        alt="SP1"
                        className="ml-20"
                    />
                </a>
                <a href="https://gdsc.community.dev/all-nations-university/" target="_blank" rel="noreferrer">
                    <img 
                        src="https://edufundgh.org/landing/assets/img/anudsc_logo.svg" 
                        alt="SP2"
                        className="ml-10"
                    />
                </a>
            </div>
       </article>
    );
}

export {About, Download, SponsersAndPartners};
