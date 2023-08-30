// import styles from '../../styles.css';


const FooterComponent = () => {


    return ( 

        <footer className="h-20 w-full relative flex justify-between items-center mt-4 mb-12 font-size-1px">
            <div className="relative max-w-screen-lg m-auto h-full items-center">
                <div className="container items-center ">
                    <div 
                    className="text-center font-serif  m-auto items-center "
                    // style={customStyle}
                    >
                    <span className="p-1">상호명 : Astro</span>
                    <span className="p-1">대표자 : 코코팜</span>
                    <span className="p-1">고객센터 : 010-1111-1111</span><br/>
                    <span className="p-1">사업자번호 : 123-12-12312</span>
                    <span className="p-1">담당자메일 : cocofarm@cocofarm.com</span><br/>
                    <span className="p-1">주소 : 서울시 종로구 인사동길 12 대일빌딩 15층 코코팜</span>
                    </div>
                </div>
            </div>
        </footer>

    );

}
 

export default FooterComponent;