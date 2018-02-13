import React from "react";
import img_404 from "../../style/imgs/404.png";


class NotFound extends React.Component {
  state = {
    // 鼠标点击的动画效果
    animated: ''
  };
  enter = () => {
    // 鼠标点击时候的效果
    this.setState({animated: 'hinge'})
  };

  render() {
    return (
      <div className="center"
           style={{height: '100%', background: '#ececec', overflow: 'hidden'}} >
        <img src={img_404} alt="404" onMouseEnter={this.enter}
             className={`animated swing ${this.state.animated}`} />
      </div>
    )
  }
}

export default NotFound;
