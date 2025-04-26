import React, { useState, useEffect, useRef } from "react";
import ModalWindow from "./ModalWindow";
import AllGallery from "./AllGallery";
import Banners from "./Banners";
import YouTubeThumbnails from "./YouTubeThumbnails";
import YouTubeDesign from "./YouTubeDesign";
import InstagramStories from "./InstagramStories";
import Review from "./Review";
import Theme from "./Theme";
import ModalMenu from "./ModalMenu";



const Main = () => {

  const [isPortrait, setIsPortrait] = useState(window.innerWidth > window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const {theme, setTheme} = Theme();
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

const toggleTheme = () => {
  if (isDarkTheme) {
    lightTheme();
  } else {
    darkTheme();
  }
  setIsDarkTheme(!isDarkTheme);
};

const lightTheme = () => {
  setTheme('light');
}

const darkTheme = () => {
  setTheme('dark');
}

 

  const renderComponent = () => {
    switch (selectedCategory) {
      case 'All':
        return <AllGallery/>;
        case 'Banners':
          return <Banners/>;
          case 'YouTubeThumbnails':
            return <YouTubeThumbnails/>;
            case 'YouTubeDesign':
              return <YouTubeDesign/>;
              case 'InstagramStories':
                return <InstagramStories/>;
                default:
                  return <AllGallery/>;

    }
  };

  const [showModal, setShowModal] = useState(false);
  const [showModalMenu, setShowModalMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModalMenu = () => {
    setShowModalMenu(true);
  };

  const handleCloseModalMenu = () => {
    setShowModalMenu(false);
  };

  const containerRef = useRef(null);
  const reviewWidthRef = useRef(0);

  const reviews = [
    <Review key={1} name="Wladislaw M." link="https://t.me/itbulgaria8" text="Текст отзыва, оставленного студентом на Юдеми,
    который можно открыть нажав на кнопку в правом верхнем углу этого блока."/>,
    <Review key={2} name="Maxim L." link="https://t.me/itbulgaria8" text="Отзыва, оставленный Максимом."/>,
    <Review key={3} name="Wyacheslaw K." link="https://t.me/itbulgaria8" text="Подписывайся на Телеграм канал https://t.me/itbulgaria8"/>,
  ];

  const visibleReviews = 3;

  const handleScroll = () => {
    const box = containerRef.current;
    const width = reviewWidthRef.current * visibleReviews;

    if (box.scrollLeft <= 0) {
box.style.scrollBehavior = "auto";
box.scrollLeft = box.scrollWidth - 2 * width;
box.style.scrollBehavior = "smooth";
    }

    if (box.scrollLeft >= box.scrollWidth - width) {
      box.style.scrollBehavior = "auto";
      box.scrollLeft = width;
      box.style.scrollBehavior = "smooth";
          }
  };

  const btnPrevReview = () => {
    const box = containerRef.current;
    box.scrollLeft -= reviewWidthRef.current;
  }

  const btnNextReview = () => {
    const box = containerRef.current;
    box.scrollLeft += reviewWidthRef.current;
  };

  useEffect(() => {
const box = containerRef.current;
const firstReview = box.querySelector('.review-card');
reviewWidthRef.current = firstReview.clientWidth;
const width = reviewWidthRef.current * visibleReviews;

box.scrollLeft = (box.scrollWidth - width) / 2;
box.addEventListener ('scroll', handleScroll); 

return () => {
  box.removeEventListener('scroll', handleScroll);
};
  }, []);

  const [scroll, setScroll] = useState(0);

  const scrollUp = () => {
    setScroll(window.scrollY)
  }

  const upButton = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollUp)
  }, [])

  const toBlock = (height) => {
    window.scrollTo({top: height, left: 0, behavior: 'smooth'})
  }

  return (
    <div>
      <header>
        {isPortrait ? (
        <div className="navigation">  
        <div className="menu">
          <a onClick={upButton}>Обо мне</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="700">Услуги</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="1230">Портфолио</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="1920">Отзывы</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="2500">Гарантии</a>
        </div>

    
<div className="header-buttons">
        <button onClick={handleOpenModal} className="btn">
          Связаться
        </button>
        

            <a href="https://t.me/itbulgaria8" target="_blank"
              className={theme === 'light' ? "icon telegram light" : "icon telegram dark"}/>
             <a href="https://t.me/itbulgaria8" target="_blank"
              className={theme === 'light' ? "icon instagram light" : "icon instagram dark"}/>
        
        <div className="switch" onClick={toggleTheme}>
          <div className={theme === 'light' ? "theme light" : "theme dark"}
          style={{ transform: isDarkTheme ? 'translateX(38px)' : 'translate(0px)' }}></div>
          </div>
          </div>
        </div> )
       :
       ( <div className="navigation">  
        
        <div className="switch switch-mobile" onClick={toggleTheme}>
          <div className={theme === 'light' ? "theme theme-mobile light" 
          : "theme theme-mobile dark"}
          style={{ transform: isDarkTheme ? 'translateX(8.6vw)' : 'translate(0px)' }}></div>
          </div>
    
<div className="header-buttons-mobile">

            <a href="https://t.me/itbulgaria8" target="_blank"
              className={theme === 'light' ? "icon icon-mobile telegram light" 
              : "icon icon-mobile telegram dark"}/>
             <a href="https://t.me/itbulgaria8" target="_blank"
              className={theme === 'light' ? "icon icon-mobile instagram light" 
              : "icon icon-mobile instagram dark"}/>
        
       <a onClick={handleOpenModalMenu} className={theme === 'light' ? "icon-menu light" : "icon-menu dark" } />
          </div>
        </div> 

      )}
      </header>
      <ModalMenu show={showModalMenu} onClose={handleCloseModalMenu}>
      <a onClick={upButton}>Обо мне</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="700">Услуги</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="1230">Портфолио</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="1920">Отзывы</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="2500">Гарантии</a>
           </ModalMenu>

      <ModalWindow show={showModal} onClose={handleCloseModal}>
          <h2 style={{ color: "#4824ff", fontSize: "40px" }}>Контакты</h2>
          <p style={{ fontSize: "22px" }}>
            Вы можете связаться со мной в Телеграм <br /> или Инстаграм
          </p> </ModalWindow>


{isPortrait ? (
  <div className="welcome-block">
  <div className="first-block">
<h1>Тестировщик <span className="title">Workford</span>
</h1>
<h2 style={{marginBottom: "7%", marginTop: "7%"}}>
  Создаю <span style={{ color: "#4824ff"}}>
    продаваемый</span><br/>
    и<span style={{ color: "#4824ff"}}> уникальный</span> 
    дизайн <br/> под ваши запросы</h2>
  <h3>Занимаюсь тестированием<br/>
  на протяжении <span style={{ color: "#4824ff"}}>9 лет</span></h3>
  </div>
  <div className="main-image-box">
    <img classname="first-image-layer" src='./images/cat.png' 
    draggable="false"/>
    {/* <img classname="second-image-layer" src='./icons/moon1.png' 
    draggable="false"/> */}
    <img classname="third-image-layer" 
         src={theme === 'light' 
         ?'./images/logo192.png' 
         :'./images/logo512.png'} 
    draggable="false"/>
    <img classname="fourth-image-layer" src='./images/logo192.png' 
    draggable="false"/>
    <img classname="fifth-image-layer" src='./images/logo192.png' 
    draggable="false"/>
    
  </div>
</div> )
:
( <div className="welcome-block mobile">
  <div className="main-image-box mobile">
    <img classname="first-image-layer mobile" src='./images/cat.png' 
    draggable="false"/>
    {/* <img classname="second-image-layer" src='./icons/moon1.png' 
    draggable="false"/> */}
    <img classname="third-image-layer mobile" 
         src={theme === 'light' 
         ?'./images/logo192.png' 
         :'./images/logo512.png'} 
    draggable="false"/>
    <img classname="fourth-image-layer mobile" src='./images/logo192.png' 
    draggable="false"/>
    <img classname="fifth-image-layer mobile" src='./images/logo192.png' 
    draggable="false"/>
    
  </div>


<div className="first-block mobile">
<h1>Тестировщик <span className="title">Workford</span>
</h1>
<h2 style={{marginBottom: "7%", marginTop: "7%"}}>
  Создаю <span style={{ color: "#4824ff"}}>
    продаваемый</span> и <span style={{ color: "#4824ff"}}> уникальный </span> 
     дизайн под ваши запросы</h2>
  <h3>Занимаюсь тестированием<br/>
  на протяжении <span style={{ color: "#4824ff"}}>9 лет</span></h3>

  <button onClick={handleOpenModal} className="btn mobile">
          Связаться
        </button>
  </div>
  </div>
)}


<div className="service-block" draggable="false">
  <h1 style={{ fontSize: "52px" }}>Услуги</h1>
  <p style={{ fontSize: "27px" }}>Создаю
    <span style={{ fontSize: "#4824ff" }}> курсы 
      по программированию </span> тестированию </p>

      <div style={{ display: "flex" }}>
        <p className="tag"><p className={theme === 'light' ? "tag-icon icon-dark" : "tag-icon icon-light"}/>
        и другим направлениям </p>
        <p className="tag"><p className={theme === 'light' ? "tag-icon icon-dark" : "tag-icon icon-light"}/>
         Подготовка к собеседованию на позицию QA </p>
        <p className="tag"><p className={theme === 'light' ? "tag-icon icon-dark" : "tag-icon icon-light"}/>
        Cypress </p>
        <p className="tag"><p className={theme === 'light' ? "tag-icon icon-dark" : "tag-icon icon-light"}/>
        Postman </p>
        <p className="tag"><p className={theme === 'light' ? "tag-icon icon-dark" : "tag-icon icon-light"}/>
        Как пользоваться ИИ </p>

      </div>
      <div style={{ display: "flex", marginTop: "16px" }}>
      <p className="tag"><p className={theme === 'light' ? "tag-icon icon-dark" : "tag-icon icon-light"}/>
      Github </p>
      <p className="tag"><p className={theme === 'light' ? "tag-icon icon-dark" : "tag-icon icon-light"}/>
        React Js </p>
      </div>
      <p style={{ fontSize: "27px" }}>Открыта для обсуждения создания курсов и по другим направлениям. <br/>
      Детальней готова обсудить при
      <span style={{ fontSize: "#4824ff", cursor: "pointer" }}
      onClick={handleOpenModal}>личной переписке</span>
      </p>
</div>
<div className="portfolio-block">
<div className="first-block">
<h1 className="main-title">Портфолио</h1>
<div style={{ position: "absolute", marginLeft: "-660px"}}>
  <p className="gradient-part-one"></p>
  <p className="title-border">Портф</p>
</div>

<div style={{ position: "absolute", marginLeft: "620px"}}>
  <p className="gradient-part-two"></p>
  <p className="title-border">Фолио</p>
</div>

<img className="down-icon" src="./icons/down.png" draggable="false"></img>
</div>
<div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
<p className={ `tag ${selectedCategory === 'All' ? 'selected' : ''}`}
onClick={() => setSelectedCategory('All')}>
  Все курсы</p>

  <p className={ `tag ${selectedCategory === 'Banners' ? 'selected' : ''}`}
onClick={() => setSelectedCategory('Banners')}>
  Баннеры</p>

  <p className={ `tag ${selectedCategory === 'YouTubeThumbnails' ? 'selected' : ''}`}
onClick={() => setSelectedCategory('YouTubeThumbnails')}>
  Превью Ютюб</p>

  <p className={ `tag ${selectedCategory === 'YouTubeDesign' ? 'selected' : ''}`}
onClick={() => setSelectedCategory('YouTubeDesign')}>
  Оформление Ютюб</p>

  <p className={ `tag ${selectedCategory === 'InstagramStories' ? 'selected' : ''}`}
onClick={() => setSelectedCategory('InstagramStories')}>
  Сторис Инстаграм</p>
</div>

<div className="content" style={{ marginLeft: "-5vw",
  marginRight: "-5vw"}}>
    {renderComponent()}
  </div>
</div>

<div className="review-block">
  <h1>Отзывы</h1>
  <p className="description">Отзывы клиентов,
    написанные со своих
    <span className="selecting">личных аккаунтов</span>
    Телеграм. Все прозрачно! <br/> Любой отзыв
    можно <span className="selecting"> открыть </span> в
    Телеграм и <span className="selecting"> спросить </span> о
    впечатлениях работы со мной <br/>
    у создателя отзыва лично.</p>

    <div className="review-carausel">
      <div className="review-container" ref={containerRef}>
        {reviews.slice(-visibleReviews)}
        {reviews}
        {reviews.slice(0, visibleReviews)}
      </div>
    </div>

<div style={{ display: "flex", justifyContent: "center" }}>
  <p className="next-button"
  style={{ transform: "rotate(180deg)" }}>
    <p className="array-next-icon" onClick={btnPrevReview}/></p>
    <p className="next-button">
      <p className="array-next-icon" onClick={btnNextReview}/></p>

</div>

</div>

<div className="guarantees-block">
  <h1 style={{ fontSize: "52px", paddingBottom: "20px" }}>
  ГАРАНТИИ</h1>
  
  <ol className="guarantees-points">
    <li className="point">
      Оплату принимаю через платежную систему
      <span style={{ color: "#4824ff" }}> Название* </span>,
      которая контролирует <br/>безопасность денежных переводов.</li>
      <li className="point">
      Убедиться в моей ответственности и профессионализме можно
      <span style={{ color: "#4824ff" }}> написав клиентам </span>,
      <br/> оставившим отзывы <span style={{ color: "#4824ff" }}> лично </span>
      в любой момент (отзывы клиентов выше).</li>
      <li className="point">
      Все <span style={{ color: "#4824ff" }}> авторские 
      права </span> на работу переходат заказчику после 
      виполненија заказа.</li>
      <li className="point">
      В своих работах испољзују материали строго
      <span style={{ color: "#4824ff" }}> разрешенние
      длја личного <br/> и коммерческого
      испољзованија</span>.</li>
  </ol>
</div>

<div className="footer"> © Workford</div>

<button className={scroll < 1960 ? "" : "btn-up"}
onClick={upButton}>
</button>
    </div>
  );
};

export default Main;
