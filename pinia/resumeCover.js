export default {
  data() {
    return {
      isCarouselInitialized: false,
    };
  },
  template: ` 

  <nav class="container  container_text navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
      <a class="navbar-brand " href="#"><img class="navbar_img" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/logo.svg"></a>
      <button class="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ms-auto  mb-md-0">
              <li class="nav-item " >
                  <a href="#" class="nav-link " aria-current="page">
                      <span class="navbar_span nav-font ">首頁</span>
                      <span class="nav-box1"></span>
                                <span class="nav-box2"></span>
                                <span class="nav-box3"></span>
                                <span class="nav-box4"></span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#/work" class="nav-link" aria-current="page">
                      <span class="navbar_span nav-font ">作品集</span>
                      <span class="nav-box1"></span>
                                <span class="nav-box2"></span>
                                <span class="nav-box3"></span>
                                <span class="nav-box4"></span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#/serve" class="nav-link" aria-current="page">

                      <span class="navbar_span nav-font ">服務項目</span>
                      <span class="nav-box1"></span>
                                <span class="nav-box2"></span>
                                <span class="nav-box3"></span>
                                <span class="nav-box4"></span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#/blog" class="nav-link anchor" aria-current="page">

                      <span class="navbar_span nav-font ">部落格</span>
                      <span class="nav-box1"></span>
                                <span class="nav-box2"></span>
                                <span class="nav-box3"></span>
                                <span class="nav-box4"></span>
                  </a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link anchor " aria-current="page">

                      <span class="navbar_span nav-font " >聯絡我</span>
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



<div class="row featurette">
  <div class="col-md-5 title">
      <h2 class="featurette-heading">Hi！我是 Noel</h2>
      <p class="title-p">具有 10 年經驗的 資深 UI 設計師 兼 前端工程師<br></p>
      <span class="title-span">技術雙修並行，熱衷於優化使用者的網頁體驗</span>
      <span class="title-span2" >WEB DEVELOPMENT / BRANDING / UI / UX / APP DESIGN</span>
      <div class="title-icon">
          <a href=""><i class="bi bi-instagram icon"></i></a>
          <a href=""><i
                  class="bi bi-facebook icon"></i></a>
          <a href=""><i class="bi bi-youtube icon"></i></a  >
      </div>
  </div>
  <div class="col-md-7 ">
      <img src="https://firebasestorage.googleapis.com/v0/b/homework2-4f72e.appspot.com/o/hero-lg.png?alt=media&token=9f49926b-f44a-4ac8-8547-cb9cc4379510"
          class="img-fluid title-img">
  </div>
</div>




<h1 class="text-center project-Introduction-title">作品介紹</h1>



<div class="project-Introduction-perfume-img">
  <div class="position-relative">
      <div class="bg-light bg-opacity-50 box">
          <h2 class="box-title">星際旅行訂票平台</h2>
          <p class="box-content">悠遊宇宙的夢想，從這裡開始實現</p>
          <div class="box-bigtag border-bottom ps-2">
              <span class="box-tag">網頁設計</span>
              <span class="box-tag">響應式設計</span>
              <span class="box-tag">Bootstrap</span>
          </div>
          <div class="d-flex justify-content-center box-button-top">
              <a class="btn btn-dark box-button" href=""
                  role="button">
                  完整內容
                  <i class="bi bi-arrow-right bi-right"></i>
              </a>
          </div>
      </div>
  </div>
</div>



<div class="project-Introduction-drink-img">
  <div class="position-relative">
      <div class=" bg-light bg-opacity-50  box-drink">
          <h2 class="box-title">理財APP</h2>
          <p class="box-content">連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
          <div class="box-bigtag border-bottom ps-2">
              <span class="box-tag">APP設計</span>
              <span class="box-tag">iOS</span>
              <span class="box-tag">React</span>
          </div>
          <div class="d-flex justify-content-center box-button-top">
              <a class="btn btn-dark box-button" href=" "
                  role="button">
                  完整內容
                  <i class="bi bi-arrow-right bi-right"></i>
              </a>
          </div>
      </div>
  </div>
</div>

<div class="project-Introduction-game-img">
  <div class="position-relative">
      <div class="position-absolute  bg-light bg-opacity-50 box">
          <h2 class="box-title">醫美診所官網</h2>
          <p class="box-content">永保青春的秘密，從粹究開始</p>
          <div class="box-bigtag border-bottom ps-2">
              <span class="box-tag">網頁設計</span>
              <span class="box-tag">響應式設計</span>
              <span class="box-tag">ＷordPress</span>
          </div>
          <div class="d-flex justify-content-center box-button-top">
              <a class="btn btn-dark box-button" href="https://github.com/chenyu-0721/monster.github.io"
                  role="button">
                  完整內容
                  <i class="bi bi-arrow-right bi-right"></i>
              </a>
          </div>
      </div>
  </div>
</div>

<div class="bg-light">

  <div id="serve">
      <h1 class="text-center project-Introduction-title">服務項目</h1>
  </div>
  <div class="container ">
      <div class="row row-cols-1 g-3  justify-content-center  ">
          <div class="border bg-dark text-white serviceContent-box ">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/price-item-visual.svg">
              平面設計
          </div>
          <div class="border bg-dark text-white serviceContent-box">
           <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/price-item-ui.svg">
              UI 設計
          </div>
          <div class="border bg-dark text-white serviceContent-box">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/service-item-html%26css.svg">
              切版服務
          </div>
          <div class="border bg-dark text-white serviceContent-box">
          <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/price-item-front-end.svg">
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



<h1 class="text-center project-Introduction-title">精選文章</h1>


<div class="album py-5 ">
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
            <div class="col">
                <div class="shadow-sm">
                    <img class=" card-img-top"
                        src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image1.png?raw=true" style="
                        padding-right: 5px;
                        padding-left: 5px;
                    ">
                    <div class="card-body">
                        <span class="featured-content"><a href="">Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)</a></span>
                        <div class="featured-tag-pd">
                            <span class="featured-tag">UI/UX 新知</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="shadow-sm">
                    <img class="card-img-top"
                        src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image2.png?raw=true" style="padding-right: 5px;padding-left: 5px;">
                    <div class="card-body">
                        <span class="featured-content"><a href="">給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)</a></span>
                        <div class="featured-tag-pd">
                            <span class="featured-tag">UI/UX 新知</span>
                        </div>
                    </div>
                </div>
            </div>
        <div class="col">
            <div class="shadow-sm">
                <img class="card-img-top"
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image3.png?raw=true" style="padding-right: 5px;padding-left: 5px;">
                <div class="card-body">
                    <span class="featured-content"><a href="">給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)</a></span>
                    <div class="featured-tag-pd">
                        <span class="featured-tag">UI/UX 新知</span>
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
              <h1 class=""><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/logo.svg"><br><span class="footer-content">若有數位產品設計和開發相關問題<br>歡迎填寫表單，或直接與我聯絡！<br><span
                          class="footer-tag">service@hexschool.com</span>
              </h1>
          </div>

          <ul class="footer-nav-li col-md-4 justify-content-end list-unstyled d-flex flex-direction-column ">
              <li class="ms-3"><a class="text-muted"
                      href="https://www.facebook.com/profile.php?id=100000503690781&locale=zh_TW">
                      <div><button type="button" class="btn btn-outline-dark footer-button"><i
                                  class="bi bi-book footer-icon"></i>填寫表單</button>
                  </a></li>
              <li class="ms-3"><a class="text-muted" href=""><button
                          type="button" class="btn btn-outline-dark footer-button"><i
                              class="bi bi-instagram footer-icon"></i>hexschool_demo</button></a></li>
              <li class="ms-3"><a class="text-muted" href=""><button
                          type="button" class="btn btn-outline-dark footer-button"><i
                              class="bi bi-facebook footer-icon"></i>hexschoolTW</button></a></li>
          </ul>
      </footer>
  </div>
</div>



<div class="goTop">
  <a href="#" class="goTopBtn jq-goTop">
      <i class="bi bi-arrow-up-circle-fill"></i>
  </a>
</div>



  `,
  mounted() {
    $(".owl-carousel").owlCarousel({
      loop: true, // 循環播放
      margin: 10, // 外距 10px
      nav: false, // 箭頭
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1, // 螢幕大小為 0~600 顯示 1 個項目
        },
        700: {
          items: 2, // 螢幕大小為 600~1000 顯示 3 個項目
        },
        1000: {
          items: 3, // 螢幕大小為 600~1000 顯示 3 個項目
        },
      },
    });

    $(".navbar-nav .nav-item .anchor").on("click", function (event) {
      event.preventDefault();

      var targetAnchor = $(this).attr("href");
      var targetPosition = $(targetAnchor).offset().top;

      // 使用动画效果滚动到目标位置
      $("html, body").animate({
        scrollTop: targetPosition,
      });
    });

    $(function () {
      $(document).on("click", ".jq-adClose", function (event) {
        event.preventDefault();
        $(".adBox").fadeOut();
      });

      $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
          if ($(".goTop").hasClass("hide")) {
            $(".goTop").toggleClass("hide");
          }
        } else {
          $(".goTop").addClass("hide");
        }
      });

      $(document).on("click", ".jq-goTop", function (e) {
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          600
        );
      });
    });
  },
};
