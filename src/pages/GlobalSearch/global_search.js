import React, { useState } from 'react'
import Inputbox from 'uiKit/Inputbox/inputbox'
import style from './global_search.module.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { lightTheme, cromaDarkTheme } from 'theme'
import PlpAppbar from 'components/Appbar/plp_appbar'

const GlobalSearch = () => {
  const [searchParams] = useSearchParams('')
  const [searchText, setSearchText] = useState(searchParams.get('searchText'))
  const navigate = useNavigate()

  const handleTextChange = (text) => {
    setSearchText(text)
  }

  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/product-listing?query=${searchText}`)
    }
  }

  return (
    <div className={style.global_search_wrapper}>
      <PlpAppbar theme={cromaDarkTheme} />
      <div className={style.inputbox_wrapper}>
        <Inputbox
          value={searchText || ''}
          placeholder={`Search `}
          onChange={handleTextChange}
          setFocus={true}
          onKeyDown={handleOnKeyDown}
          theme={lightTheme}
        />
      </div>
    </div>
  )
}

export default GlobalSearch
