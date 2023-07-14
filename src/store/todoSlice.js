import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const headers = {
  'Content-Type': 'application/json',
  'X-Request-Id': uuidv4(),
  'Authorization': `Bearer c2636d77c420be0846c6766ae782f2749600bdb2`
};

const config = {
  headers: {
    'Authorization': `Bearer c2636d77c420be0846c6766ae782f2749600bdb2`
  }
};

export const getTask = createAsyncThunk("todo/getTask", async () => {
  const response = await axios.get('https://api.todoist.com/rest/v2/tasks?project_id=2315921166', config)
    .then(({ data }) => {
      return data;
    })
    return response;
  }
)

export const addTask = createAsyncThunk("todo/addTask", async (todoData) => {
  const response = await axios.post("https://api.todoist.com/rest/v2/tasks", todoData, { headers });
  return response.data;
})

export const deleteTask = createAsyncThunk("todo/deleteTask", async (todoId) => {
  await axios.delete(`https://api.todoist.com/rest/v2/tasks/${todoId}`, config);
  return todoId;
})

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
    status: "",
  },
  reducers: {
    addText: (state, action) => {
      state.data.push({
        content: action.payload.content,
        description: action.payload.description,
      })
    },
    deleteTodo: (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTask.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'completed';
    })
    builder.addCase(getTask.rejected, (state) => {
      state.status = 'fail';
    })
  }
})

export const { addText, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;