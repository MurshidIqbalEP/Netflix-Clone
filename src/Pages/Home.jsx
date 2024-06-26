import React from 'react'
import Main from '../Components/main'
import Row from '../Components/Row'
import requests from '../Requests'
function Home() {
  return (
    <div>
     <Main />
     <Row rowId="1" title='Up Coming' fetchUrl={requests.requestUpcoming} />
      <Row rowId="2"  title='Popular' fetchUrl={requests.requestPopular} />
      <Row rowId="3"  title='Top Rated' fetchUrl={requests.requestTopRated} />
      <Row rowId="4" title='Trending' fetchUrl={requests.requestTrending} />
      <Row rowId="5"  title='Horror' fetchUrl={requests.requestHorror} />

    </div>
  )
}

export default Home
