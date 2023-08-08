'use client';
import { Carousel } from 'flowbite-react';
import { sliderImgData } from '../../data/sliderImage';

const Slider: React.FC = () => {
    return (
        <div className="w-full h-[100vh] mb-16 tablet:mb-32">
            <Carousel slideInterval={5000} className=''>
                {
                    sliderImgData.map((image) => {
                        return <div key={image.id}>
                            <img
                                alt="..."
                                src={image.img}
                                className='object-cover h-[80vh] tablet:h-full w-full'
                            />
                        </div>
                    })
                }
            </Carousel>
        </div>

    )
}


export default Slider