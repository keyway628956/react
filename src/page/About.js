import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import '../styles/resume.css';



function About() {
    return (
        <body style={{  
            padding: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#707070',
            fontSize: '14px',
            lineHeight: '1.5',
            letterSpacing: '1.5px'}}>
        <div>
            <Jumbotron style={{ backgroundColor: '#FFFFFF', borderColor: '#555555' }}>
                <h1>About!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                        </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>


            <div class="resume" >
  <div class="left">
    <img src="" alt=""></img>
    <h1>XU CHEN XUAN</h1>
    <h4>平面設計 • 插畫 • 攝影</h4>
    <hr></hr>
    <p>1997/04/09 • Taiwan</p>
    <div class="buttons">
      <a class="btn1 fill"href="https://issuu.com/2sin/docs/yusin_s_portfolio____"target="_blank" rel="noopener noreferrer">Portfolio</a>
      <a class="btn2"href="https://www.behance.net/2sin"target="_blank" rel="noopener noreferrer">Behance</a>
    </div>
    <div class="block">
      <h4>skills</h4>
      <h2>專業技能</h2>
      <ul class="listSkill">
        <li>
          <div class="circle">
            <div class="p90"></div>
            <div class="p180"></div>
            <div class="p270"></div>
            <div class="p360"></div>
            </div>
          Graphic Design
        </li>
        <li>
          <div class="circle"><div class="p90"></div>
            <div class="p180"></div>
            <div class="p270"></div>
            </div>
          Image Processing
        </li>
        <li>
          <div class="circle"><div class="p90"></div>
            <div class="p180"></div>
            <div class="p270"></div>
            </div>
          Layout Design
        </li>
        <li>
          <div class="circle"><div class="p90"></div>
            <div class="p180"></div>
            </div>
          User Interface
        </li>
        <li>
          <div class="circle"><div class="p90"></div>
            <div class="p180"></div>
            <div class="p270"></div>
            <div class="p360"></div></div>
          llustration
        </li>
        <li>
          <div class="circle"><div class="p90"></div>
            <div class="p180"></div>
            </div>
          Photography
        </li>
        
      </ul>
    </div>
    <div class="block">
      <h4>application software</h4>
      <h2>軟體應用</h2>
      <ul class="software">
        <li>
          Illustrator
         
          <div class="bar">
            <div class="value p80"></div>
          </div>
         
        </li>
        <li>
          Photoshop
          <div class="bar">
            <div class="value p80"></div>
          </div>
        </li>
        <li>
          Indesign
          <div class="bar">
            <div class="value p60"></div>
          </div>
        </li>
        <li>
          Adobe Xd
          <div class="bar">
            <div class="value p60"></div>
          </div>
        </li>
        <li>
          Html / Css
          <div class="bar">
            <div class="value p20"></div>
          </div>
        </li>
      </ul>
    </div>
    
  </div>
  <div class="right">
    <div class="decoration"></div>
    <div class="block">
      <h4>experience</h4>
      <h2>經歷</h2>
      <ul class="experience">
        <li class="year">2020
          <ul>
          O O 生態農場 • 行銷設計<br/>
          <span class="smalltext">官網UIUX 發想及設計 / 活動Banner設計 / 商品攝影</span>
            </ul>
        </li>
        <li class="year">2019
          <ul>
            <li>O O 雲端科技 • 設計<br></br><span class="smalltext">UIUX 發想及設計 / 企業形象設計 / 官方網站維護</span></li>
            <li>亞洲大學視覺傳達設計學系畢籌會 • 攝影組 <br></br><span class="smalltext">提報展覽側拍 / 校內展工作人員</span></li>
          </ul>
        </li>
        <li class="year">2018
          <ul>
          O O 藝術設計 • 藝術組實習生<br/> <span class="smalltext">活動主視覺設計 / 活動導覽人員 / 粉絲專頁小編</span>
          </ul>
        </li>
        <li class="year">2017
          <ul>
          O O 廣告 • 設計工讀生<br/>
          <span class="smalltext">菜單 / 名片 / DM 設計</span>
          </ul>
        </li>
        <li class="year">2015
          <ul>
            <li>成立個人插畫粉絲專頁<br/><span class="smalltext">粉絲數迄今達 16k</span></li>
            <li>個人插畫展</li>
          </ul>
        </li>
      </ul>
      
    </div>
  <div class="block">
      <h4>competition</h4>
      <h2>比賽 / 參展經歷</h2>
        <ul class="competition">
          <li>2019 亞洲大學紅點校內初審　通過</li>
          <li>2019 高雄放視大賞　入圍</li>
          <li>2019 台北新一代設計展</li>
          <li>2019 亞洲大學創意設計學院聯展</li>
          <li>2018 台灣學生創意設計大賽</li>
        </ul>
    </div>
  </div>
</div>


<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="keyway628956" data-slug-hash="yLOdYxp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vue.js Piano Project 7">
  <span>See the Pen <a href="https://codepen.io/keyway628956/pen/yLOdYxp">
  Vue.js Piano Project 7</a> by 許宸瑄 (<a href="https://codepen.io/keyway628956">@keyway628956</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

        </div>
        </body>

    );
}

export default About;
