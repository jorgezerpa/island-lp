import React, { useEffect } from 'react';

import PlaceToVisit from '../../components/PlaceToVisit/PlaceToVisit';

const Places = ({  FakeData, autoScroll }) => {

    useEffect(()=>{
        console.log(autoScroll.current)
    }, [autoScroll])

    //organize data in pairs ->mapping for create pairs arr -> filter for eliminate 'false'
    let dataInPairs = FakeData.map((item, i)=>i%2===0 && [FakeData[i], FakeData[i+1]]).filter(item=> item && item);

    return (
    <main ref={autoScroll}>
        {dataInPairs.map((pairIslands,i)=>{
            return(
                <PlaceToVisit key={i}  pairIslands = {pairIslands} />
            )
        })}
    </main>
  )
}

export default Places