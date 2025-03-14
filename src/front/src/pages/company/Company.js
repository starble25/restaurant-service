import './Company.css';
import { Activity, ActContainer } from './Activity';
import { useState, useEffect } from 'react';

function Company() {
    const [userData, setUserData] = useState();
    const [storeData, setStoreData] = useState();



    return (
        <div className='compContainer'>
            <div className='activityWrapper'>
                <Activity>
                    <ActContainer title = {'오늘 예약'} text = {'3개'} />
                    <ActContainer title = {'내일 예약'} text = {'5개'} />
                    <ActContainer title = {'TEXT'} text = {'COUNT'} />
                </Activity>
            </div>
            <div>
                123
            </div>
        </div>
    )
}

export default Company;