import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../../store/articleSlice';

const FeatureTwo = () => {
  const dispatch = useDispatch();

  const articles = useSelector(state => state.articleReducer.articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  useEffect(() => {
    console.log(articles);
  }, [articles]);

  return (
    <div>
      <div>FeatureTwo</div>
      {articles.length > 0 ? <div>Got Articles</div> : <div>Did not get articles</div>}
    </div>
  );
};

export default FeatureTwo;
