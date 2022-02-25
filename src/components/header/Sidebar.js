import React,{ useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import '../../styles/Sidebar.css'
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from './styleUtil';

// 상단 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
    ${shadow(1)}
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
    width: 1200px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
    
    ${media.wide`
        width: 992px;
    `}

    ${media.desktop`
        width: 100%;
    `}
`;

// 로고
const Logo = styled.div`
    font-size: 1.5rem;
    letter-spacing: 4px;
    color: orange;
    font-family: 'Rajdhani';
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
    height: 3px;
    background: linear-gradient(to right, ${oc.orange[9]}, ${oc.orange[5]});
`;

function Sidebar(props) {
    const [Sidebar, setSidebar] = useState(false);
    const showSidebar = ()=> setSidebar(!Sidebar);
    return (
        <>
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <Logo>DEVFORUM</Logo>
                    <Spacer/>
                    {props.children}
                </HeaderContents>
            </WhiteBackground>
            <GradientBorder/>
        </Positioner>

         <IconContext.Provider value={{ color: 'black' }}>
            <div className="navbar">
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>
            <nav className={Sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            </IconContext.Provider>
        </>
      );
    }
            

  
export default Sidebar;
