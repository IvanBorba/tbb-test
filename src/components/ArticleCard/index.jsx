import "./style.css";

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card-container">
      <img
        className="article-card-image"
        alt={`${article.title} image`}
        src={article.image}
      />
      <p className="article-card-title">{article.title}</p>
    </div>
  );
};

export default ArticleCard;
