export default {
  template: ` 
  <div class="border-bottom">
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
                    <ul class="navbar-nav resume-cover-nav-margin">
                        <li class="nav-item ">
                            <a href="#" class="nav-link " aria-current="page">
                                <span class="resume-cover-nav-li">首頁</span>
                                <span class="nav-hover-upperLeft"></span>
                                <span class="nav-hover-upperRight"></span>
                                <span class="nav-hover-lowerRight"></span>
                                <span class="nav-hover-lowerLeft"></span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#/work" class="nav-link" aria-current="page">
                                <span class="resume-cover-nav-li">作品集</span>
                                <span class="nav-hover-upperLeft"></span>
                                <span class="nav-hover-upperRight"></span>
                                <span class="nav-hover-lowerRight"></span>
                                <span class="nav-hover-lowerLeft"></span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#/serve" class="nav-link" aria-current="page">

                                <span class="resume-cover-nav-li">服務項目</span>
                                <span class="nav-hover-upperLeft-StopPage"></span>
                                <span class="nav-hover-upperRight-StopPage"></span>
                                <span class="nav-hover-lowerRight-StopPage"></span>
                                <span class="nav-hover-lowerLeft-StopPage"></span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#blog" class="nav-link " aria-current="page">

                                <span class="resume-cover-nav-li">部落格</span>
                                <span class="nav-hover-upperLeft"></span>
                                <span class="nav-hover-upperRight"></span>
                                <span class="nav-hover-lowerRight"></span>
                                <span class="nav-hover-lowerLeft"></span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link " aria-current="page">
                                <span class="resume-cover-nav-li">聯絡我</span>
                                <span class="nav-hover-upperLeft"></span>
                                <span class="nav-hover-upperRight"></span>
                                <span class="nav-hover-lowerRight"></span>
                                <span class="nav-hover-lowerLeft"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</div>
        <div class="bg-light serviceBox">
            <div class="introduction-of-works-blockDiv">
                <img class="introduction-of-works-title-deco"
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true">
                <h2 class="introduction-of-works-BigTitle">服務項目</h2>
                <img class="introduction-of-works-title-deco"
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true">
            </div>

            <div class="container">
                <div class="row row-cols-1 g-3  justify-content-center  ">
                    <div class="border bg-dark service-items-box ">
                        <img
                            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/price-item-visual.svg">
                        平面設計
                    </div>
                    <div class="border bg-dark service-items-box">
                        <img
                            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/price-item-ui.svg">
                        UI 設計
                    </div>
                    <div class="border bg-dark service-items-box">
                        <img
                            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/service-item-html%26css.svg">
                        切版服務
                    </div>
                    <div class="border bg-dark service-items-box">
                        <img
                            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/price-item-front-end.svg">
                        前端開發
                    </div>
                </div>
            </div>
        </div>

        <div class="project-Introduction-serve-img">
            <div class="introduction-of-works-blockDiv">
                <img class="introduction-of-works-title-deco"
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true text-white">
                <span class="introduction-of-works-BigTitle text-white">服務流程</span>
                <img class="introduction-of-works-title-deco text-white"
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true">
            </div>

            <div class="container serviceProcess">
                <div class="">
                    <div class="border bg-gray serviceProcess-flex">
                        <div class="">
                            <span class="serviceProcess-number">1</span>
                        </div>
                        <div class=" serviceProcess-flex2">
                            <span class="serviceProcess-title">初步接洽</span>
                            <span class="serviceProcess-content">透過表單或其他社群軟體與我聯絡</span>
                            <span class="serviceProcess-content">根據難易度與複雜度，後續可能需要電話/線上討論</span>
                        </div>
                    </div>
                    <div class="serviceProcess-icon">
                        <i class="bi bi-arrow-down bi-down"></i>
                    </div>
                </div>
                <div class="">
                    <div class="border bg-gray serviceProcess-flex">
                        <div class="">
                            <span class="serviceProcess-number">2</span>
                        </div>
                        <div class=" serviceProcess-flex2">
                            <span class="serviceProcess-title">需求釐清</span>
                            <span class="serviceProcess-content">透過訪談與問卷，解析客戶需求，並針對痛點給予實際建議</span>
                        </div>
                    </div>
                    <div class="serviceProcess-icon">
                        <i class="bi bi-arrow-down bi-down"></i>
                    </div>
                </div>
                <div class="">
                    <div class="border bg-gray serviceProcess-flex">
                        <div class="">
                            <span class="serviceProcess-number">3</span>
                        </div>
                        <div class=" serviceProcess-flex2">
                            <span class="serviceProcess-title">委託簽約</span>
                            <span class="serviceProcess-content">合約雙方用印後，即正式開始合作</span>
                            <span class="serviceProcess-content">可提供發票或勞務報酬單，須支付 20% 訂金</span>
                        </div>
                    </div>
                    <div class="serviceProcess-icon">
                        <i class="bi bi-arrow-down bi-down"></i>
                    </div>
                </div>
                <div class="">
                    <div class="border bg-gray serviceProcess-flex">
                        <div class="">
                            <span class="serviceProcess-number">4</span>
                        </div>
                        <div class=" serviceProcess-flex2">
                            <span class="serviceProcess-title">版本呈現</span>
                            <span class="serviceProcess-content">根據合約內容進行設計或開發</span>
                        </div>
                    </div>
                    <div class="serviceProcess-icon">
                        <i class="bi bi-arrow-down bi-down"></i>
                    </div>
                </div>
                <div class="">
                    <div class="border bg-gray serviceProcess-flex">
                        <div class="">
                            <span class="serviceProcess-number">5</span>
                        </div>
                        <div class=" serviceProcess-flex2">
                            <span class="serviceProcess-title">來回修正</span>
                            <span class="serviceProcess-content">依據合約規定之修正次數進行，次數計算以 mail 為準</span>
                            <span class="serviceProcess-content"></span>
                        </div>
                    </div>
                    <div class="serviceProcess-icon">
                        <i class="bi bi-arrow-down bi-down"></i>
                    </div>
                </div>
                <div class="">
                    <div class="border bg-gray serviceProcess-flex">
                        <div class="">
                            <span class="serviceProcess-number">6</span>
                        </div>
                        <div class=" serviceProcess-flex2">
                            <span class="serviceProcess-title">終版確認</span>
                            <span class="serviceProcess-content">雙方同意後即為最終版</span>
                        </div>
                    </div>
                    <div class="serviceProcess-icon">
                        <i class="bi bi-arrow-down bi-down"></i>
                    </div>
                </div>
                <div class="">
                    <div class="border bg-gray serviceProcess-flex">
                        <div class="">
                            <span class="serviceProcess-number">7</span>
                        </div>
                        <div class=" serviceProcess-flex2">
                            <span class="serviceProcess-title">結案</span>
                            <span class="serviceProcess-content">客戶簽署驗收單，並於約定日期支付尾款</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <div class="introduction-of-works-blockDiv">
            <img class="introduction-of-works-title-deco"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true">
            <span class="introduction-of-works-BigTitle">價格表</span>
            <img class="introduction-of-works-title-deco"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true">
        </div>


        <div class="album">
            <div class="container ">
                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-4 ">
                    <div class="col">
                        <div class="d-flex justify-content-center">
                            <div class="card-body serviceCost">
                                <img class="icon-img"
                                    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/price-item-visual.svg">
                                <h5>平面設計</h5>
                                <img class="icon-line"
                                    src="https://firebasestorage.googleapis.com/v0/b/homework2-4f72e.appspot.com/o/Line%2046.png?alt=media&token=68f4e7ea-1b46-4df9-b741-d4dd6b6c04d1">
                                <h4>6,000</h4>
                                <span>起</span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="d-flex justify-content-center">
                            <div class="card-body serviceCost">
                                <img class="icon-img"
                                    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/price-item-ui.svg">
                                <h5>UI 設計 </h5>
                                <img class="icon-line"
                                    src="https://firebasestorage.googleapis.com/v0/b/homework2-4f72e.appspot.com/o/Line%2046.png?alt=media&token=68f4e7ea-1b46-4df9-b741-d4dd6b6c04d1">
                                <h4>15,000</h4>
                                <span>起</span>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <div class="d-flex justify-content-center">
                            <div class="card-body serviceCost">
                                <img class="icon-img"
                                    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/price-item-front-end.svg">
                                <h5>前端開發</h5>
                                <img class="icon-line"
                                    src="https://firebasestorage.googleapis.com/v0/b/homework2-4f72e.appspot.com/o/Line%2046.png?alt=media&token=68f4e7ea-1b46-4df9-b741-d4dd6b6c04d1">
                                <h4>22,000</h4>
                                <span>起</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="bg-light" style="margin-top:120px">
            <div class="introduction-of-works-blockDiv">
                <img class="introduction-of-works-title-deco"
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true">
                <span class="introduction-of-works-BigTitle">客戶案例</span>
                <img class="introduction-of-works-title-deco"
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true">
            </div>

            <div class="album customer-position ">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3 ">
                        <div class="col">
                            <div class="card">
                                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image4.png?raw=true"
                                    class="card-img-top">
                                <div class="card-body">
                                    <h4>美美美早餐店 POS 機 UI Design</h4>
                                    <span>訂單送單一目瞭然，自動報表分析好輕鬆</span>
                                    <div class="tag-content ">
                                        <span class="hashtag">UI 設計</span>
                                        <span class="hashtag">前端開發</span>
                                        <span class="hashtag">Wix</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image6.png?raw=true"
                                    class="card-img-top ">
                                <div class="card-body">
                                    <h4>巧克巧克形象官網設計</h4>
                                    <span>三步驟完成訂票，電腦手機都支援</span>
                                    <div class="tag-content">
                                        <span class="hashtag">UI設計</span>
                                        <span class="hashtag">設計系統</span>
                                        <span class="hashtag">網路電商</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image5.png?raw=true"
                                    class="card-img-top ">
                                <div class="card-body">
                                    <h4>電影院訂票系統</h4>
                                    <span>三步驟完成訂票，電腦手機都支援</span>
                                    <div class="tag-content">
                                        <span class="hashtag">前端開發</span>
                                        <span class="hashtag">後端支援</span>
                                        <span class="hashtag">Vue</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image7.png?raw=true"
                                    class="card-img-top ">
                                <div class="card-body">
                                    <h4>2023 餉茶坊飲料旗艦店活動官網設計</h4>
                                    <span>主打水果主題，冰鎮夏天暑氣</span>
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

        <div class="introduction-of-works-blockDiv">
            <img class="introduction-of-works-title-deco"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true">
            <span class="introduction-of-works-BigTitle">常見問題</span>
            <img class="introduction-of-works-title-deco"
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true">
        </div>

        <div class="album qsbox-position">
            <div class="container ">
                <div
                    class="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3 d-flex justify-content-center align-items-center">
                    <div class="col qsbox">
                        <div class="">
                            <div class="card-body">
                                <span class="qs-title">時程很趕的話可以加快作業嗎？</span>
                                <br>
                                <span class="qs-content">每提早一天，只要支付總報價的 5%，我們即會視為急件為您趕工！</span>
                            </div>
                        </div>
                    </div>
                    <div class="col qsbox">
                        <div class="">
                            <div class="card-body">
                                <span class="qs-title">白天可以開會討論嗎</span>
                                <br>
                                <span class="qs-content">每週一三五的白天，可以約定開會時間！</span>
                            </div>
                        </div>
                    </div>
                    <div class="col qsbox">
                        <div class="">
                            <div class="card-body">
                                <span class="qs-title">有實際開發的網站可以參考嗎？</span>
                                <br>
                                <span class="qs-content">請填寫表單或來信索取，部分合作有簽保密協定，無法於網路上公開喔。</span>
                            </div>
                        </div>
                    </div>
                    <div class="col qsbox">
                        <div class="">
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




        <div class="anypage-footer-img" id="callme">
            <div class="container">
                <footer class="anypage-footer">
                    <div class="anypage-footer-box1">
                        <img class="anypage-footer-box-Noel"
                            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/logo.svg">
                        <span class="anypage-footer-box-content">若有數位產品設計和開發相關問題</span>
                        <span class="anypage-footer-box-content">歡迎填寫表單，或直接與我聯絡！</span>
                        <span class="anypage-footer-box-gmail">service@hexschool.com</span>
                    </div>
                    <div class="anypage-footer-box2">
                        <a class="text-muted" href="#/serve">
                            <button type="button" class="btn btn-outline-dark anypage-footer-box-Button active"><img
                                    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/list.svg">填寫表單
                            </button>
                        </a>

                        <a class="text-muted" href="#/serve">
                            <button type="button" class="btn btn-outline-dark anypage-footer-box-Button"><img
                                    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/instagram.svg">hexschool_demo
                            </button>
                        </a>

                        <a class="text-muted" href="#/serve">
                            <button type="button" class="btn btn-outline-dark anypage-footer-box-Button">
                                <img
                                    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/facebook.svg">hexschoolTW
                            </button>
                        </a>

                    </div>
                </footer>
            </div>
        </div>
    </div>
  
  
  `,
};
