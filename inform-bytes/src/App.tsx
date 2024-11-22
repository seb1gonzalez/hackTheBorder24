import logo from './logo.svg';
import './App.css';
import useNewsApi from './hooks/useNewsApi';
import { INewsApiEverythingParams } from 'ts-newsapi';

function App() {
  const newsQuery: INewsApiEverythingParams = {
    q: 'kamala harris wins',
    from: '2024-11-01',
    sortBy: 'relevancy',
    language: 'en',
    pageSize: 10,

  };
  const results = useNewsApi(newsQuery);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NEWS API
        </p>
        {results?.articles.filter((a) => !!a.author).map((article) => (
          <ul>
            <li key={article.url}>
              {article.title}
            </li>
          </ul>
        ))}
      </header>
    </div>
  );
}

export default App;
