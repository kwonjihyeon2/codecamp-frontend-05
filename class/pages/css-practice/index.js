import styles from "../../styles/emotion.module.css"

export default function CssPage(){

    return (
        <div>

            <div className={styles.container}>
                <div className={styles.title}>
                    로그인
                </div>
                <div className={styles.logincontent}>
                    <p>아이디</p>
                    <input className={styles.logininput} type="text" />
                </div>
                <div className={styles.logininput}>
                    <p>비밀번호</p>
                    <input className={styles.logininput} type="password" />
                </div>
            
                {/* <img src="/images/lotto.png" /> */}
            </div>
        </div>
            
        
        // 반드시 한 태그 안에 내용이 들어가야함 <div></div><div></div> 안됨
    )
}