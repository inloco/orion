import React from 'react'
import {
  Search as SemanticSearch,
  SearchProps as SemanticSearchProps
} from '@inloco/semantic-ui-react'
import cx from 'classnames'

const LOADING_ICON = 'loading'

const Search = ({
  className,
  loading,
  icon,
  error,
  warning,
  ...otherProps
}: SearchProps) => {
  const classes = cx({ error, warning }, className)

  return (
    <SemanticSearch
      {...otherProps}
      icon={loading ? LOADING_ICON : icon}
      className={classes}
    />
  )
}

interface SearchProps extends SemanticSearchProps {
  className?: string
  loading?: boolean
  icon?: string
  error?: boolean
  warning?: boolean
}

export default Search
