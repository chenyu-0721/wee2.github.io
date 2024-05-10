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
                    <a href="#blog" class="nav-link anchor" aria-current="page">

                        <span class="navbar_span nav-font ">部落格</span>
                        <span class="nav-box1-work"></span>
                        <span class="nav-box2-work"></span>
                        <span class="nav-box3-work"></span>
                        <span class="nav-box4-work"></span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link anchor " aria-current="page">

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

<h1 class="text-center project-Introduction-title">部落格</h1>

<div class="container blog">
    <div class=" g-3 fixed col-lg-10">
        <div class="blog-flex">
            <div class="col-lg-4.5">
                <img class="blog-img" style="width: 397px; height: 253px;"
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image1.png?raw=true">
            </div>
            <div class="ms-3 col-md-7 blog-flex2">
                <span class="blog-content pt-3">2024/02/10 <span class="hashtag">UI/UX 新知</span></span>

                <span class="blog-title ">Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)</span>
                <span class="blog-content pt-3">Vision Pro 終於在 2024 年 2 月正式開賣，距離正式發表的 2023
                    年
                    6 月，已有半年時間。
                    這半年間，各種質疑聲不斷冒出，例如「太貴了，這是做給投資家看的產品，不能真的大量生產」、「續航力明顯不足，電池太重，不利於隨身攜帶使用」、「隔絕現實世界，會更加深世代或人際關係的隔閡」。</span>
            </div>
        </div>
        <div class="blog-flex pt-5">
            <div class="col-lg-4.5">
                <img class="blog-img" style="width: 397px; height: 253px;"
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image2.png?raw=true">
            </div>
            <div class="ms-3 col-md-7 blog-flex2">
                <span class="blog-content pt-3">2023/11/20<span class="hashtag">UI/UX 新知</span></span>

                <span class="blog-title">給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)</span>
                <span class="blog-content pt-3">延續上一篇針對 Dev Mode 介紹這一篇要說的就是最複雜的「右側面板」啦！
                    右側面板預設有兩個分頁：Inspect（偵測）, Plugins（外掛），預設開啟 Inspect。 右側面板也可以顯示 Comment，但需要先在左側面板上方點擊 對話
                    icon，才可以在右側面板看到所有留言紀錄。</span>
            </div>
        </div>
        <div class="blog-flex pt-5">
            <div class="col-lg-4.5">
                <img class="blog-img" style="width: 397px; height: 253px;"
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image3.png?raw=true">
            </div>
            <div class="ms-3 col-md-7 blog-flex2">
                <span class="blog-content pt-3">2023/10/18<span class="hashtag">UI/UX 新知</span></span>

                <span class="blog-title">給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)</span>
                <span class="blog-content pt-3">身為工程師，除了精進開發技術、學習新框架、看更多的範例、刷更多的題，為了與其他團隊成員有效合作，也需要學習使用其他協作軟體，例如
                    Trello, Notion。 而如果是要跟設計師合作，目前最主要的就是使用 Figma了！
                    Figma 是現在最主流的 UIUX 設計軟體，自從開創了「協作功能」之後，幾乎就是把 Adobe XD 和 Sketch 遠遠甩在後頭！</span>
            </div>
        </div>
        <div class="blog-flex pt-5">
            <div class="col-lg-4.5">
                <img class="blog-img" style="width: 397px; height: 253px;"
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image4.png?raw=true">
            </div>
            <div class="ms-3 col-md-7 blog-flex2">
                <span class="blog-content pt-3">2023/09/20<span class="hashtag">數位產品設計</span></span>

                <span class="blog-title">虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究</span>
                <span
                    class="blog-content pt-3">在當今數位科技的快速發展下，虛擬實境（VR）技術日益受到關注。VR技術為使用者提供了身臨其境的體驗，並在多個領域中得到應用，如遊戲、教育、醫療等。然而，要實現真正的沈浸感需要考慮多個因素，其中介面設計是至關重要的一環。本研究旨在探討不同介面設計對使用者在虛擬環境中的沈浸感的影響，以期為優化VR技術的使用者體驗提供參考。</span>
            </div>
        </div>
        <div class="blog-flex pt-5">
            <div class="col-lg-4.5">
                <img class="blog-img" style="width: 397px; height: 253px;"
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image5.png?raw=true">
            </div>
            <div class="ms-3 col-md-7 blog-flex2">
                <span class="blog-content pt-3">2023/08/10<span class="hashtag">數位產品設計</span></span>

                <span class="blog-title">想打到目標受眾？先讓設計師跟你都瞭解他們痛在哪！</span>
                <span class="blog-content pt-3">一個準備完整的案主，會在發案之前，先準備好這個設計案的目標、受眾、主要功能、參考資料，然後交給設計師參考、發想、研究、使用。
                    有些產品的目標受眾很明確，譬如一個比價 App，受眾目標的特徵可能有：年齡層廣、會使用線上購物、手機使用時間長。
                    但可以比價的東西實在太多了，若五花八門的商品都要拉進去，設計上需要建立非常多的目錄階層、制定非常多種的產品詳細頁面版型等等。...</span>
            </div>
        </div>
        <div class="blog-flex pt-5">
            <div class="col-lg-4.5">
                <img class="blog-img" style="width: 397px; height: 253px;"
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image6.png?raw=true">
            </div>
            <div class="ms-3 col-md-7 blog-flex2">
                <span class="blog-content pt-3">2023/07/03<span class="hashtag">前端開發</span></span>

                <span class="blog-title">React vs. Vue，哪種前端框架比較好用？從三大面向談起</span>
                <span
                    class="blog-content pt-3">在當今快速發展的前端開發領域中，React和Vue被廣泛認為是兩個最受歡迎和強大的前端框架之一。然而，對於開發人員來說，選擇適合自己的框架可能是一個具有挑戰性的決定。本文將從三個主要面向探討React和Vue：開發效率、性能和生態系統。通過深入比較和分析這些方面，我們將試圖回答一個關鍵問題：React和Vue中哪種前端框架更加適用？這將有助於開發人員更好地理解兩者之間的優勢和劣勢，並在實際應用中做出明智...</span>
            </div>
        </div>
    </div>
    <div class=" fixed2 bg-light col-lg-2" id="scrollableNav">
        <ul class="nav blog-flex-column ps-4">
            <li class="nav-item ">
                <a class="nav-link text-dark" href="#/blog">全部文章</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="#/blog">UI/UX新知</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="#/blog">數位產品設計</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="#/blog">平面設計</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="#/blog">前端開發</a>
            </li>
        </ul>
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
                                class="bi bi-instagram footer-icon"></i>hexschool_demo</button></a></li>
                <li class="ms-3"><a class="text-muted" href=""><button type="button"
                            class="btn btn-outline-dark footer-button"><i
                                class="bi bi-facebook footer-icon"></i>hexschoolTW</button></a></li>
            </ul>
        </footer>
    </div>
</div>

    
    `,
  mounted() {
    const scrollableNav = document.getElementById("scrollableNav");
    let isMouseDown = false;
    let startX;
    let scrollLeft;

    scrollableNav.addEventListener("mousedown", (e) => {
      isMouseDown = true;
      scrollableNav.classList.add("active");
      startX = e.pageX - scrollableNav.offsetLeft;
      scrollLeft = scrollableNav.scrollLeft;
      console.log(e);
    });

    scrollableNav.addEventListener("mouseleave", () => {
      isMouseDown = false;
      scrollableNav.classList.remove("active");
    });

    scrollableNav.addEventListener("mouseup", () => {
      isMouseDown = false;
      scrollableNav.classList.remove("active");
    });

    scrollableNav.addEventListener("mousemove", (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - scrollableNav.offsetLeft;
      const walk = (x - startX) * 2;
      scrollableNav.scrollLeft = scrollLeft - walk;
    });
  },
};
