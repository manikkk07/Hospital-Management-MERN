import { formateDate } from '../../utils/formateDate'

const DoctorAbout = () => {
  return  <div>
     <div>
        <h3 className='text-[20px] leading-[30px] text-heading font-semibold flex items-center gap-2'>About of
            <span className='text-irisBlue font-bold text-[24px] leading-9'>
                Manik Yadav
            </span>
        </h3>
        <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni ad pariatur neque esse accusantium porro nesciunt, expedita facilis. Minus tempore, in facere numquam vitae beatae nisi. Dolorem sit laudantium veritatis. Alias ipsam est dignissimos debitis a incidunt reiciendis placeat?</p>
     </div>

     <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-heading font-semibold'>
            Education
        </h3>

        <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlue text-[15px] leading-6 font-semibold'>
                    {formateDate("09-13-2014")} - {formateDate("03-13-2016")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-text'>
                        PHD in Surgeon
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-text'>
                        New Apollo Hospital, New York.
                </p>
            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlue text-[15px] leading-6 font-semibold'>
                    {formateDate("07-04-2010")} - {formateDate("08-14-2014")}
                    </span>
                    <p className='text-[15px] leading-6 font-medium text-text'>
                        PHD in Surgeon
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-text'>
                        New Apollo Hospital, New York.
                </p>
            </li>
        </ul>
     </div>



    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-heading font-semibold'>
            Experience
        </h3>

        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellow text-[15px] leading-6 font-semibold'>
                    {formateDate("07-04-2010")} - {formateDate("08-14-2014")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-text'>
                        Sr. Surgeon
                </p>

                <p className='text-[14px] leading-5 font-medium text-text'>
                        New Apollo Hospital, New York.
                </p>
            </li>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellow text-[15px] leading-6 font-semibold'>
                    {formateDate("07-04-2010")} - {formateDate("08-14-2014")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-text'>
                        Sr. Surgeon
                </p>

                <p className='text-[14px] leading-5 font-medium text-text'>
                        New Apollo Hospital, New York.
                </p>
            </li>
        </ul>
    </div>

    </div>
  
}

export default DoctorAbout

