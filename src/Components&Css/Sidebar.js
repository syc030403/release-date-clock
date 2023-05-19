import React, {useEffect, useRef, useState} from "react";
import styles from "./Sidebar.module.css";


const Sidebar = ({ width=280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(width);
  const side = useRef();
  
  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(width);
      setOpen(false);
    }
  };
  
  return (
    <div className={styles.container}>
      <div ref={side}  className={styles.sidebar} style={{ width: `${width}px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
          <button onClick={() => toggleMenu()}
          className={styles.button} >
            {isOpen ? 
            <span>X</span> : <span>O</span>//<img src="images/avatar.png" alr="contact open button" className={styles.openBtn}/>
            }
          </button>
        
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Sidebar width={300}>
        {/* 사이드바 내용 */}
        <h1>사이드바</h1>
        <p>여기에 추가적인 내용이 들어갑니다.</p>
      </Sidebar>
      {/* 다른 컴포넌트 내용 */}
    </div>
  );
}

export default Sidebar;