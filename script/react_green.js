// 1. 컴포넌트
function WrapComponent(){
  return(
    <div id="wrap">
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
      <ModalComponent/>
    </div>
  );
}
    function HeaderComponent(){
      return(
        <header id="header">
          <div className="left">
            <h1><a href="./index.html" title="HOME"><img src="./images/logo.png" alt="Green복지재단 Logo" /></a></h1>
          </div>
          <div className="right">
            <nav id="nav">
              <ul>
                <li>
                  <a href="#" className="main-btn" title="재단소개">재단소개</a>
                  <div className="sub sub1">
                    <div className="container">
                      <ul>
                        <li>
                          <ul>
                            <li><a href="#" title="설립취지">설립취지</a></li>
                            <li><a href="#" title="연혁">연혁</a></li>
                            <li><a href="#" title="찾아오시는길">찾아오시는길</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li><a href="#">서브메뉴1</a></li>
                            <li><a href="#">서브메뉴2</a></li>
                            <li><a href="#">서브메뉴3</a></li>
                          </ul>                      
                        </li>
                        <li>
                          <ul>
                            <li><a href="#">서브메뉴1</a></li>
                            <li><a href="#">서브메뉴2</a></li>
                            <li><a href="#">서브메뉴3</a></li>
                          </ul>                      
                        </li>
                        <li>
                          <ul>
                            <li><a href="#">서브메뉴1</a></li>
                            <li><a href="#">서브메뉴2</a></li>
                            <li><a href="#">서브메뉴3</a></li>
                          </ul>                      
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#" className="main-btn" title="후원하기">후원하기</a>
                  <div className="sub sub2">
                    <div className="container">
                      <ul>
                        <li>
                          <ul>
                            <li><a href="#"국내후원>국내후원</a></li>
                            <li><a href="#"국외후원>국외후원</a></li>
                            <li><a href="#"맞춤후원>맞춤후원</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li><a href="#">서브메뉴1</a></li>
                            <li><a href="#">서브메뉴2</a></li>
                            <li><a href="#">서브메뉴3</a></li>
                          </ul>                      
                        </li>
                        <li>
                          <ul>
                            <li><a href="#">서브메뉴1</a></li>
                            <li><a href="#">서브메뉴2</a></li>
                            <li><a href="#">서브메뉴3</a></li>
                          </ul>                      
                        </li>
                        <li>
                          <ul>
                            <li><a href="#">서브메뉴1</a></li>
                            <li><a href="#">서브메뉴2</a></li>
                            <li><a href="#">서브메뉴3</a></li>
                          </ul>                      
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#" className="main-btn" title="자료실">자료실</a>
                  <div className="sub sub3">
                    <div className="container">
                      <ul>
                        <li>
                          <ul>
                            <li><a href="#" title="서식자료실">서식자료실</a></li>
                            <li><a href="#" title="사진자료실">사진자료실</a></li>
                            <li><a href="#" title="후원양식">후원양식</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li><a href="#">서브메뉴1</a></li>
                            <li><a href="#">서브메뉴2</a></li>
                            <li><a href="#">서브메뉴3</a></li>
                          </ul>                      
                        </li>
                        <li>
                          <ul>
                            <li><a href="#">서브메뉴1</a></li>
                            <li><a href="#">서브메뉴2</a></li>
                            <li><a href="#">서브메뉴3</a></li>
                          </ul>                      
                        </li>
                        <li>
                          <ul>
                            <li><a href="#">서브메뉴1</a></li>
                            <li><a href="#">서브메뉴2</a></li>
                            <li><a href="#">서브메뉴3</a></li>
                          </ul>                      
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#" className="main-btn" title="스토리">스토리</a>
                  <div className="sub sub4">
                    <div className="container">
                      <ul>
                        <li>
                          <ul>
                            <li><a href="#" title="웹진">웹진</a></li>
                            <li><a href="#" title="보고서">보고서</a></li>
                            <li><a href="#" title="나의후원">나의후원</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li><a href="#">서브메뉴1</a></li>
                            <li><a href="#">서브메뉴2</a></li>
                            <li><a href="#">서브메뉴3</a></li>
                          </ul>                      
                        </li>
                        <li>
                          <ul>
                            <li><a href="#">서브메뉴1</a></li>
                            <li><a href="#">서브메뉴2</a></li>
                            <li><a href="#">서브메뉴3</a></li>
                          </ul>                      
                        </li>
                        <li>
                          <ul>
                            <li><a href="#">서브메뉴1</a></li>
                            <li><a href="#">서브메뉴2</a></li>
                            <li><a href="#">서브메뉴3</a></li>
                          </ul>                      
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
    }
    function MainComponent(){
      return(
        <main id="main">
          <Section1Component/>
          <Section2Component/>
        </main>
      );
    }
        function Section1Component(){
          return(
            <section id="section1">
              <div className="slide-container">
                <div className="slide-view">
                  <ul className="slide-wrap">
                    <li className="slide slide3"><a href="#" title="그린복지재단3"><img src="./images/img3.jpg" alt="" /></a></li>
                    <li className="slide slide1"><a href="#" title="그린복지재단1"><img src="./images/img1.jpg" alt="" /></a></li>
                    <li className="slide slide2"><a href="#" title="그린복지재단2"><img src="./images/img2.jpg" alt="" /></a></li>
                    <li className="slide slide3"><a href="#" title="그린복지재단3"><img src="./images/img3.jpg" alt="" /></a></li>
                    <li className="slide slide1"><a href="#" title="그린복지재단1"><img src="./images/img1.jpg" alt="" /></a></li>
                  </ul>
                </div>
              </div>
            </section>
          );
        }
        function Section2Component(){
          return(
            <section id="section2">
              <div className="left board">
                <button className="notice-btn">공지사항</button>
                <div className="notice-box board-box">
                  <div className="gap">
                    <ul>
                      <li><a href="#" title="Green 복지재단 공지사항1" className="modal-btn">Green 복지재단 공지사항1</a><span>2020.11.23</span></li>
                      <li><a href="#" title="Green 복지재단 공지사항2">Green 복지재단 공지사항2</a><span>2020.11.23</span></li>
                      <li><a href="#" title="Green 복지재단 공지사항3">Green 복지재단 공지사항3</a><span>2020.11.23</span></li>
                      <li><a href="#" title="Green 복지재단 공지사항4">Green 복지재단 공지사항4</a><span>2020.11.23</span></li>
                    </ul>  
                  </div>
                </div>
              </div>
              <div className="center board">
                <button className="gallery-btn">갤러리</button>
                <div className="gallery-box board-box">
                  <a href="#" title="icon1"><img src="./images/icon1.png" alt="icon1" /></a>
                  <a href="#" title="icon2"><img src="./images/icon2.png" alt="icon2" /></a>
                  <a href="#" title="icon3"><img src="./images/icon3.png" alt="icon3" /></a>
                </div>
              </div>  
              <div className="right">
                <div className="banner">
                  <div className='title'><h2>EVENT BANNER</h2></div>
                  <div className="img-box">
                    <a href="#" title="banner"><img src="./images/banner.jpg" alt="banner" /></a>
                  </div>
                </div>
              </div>  
            </section>
          );
        }
    function FooterComponent(){
      return(
        <footer id="footer">
          <div className="left">
            <h1><a href="#" title="Logo"><img src="./images/footerLogo.png" alt="Logo" /></a></h1>
          </div>
          <div className="center">
            <div className="row1">
                <span><a href="#" title="하단메뉴1">하단메뉴1</a></span>
                <span><i>|</i></span>
                <span><a href="#" title="하단메뉴2">하단메뉴2</a></span>
                <span><i>|</i></span>
                <span><a href="#" title="하단메뉴3">하단메뉴3</a></span>
            </div>
            <div className="row2">
              <p>COPYRIGHT&copy; by WEBDESIGN. ALL RIGHTS RESERVED</p>
            </div>
          </div>  
          <div className="right">
            <select name="family" id="family">
              <option value="" selected>패밀리 사이트</option>
              <option value="패밀리사이트1">패밀리사이트1</option>
              <option value="패밀리사이트2">패밀리사이트2</option>
              <option value="패밀리사이트3">패밀리사이트3</option>
            </select>
          </div>  
        </footer>
      );
    }
    function ModalComponent(){
      return(
        <div className="modal">
          <div className="wrap">
            <div className="container">
              <div className="gap">
                <div className="title">
                  <h1>복지재단 공지사항</h1>
                </div>
                <div className="content">
                  <ol>
                    <li>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세.</li>
                    <li>무궁화 삼천리 화려강 대한 사람 대한으로 길이 보전하세.</li>
                    <li>남산 위에 저 소나무, 철갑을 두른 듯 바람서리 불변함은 우리 기상일세.</li>
                  </ol>                       
                </div>
                <div className="button-box">
                  <button className="modal-close-btn">닫기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

// 2. 리액트 돔은 루트 돔 컨테이너(#root)와 컴포넌트 연동
// const root = ReactDOM.createRoot( document.getElementById('root') );
// root.render(
//   <WrapComponent/>
// );
ReactDOM.render(
  <WrapComponent/>,
  document.getElementById('root')
);