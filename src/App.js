import React from "react";
import './App.css';
import Card1 from "./Components/Card"
import Card2 from "./Components/Card_2"
import {BiSearch} from "react-icons/bi"
import {AiOutlineHeart} from 'react-icons/ai'
import {BsArrowRight, BsFacebook, BsPinterest, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs"
import {RxHamburgerMenu} from "react-icons/rx"
import logo1 from './images/logo1.png'

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
        <nav>
         
    <div className='nav-button'>
    <RxHamburgerMenu className='hem' />
    </div>
 </nav>
    <div align="center" className='upmid'>
          <div >
            <img className='icon1' src={logo1} alt='icon1'></img>
            </div>
      <div className='sr1'align='center'>
        <p className='si1' align='center'>Simply</p>
            <p align='left' className='sl1'>RECIPES</p>
        </div>
       </div> 
       <div className='ic1'>
        <div align='right'className='h1'><AiOutlineHeart className='her1'/></div>
       <div> <BiSearch className='her2'/></div>
        
      </div>
 </div>
      </header>
      <main>
        <div className="m">
          <div className='m1'>
            <img className='im1'src='https://www.linkpicture.com/q/IMG_20230705_000842.jpg'alt='h1'></img>         

          </div>
         
          </div>
          <div className='im2'>
            <img className='im21'src='https://www.linkpicture.com/q/IMG_20230705_000909.jpg' alt='im2'></img>
          </div>
          <div className='d1'>
          
            <p align='center'><a className='g1' href='https://www.simplyrecipes.com/the-grill-up-7481565' >The Grill Up<BsArrowRight className='icon2'color="rgb(197, 80, 11)"/></a></p>
          
          </div>
        <div>
          <Card1/>
        </div>
        <div className='a1'>
        
        <p align="center"><a className='g1' href='https://www.simplyrecipes.com/the-grill-up-7481565' >Come On Over<BsArrowRight className='icon2'color="rgb(197, 80, 11)"/></a></p>
        </div>
       <div>
        <Card2/>
       </div>
        <div className='a3'>
       
<h2>  The Simply Recipes Team</h2>
<p>Simply Recipes is a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from around the world. We’re supported by a group of recipe developers, food writers, recipe and product testers, photographers, and other creative professionals.</p>
<div id="contributor-block__read-more_4-0" class="comp contributor-block__read-more mntl-block">
<a href="https://www.simplyrecipes.com/about-us-5096129" rel="nocaes" id="contributor-block__read-more-link_4-0" class=" contributor-block__read-more-link mntl-text-link" data-tracking-container="true"><span class="link__wrapper"><button className='b1'>READ MORE</button></span></a>
</div>
        </div>
        <div className='a4'>
          <div className='a41'>
            <img src='https://www.simplyrecipes.com/thmb/IhoKeJw22W2a14BiRD2a6IGvnvE=/150x150/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/thumbnail_Tarpy_Resize_1000px-809a0f9a10864389ab7d2e43d43eb430.jpg' alt='q1'></img>
          <p className='rt'>LIZ TARPY</p>
          <p className='cw'>CONTRIBUTING WRITER</p>
          </div>
          <div className='a42'>
            <img src='https://www.simplyrecipes.com/thmb/dhnye6BH2Sw9An3o2fyM6a64xK0=/150x150/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/IMG_1170-2c1c3ea81bc544e6a61ef8572bf374b5.jpg' alt='q2'></img>
            <p className='rt'>GEO BANKS-WESTON</p>
          <p className='cw'>CONTRIBUTING WRITER</p>
          </div>
          <div className='a43'>
            <img src='https://www.simplyrecipes.com/thmb/Fxlq7c8qbYiut-qVrf_SHjx3yaI=/150x150/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MollyAdams-77377edc1bd649e4942a94b34422d968.jpg' alt='q3'></img>
            <p className='rt'>MOLLY ADAMS</p>
          <p className='cw'>CONTRIBUTING WRITER</p>
          </div>
          <div className='a44'>
            <img src='https://www.simplyrecipes.com/thmb/-4Lxm8xHZ6YxdVL7Z6tXDZLDP-c=/150x150/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/erinscott_riseandshine-6887-1-6347c154c32e486b91dc464c3d50ca53.jpg' alt='q4'></img>
            <p className='rt'>KATIE MORFORD</p>
          <p className='cw'>CONTRIBUTING WRITER</p>
          </div>
          <div className='a45'>
            <img src='https://www.simplyrecipes.com/thmb/avYHey_SUocMRai0BA5quS40tCc=/150x150/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/jessica_gavin_headshot_2020-JessicaGavin-da3e273c46d04516947b56ab3031a190.jpg' alt='q5'></img>
            <p className='rt'>JESSICA GAVI</p>
          <p className='cw'>CONTRIBUTING WRITER</p>
          </div>
          <div className='a46'>
            <img src='https://www.simplyrecipes.com/thmb/n3Wnh_cPdrA_Uo8ZkHCpIR52IGE=/150x150/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/StephanieLoo-3b0b4e99c6924abe8c2ee17cda45ac3c.JPG' alt='q6'></img>
            <p className='rt'>EPHANIE LOO</p>
          <p className='cw'>CONTRIBUTING WRITER</p>
          </div>
          <div className='a47'>
            <img src='https://www.simplyrecipes.com/thmb/o2EteK_B5XK567UJOeB3MRAQCyY=/150x150/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/DanaBeninati-c3d3806fa9bc4a4a9f1a38d51fcf3833.jpg' alt='q7'></img>
            <p className='rt'>LIZ TARPY</p>
          <p className='cw'>CONTRIBUTING WRITER</p>
          </div>
          <div className='a48'>
            <img src='https://www.simplyrecipes.com/thmb/gjGy8RDs6areqx0V69_X2Xf3TFk=/150x150/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SaraTane-5d80f7df732e4065a2f5d4be99533bb7.jpg' alt='q8'></img>
            <p className='rt'>DANA BENINATI</p>
          <p className='cw'>CONTRIBUTING WRITER</p>
          </div>
          <div className='a49'>
            <img src='https://www.simplyrecipes.com/thmb/dVkf3-QM5AXtSAIHec0EJ0UD-w0=/150x150/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Irvin-Lin-HeadShot-1500x2250-Irvin-b783efa276534cba9b0bd295b95bafbb.jpg' alt='q9'></img>
            <p className='rt'>IRVIN LIN</p>
          <p className='cw'>CONTRIBUTING WRITER</p>
          </div>
          <div className='a410'>
            <img src='https://www.simplyrecipes.com/thmb/RBRwa7BQk7UtymQ8ckVLTHabENc=/150x150/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SR-headshots-wanda-abraham-43d8f18cdb024d788f7620fd5be56273.jpg' alt='q10'></img>
            <p className='rt'>WANDA ABRAHAM</p>
          <p className='cw'>VISUAL EDITOR</p>
          </div>
        </div>
        <div className='a5'>
          <header className='hd1'>
          
            <p align='center'><a className='g1' href='https://www.simplyrecipes.com/news-and-trends-5206826' >News & Trends<BsArrowRight className='icon2'color="rgb(197, 80, 11)"/></a></p>
          </header>
          <div className='a50'>
          <div className='a51'>
            <img className='nt' src='https://www.simplyrecipes.com/thmb/glWg4kIeu_P_DNH360qOknHvW1k=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Hetty-McKinnon-Tenderheart-Cookbook-LEAD-5a6e8a9bec5a451998dce69f05b4b25b.jpg' alt='e1'></img>
          <p className='ct'>VOICES</p>
          <h1 className='hc'>Hetty Lui McKinnon on Project's Secret Sauce and Why You Won't Find Coca-Cola in Her New Cookbook</h1>
          </div>
          <div className='a52'>
            <img className='nt' src='https://www.simplyrecipes.com/thmb/gPMjUQp6JptCJwc-ylLMp7zFIMU=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Cherry-Pie-Bars-LEAD-04-8d12166790b14c15898af8d5b553dca5.jpg' alt='e2'></img>
            <p className='ct'>VOICES</p>           
            <h1 className='hc'>Our 10 Most Popular Recipes of June</h1>
          </div>
          <div className='a53'>
            <img className='nt' src='https://www.simplyrecipes.com/thmb/wV-VS6qMvlDAuMkxe4AkPb5e5BM=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SimplyRecipesPickledRedOnions-178b18b5ad364f17be0e5cc671775f7e.jpg' alt='e3'></img>
          <p className='ct'>VOICES</p>
          <h1 className='hc'>The Only 5-Ingredient Pickled Red Onions Recipe You'll Ever Need</h1>
          </div>
          </div>
        </div>
        <div className='a6'>
          <header className='hd2'>
          
            <p align='center'><a className='g1' href='https://www.simplyrecipes.com/news-and-trends-5206826' >Fourth of July Treats<BsArrowRight className='icon2'color="rgb(197, 80, 11)"/></a></p>
          </header>
          <div className='a60'>
          <div className='a61'>
            <img className='nt' src='https://www.simplyrecipes.com/thmb/jzai-YUoW86QeUC9DBmfg7R347Q=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Grilled-BBQ-Chicken-LEAD-10-03fd9892eaae4ce1a8a3f4c949657cfd.jpg' alt='e4'></img>
          <p className='ct'>DINNER</p>
          <h1 className='hc'>Foil-Wrapped Baby Back Ribs</h1>
          </div>
          <div className='a62'>
            <img className='nt' src='https://www.simplyrecipes.com/thmb/gxsd9_ZK5pZPtEekPFYQinSyxiI=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__06__Red-White-Blue-Cake-LEAD-HORIZONTAL-1-9fbc98db920d4a60b9031ea9a2edd259.jpg' alt='e5'></img>
          <p className='ct'>DESERT</p>
          <h1 className='hc'>Strawberry Shortcake Cake</h1>
          </div>
          <div className='a63'>
            <img className='nt' src='https://www.simplyrecipes.com/thmb/JwV91MRaaurEhySnoH0CE6N3m98=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__05__chili-dog-horiz-a-1600-1a1f025054124cd886baab5b14d8d5b6.jpg' alt='e6'></img>
          <p className='ct'>DINNER</p>
          <h1 className='hc'>Grilled Burger</h1>
          </div>
          </div>
        </div>
        <div className='a7'>
          <header className='hd3'>
          
            <p align='center'><a className='g1' href='https://www.simplyrecipes.com/world-cuisine-recipes-5090811' >Frome the Casserole Dish<BsArrowRight className='icon2'color="rgb(197, 80, 11)"/></a></p>
          </header>
          <div className='a70'>
          <div className='a71'>
            <img className='nt' src='https://www.simplyrecipes.com/thmb/GvbR1km4-XafYzXHakEinL9EIT4=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Pulled-Pork-Enchiladas-LEAD-02-baf69e91ec6d4fbeb9304550991b44e7.jpg' alt='e7'></img>
          <p className='ct'>DINNER</p>
          <h1 className='hc'>Pulled Pork Enchiladas</h1>
          </div>
          <div className='a72'>
            <img className='nt' src='https://www.simplyrecipes.com/thmb/X19EVYKNYWrF0xYtr9-mIPzTUxk=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__11__Spanakopita-Spinach-Pie-Lead-2-5853e3a0834d406c9cf2b906fecf0dd4.jpg' alt='e8'></img>
          <p className='ct'> EASY VEGETARIAN</p>
          <h1 className='hc'>Spanakopita</h1>
          </div>
          <div className='a73'>
            <img className='nt' src='https://www.simplyrecipes.com/thmb/9egsaUwzTy0D5El5e559Q1q6Hac=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-English-Toad-in-the-Hole-LEAD-1-SEO-f17d129b533549b1ab46842680f13b58.jpg' alt='e9'></img>
          <p className='ct'>DINNER</p>
          <h1 className='hc'>Posh Tode</h1>
          </div>
          </div>
        </div>
        <div className='a8'>
          <header className='hd4'>
         
            <p align='center'> <a className='g1' href='https://www.simplyrecipes.com/blackberry-recipes-5091047' ><a className='g1' href='https://www.simplyrecipes.com/world-cuisine-recipes-5090811' >Basketful of Blackberries</a><BsArrowRight color="#1DA1F2"/></a></p>
          </header>
          <div className='a80'>
          <div className='a81'>
            <img className='nt' src='https://www.simplyrecipes.com/thmb/Y1ucdMpFBTEGCQWa6NFKaIurkQo=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Blackberry-Pie-LEAD-03-c2e82fef45df4399b9e2d95db3982442.jpg' alt='e10'></img>
          <p className='ct'>COMFORT FOOD</p>
          <h1 className='hc'>Homemade Apple Pie</h1>
          </div>
          <div className='a82'>
            <img className='nt' src='https://www.simplyrecipes.com/thmb/S8tfDMfjqRDDodMCjDp3yIJwHlI=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__06__berry-cobbler-horiz-a-1800-92374ffff96945fea7581225cb2c681f.jpg' alt='e11'></img>
          <p className='ct'>COBBLERS</p>
          <h1 className='hc'>Berry Cobbler with Coconut Walnut Streusel</h1>
          </div>
          <div className='a83'>
            <img className='nt' src='https://www.simplyrecipes.com/thmb/rlzIpABXJMfWNc-QdsW_fSpjqk8=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2014__08__blackberry-shortcake-horiz-a2-1800-12eaffe0c89b4b028ada825ab055200b.jpg' alt='e12'></img>
          <p className='ct'>SHORTCAKES</p>
          <h1 className='hc'>Blackberry Shortcake</h1>
          </div>
        </div>
        </div>
        <div className='a9'>
          <header className='hd5'>
          <p align='center'> <a className='g1' href='https://www.simplyrecipes.com/blackberry-recipes-5091047' >Mango Mania!</a><BsArrowRight color="#1DA1F2"/></p>
          </header>
          <div className='a90'>
          <div className='a91'>
            <img className='nt' src='https://www.simplyrecipes.com/thmb/ZSvk9t6C-LoasUi_plzoF6BsBIg=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-How-to-Cut-Mango-Lead-8-cc8298cb89674f83adaf79c15c82905a-2-41ccc62ab36945708447ce77a37ed405.jpg' alt='e13'></img>
          <p className='ct'>COOKING TIPS & TECHNIQUES</p>
          <h1 className='hc'>How to Cut a Mango</h1>
          </div>
          <div className='a92'>
            <img className='nt' src='https://www.simplyrecipes.com/thmb/vKzLJr7nHxiZB7FkEDal2lMTdnQ=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Mango-Lassi-LEAD-13-73719759cc3f4a2ca7fe8be72baaeaab.jpg' alt='e14'></img>
          <p className='ct'>EASY SMOOTHIES</p>
          <h1 className='hc'>Mango Lassi</h1>
          </div>
          <div className='a93'>
            <img className='nt' src='https://www.simplyrecipes.com/thmb/kLgBoAWUltZKblp3FtBaaVDo6Qo=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2009__04__chicken-mango-chutney-horiz-a2-1800-110d8ce4a3c64e51a0a6136a3732ef88.jpg' alt='e15'></img>
          <p className='ct'>ROAST CHICKEN</p>
          <h1 className='hc'>Chicken with Mango Chutney Sauce</h1>
          </div>
        </div>
        </div>
      </main>
      <footer>
        <div className='container-1'>
          <div className='footer-inner'>
            <div className='upper-content'>
          <div className='ico'> 
          <div className='ico1'><img className='icon1' src={logo1} alt='icon1'></img></div>
<div className='ico2'><h1 className='si1'>Simply</h1><p className='sr'>RECIPES</p></div>
</div>
<div className="upper1">
<h2 className='rd1'>Ready to cook?</h2>
<p className='fp1'>Sign up for our weekly newsletter</p>
</div>
<form>
  <input className='in1' type='email' placeholder='Enter your email'/>
  <button className='bt1'>SIGN UP</button>
</form>

<div className="upper2" data-tracking-container="true">
<div className='lf1'>LET'S BE FRIENDS!</div>
</div>
<ul className="u1">
<li class="social-nav__item social-nav__item--facebook">
  <a href='https://www.facebook.com/simplyrecipes'><BsFacebook className='sl'/></a> </li>
<li class="social-nav__item social-nav__item--facebook">
  <a href='https://www.pinterest.com/simplyrecipes'><BsPinterest className='sl' /></a> </li>
<li class="social-nav__item social-nav__item--facebook">
  <a href='https://www.instagram.com/simplyrecipes'><BsInstagram className='sl' /></a> </li>
<li class="social-nav__item social-nav__item--facebook">
  <a href='https://twitter.com/simplyrecipes'><BsTwitter className='sl'/></a> </li>
<li class="social-nav__item social-nav__item--facebook">
  <a href='https://www.youtube.com/c/simplyrecipes'><BsYoutube className='sl' /></a> </li>

</ul>








            </div>
            <div className='lower-content-1'>
            <ul className="u1" >
<li>
  <a href='https://www.simplyrecipes.com/recipes-5090746'>
    RECIPES
  </a>
</li>
<li>
  <a href='https://www.simplyrecipes.com/recipes-by-time-and-ease-5090817'>
    QUICK & EASY
  </a>
</li>
<li>
  <a href='https://www.simplyrecipes.com/cooking-how-tos-5090751'>
    IN THE KITCHEN
  </a>
</li>
<li>
  <a href='https://www.simplyrecipes.com/kitchen-food-buying-guides-5090755'>
    BUYING GUIDES
  </a>
</li>
<li>
  <a href='https://www.simplyrecipes.com/holiday-and-seasonal-recipes-5091321'>
    HOLIDAYS & SEASONS
  </a>
</li>
</ul>
</div>
 <div className='lower-content-2'>
            <ul  className='u1'>
<li>
  <a href='https://www.simplyrecipes.com/about-us-5096129'>
    About Us
  </a>
</li>
<li>
  <a href='https://www.dotdash.com/our-brands/'>
    Advertise
  </a>
</li>
<li>
  <a href='https://www.dotdashmeredith.com/brands-termsofservice/'>
    Terms of Service
  </a>
</li>
<li>
  <a href='https://www.dotdash.com/careers/'>
    Careers
  </a>
</li>
<li>
  <a href='https://www.simplyrecipes.com/about-us-5096129#toc-recipe-development--testing'>
    Editorial Guidelines
  </a>
</li>
<li>
  <a href='https://www.dotdashmeredith.com/brands-privacy'>
    Privacy Policy
  </a>
</li>
<li>
  <a href='https://www.simplyrecipes.com/about-us-5096129#toc-contact-us'>
    Contact
  </a>
</li>
</ul>

<div id="truste-badge_1-0" class="comp truste-badge mntl-block">
<a href="//privacy.truste.com/privacy-seal/validation?rid=3d3bf195-b67b-4ade-b6ad-53d556ade62f" >
<img id="badge-image_1-0" class="comp badge-image mntl-block lazyloaded" data-src="//privacy-policy.truste.com/privacy-seal/seal?rid=3d3bf195-b67b-4ade-b6ad-53d556ade62f" alt="TRUSTe" src="//privacy-policy.truste.com/privacy-seal/seal?rid=3d3bf195-b67b-4ade-b6ad-53d556ade62f"></img>
</a>
</div>

            </div>
          </div>
        </div>
        <div className='footer-bottom2'>

        <div class="loc bottom-content footer__bottom">
<div>
<div>
<div>
<div>
Simply Recipes is part of the <a href="https://www.dotdashmeredith.com">Dotdash Meredith</a> publishing&nbsp;family.
</div>
<div className='last1'>
Please review our updated <a href="https://www.dotdashmeredith.com/brands-termsofservice" className='last1'>Terms of Service</a>.
</div>
</div>
</div>
</div>
</div>

        </div>
      </footer>
    </div>
  );
}
export default App;
