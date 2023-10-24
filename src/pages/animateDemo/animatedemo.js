import React from 'react'
import Animate from 'components/animate/index'
import './animatedemo.scss'

const AnimateDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>点击触发</h2>
        <div className="ani-demo-div">
          <Animate type="slide-right" action="click">
            <div className="btn-demo">由右向左划入 slide-right</div>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="slide-left" action="click">
            <div className="btn-demo">由左向右划入 slide-left</div>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="slide-top" action="click">
            <div className="btn-demo">由上至下划入 slide-top</div>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="slide-bottom" action="click">
            <div className="btn-demo">由下至上划入 slide-bottom</div>
          </Animate>
        </div>

        <h2>循环动画</h2>
        <div className="ani-demo-div">
          <Animate type="shake" action="initial" loop>
            <div className="btn-demo">shake-抖动</div>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="ripple" loop>
            <div className="btn-demo">ripple-心跳</div>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="breath" loop>
            <div className="btn-demo">breath-呼吸灯</div>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="twinkle" loop>
            <div className="btn-demo">twinkle-水波</div>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="flicker" loop>
            <div className="btn-demo">flicker-擦亮</div>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="jump" loop>
            <div className="btn-demo">jump-跳跃</div>
          </Animate>
        </div>

        <div className="ani-demo-div">
          <Animate type="float" loop>
            <div className="btn-demo">float-漂浮</div>
          </Animate>
        </div>
      </div>
    </>
  )
}

export default AnimateDemo