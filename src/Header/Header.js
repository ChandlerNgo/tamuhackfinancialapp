import './Header.css';

function Header() {
    return (
    <div className="header">
          <h1>TFA</h1>
          <div className='homeButton'>
            <button>
                <h1>Home</h1>
            </button>
            
          </div>
          <div className='forumButton'>
            <button>
                <h1>Forum</h1>
            </button>
          </div>
          <div className='menu'>
            <button>
                <h1>---</h1>
            </button>
          </div>
    </div>
    );
  }

export default Header;