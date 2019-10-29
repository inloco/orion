import React from 'react'
import PropTypes from 'prop-types'
import { Search as SemanticSearch } from '@inloco/semantic-ui-react'

const LOADING_ICON = 'loading'

const Search = ({ loading, icon, ...otherProps }) => {
  return <SemanticSearch {...otherProps} icon={loading ? LOADING_ICON : icon} />
}

Search.propTypes = {
  loading: PropTypes.bool,
  icon: PropTypes.any
}

Search.Category = SemanticSearch.Category
Search.Result = SemanticSearch.Result
Search.Results = SemanticSearch.Results

export default Search
