import {Component} from 'react';
import {PropTypes} from 'prop-types';

class Provider extends Component {
	// 这个函数返回的就是代表 Context 的对象
  getChildContext() {
	  return {store: this.props.store};
	}

	// 渲染子组件
	// children 代表的是子组件
	//
	// 以下面代码为例
	//     <Provider>
	//       <ControlPanel />
	//     <Provider>
	// render 函数中的 this.props.children 就是两个 Provider 标签之间的
	// ControlPanel
	render() {
	  return this.props.children
	}
}

// 为了让 Provider 能够被认 React 认可为一个 Context 的提供者，需要指定
// Provider 的 childContextTypes 属性
Provider.childContextTypes = {
  store: PropTypes.object
};

Provider.propTypes = {
	store: PropTypes.object.isRequired
};

export default Provider;
