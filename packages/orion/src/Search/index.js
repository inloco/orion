import React from 'react'
import { Search as SemanticSearch } from '@inloco/semantic-ui-react'

const LOADING_ICON = {
  name: 'loading'
}

const Search = ({ loading, icon, ...otherProps }) => {
  const searchProps = {
    icon: loading ? LOADING_ICON : icon,
    ...otherProps
  }

  return <SemanticSearch {...searchProps} />
}

Search.Category = SemanticSearch.Category
Search.Result = SemanticSearch.Result
Search.Results = SemanticSearch.Results

export default Search
