import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouseChimney, faPhone, faTeletype } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="w-full font-poppins bg-[url('/footer.webp')]">
            <Container>
                <div className='grid max-[1024px]:grid-cols-1 grid-cols-4 py-10 gap-2'>
                    <div>
                        <a href="#">
                            <img src="/logo1.webp" alt="Logo" />
                        </a>
                        <p className='mt-5 text-[#b5ccec]'>Shandong Sinder Technology Co., Ltd is a China animal health joint venture company with SUMITOMO JAPAN that develops, manufactures and markets a broad range of veterinary medicines and services.</p>
                    </div>

                    <div>
                        <p className='text-white font-semibold text-lg text-left font-montserrat'>Quick Links</p>
                        <ul className='list-disc list-inside text-[#b5ccec] mt-5'>
                            <li><a className='hover:text-white leading-7' href="">Home</a></li>
                            <li><a className='hover:text-white leading-7' href="">Products</a></li>
                            <li><a className='hover:text-white leading-7' href="">Solutions</a></li>
                            <li><a className='hover:text-white leading-7' href="">About Us</a></li>
                            <li><a className='hover:text-white leading-7' href="">Resources</a></li>
                            <li><a className='hover:text-white leading-7' href="">News</a></li>
                            <li><a className='hover:text-white leading-7' href="">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className='text-white font-semibold text-lg text-left font-montserrat'>Follow Us</p>
                        <ul className='text-[#b5ccec] mt-5'>
                            <li className='py-1'>
                                <FontAwesomeIcon style={{fontSize: "12px", marginTop: "5px", marginRight:"6px"}} icon= {faHouseChimney} />
                                NO.195, Shungeng Road, Zhucheng City, Shandong Province, China
                            </li>
                            <li className='py-1'>
                                <FontAwesomeIcon style={{fontSize: "12px", marginTop: "5px", marginRight:"6px"}} icon= {faPhone} />
                                +86-18563606008
                            </li>
                            <li className='py-1'>
                                <FontAwesomeIcon style={{fontSize: "12px", marginTop: "5px", marginRight:"6px"}} icon={faTeletype}/>
                                +86-532-58820810
                            </li>
                            <li className='py-1'>
                                <FontAwesomeIcon style={{fontSize: "12px", marginTop: "5px", marginRight:"6px"}} icon={faWhatsapp}/>
                                +86-18563606008
                            </li>
                            <li className='py-1'>
                                <FontAwesomeIcon style={{fontSize: "12px", marginTop: "5px", marginRight:"6px"}} icon={faEnvelope}/>
                                lyren@sindergroup.cn
                            </li>
                        </ul>
                        <div className='text-[#b5ccec]'>
                            <FontAwesomeIcon className='hover:text-blue-800' style={{height: "20px", width: "20px", marginRight: "10px", border: "1px solid #cccccc", borderRadius: 9999,  padding: "5px"}} icon={faFacebook}/>
                            <FontAwesomeIcon className='hover:text-blue-800' style={{height: "20px", width: "20px", marginRight: "10px", border: "1px solid #cccccc", borderRadius: 9999,  padding: "5px"}} icon={faLinkedin}/>
                            <FontAwesomeIcon className='hover:text-red-600' style={{height: "20px", width: "20px", marginRight: "10px", border: "1px solid #cccccc", borderRadius: 9999,  padding: "5px"}} icon={faYoutube}/>
                        </div>
                    </div>

                    <div>
                        <p className='text-white font-semibold text-lg text-left font-montserrat'>Contact Us</p>
                        <div className='text-[#b5ccec] mt-4 bg-inherit'>
                            <input className='w-full bg-transparent py-1 px-2 border border-solid border-white mb-2.5' type="text" placeholder='Name'/>
                            <input className='w-full bg-transparent py-1 px-2 border border-solid border-white mb-2.5' type="text" placeholder='*Email'/>
                            <input className='w-full bg-transparent py-1 px-2 border border-solid border-white mb-2.5' type="text" placeholder='Tel'/>
                            <textarea className='w-full bg-transparent py-1 px-2 border border-solid border-white mb-2.5 pb-10' type="text" placeholder='*Message'/>
                            <br />
                            <button className='w-full border border-solid border-white py-1.5 text-white hover:bg-white hover:text-[#003d79]'>Submit</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-white text-[15px] text-[#b5cceccc] border-t border-solid border-[#b5cceccc] text-center py-3'>Copyright © 2023 Shandong Sinder Technology Co., Ltd. All rights reserved.  Sitemap  Support by Leadong  Privacy Policy</p>
                </div>
            </Container>
        </div>
    )
}
