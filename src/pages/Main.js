import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination,Autoplay} from "swiper"
import number_01 from '../img/1.png'
import number_02 from '../img/2.png'
import axios from 'axios'
import { useSelector } from "react-redux";

SwiperCore.use([ Pagination, Autoplay])



function getUserData(){
    axios.get('/api/getuser').then(response => {
        console.log(response.data.sub);
        return response.data.sub;
      })
}

function MainPage() {
    return(
        <><div className='swiper-container'>
            <Swiper
                className="banner"
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
            >
                <SwiperSlide className='slide'><img className='first-banner' alt='number_01' img src={number_01}></img></SwiperSlide>
                <SwiperSlide className='slide'><img className='second-banner' alt='number_02' img src={number_02}></img></SwiperSlide>
            </Swiper>
        </div><div className="Large-container">
                <div className="Medium-container">
                    <div className="firstwrapper">
                        <div className='fist-m-wrapper'>
                            <div className="first-content">
                                <h4 className="keyword">
                                    <span className="lt-keyword">
                                        최근질문
                                    </span>
                                </h4>
                            </div>
                            <div className='text-frame'>
                                <div className='text-container'>
                                    <div className='text-name'>(React.js) QWebview-plus 또는 Kiwoom-Helper를 가져다 쓰는법 </div>
                                    <div className='text-script'>키움헬퍼를 npm install 하고 import를 해주었습니다.   1. react에서는 사용할 수 없는건지, 2. componentDidMount() 에서 키움핼퍼 함수를 호출하는게 잘못된건지, 3. 웹에서 키움증권 API를 갖다쓰고 싶은데, React로는..</div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="secondwrapper">
                            <div className='second-m-wrapper'>
                                <div className="second-content">
                                    <h4 className="keyword">
                                        <span className="lt-keyword">최근 인기 글
                                        </span></h4>
                                </div>
                                <div className='text-frame'>
                                    <div className='text-container'>
                                        <div className='text-name'>[긴급] 거의 모든 서버가 위험하다! 매우 치명적인 ‘로그4j’ 보안 취약점 발견</div>
                                        <div className='text-script'>Log4j 가 문제가 될 줄이야...</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                </div>
            </div></>
    )}
    export default MainPage;
