import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
  pointerKey: 'preliminary',
};

const pointerConstructorSlice = createSlice({
  name: 'pointerConstructor',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    setPointerKey: (state, action) => {
      state.pointerKey = action.payload;
    },
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { setPointerKey } = pointerConstructorSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default pointerConstructorSlice.reducer;