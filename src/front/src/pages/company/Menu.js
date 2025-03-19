import './Menu.css';
import { DataBox, BoxTitle, Row, Col, Btn } from "../../components/common/DataBox";
import usePost from '../../hooks/usePost';

function Menu({ store }) {

    const menu = usePost('/api/menu/find-menu', store);
    console.log('===============');
    console.log(menu && menu);
    console.table(menu && menu);
    console.log('===============');

    return (
        <div className='menuContainer'>
            <DataBox>
                <BoxTitle>메뉴 목록</BoxTitle>
                    <div className='menuListContainer'>
                        {menu && menu.map((item, index)=>{
                            return (
                                <div className='menu'>
                                    <Row><Col title='메뉴이름' content={item.menuName} /></Row>
                                    <Row><Col title='가격' content={item.price} /></Row>
                                    <Row><Col title='종류' content={item.menuType} /></Row>
                                    <Row><Col title='메뉴설명' content={item.description} /></Row>
                                    <button className='menuButton'>메뉴수정</button>
                                </div>
                            )
                        })}
                        <div className='menu'>
                            메뉴추가
                        </div>
                    </div>
            </DataBox>
        </div>
    )
}

export default Menu;