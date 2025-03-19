import StoreInfoMain from './main/StoreInfoMain';
import './StoreInfo.css';
import StoreInfoSub from './sub/StoreInfoSub';



export default function StoreInfo({ store, storeDetail, menu, id }) {

    return (

        <div className='storeInfo-content-container'>

            <StoreInfoMain store={store} storeDetail={storeDetail} menu={menu} id={id}/>
            <StoreInfoSub store={store} storeDetail={storeDetail} menu={menu} storeAddress={store.address} />

        </div>
    )
}