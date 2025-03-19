import { useParams } from 'react-router-dom';
import './StoreDetail.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Spinner from '../../components/reactLoader/reactLoader';
import React from 'react';
import StoreInfo from '../../components/storeInfo/StoreInfo';

export default function StoreDetail() {

    const { id } = useParams();
    const [ storeInfoData, setStoreInfoData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ store, setStore ] = useState([]);
    const [ storeDetail, setStoreDetail ] = useState([]);
    const [ menu, setMenu ] = useState([]);



    useEffect(() => {
        axios.get(`/main/store/${id}`)
            .then((Response) => {
                setStoreInfoData(Response.data);
                setStore(Response.data.store);
                setStoreDetail(Response.data.storeDetail);
                setMenu(Response.data.menu);

                console.log(Response.data);
            })
            .catch((error) => {
                console.log("error남", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);


    return (
        <>

            <div className='storeInfo-container'>
                {
                    loading ? (
                        <Spinner />
                    ) : (
                        store.map((item, index) => {
                            return <StoreInfo store={item} storeDetail={storeDetail[0]} menu={menu} id={id} />
                        })
                    )
                }
            </div>
        </>
    )
}