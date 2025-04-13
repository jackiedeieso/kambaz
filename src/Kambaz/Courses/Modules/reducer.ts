import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the module shape
interface ModuleType {
  _id: string;
  name: string;
  course: string;
  lessons?: any[];
  editing?: boolean;
}

interface ModulesState {
  modules: ModuleType[];
}

const initialState: ModulesState = {
  modules: [], 
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action: PayloadAction<ModuleType[]>) => {
      state.modules = action.payload;
    },
    addModule: (state, action: PayloadAction<ModuleType>) => {
      state.modules.push(action.payload);
    },
    deleteModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.filter((m) => m._id !== action.payload);
    },
    updateModule: (state, action: PayloadAction<ModuleType>) => {
      state.modules = state.modules.map((m) =>
        m._id === action.payload._id ? action.payload : m
      );
    },
    editModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.map((m) =>
        m._id === action.payload ? { ...m, editing: true } : m
      );
    },
  },
});

export const {
  setModules,
  addModule,
  deleteModule,
  updateModule,
  editModule,
} = modulesSlice.actions;

export default modulesSlice.reducer;
