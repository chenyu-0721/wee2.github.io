export default {
  template: ` 

  <nav class="container  container_text navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
      <a class="navbar-brand " href="#"><img class="navbar_img"
              src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/logo.svg"></a>
      <button class="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ms-auto  mb-md-0">
              <li class="nav-item ">
                  <a href="#" class="nav-link" aria-current="page">
                      <span class="navbar_span nav-font ">首頁</span>
                      <span class="nav-box1"></span>
                      <span class="nav-box2"></span>
                      <span class="nav-box3"></span>
                      <span class="nav-box4"></span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#/work" class="nav-link" aria-current="page">
                      <span class="navbar_span  nav-font ">作品集</span>
                      <span class="nav-box1"></span>
                      <span class="nav-box2"></span>
                      <span class="nav-box3"></span>
                      <span class="nav-box4"></span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#/serve" class="nav-link " aria-current="page">
                      <span class="navbar_span second-title-color nav-font ">服務項目</span>
                      <span class="nav-box1-work"></span>
                      <span class="nav-box2-work"></span>
                      <span class="nav-box3-work"></span>
                      <span class="nav-box4-work"></span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link " aria-current="page">
                      <span class="navbar_span nav-font ">部落格</span>
                      <span class="nav-box1"></span>
                      <span class="nav-box2"></span>
                      <span class="nav-box3"></span>
                      <span class="nav-box4"></span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link " aria-current="page">
                      <span class="navbar_span nav-font ">聯絡我</span>
                      <span class="nav-box1"></span>
                      <span class="nav-box2"></span>
                      <span class="nav-box3"></span>
                      <span class="nav-box4"></span>
                  </a>
              </li>
          </ul>
      </div>
  </div>
</nav>

<div class="">
  <div id="serve">
      <h1 class="text-center project-Introduction-title">服務項目</h1>
  </div>
  <div class="container ">
      <div class="row row-cols-1 g-3  justify-content-center  ">
          <div class="border bg-dark text-white serviceContent-box ">
              <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/price-item-visual.svg">
              平面設計
          </div>
          <div class="border bg-dark text-white serviceContent-box">
              <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/price-item-ui.svg">
              UI 設計
          </div>
          <div class="border bg-dark text-white serviceContent-box">
              <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/service-item-html%26css.svg">
              切版服務
          </div>
          <div class="border bg-dark text-white serviceContent-box">
              <img
                  src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/price-item-front-end.svg">
              前端開發
          </div>
      </div>
  </div>
  <h1 class="text-center service-Introduction-title">想要合作或瞭解更多？</h1>
  <div class="text-center service-button-pd">
      <a class="btn btn-dark service-button" href="#" role="button">
          詳細內容與合作流程
          <i class="bi bi-arrow-right bi-right"></i>
      </a>
  </div>
</div>

<div class="project-Introduction-serve-img" >
  <h1 class="text-center text-white project-Introduction-title">服務流程</h1>
  <div class="container d-flex justify-content-center ">
      <div class="g-3">
          <div class="border bg-gray text-white service-flex">
              <div class="col-lg-1">
                  <span class="service-number">1</span>
              </div>
              <div class="ms-3 col-md-11 service-flex2">
                  <span class="service-title">初步接洽</span>
                  <span class="service-content">透過表單或其他社群軟體與我聯絡</span>
                  <span class="service-content">根據難易度與複雜度，後續可能需要電話/線上討論</span>
              </div>
          </div>
          <div class="text-white d-flex align-items-center justify-content-center">
              <i class="bi bi-arrow-down bi-down"></i>
          </div>
          <div class="border bg-gray text-white service-flex">
              <div class="col-lg-1">
                  <span class="service-number">2</span>
              </div>
              <div class="ms-3 col-md-11 service-flex2">
                  <span class="service-title">需求釐清</span>
                  <span class="service-content">透過訪談與問卷，解析客戶需求，並針對痛點給予實際建議</span>
              </div>
          </div>
          <div class="text-white d-flex align-items-center justify-content-center">
              <i class="bi bi-arrow-down bi-down"></i>
          </div>
          <div class="border bg-gray text-white service-flex">
              <div class="col-lg-1">
                  <span class="service-number">3</span>
              </div>
              <div class="ms-3 col-md-11 service-flex2">
                  <span class="service-title">委託簽約</span>
                  <span class="service-content">合約雙方用印後，即正式開始合作</span>
                  <span class="service-content">可提供發票或勞務報酬單，須支付 20% 訂金</span>
              </div>
          </div>
          <div class="text-white d-flex align-items-center justify-content-center">
              <i class="bi bi-arrow-down bi-down"></i>
          </div>
          <div class="border bg-gray text-white service-flex">
              <div class="col-lg-1">
                  <span class="service-number">4</span>
              </div>
              <div class="ms-3 col-md-11 service-flex2">
                  <span class="service-title">版本呈現</span>
                  <span class="service-content">根據合約內容進行設計或開發</span>
              </div>
          </div>
          <div class="text-white d-flex align-items-center justify-content-center">
              <i class="bi bi-arrow-down bi-down"></i>
          </div>
          <div class="border bg-gray text-white service-flex">
              <div class="col-lg-1">
                  <span class="service-number">5</span>
              </div>
              <div class="ms-3 col-md-11 service-flex2">
                  <span class="service-title">來回修正</span>
                  <span class="service-content">依據合約規定之修正次數進行，次數計算以 mail 為準</span>
              </div>
          </div>
          <div class="text-white d-flex align-items-center justify-content-center">
              <i class="bi bi-arrow-down bi-down"></i>
          </div>
          <div class="border bg-gray text-white service-flex">
              <div class="col-lg-1">
                  <span class="service-number">6</span>
              </div>
              <div class="ms-3 col-md-11 service-flex2">
                  <span class="service-title">終版確認</span>
                  <span class="service-content">雙方同意後即為最終版</span>
              </div>
          </div>
          <div class="text-white d-flex align-items-center justify-content-center">
              <i class="bi bi-arrow-down bi-down"></i>
          </div>
          <div class="border bg-gray text-white service-flex">
              <div class="col-lg-1">
                  <span class="service-number">7</span>
              </div>
              <div class="ms-3 col-md-11 service-flex2">
                  <span class="service-title">結案</span>
                  <span class="service-content">客戶簽署驗收單，並於約定日期支付尾款</span>
              </div>
          </div>
      </div>
  </div>
</div>


<h1 class="text-center project-Introduction-title">價格表</h1>

<div class="album pb-5">
  <div class="container">
      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
          <div class="col modal-hover" data-bs-toggle="modal" data-bs-target="#modal4">
              <div class="card">
                  <div class="card-body bg-light">
                      <img
                          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/price-item-visual.svg">
                      <span class="qs-content">平面設計 --- 6,000起<span style="font-size: 12px">起</span></span>
                  </div>
              </div>
          </div>
          <div class="col modal-hover" data-bs-toggle="modal" data-bs-target="#modal4">
              <div class="card">
                  <div class="card-body  bg-light">
                      <img
                          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/price-item-ui.svg">
                      <span class="qs-content">UI 設計 --- 15,000<span style="font-size: 12px">起</span></span>
                  </div>
              </div>
          </div>
          <div class="col modal-hover" data-bs-toggle="modal" data-bs-target="#modal4">
              <div class="card">
                  <div class="card-body  bg-light">
                      <img
                          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/price-item-front-end.svg">
                      <span class="qs-content">前端開發 --- 22,000<span style="font-size: 12px">起</span></span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>


<div class="bg-light">
  <h1 class="text-center project-Introduction-title">客戶案例</h1>

  <div class="album ">
      <div class="container">
          <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3">
              <div class="col modal-hover" data-bs-toggle="modal" data-bs-target="#modal4">
                  <div class="">
                      <img src="/img/美美美早餐.png" class="card-img-top secondImg">
                      <div class="card-body">
                          <span class="SecondTitle">美美美早餐店 POS 機 UI Design</span>
                          <br>
                          <span class="information">訂單送單一目瞭然，自動報表分析好輕鬆</span>
                          <div class="tag-content">
                              <span class="hashtag">UI 設計</span>
                              <span class="hashtag">前端開發</span>
                              <span class="hashtag">Wix</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col modal-hover" data-bs-toggle="modal" data-bs-target="#modal6">
                  <div class="">
                      <img src="/img/巧克巧克.png" class="card-img-top secondImg">
                      <div class="card-body">
                          <span class="SecondTitle">巧克巧克形象官網設計</span>
                          <br>
                          <span class="information">三步驟完成訂票，電腦手機都支援</span>
                          <div class="tag-content">
                              <span class="hashtag">UI設計</span>
                              <span class="hashtag">設計系統</span>
                              <span class="hashtag">網路電商 </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col modal-hover" data-bs-toggle="modal" data-bs-target="#modal5">
                  <div class="">
                      <img src="/img/電影院.png" class="card-img-top secondImg">
                      <div class="card-body">
                          <span class="SecondTitle">電影院訂票系統</span>
                          <br>
                          <span class="information">三步驟完成訂票，電腦手機都支援</span>
                          <div class="tag-content">
                              <span class="hashtag">前端開發</span>
                              <span class="hashtag">後端支援</span>
                              <span class="hashtag">Vue</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col modal-hover" data-bs-toggle="modal" data-bs-target="#modal6">
                  <div class="">
                      <img src="/img/橘子.png" class="card-img-top secondImg">
                      <div class="card-body">
                          <span class="SecondTitle">2023 餉茶坊飲料旗艦店活動官網設計</span>
                          <br>
                          <span class="information">主打水果主題，冰鎮夏天暑氣</span>
                          <div class="tag-content">
                              <span class="hashtag">網頁設計</span>
                              <span class="hashtag">切版服務</span>
                              <span class="hashtag">Javascript</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>




<h1 class="text-center project-Introduction-title">常見問題</h1>

<div class="album pb-5">
  <div class="container">
      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3">
          <div class="col modal-hover" data-bs-toggle="modal" data-bs-target="#modal4">
              <div class="card">
                  <div class="card-body">
                      <span class="qs-title">時程很趕的話可以加快作業嗎？</span>
                      <br>
                      <span class="qs-content">每提早一天，只要支付總報價的 5%，我們即會視為急件為您趕工！</span>
                  </div>
              </div>
          </div>
          <div class="col modal-hover" data-bs-toggle="modal" data-bs-target="#modal4">
              <div class="card">
                  <div class="card-body">
                      <span class="qs-title">白天可以開會討論嗎</span>
                      <br>
                      <span class="qs-content">每週一三五的白天，可以約定開會時間！</span>
                  </div>
              </div>
          </div>
          <div class="col modal-hover" data-bs-toggle="modal" data-bs-target="#modal4">
              <div class="card">
                  <div class="card-body">
                      <span class="qs-title">有實際開發的網站可以參考嗎？</span>
                      <br>
                      <span class="qs-content">請填寫表單或來信索取，部分合作有簽保密協定，無法於網路上公開喔。</span>
                  </div>
              </div>
          </div>
          <div class="col modal-hover" data-bs-toggle="modal" data-bs-target="#modal4">
              <div class="card">
                  <div class="card-body">
                      <span class="qs-title">提供比稿服務嗎？</span>
                      <br>
                      <span class="qs-content">只要支付費用，設計提供比稿服務，但切版與前端開發恕不提供該服務內容。</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>





<div class="bg-light" id="callme">
  <div class="container " style="padding-bottom:40px">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 footer-nav">
          <div class="col-md-4 d-flex">
              <h1 class=""><img
                      src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/logo.svg"><br><span
                      class="footer-content">若有數位產品設計和開發相關問題<br>歡迎填寫表單，或直接與我聯絡！<br><span
                          class="footer-tag">service@hexschool.com</span>
              </h1>
          </div>

          <ul class="footer-nav-li col-md-4 justify-content-end list-unstyled d-flex flex-direction-column ">
              <li class="ms-3"><a class="text-muted" href="">
                      <div><button type="button" class="btn btn-outline-dark footer-button"><i
                                  class="bi bi-book footer-icon"></i>填寫表單</button>
                  </a></li>
              <li class="ms-3"><a class="text-muted" href=""><button type="button"
                          class="btn btn-outline-dark footer-button"><i
                              class="bi bi-instagram footer-icon"></i>hexschool_demo</button></a>
              </li>
              <li class="ms-3"><a class="text-muted" href=""><button type="button"
                          class="btn btn-outline-dark footer-button"><i
                              class="bi bi-facebook footer-icon"></i>hexschoolTW</button></a></li>
          </ul>
      </footer>
  </div>
    
    
  
  
  
  `,
};
