import Navbar from "../c_navbar";

export default function Page() {
  return (
    <div className="Contacto">
        <Navbar />
        <div className="contacto_container w-[90%] md:w-[1200px] mx-auto py-[300px]">
            <div className="mt-[100px] pb-[20px] border-b border-gray-300">
                Newsletter.
            </div>
            <div className="flex mt-[20px] font-light gap-[50px]">
                <input type="text" placeholder="Email" />
                <button className="myButton01">Inscribirme</button>
            </div>
            <div className="mt-[100px] pb-[20px] border-b border-gray-300">
                Para contactar con nosotras.
            </div>
            <div className="flex mt-[20px] font-light gap-[50px]">
                <a href="tel:+34695543809">+34 695 54 38 09</a>
                <a href="mailto:info@carlavillastudio.com">info@carlavillastudio.com</a>
            </div>
            <div className="mt-[100px] pb-[20px] border-b border-gray-300">
                Social.
            </div>
            <div className="flex mt-[20px] font-light gap-[50px]">
                <a href="https://www.instagram.com/carlavillastudio/">
                    Instagram.<br></br>
                    @carlavillastudio
                </a>
                <a href="https://www.tiktok.com/@carlavillastudio">
                    Tiktok<br></br>
                    @carlavillastudio
                </a>
            </div>
        </div>
    </div>
  );
}
