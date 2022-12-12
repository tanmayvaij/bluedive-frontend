const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="3000">
                    <img src="https://images.pexels.com/photos/1045113/pexels-photo-1045113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="caro_img d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src="https://images.pexels.com/photos/2371778/pexels-photo-2371778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="caro_img d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                    <img src="https://images.pexels.com/photos/2562158/pexels-photo-2562158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="caro_img d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
