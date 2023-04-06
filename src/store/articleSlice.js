import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const api = '/api/articles';

export const fetchArticles = createAsyncThunk(
  'articleReducer/fetchArticles',
  async () => {
    try {
      // const res = await axios.get(api);
      // const articles = res.data.articles;
      // return articles;

      return [
        { title: 'Article', body: 'article' },
        { title: 'Article', body: 'article' }
      ];
    } catch (err) {
      throw Error(err);
    }
  }
);

export const fetchArticle = createAsyncThunk('articleReducer/fetchArticle', async id => {
  try {
    const res = await axios.get(`${api}/${id}`);
    const article = res.data;
    return article;
  } catch (err) {
    throw Error(err);
  }
});

const articleSlice = createSlice({
  name: 'articleReducer',
  initialState: { articles: [] },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.selectedArticle = action.payload;
      });
  }
});

export default articleSlice.reducer;
