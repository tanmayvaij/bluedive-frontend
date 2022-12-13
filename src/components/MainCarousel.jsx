import { Carousel } from "flowbite-react"

const MainCarousel = () => {
    return (
<div className="h-56 sm:h-64 lg:h-80 xl:h-96">
  <Carousel slideInterval={5000}>
    <img
      src="caro4.jpg"
      alt="..."
    />
    <img
      src="caro5.jpg"
      alt="..."
    />
    <img
      src="caro1.jpg"
      alt="..."
    />
    <img
      src="caro2.jpg"
      alt="..."
    />
    <img
      src="caro3.jpg"
      alt="..."
    />
  </Carousel>
</div>
    )
}

export default MainCarousel
