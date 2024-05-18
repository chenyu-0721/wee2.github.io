export default {
  data() {
    return {
      isCarouselInitialized: false,
    };
  },
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
                      <span class="nav-hover-upperLeft-StopPage"></span>
                      <span class="nav-hover-upperRight-StopPage"></span>
                      <span class="nav-hover-lowerRight-StopPage"></span>
                      <span class="nav-hover-lowerLeft-StopPage"></span>
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
                      <span class="nav-hover-upperLeft"></span>
                      <span class="nav-hover-upperRight"></span>
                      <span class="nav-hover-lowerRight"></span>
                      <span class="nav-hover-lowerLeft"></span>
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

<div class="row featurette">
  <div class="resume-aboutMe-col">
      <h2 class="resume-about-title">Hi！我是 Noel</h2>
      <span class="resume-about-content">具有 10 年經驗的 資深 UI 設計師 兼 前端工程師<br></span>
      <span class="resume-about-content">技術雙修並行，熱衷於優化使用者的網頁體驗</span>
      <span class="resume-about-remark">WEB DEVELOPMENT / BRANDING / UI / UX / APP DESIGN</span>
      <div class="resume-about-icon-padding ">
          <a href=""><i class="bi bi-instagram resume-about-title-icon"></i></a>
          <a href=""><i class="bi bi-facebook resume-about-title-icon"></i></a>
          <a href=""><i class="bi bi-youtube resume-about-title-icon"></i></a>
      </div>
  </div>
  <div class="resume-aboutMeImg-col">
      <img src="https://firebasestorage.googleapis.com/v0/b/homework2-4f72e.appspot.com/o/hero-lg.png?alt=media&token=9f49926b-f44a-4ac8-8547-cb9cc4379510"
          class="img-fluid resume-about-Img">
  </div>
</div>




<div class="introduction-of-works-blockDiv">
  <img class="introduction-of-works-title-deco"
      src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true">
  <span class="introduction-of-works-BigTitle">作品介紹</span>
  <img class="introduction-of-works-title-deco"
      src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true">
</div>



<div class="introduction-of-works-interstellar-travel-background">
  <div class="position-relative">
      <div class="introduction-of-works-interstellar-travel-textBox">
          <div class="introduction-of-works-interstellar-travel-firstBox">
              <h2 class="introduction-of-works-interstellar-travel-title">星際旅行訂票平台</h2>
              <p class="introduction-of-works-interstellar-travel-content">悠遊宇宙的夢想，從這裡開始實現</p>
              <span class="introduction-of-works-interstellar-travel-hashTag">網頁設計</span>
              <span class="introduction-of-works-interstellar-travel-hashTag">響應式設計</span>
              <span class="introduction-of-works-interstellar-travel-hashTag">Bootstrap</span>
              <hr class="introduction-of-works-interstellar-travel-hr">
          </div>

          <div class="introduction-of-works-interstellar-travel-button-box">
              <a class="btn btn-dark introduction-of-works-interstellar-travel-button" href="" role="button">
                  完整內容
                  <i class="bi bi-arrow-right introduction-of-works-interstellar-travel-rightIcon"></i>
              </a>
          </div>
      </div>
  </div>
</div>




<div class="marketing introduction-of-works-interstellar-travel-sm">
  <div class="row featurette">
      <div class="col-md-7 order-md-2 text-center">
          <div class="introduction-of-works-interstellar-travel-firstBox">
              <h2 class="introduction-of-works-interstellar-travel-title">星際旅行訂票平台</h2>
              <p class="introduction-of-works-interstellar-travel-content">悠遊宇宙的夢想，從這裡開始實現</p>
              <span class="introduction-of-works-interstellar-travel-hashTag">網頁設計</span>
              <span class="introduction-of-works-interstellar-travel-hashTag">響應式設計</span>
              <span class="introduction-of-works-interstellar-travel-hashTag">Bootstrap</span>
          </div>
          <div class="introduction-of-works-interstellar-travel-button-box">
              <a class="btn btn-dark introduction-of-works-interstellar-travel-button" href="" role="button">
                  完整內容
                  <i class="bi bi-arrow-right introduction-of-works-interstellar-travel-rightIcon"></i>
              </a>
          </div>
      </div>
      <div class="col-md-5 order-md-1">
          <img src="https://firebasestorage.googleapis.com/v0/b/homework2-4f72e.appspot.com/o/%E6%98%9F%E9%9A%9B%E6%97%85%E8%A1%8C.png?alt=media&token=948984b9-6ad5-4eae-b040-bf487b9ed3b4"
              class="img-fluid " style="height:350px">
      </div>
  </div>
</div>



<div class="financial-management-Img">
  <div class="position-relative">
      <div class="financial-management-textBox">
          <div class="financial-management-firstBox">
              <h2 class="financial-management-title">理財APP</h2>
              <p class="financial-management-content">連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
              <span class="financial-management-hashTag">APP設計</span>
              <span class="financial-management-hashTag">iOS</span>
              <span class="financial-management-hashTag">React</span>
              <hr class="financial-management-hr" />
          </div>
          <div class="financial-management-button-box">
              <a class="btn btn-dark financial-management-button" href=" " role="button">
                  完整內容
                  <i class="bi bi-arrow-right financial-management-rightIcon"></i>
              </a>
          </div>
      </div>
  </div>
</div>



<div class="marketing financial-management-Img-sm">
  <div class="row featurette">
      <div class="col-md-7 order-md-2 text-center">
          <div class="financial-management-firstBox">
              <h2 class="financial-management-title">理財APP</h2>
              <p class="financial-management-content">連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
              <span class="financial-management-hashTag">APP設計</span>
              <span class="financial-management-hashTag">iOS</span>
              <span class="financial-management-hashTag">React</span>
          </div>
          <div class="financial-management-button-box">
              <a class="btn btn-dark financial-management-button" href=" " role="button">
                  完整內容
                  <i class="bi bi-arrow-right financial-management-rightIcon"></i>
              </a>
          </div>
      </div>
      <div class="col-md-5 order-md-1">
          <img src="https://firebasestorage.googleapis.com/v0/b/homework2-4f72e.appspot.com/o/%E7%90%86%E8%B2%A1app.png?alt=media&token=738031c8-1df3-4369-8a4d-fba3912abd86"
              class="img-fluid " style="height:350px">
      </div>
  </div>
</div>

<div class="medical-beauty-clinic-background">
  <div class="position-relative">
      <div class="medical-beauty-clinic-textBox">
          <div class="medical-beauty-clinic-firstBox">
              <h2 class="medical-beauty-clinic-title">醫美診所官網</h2>
              <p class="medical-beauty-clinic-content">永保青春的秘密，從粹究開始</p>
              <span class="medical-beauty-clinic-hashTag">網頁設計</span>
              <span class="medical-beauty-clinic-hashTag">響應式設計</span>
              <span class="medical-beauty-clinic-hashTag">ＷordPress</span>
          </div>
          <div class="medical-beauty-clinic-button-box">
              <a class="btn btn-dark medical-beauty-clinic-button" href="" role="button">
                  完整內容
                  <i class="bi bi-arrow-right medical-beauty-clinic-rightIcon"></i>
              </a>
          </div>
      </div>
  </div>
</div>





<div class="marketing medical-beauty-clinic-sm">
  <div class="row featurette">
      <div class="col-md-7 order-md-2 text-center">
          <div class="medical-beauty-clinic-firstBox">
              <h2 class="medical-beauty-clinic-title">醫美診所官網</h2>
              <p class="medical-beauty-clinic-content">永保青春的秘密，從粹究開始</p>
              <span class="medical-beauty-clinic-hashTag">網頁設計</span>
              <span class="medical-beauty-clinic-hashTag">響應式設計</span>
              <span class="medical-beauty-clinic-hashTag">ＷordPress</span>
          </div>
          <div class="medical-beauty-clinic-button-box">
              <a class="btn btn-dark medical-beauty-clinic-button" href="" role="button">
                  完整內容
                  <i class="bi bi-arrow-right medical-beauty-clinic-rightIcon"></i>
              </a>
          </div>
      </div>
      <div class="col-md-5 order-md-1">
          <img src="https://firebasestorage.googleapis.com/v0/b/homework2-4f72e.appspot.com/o/%E7%B2%B9%E7%A9%B6%E7%BE%8E%E5%AD%B8.png?alt=media&token=ee5ea9f1-6f78-480c-a72b-519c9eb9b66f"
              class="img-fluid " style="height:350px">
      </div>
  </div>
</div>


<div class="service-items-img">
  <div class="introduction-of-works-blockDiv">
      <img class="introduction-of-works-title-deco"
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true">
      <span class="introduction-of-works-BigTitle">服務項目</span>
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
  <h1 class="service-items-title">想要合作或瞭解更多？</h1>
  <div class="service-items-button-box">
      <a class="btn btn-dark service-items-button" href="" role="button">
          詳細內容與合作流程
          <i class="bi bi-arrow-right service-items-rightIcon"></i>
      </a>
  </div>
</div>



<div class="introduction-of-works-blockDiv">
  <img class="introduction-of-works-title-deco"
      src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true">
  <span class="introduction-of-works-BigTitle">精選文章</span>
  <img class="introduction-of-works-title-deco"
      src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true">
</div>

<div class="album py-5  ">
  <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3  ">
          <div class="col">
              <div class="card">
                  <img class="featured-articlescard-img-top"
                      src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image1.png?raw=true">
                  <div class="card-body">
                      <span class="featured-articlescard-img-content"><a href="">Vision Pro 登場！Vision Pro
                              UI/UX 設計重點大公開
                              (上)</a></span>
                      <div class="featured-articlescard-img-hashtag-box">
                          <span class="featured-articlescard-img-hashtag">UI/UX 新知</span>
                          <span class="featured-articlescard-img-time ">2024/02/10</span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col">
              <div class="card">
                  <img class="featured-articlescard-img-top"
                      src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image2.png?raw=true">
                  <div class="card-body">
                      <span class="featured-articlescard-img-content"><a href="">給設計師和工程師的 Figma-Dev Mode
                              開發模式使用指南 (下)</a></span>
                      <div class="featured-articlescard-img-hashtag-box">
                          <span class="featured-articlescard-img-hashtag">UI/UX 新知</span>
                          <span class="featured-articlescard-img-time ">2023/11/20</span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col">
              <div class="card">
                  <img class="featured-articlescard-img-top"
                      src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image3.png?raw=true">
                  <div class="card-body">
                      <span class="featured-articlescard-img-content"><a href="">給設計師和工程師的 Figma-Dev Mode
                              開發模式使用指南 (上) </a></span>
                      <div class="featured-articlescard-img-hashtag-box">
                          <span class="featured-articlescard-img-hashtag">UI/UX 新知</span>
                          <span class="featured-articlescard-img-time ">2023/10/18</span>
                      </div>
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
              <a class="text-muted" href="">
                  <button type="button" class="btn btn-outline-dark anypage-footer-box-Button active"><img
                          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/list.svg">填寫表單
                  </button>
              </a>

              <a class="text-muted" href="">
                  <button type="button" class="btn btn-outline-dark anypage-footer-box-Button"><img
                          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/instagram.svg">hexschool_demo
                  </button>
              </a>

              <a class="text-muted" href="">
                  <button type="button" class="btn btn-outline-dark anypage-footer-box-Button">
                      <img
                          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/facebook.svg">hexschoolTW
                  </button>
              </a>

          </div>
      </footer>
  </div>
</div>










 






  `,
};
