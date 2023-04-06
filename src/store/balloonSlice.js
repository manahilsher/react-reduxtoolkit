import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const api = '/api/balloons';

export const fetchBalloons = createAsyncThunk(
  'balloonReducer/fetchBalloons',
  async () => {
    try {
      const res = await axios.get(api);
      const balloons = res.data.balloons;
      return balloons;
    } catch (err) {
      throw Error(err);
    }
  }
);

export const fetchBalloon = createAsyncThunk('balloonReducer/fetchBalloon', async id => {
  try {
    const res = await axios.get(`${api}/${id}`);
    const balloon = res.data;
    return balloon;
  } catch (err) {
    throw Error(err);
  }
});

const balloonSlice = createSlice({
  name: 'balloonReducer',
  initialState: { balloons: [] },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBalloons.fulfilled, (state, action) => {
        state.balloons = action.payload;
      })
      .addCase(fetchBalloon.fulfilled, (state, action) => {
        state.selectedBalloon = action.payload;
      });
  }
});

export default balloonSlice.reducer;
