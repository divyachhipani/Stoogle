import '../styles/Onboarding.css'
import SearchBar from '../components/SearchBar'
import SortBy from '../components/SortBy'
import Tags from '../components/Tags'

import {useState} from 'react'

const Onboarding = () => {

    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState('relevancy')
    const [tags, setTags] = useState([])
	
    const onSearch = () => {    
    	let d = {search, sortBy, maxPrice: 1000, tags}
	console.log(d)
    }

    return (
      <div className="Onboarding">
          <body>
                <div className='title'>St<span className='oo'>oo</span>gle</div>
                <SearchBar setSearch={setSearch} onSearch={onSearch}/>
	    
                <div className='botContainer'>
                    <div className='subBotContainer'>
                        <p>Sort by</p>
                        <div className='sortBy'>
                            <SortBy setSortBy={setSortBy}/>
                        </div>
                    </div>

                    <div className='subBotContainer'>
                        <p>Tags</p>
                        <div className='tags'>
                            <Tags setTags={setTags} tags={tags}/>
                        </div>
                    </div>
                </div>
          </body>
      </div>
    )
  }
  
export default Onboarding
