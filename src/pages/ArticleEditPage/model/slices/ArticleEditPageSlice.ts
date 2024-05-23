import { createSlice } from '@reduxjs/toolkit'

interface ArticleEditPageSchema {
  index?: number
}

const initialState: ArticleEditPageSchema = {}

export const ArticleEditPageSlice = createSlice({
  name: 'ArticleEditPage',
  initialState,
  reducers: {
    // setArticleEditPage: (state, action: PayloadAction<string>) => {
    //
    // },
  },
})

// export const { setArticleEditPage } = ArticleEditPageSlice.actions

export default ArticleEditPageSlice.reducer
