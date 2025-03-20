import './Menu.css';
import { DataBox, BoxTitle, Row, Col, Btn } from "../../components/common/DataBox";
import usePost from '../../hooks/usePost';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Menu({ store }) {
    // const menu = usePost('/api/menu/find-menu', store);
    const [menu, setMenu] = useState();
    const [newMenu, setNewMenu] = useState({
        storeId: 1,
        menuName: '',
        price: '',
        menuType: '',
        description: ''
    });
    const [editInput, setEditInput] = useState({
        storeId: 1,
        menuName: '',
        price: '',
        menuType: '',
        description: ''
    });

    const [editting, setEditting] = useState(0);    // editting === item.id
    const [renderMenu, setRenderMenu] = useState(false); // inputMenu : addMenu

    function updateMenu(store) {
        axios.post('/api/menu/find-menu', store)
        .then( res => setMenu(res.data) )
        .catch( error => console.log(error) )
    }

    useEffect(()=>{
        updateMenu(store);
    }, [store, renderMenu]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMenu(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitNewMenu = async (newMenu) => {
        await axios.post('/api/menu/save-menu', newMenu)
        .then( res => {
            console.log('메뉴추가성공 : ' + res);
            setNewMenu({ ...Menu, menuName:'', price:'', menuType:'', description:''});
            setRenderMenu(false);
            updateMenu(store);
        })
        .catch( error => {
            console.log('메뉴추가실패 : ' + error);
            alert('메뉴 추가 실패');
        })
    }

    const deleteMenu = (menuId) => {
        axios.delete(`/api/menu/delete-menu?menuId=${menuId}`)
            .then(res => {
                console.log('메뉴삭제성공 : ' + res);
                updateMenu(store);
            })
            .catch(error => {
                console.log('메뉴삭제실패 : ' + error);
                alert('메뉴 삭제 실패');
            });
    };

    // axios.delete 는 기본적으로 body 지원 안됨
    // body로 요청 -> {data: { value }}
    // const deleteMenu = (menuId) => {
    //     if( !menuId ) {
    //         return;
    //     }
    //     axios.delete('/api/menu/delete-menu', {data: { menuId }})
    //     .then(res => {
    //         console.log('메뉴삭제성공 : ' + res);
    //         updateMenu(store); // 메뉴 삭제 후 메뉴 목록을 갱신
    //     })
    //     .catch(error => {
    //         console.log('메뉴삭제실패 : ' + error);
    //         alert('메뉴 삭제 실패');
    //     });
    // };

    const inputMenu = () => {
        return (
            <div className='menu'>
                <Row><Col title='메뉴이름' content={<input className='meneInput' type='text' name='menuName' value={newMenu.menuName} onChange={handleInputChange} />} /></Row>
                <Row><Col title='가격' content={<input className='meneInput' type='text' name='price' value={newMenu.price} onChange={handleInputChange} />} /></Row>
                <Row><Col title='종류' content={<input className='meneInput' type='text' name='menuType' value={newMenu.menuType} onChange={handleInputChange} />} /></Row>
                <Row><Col title='메뉴설명' content={<input className='meneInput' type='text' name='description' value={newMenu.description} onChange={handleInputChange} />} /></Row>
                <button className='menuBtn menuButton' onClick={() => submitNewMenu(newMenu)}>메뉴 추가</button>
            </div>
        )
    }

    const addMenu = () => {
        return (
            <div className='menu'>
                <button 
                    className='menuBtn menuAddBtn' 
                    onClick={() => setRenderMenu(true)}
                >+</button>
            </div>
        )
    }

    const editMenu = (item) => {
        return (
            <>
                <Row><Col title='메뉴이름' content={<input className='meneInput' type='text' name='menuName' value={editInput.menuName} onChange={editInputChange} />} /></Row>
                <Row><Col title='가격' content={<input className='meneInput' type='text' name='price' value={editInput.price} onChange={editInputChange} />} /></Row>
                <Row><Col title='종류' content={<input className='meneInput' type='text' name='menuType' value={editInput.menuType} onChange={editInputChange} />} /></Row>
                <Row><Col title='메뉴설명' content={<input className='meneInput' type='text' name='description' value={editInput.description} onChange={editInputChange} />} /></Row>
                <button className='menuBtn menuButton' onClick={() => submitEditMenu(editInput)}>수정확인</button>
            </>
        )
    }

    const startEditing = (item) => {
        setEditting(item.id);
        setEditInput({ ...item });
    };

    const editInputChange = (e) => {
        const { name, value } = e.target;
        setEditInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitEditMenu = async (newMenu) => {
        await axios.post('/api/menu/modify-menu', newMenu)
        .then( res => {
            console.log('메뉴수정성공 : ' + res);
            setNewMenu({ ...Menu, menuName:'', price:'', menuType:'', description:''});
            setRenderMenu(false);
            updateMenu(store);
            setEditting(0);
        })
        .catch( error => {
            console.log('메뉴추가실패 : ' + error);
            alert('메뉴 추가 실패');
        })
    }

    return (
        <div className='menuContainer'>
            <DataBox>
                <BoxTitle>메뉴 목록</BoxTitle>
                    <div className='menuListContainer'>
                        {menu && menu.map((item, index)=>{
                            return (
                                <div className='menu' key={item.id}>
                                    {editting === item.id ? (
                                    <>
                                        {editMenu(item)}
                                    </>

                                    ) : (

                                    <>
                                        <Row><Col title='메뉴이름' content={item.menuName} /></Row>
                                        <Row><Col title='가격' content={item.price} /></Row>
                                        <Row><Col title='종류' content={item.menuType} /></Row>
                                        <Row><Col title='메뉴설명' content={item.description} /></Row>
                                        <button className='menuBtn menuButton' onClick={() => startEditing(item)}>메뉴수정</button>
                                        <button 
                                            className='menuBtn menuDelete' 
                                            onClick={() => deleteMenu(item.id)}
                                        >
                                            &times;
                                        </button>
                                    </>
                                    )}
                                </div>
                            )
                        })}
                        {
                            renderMenu ? inputMenu() : addMenu()
                        }
                    </div>
            </DataBox>
        </div>
    )
}

export default Menu;