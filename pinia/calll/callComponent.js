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
                  <a href="#/callme" class="nav-link " aria-current="page">
                      <span class="resume-cover-nav-li">聯絡我</span>
                      <span class="nav-hover-upperLeft-StopPage"></span>
                      <span class="nav-hover-upperRight-StopPage"></span>
                      <span class="nav-hover-lowerRight-StopPage"></span>
                      <span class="nav-hover-lowerLeft-StopPage"></span>
                  </a>
              </li>
          </ul>
      </div>
  </div>
</nav>
</div>


<div>
  <img class="callmeImg"
      src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
</div>





<div class="introduction-of-works-blockDiv">
  <img class="introduction-of-works-title-deco"
      src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true">
  <span class="introduction-of-works-BigTitle">填寫表單</span>
  <img class="introduction-of-works-title-deco"
      src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true">
</div>




<div class="d-flex justify-content-center" style="padding-bottom:120px">
  <div class="row g-5 container">
      <div class="col-12">
          <form class="needs-validation" novalidate>
              <div class="row g-3">
                  <div class="col-sm-6">
                      <label for="firstName" class="form-label">姓</label>
                      <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
                      <div class="invalid-feedback">
                          填寫錯誤
                      </div>
                  </div>

                  <div class="col-sm-6">
                      <label for="lastName" class="form-label">名</label>
                      <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
                      <div class="invalid-feedback">
                          填寫錯誤
                      </div>
                  </div>

                  <div class="col-12">
                      <label for="email" class="form-label">gmail</label>
                      <input type="email" class="form-control" id="email" placeholder="you@example.com">
                      <div class="invalid-feedback">
                          請填寫正確的格式和內容
                      </div>
                  </div>

                  <div class="col-12">
                      <label for="address" class="form-label">地址</label>
                      <input type="text" class="form-control" id="address" placeholder="xx街xx號xx樓" required>
                      <div class="invalid-feedback">
                          請填寫正確的地址
                      </div>
                  </div>

                  <div class="col-md-6">
                      <label for="country" class="form-label">國家</label>
                      <select class="form-select" id="country" required>
                          <option value="">選擇</option>
                          <option>台灣</option>
                          <option>美國</option>
                          <option>日本</option>
                          <option>澳洲</option>
                          <option>加拿大</option>
                      </select>
                      <div class="invalid-feedback">
                          此處不可空白
                      </div>
                  </div>

                  <div class="col-md-6">
                      <label for="state" class="form-label">地區</label>
                      <select class="form-select" id="state" required>
                          <option value="">選擇</option>
                          <option>淡水區</option>
                          <option>北投區</option>
                          <option>東區</option>
                          <option>北區</option>
                          <option>南區</option>
                          <option>西區</option>
                      </select>
                      <div class="invalid-feedback">
                          此處不可空白
                      </div>
                  </div>
              </div>
          </form>
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
