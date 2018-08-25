import React from 'react';
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';

import './style.css';

import slide01 from './images/slide01.jpg';
import slide02 from './images/slide02.jpg';
import slide03 from './images/slide03.jpeg';

class SwiperDemo extends React.Component {
	componentDidMount() {
		new Swiper(this.refs.swiper, {
		  observer: true,
			autoplay: true,
			loop: true,
			navigation: {
			  prevEl: this.refs.prev,
				nextEl: this.refs.next
			}
		});
	}

	render() {
	  return (
		  <div className="swiper-container swiper-demo" ref="swiper">
			  <div className="swiper-wrapper">
				  <div className="swiper-slide">
					  <img src={slide01} alt="轮播图" />
					</div>
				  <div className="swiper-slide">
					  <img src={slide02} alt="轮播图" />
					</div>
				  <div className="swiper-slide">
					  <img src={slide03} alt="轮播图" />
					</div>
				</div>
				<div className="swiper-button-prev" ref="prev"></div>
				<div className="swiper-button-next" ref="next"></div>
			</div>
		);
	}
}

export default SwiperDemo;
