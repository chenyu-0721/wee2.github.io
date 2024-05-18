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
                      <span class="nav-hover-upperLeft-StopPage"></span>
                      <span class="nav-hover-upperRight-StopPage"></span>
                      <span class="nav-hover-lowerRight-StopPage"></span>
                      <span class="nav-hover-lowerLeft-StopPage"></span>
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

<div class="works-img">
  <section class="container text-center">
      <div class="row ">
          <div class="col-lg-9 col-md-7 mx-auto pb-5">
              <h1 class="works-img-Firsttitle">讓使用者在觀賞與使用的旅程中，發現設計的價值</h1>
              <p class="works-img-Secondtitle">而我在設計與開發的過程中，看見自己的價值.</p>
          </div>
          <div class="d-flex justify-content-center">
              <div class=" col-lg-3 works-2B2C-box-left">
                  <h1 class="fw-light works-2B2C-experience">2B經驗</h1>
                  <p class="lead mx-auto works-2B2C-content">內部監控系統、庫存系統、採購系統、行銷整合系統
                  </p>
              </div>
              <div class=" col-lg-3 works-2B2C-box-right ">
                  <h1 class="fw-light works-2B2C-experience">2C經驗</h1>
                  <p class=" lead  mx-auto works-2B2C-content">
                      跨國美妝保養電商、個人品牌網站、醫美網站、電子商務</p>
              </div>
          </div>
      </div>
  </section>
</div>




<div class="album banner-position">
  <div class="container">
      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3 ">
          <div class="col banner-modal-hover" data-bs-toggle="modal" data-bs-target="#modal1">
              <div class="card">
                  <img src="https://firebasestorage.googleapis.com/v0/b/homework2-4f72e.appspot.com/o/%E6%98%9F%E9%9A%9B.png?alt=media&token=bc711aeb-0065-48bc-9694-fdd93dc6ea35"
                      class="card-img-top">
                  <div class="card-body">
                      <h4>星際旅行訂票平台</h4>
                      <span>悠遊宇宙的夢想，從這裡開始實現</span>
                      <div class="tag-content ">
                          <span class="hashtag">網頁設計</span>
                          <span class="hashtag">響應式設計</span>
                          <span class="hashtag">Bootstrap</span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col banner-modal-hover" data-bs-toggle="modal" data-bs-target="#modal2">
              <div class="card">
                  <img src="https://firebasestorage.googleapis.com/v0/b/homework2-4f72e.appspot.com/o/%E7%90%86%E8%B2%A1.png?alt=media&token=8b0f8096-92ec-47bf-b79a-00932ed23feb"
                      class="card-img-top ">
                  <div class="card-body">
                      <h4>理財App</h4>
                      <span>連動帳戶與行動支付，讓 AI 提供您最好的理財建議</span>
                      <div class="tag-content">
                          <span class="hashtag">APP設計</span>
                          <span class="hashtag">iOS</span>
                          <span class="hashtag">React</span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col banner-modal-hover" data-bs-toggle="modal" data-bs-target="#modal3">
              <div class="card">
                  <img src="https://firebasestorage.googleapis.com/v0/b/homework2-4f72e.appspot.com/o/%E8%A8%BA%E6%89%80.png?alt=media&token=47181666-dca5-4d5b-b76a-9d89c8ccac26"
                      class="card-img-top ">
                  <div class="card-body">
                      <h4>醫美診所官網</h4>
                      <span>永保青春的秘密，從粹究開始</span>
                      <div class="tag-content">
                          <span class="hashtag">網頁設計</span>
                          <span class="hashtag">響應式設計</span>
                          <span class="hashtag">ＷordPress</span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col banner-modal-hover" data-bs-toggle="modal" data-bs-target="#modal4">
              <div class="card">
                  <img src="https://firebasestorage.googleapis.com/v0/b/homework2-4f72e.appspot.com/o/%E7%BE%8E%E7%BE%8E%E7%BE%8E%E6%97%A9%E9%A4%90.png?alt=media&token=f5d47a52-b12d-43e0-b2e4-37ad0f1e054a"
                      class="card-img-top ">
                  <div class="card-body">
                      <h4>美美美早餐店 POS 機 UI Design</h4>
                      <span>訂單送單一目瞭然，自動報表分析好輕鬆</span>
                      <div class="tag-content">
                          <span class="hashtag">UI 設計</span>
                          <span class="hashtag">前端開發</span>
                          <span class="hashtag">Wix</span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col banner-modal-hover" data-bs-toggle="modal" data-bs-target="#modal5">
              <div class="card">
                  <img src="https://firebasestorage.googleapis.com/v0/b/homework2-4f72e.appspot.com/o/%E9%9B%BB%E5%BD%B1%E9%99%A2.png?alt=media&token=08fd0c2e-6788-44f8-a1ff-4dff8da4a847"
                      class="card-img-top">
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
          <div class="col banner-modal-hover" data-bs-toggle="modal" data-bs-target="#modal6">
              <div class="card">
                  <img src="https://firebasestorage.googleapis.com/v0/b/homework2-4f72e.appspot.com/o/%E5%B7%A7%E5%85%8B%E5%B7%A7%E5%85%8B.png?alt=media&token=43d4255d-5747-45d7-aadb-1f3b8eee8f96"
                      class="card-img-top">
                  <div class="card-body">
                      <h4>巧克巧克形象官網設計</h4>
                      <span>三步驟完成訂票，電腦手機都支援</span>
                      <div class="tag-content">
                          <span class="hashtag">UI設計</span>
                          <span class="hashtag">設計系統</span>
                          <span class="hashtag">網路電商 </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>


<div class="pagination-position">
  <div class="container">
      <div aria-label="Page navigation">
          <ul class="pagination">
              <li class="page-item"><a class="page-link bg-dark text-white" href="#/work">1</a></li>
              <li class="page-item"><a class="page-link text-dark" href="#/work">2</a></li>
              <li class="page-item"><a class="page-link text-dark" href="#/work">3</a></li>
          </ul>
      </div>
  </div>
</div>

<div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
      <div class="modal-content">
          <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <div class="project-modal-title">
                  <h4>星際旅行訂票平台</h4>
                  <span>悠遊宇宙的夢想，從這裡開始實現</span>
              </div>
              <div class="container">
                  <div class="row">
                      <div class="col-lg-7 modal-star-travel-position ">
                          <span class="modal-star-travel">STAR TRAVEL 為 KK
                              公司宇宙旅行的購票網站。<br>主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建<br>置完畢，將再擴增目的地土星和金星。</span>
                      </div>

                      <div class="col-lg-5 modal-star-travel-position2-active ">
                          <span class="modal-star-travel2">設計原則：宇宙旅行、深色背景、強烈視覺效果</span>
                          <span class="modal-star-travel2">開發方式：Bootstrap、Javascript、RWD</span>
                      </div>

                      <div class="col-lg-5 modal-star-travel-position2-media">
                          <span class="modal-star-travel2">設計原則</span>
                          <span class="modal-star-travel2">宇宙旅行、深色背景、強烈視覺效果</span>
                          <span class="modal-star-travel2-top">開發方式</span>
                          <span class="modal-star-travel2">Bootstrap、Javascript、RWD</span>
                      </div>
                  </div>
              </div>
              <div class="bg-light model-content">
                  <div class="">
                      <div class="model-img">
                          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/modal-image1.png?raw=true"
                              class="img-fluid  enlargeable" alt="">
                      </div>
                      <div class="project-modal-title">
                          <h4>主視覺</h4>
                          <span>可直接設定日期、起迄星球、張數，快速查詢可購買的票券。</span>
                      </div>
                  </div>
                  <div>
                      <div class="">
                          <div class="model-img2">
                              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/modal-image2.png?raw=true"
                                  class="img-fluid enlargeable" alt="">
                          </div>
                      </div>
                      <div class="project-modal-title">
                          <h4>推薦查詢</h4>
                          <span>給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。</span>
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
              <a class="text-muted" href="#/work">
                  <button type="button" class="btn btn-outline-dark anypage-footer-box-Button active"><img
                          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/list.svg">填寫表單
                  </button>
              </a>

              <a class="text-muted" href="#/work">
                  <button type="button" class="btn btn-outline-dark anypage-footer-box-Button"><img
                          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/instagram.svg">hexschool_demo
                  </button>
              </a>

              <a class="text-muted" href="#/work">
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
  mounted() {
    $(document).ready(function () {
      $(".enlargeable").on("click", function () {
        var src = $(this).attr("src");
        var enlargedImage = $("<img>")
          .attr("src", src)
          .addClass("enlarged-image");
        var enlargedContainer = $("<div>")
          .addClass("enlarged-container")
          .append(enlargedImage);
        $("body").append(enlargedContainer);

        enlargedContainer.on("click", function () {
          $(this).remove();
        });
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
    });
  },
};
