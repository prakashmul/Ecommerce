// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const SwiperSlider = () => {
    const Slides = [
        {
            img: "https://tshirtnepal.com/images/portfolio_images/embroidary-large.jpg",
            alt: "Tshirt1"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xNTpUXYpSxh-aEkv_VPIIjdXJDHRAr_bAA&s",
            alt: "Tshirt2"
        },
        {
            img: "https://www.craftclothing.ph/cdn/shop/products/standard-plain-round-neck-shirt-white_54b2a224-2bd7-4a50-9c06-b72fe122e70e_600x.png?v=1644205233",
            alt: "Tshirt3"
        },
        {
            img: "https://images-cdn.ubuy.co.id/654228ac3e752c15836b1e18-architect-tshirt-gifts-architecture.jpg",
            alt: "Tshirt4"
        },
        {
            img: "https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2fdbd7ab-f378-4c63-8b21-c944ad2633fd/header_t-shirts2.jpg",
            alt: "Tshirt5"
        },
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2022/6/UQ/BI/FF/31943666/mens-tshirt-500x500.jpeg",
            alt: "Tshirt6"
        }
    ]
    return (
        <>
            <Swiper
                direction={'vertical'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper h-[calc(100vh-80px)]"
            >
                {
                    Slides.map((Slide, idx) => (
                        <SwiperSlide key={idx}>
                            <img src={Slide.img} className="w-full"/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}

export default SwiperSlider
