import './Article.css';

function Article(props) {
    const place_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    return (
    <div className="article">
        <img src={props.image}></img>
        <h1>{props.title}</h1>
        <p className='text'>{place_text}</p>
        <p>Learn more</p>
    </div>
  );
}

export default Article;