import './Articles.css';
import Article from "./Article/Article.js"
import saving_money from "./Article/saving_money.jpeg"
import money_management from "./Article/money_management.jpg"
import investments from "./Article/investments.png"

function Articles() {
  return (
    <div className='center'>
      <div className='articles'>
        <Article title="Saving Money" image={saving_money}/>
        <Article title="Money Management" image={money_management}/>
        <Article title="Investments" image={investments}/>
      </div>
    </div>
  );
}

export default Articles;