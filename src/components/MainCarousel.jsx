import { Carousel } from "flowbite-react"

const MainCarousel = () => {

    const carouselImages = [ "caro4.jpg", "caro5.jpg", "caro1.jpg", "caro2.jpg", "caro3.jpg" ]

    return (
        <div className="h-56 sm:h-64 lg:h-80 xl:h-96">
            <Carousel slideInterval={5000}>
                { carouselImages.map( image => <img src={image} alt="" /> ) }
            </Carousel>
        </div>
    )
}

export default MainCarousel
