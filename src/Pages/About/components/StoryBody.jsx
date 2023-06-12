
export default function StoryBody() {
    return (
        <div className='my-[56px]'>
            <div className='grid grid-cols-1 min-[990px]:grid-cols-2'>
                <div className='p-[10px]'>
                    <h1 className='font-montserrat text-[34px] font-bold'>Company Profile</h1>
                    <br />
                    <p className='font-poppins text-[#545454] text-left'>Shandong Sinder Technology Co., Ltd (‘Sinder’) was founded in April 1999 and has a wide range of animal health products. Sinder focuses on Animal Health Products,<a className='text-[#003d79] font-bold' href="">Animal vaccines, Antibodies, Antibiotics, Feed Additives, Chinese Herbal Products, Pet food, Elisa, and PCR test kits.</a> 
                    <br />
                    <br />
                    Sinder always persists in the core concept of the Relentless Pursuit of Increasing Customer Value. Based on animal health to achieve a service provider for ecological construction of agriculture and animal husbandry. Support the efficient and sustainable development of agriculture and animal husbandry. Make food safer and rural areas better! Sinder is a high-tech enterprise and one of the top 10 veterinary drug manufacturers in China and focusing on the animal health business.</p>
                </div>
                <img className='p-[10px]' src="/story1.webp" alt="Image" />
            </div>
            <div className='grid grid-cols-1 min-[990px]:grid-cols-2'>
                <img className='p-[10px]' src="/story2.webp" alt="Image" />
                <div className='p-[10px]'>
                    <h1 className='font-montserrat text-[34px] font-bold'>Veterinary Drug Manufacturers</h1>
                    <br />
                    <p className='font-poppins text-[#545454] text-left'>At the moment, the company has 35 GMP production lines,3 CNAS laboratories, 3 national scientific research platforms, and 8 provincial scientific research platforms owned by Sinder.
                    <br />
                    Sinder has 4 <a className='text-[#003d79] font-bold' href="">R&D centers</a> located in Qingdao, Zhucheng, and Beijing, China, and 1 laboratory in Silicon Valley in the United States. At present, the company has 1,535 employees including more than 200 masters or above and 18 doctors. Also, the company established extensive technical cooperation with several domestic and foreign scientific research institutes, animal health companies, and domestic veterinary medicine enterprises. Sinder has undertaken 57 national, provincial, and ministerial projects, gained 7 provincial and ministerial science and technology progress awards, presided over or participated in 24 national standards, and obtained 24 new veterinary drug certificates（one 1st class new drug) and 76 authorized patents.</p>
                </div>
            </div>
        </div>
    )
}
