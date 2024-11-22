import logo from './logo.svg';
import './App.css';
import useNewsApi from './hooks/useNewsApi';
import { INewsApiEverythingParams } from 'ts-newsapi';
import Search from './components/SearchBar/SearchBar';
import { Divider, Grid2, Stack, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import NewsCard from './components/NewsCard';

function App() {
  const [question, setQuestion] = useState('');
  const newsQuery: INewsApiEverythingParams = {
    q: question,
    from: '2024-11-01',
    sortBy: 'relevancy',
    language: 'en',
    pageSize: 10,

  };
  const results = useNewsApi(newsQuery);

  const filteredData = useMemo(() => {
    return results?.articles.filter((a) => !!a.author).map((article) => (
      <NewsCard
        title={article.title}
        content={article.description ?? ''}
        image={article.urlToImage ?? ''}
        href={article.url}

      />
    )) ?? []
  }, [results])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NEWS API
        </p>
        <Search 
          setQuestion={setQuestion}
        />
        <Typography style={{padding: 5, color: 'black'}}>
        Your question was: {question}
        </Typography>
        <Grid2 container spacing={2}>
        <Grid2 size={6}>
            AI SEARCH
            <Divider />
        </Grid2>
          <Grid2 size={6}>
            SOURCES
            <Divider />
            <Stack useFlexGap spacing={5} mt={'20px'}>
              {filteredData}
            </Stack>
          </Grid2>
        </Grid2>
      </header>
    </div>
  );
}

export default App;
