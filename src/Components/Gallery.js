function Gallery() {
    const imageStyle = {maxWidth: '200px', background: 'red'};

    return (
        <div>
            <h2>Gallery</h2>
            <a data-fancybox href="/images/amazingCat.jpeg">
                <img src="/images/amazingCat.jpeg" style={imageStyle} />
            </a>

            <a data-fancybox href="/images/amazingCat.jpeg">
                <img src="/images/amazingCat.jpeg" style={imageStyle} />
            </a>

            <a data-fancybox href="/images/amazingCat.jpeg">
                <img src="/images/amazingCat.jpeg" style={imageStyle} />
            </a>

        </div>
    )
}

export default Gallery;