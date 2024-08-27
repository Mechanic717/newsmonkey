import React from 'react';

const NewsItem = (props) => {
    // Fallback image URL
    const fallbackImageURL = "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg";

    let { title, description, imageURL, newsURL, author, date, source } = props;
    // Determine which image URL to use
    const displayImageURL = imageURL ? imageURL : fallbackImageURL;

    return (
        <div className='card mb-3' style={{ display: 'flex', flexDirection: 'column', height: '450px', background: '#1E1E1E', color: '#FFFFFF', fontFamily: 'Roboto, sans-serif' }}>
            <img
                src={displayImageURL}
                className='card-img-top'
                alt={title}
                onError={(e) => e.target.src = fallbackImageURL} // Set fallback image on error
                style={{ height: '200px', objectFit: 'cover' }} // Fixed height for the image
            />
            <div className='card-body' style={{ flex: '1 1 auto', background: '#2A2A2A' }}>
                <span className="position-relative top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "50%", zIndex: '1', color: '#FFFFFF' }}>
                    {source}
                </span>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
                <p className="card-text">
                    <small className="text-body-secondary" style={{ color: '#CCCCCC' }}>
                        By {author ? author : "unknown"} on {new Date(date).toGMTString()}
                    </small>
                </p>
            </div>
            <div style={{ padding: '15px', background: '#003366' }}>
                <a
                    href={newsURL}
                    className='btn btn-primary btn-block'
                    style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read More
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
