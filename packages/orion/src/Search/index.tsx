import React from 'react'
import {
  Search as SemanticSearch,
  SearchProps as SemanticSearchProps
} from '@inloco/semantic-ui-react'
import cx from 'classnames'

const LOADING_ICON = 'loading'

const Search: SearchComponent<SearchProps> = ({
  className,
  loading,
  icon,
  error,
  warning,
  ...otherProps
}) => {
  const classes = cx({ error, warning }, className)

  return (
    <SemanticSearch
      {...otherProps}
      icon={loading ? LOADING_ICON : icon}
      className={classes}
    />
  )
}

type OrionSearchProps = {
  className?: string
  loading?: boolean
  icon?: string
  error?: boolean
  warning?: boolean
}

type SearchProps = SemanticSearchProps & OrionSearchProps

interface SearchComponent<T> extends React.FC<T> {
  Category?: React.StatelessComponent
  Result?: React.StatelessComponent
  Results?: React.StatelessComponent
}

Search.Category = SemanticSearch.Category
Search.Result = SemanticSearch.Result
Search.Results = SemanticSearch.Results

export default Search
