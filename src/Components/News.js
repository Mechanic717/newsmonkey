import React,{useEffect,useState} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.APIkey}&page=${page}&pageSize=${props.pagesize}`;
        

        setLoading(true);
        const response = await fetch(url);
        props.setProgress(30);
        const parsedData = await response.json();
        props.setProgress(50);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
        document.title=`${capitalizeFirstLetter(props.category)}-NewsMonkey`
        // eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        if (articles.length < totalResults) {
            const nextPage = page + 1;
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.APIkey}&page=${nextPage}&pageSize=${props.pagesize}`;
            setPage(nextPage);
            const response = await fetch(url);
            const parsedData = await response.json();
            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);
        }
    };

    return (
        <>
            <h2 className='text-center' style={{ margin: '40px 0px', color: 'white',marginTop:'90px' }}>
                NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
            </h2>

            {loading && <Spinner />} {/* Conditionally render spinner for initial loading */}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}  // Correctly check if more articles are available
                loader={articles.length < totalResults ? <Spinner /> : null}  // Conditionally render spinner during infinite scroll
            >
                <div className='container'>
                    <div className='row'>
                        {articles.map((element) => {
                            if (!element) return null;
                            return (
                                <div className='col-md-4' key={element.url}>
                                    <NewsItem
                                        title={element.title || ""}
                                        description={element.description || ""}
                                        imageURL={element.urlToImage}
                                        newsURL={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
}

News.defaultProps = {
    country: 'in',
    pagesize: 6,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}

export default News;
