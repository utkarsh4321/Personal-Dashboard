class Menu {
  constructor() {
    this.Layout = document.querySelector('.capture-2');
  }
  generalContent() {
    this.Layout.innerHTML = `<div class="menu-headinng">
<h5>General</h5>
<div class="custom">customize your dashboard</div>

</div>



<ul class="list-item-2" id="main-list">
<li class="items active">Shows</li>
<li class="items removelink">
  <div id="linkt" class="removelink">Links</div>
  <div class="switch">

    <label class="removelink">

      Off
      <input type="checkbox" id="profile-switch-input" class="linkswitch">

      <span class="lever removelink" id="profile-switch-lever"></span>
      On
    </label>
  </div>



</li>
<li class="items removebook">
  <div id="linkt" class="removebook">Bookmark Bar</div>
  <div class="switch">

    <label class="removebook">

      Off
      <input type="checkbox" class="bookswitch"  id="profile-switch-input">

      <span class="lever removebook" id="profile-switch-lever"></span>
      On
    </label>
  </div>



</li>
<li class="items removesearch">
  <div id="linkt" class="removesearch">Search</div>
  <div class="switch">

    <label class="removesearch">

      Off
      <input type="checkbox" id="profile-switch-input" class="searchswitch">

      <span class="lever removesearch" id="profile-switch-lever"></span>
      On
    </label>
  </div>



</li>
<li class="items removeweather">
  <div id="linkt" class="removeweather">Weather</div>
  <div class="switch">

    <label class="removeweather">

      Off
      <input type="checkbox" id="profile-switch-input" class="weatherswitch">

      <span class="lever removeweather" id="profile-switch-lever"></span>
      On
    </label>
  </div>



</li>
<li class="items removefocus">
  <div id="linkt" class="removefocus">Focus</div>
  <div class="switch">

    <label class="removefocus">

      Off
      <input type="checkbox" id="profile-switch-input" class="focusswitch">

      <span class="lever removefocus" id="profile-switch-lever"></span>
      On
    </label>
  </div>



</li>
<li class="items removequate">
  <div id="linkt" class="removequate">Quote</div>
  <div class="switch">

    <label class="removequate">

      Off
      <input type="checkbox" id="profile-switch-input" class="quateswitch">

      <span class="lever removequate" id="profile-switch-lever"></span>
      On
    </label>
  </div>



</li>
<li class="items removetodo">
  <div id="linkt" class="removetodo">Todo</div>
  <div class="switch">

    <label class="removetodo">

      Off
      <input type="checkbox" id="profile-switch-input" class="todoswitch">

      <span class="lever removetodo" id="profile-switch-lever"></span>
      On
    </label>
  </div>



</li>
<li class="items removeclock">
  <div id="linkt">Clock Format</div>
  <div class="hours">
    <span id="hour-12 linkt" class="twelvehour">12 Hours</span>
    <span id="hour-24 linkt" class="twentyfourhour"> | 24 Hours</span>
  </div>



</li>



</ul>`;
  }

  todoContent() {
    this.Layout.innerHTML = `<div class="menu-headinng">
    <h5>Todo</h5>
    <div class="custom">Break your goals into manageable pieces</div>

  </div>



  <ul class="list-item-2">
    <li class="items active">SETTINGS</li>
    <li class="items">
      <div id="linkt"><div class="font-todo">Stay open</div>
      <div class="font-para">stay open on new tab and other usage</div>
      </div>
      <div class="switch">

        <label>

          Off
          <input type="checkbox" id="profile-switch-input">

          <span class="lever" id="profile-switch-lever"></span>
          On
        </label>
      </div>



    </li>
    <li class="items">
      <div id="linkt"><div class="font-todo">Autofocus <span class="plus">PLUS</span></div>
      <div class="font-para">Automatically set top and other usage</div></div>
      <div class="switch">

        <label>

          Off
          <input type="checkbox" id="profile-switch-input">

          <span class="lever" id="profile-switch-lever"></span>
          On
        </label>
      </div>



    </li>
    <li class="items">
      <div id="linkt"><div class="font-todo">MULTI-TODO LISTS<span class="plus">PLUS</span></div>
      <div class="font-para">organize your todos into multiple lists</div></div>
      <div class="switch">

        <label>

          Off
          <input type="checkbox" id="profile-switch-input">

          <span class="lever" id="profile-switch-lever"></span>
          On
        </label>
      </div>



    </li>
    <li class="items" style="border-bottom:none;">
      <div id="linkt"><a class="waves-effect waves-light btn" style="border-radius:20px;text-transform:capitalize; margin-top:1rem;"><i class="fas fa-plus" style="font-size:1rem;"></i>  Add List</a>
      <div class="font-todo" style="margin-top:2rem;">INTEGRATIONS<span class="plus">PLUS</span></div>
      <div class="font-para">Connect your external todos</div>
      <div class="font-para" style="margin-top:1rem;">No external task managers connected.Add an integeration to get started!</div>
      <a class="waves-effect waves-light btn" style="border-radius:20px;text-transform:capitalize; margin-top:2rem;"><i class="fas fa-plus" style="font-size:1rem;"></i>  Add List</a>
      
      </div>
      

    </li>
    


  </ul>`;
  }
  // ============ FUNCTION FOR THE PHOTOS LAYOUT ==============

  photosContent() {
    this.Layout.innerHTML = `<div class="menu-headinng">
    <h5>Photos</h5>
    <div class="custom">See a new inspiring photo each day</div>

  </div>
  
 
  <ul class="list-item-2"  style="margin-top:2rem;">
  <div class="ramesh" style="display:flex; justify-content:space-between;">
  <div id="photos-div">
  <div id="linkt">My Photos</div>
  <div id="linkt">Favorites</div>
  <div id="linkt">History</div>
  
 </div>

 <div id="btn-photos"><a class="waves-effect waves-light btn btnbackground" style="border-radius:20px;text-transform:capitalize; "><i class="fas fa-plus" style="font-size:1rem;"></i>  Add Photos</a></div>


 
 
  
  
  

  
  </div>
  <div class="row" style="margin-top:1rem;" id="list">
  
  
  
  </div>
  


  <div id="btn-photo" class="center-align" style="margin-top:2rem;margin-bottom:1rem;"><a class="waves-effect waves-light btn" style="border-radius:20px;text-transform:capitalize; margin-top:0px;">Load More</a></div>



</ul>
  
  
  
  
  `;
  }
  quatesContent() {
    this.Layout.innerHTML = `
    <div class="menu-headinng">
              <h5>Quotes</h5>
              <div class="custom">A daily reminder for inspiration and growth</div>

            </div><div class="ramesh" style="display:flex; justify-content:space-between; margin-top:2rem;">
            <div id="photos-div">
            <div id="linkt">My Quates</div>
            <div id="linkt">Favorites</div>
            <div id="linkt">History</div>
           </div>
            
            <div id="btn-photos" style="margin-top:0px;"><a class="waves-effect waves-light btn" style="border-radius:20px;text-transform:capitalize; margin-top:0px; padding:0 14px;"><i class="fas fa-plus" style="font-size:1rem;"></i>  Add Quates</a></div>
            
            
            
          
            
            </div>



            <ul class="list-item-2">
              <li class="items"></li>
              <li class="items">
                <div><span id="linkt">"</span>There is no such thing as failure,just lessons on the way <span id="linkt">"</span><span id="linkt" style="font-size:.7rem;">Sandhguru</span></div>
               



              </li>
              <li class="items">
                <div><span id="linkt">"</span>Optimism is a happiness magnet.If you stay positive, good things and good people will be drawn to you<span id="linkt">"</span><span id="linkt" style="font-size:.7rem;">Mary Lou Retton</span>
                </div>
              </li>


              <li class="items">
                
              <div><span id="linkt">"</span>Challenges are what make life interesting and overcoming them is what makes life meaningful<span id="linkt">"</span><span id="linkt" style="font-size:.7rem;">Joshua J. Marine</span>
              </div>



              </li>
              <li class="items">
                <div><span id="linkt">"</span>The right and wrong answers should come form your heart<span id="linkt">"</span><span id="linkt" style="font-size:.7rem;">Ramchran</span></div>
               



              </li>
              <li class="items">
                <div><span id="linkt">"</span>Do something today that your future self will thank you for<span id="linkt">"</span><span id="linkt" style="font-size:.7rem;">John Doe</span></div>
               



              </li>
              <li class="items">
                <div><span id="linkt">"</span>At the end of the day, we can endure much more than we think we can<span id="linkt">"</span><span id="linkt" style="font-size:.7rem;">Frida Kahlo</span></div>
               



              </li>
              <li class="items">
                <div><span id="linkt">"</span>It is no measure of health to be well adjusted to a profoundly sick society<span id="linkt">"</span><span id="linkt" style="font-size:.7rem;">J. Krishnamurti</span></div>
               



              </li>
              
              <div id="btn-photos" class="center-align" style="margin-top:2rem;margin-bottom:1rem;"><a class="waves-effect waves-light btn" style="border-radius:20px;text-transform:capitalize; margin-top:0px;">Load More</a></div>


            </ul>
    
    `;
  }
  linksContent() {
    this.Layout.innerHTML = `<div class="menu-headinng">
    <h5>Links & Bookmarks Bar</h5>
    <div class="custom">Quick access to your favorite links</div>
    
    </div>
    
    
    
    <ul class="list-item-2">
    <li class="items active"></li>
    <li class="items">
      <div id="linkt">Show Links</div>
      <div class="switch">
    
        <label>
    
          Off
          <input type="checkbox" id="profile-switch-input">
    
          <span class="lever" id="profile-switch-lever"></span>
          On
        </label>
      </div>
    
    
    
    </li>
    <li class="items">
      <div id="linkt">Show Bookmarks Bar</div>
      <div class="switch">
    
        <label>
    
          Off
          <input type="checkbox" id="profile-switch-input">
    
          <span class="lever" id="profile-switch-lever"></span>
          On
        </label>
      </div>
    
    
    
    </li>
    <li class="items">
      <div id="linkt">Show Chrome Tab in</div>
     
      <div class="hours">
      <span id="linkt" style="border-right:1px solid #555; padding-right:5px;">Links</span>
      
      <span id="linkt" style="border-right:1px solid #555; padding-right:5px;">Bookmarks</span>
      <span id="linkt" style="border-right:1px solid #555; padding-right:5px;">Dash</span>
      <span id="linkt">None</span>
    </div>
    
    
    </li>
    <li class="items">
      <div id="linkt">Show Apps in</div>
      <div class="hours">
      <span id="linkt" style="border-right:1px solid #555; padding-right:5px;">Links</span>
      
      <span id="linkt" style="border-right:1px solid #555; padding-right:5px;">Bookmarks</span>
      <span id="linkt" style="border-right:1px solid #555; padding-right:5px;">Dash</span>
      <span id="linkt">None</span>
    </div>
    
    
    
    </li>
    <li class="items">
      <div id="linkt">Open links in new tab</div>
      <div class="switch">
    
        <label>
    
          Off
          <input type="checkbox" id="profile-switch-input">
    
          <span class="lever" id="profile-switch-lever"></span>
          On
        </label>
      </div>
    
    
    
    </li>
    <li class="items">
      <div style="padding-top:2rem;">Links</div>
      
    
    
    
    </li>
    <li class="items">
      <div id="linkt">Stay open
      <div id="linkt" class="font-para">Stay open on new tab and other usage</div>
      </div>
      <div class="switch">
    
        <label>
    
          Off
          <input type="checkbox" id="profile-switch-input">
    
          <span class="lever" id="profile-switch-lever"></span>
          On
        </label>
      </div>
    
    
    
    </li>
    <li class="items">
      <div style="padding-top:2rem;">BOOKMARKS BAR</div>
     
    
    
    
    </li>
    <li class="items">
      <div>Icons only
      <div id="linkt" class="font-para">Hide titles for a clean and compact look</div>
      </div>
      <div class="switch">
    
        <label>
    
          Off
          <input type="checkbox" id="profile-switch-input">
    
          <span class="lever" id="profile-switch-lever"></span>
          On
        </label>
      </div>
    
    
    
    </li>
    <li class="items">
      <div>Show Most Visited
      
      </div>
      <div class="switch">
    
        <label>
    
          Off
          <input type="checkbox" id="profile-switch-input">
    
          <span class="lever" id="profile-switch-lever"></span>
          On
        </label>
      </div>
    
    
    
    </li>
    <li class="items">
    <div>Start in Most Visited
    <div id="linkt" class="font-para">Open Most visited folder by default</div>
    </div>
    <div class="switch">
  
      <label>
  
        Off
        <input type="checkbox" id="profile-switch-input">
  
        <span class="lever" id="profile-switch-lever"></span>
        On
      </label>
    </div>
  
  
  
  </li>
    <li class="items">
    <div>Show Bookmarks Manager
    
    </div>
    <div class="switch">
  
      <label>
  
        Off
        <input type="checkbox" id="profile-switch-input">
  
        <span class="lever" id="profile-switch-lever"></span>
        On
      </label>
    </div>
  
  
  
  </li>
    <li class="items" style="margin-bottom:2rem;">
    <div>Show Other Bookmarks
    
    </div>
    <div class="switch">
  
      <label>
  
        Off
        <input type="checkbox" id="profile-switch-input">
  
        <span class="lever" id="profile-switch-lever"></span>
        On
      </label>
    </div>
  
  
  
  </li>

    
    </ul>`;
  }
  balanceContent() {
    this.Layout.innerHTML = `<div class="menu-headinng">
<h5>Balance</h5>
<div class="custom">Balance your day with periods of uptime and downtime</div>

</div>



<ul class="list-item-2">
<li class="items active"></li>
<li class="items">
  <div id="linkt">Enable Balance mode
  <div id="linkt" class='font-para'>Hide productivity features during downtime</div>
  </div>
  <div class="switch">

    <label>

      Off
      <input type="checkbox" id="profile-switch-input">

      <span class="lever" id="profile-switch-lever"></span>
      On
    </label>
  </div>



</li>
<li class="items" style="padding-top:2rem; padding-bottom:1rem;">
  <div>UPTIME SCHEDULE
  <div id="linkt" class="font-para">Times when productivity features are active</div>
  </div>
  <div class="switch">

    <label>

      Off
      <input type="checkbox" id="profile-switch-input">

      <span class="lever" id="profile-switch-lever"></span>
      On
    </label>
  </div>



</li>
<li class="items">
  <div>Hours of the day</div>
  <div class="hours">
  <span id="linkt" style="border-right:1px solid #555; padding-right:5px;">8:30-4:30</span>
  
  <span id="linkt" style="border-right:1px solid #555; padding-right:5px;">9:00-5:00</span>
  <span id="linkt" style="border-right:1px solid #555; padding-right:5px;">9:30-5:30</span>
  <span id="linkt">Custom</span>
</div>



</li>
<li class="items">
  <div>Days of the week</div>
  <div class="hours">
  <span id="linkt" style="border-right:1px solid #555; padding-right:5px;">Weekdays</span>
  
  <span id="linkt" style="border-right:1px solid #555; padding-right:5px;">Every day</span>
  <span id="linkt">Custom</span>
  
</div>



</li>
<div style="margin-top:2rem; margin-bottom:1rem;">
<div id="linkt" class="center-align">"If you get tired, learn to rest, not to quit"</div>
<div id="linkt" class="center-align">-Banksy</div>
</div>
</ul>`;
  }

  // FUNCTION FOR THE SECOND MENU
  helpContent() {
    this.Layout.innerHTML = `<div class="menu-headinng">
    <h5>Help</h5>
    
    
    </div>
    <ul id="list-item-2" style="margin-top:2rem;">
    <h6>TIPS</h6>
    <div id="linkt">To change your name,just click the below button or change your focus, double click on to the screen for hiding the menu,or remove any element from the dashboard.</div>
<div style="margin-top:2rem;">
<a class="waves-effect waves-light btn" style="border-radius:20px;text-transform:capitalize; margin-top:1rem;"><i class="fas fa-plus" style="font-size:1rem;"></i>  Add Name</a>



</div>

    
    </ul>
    `;
  }

  newContent() {
    this.Layout.innerHTML = `<div class="menu-headinng center-align">
<h5>What's New</h5>
<div class="custom">Updates form the Momentum Team</div>

</div>
<div style="margin-top:2rem;">No Any Updates you are uptodate</div>
`;
  }
  aboutContent() {
    this.Layout.innerHTML = `
    <div id="about-layout" class="center-align">
<div id="aboutlayoutcontent"><img src="../img/rsz_ut.jpg" style="margin:auto; width:50%;border-radius:100%;">
<div id="aboutcontent" class="center-align">
<h5>Utkarsh Srivastava</h5>
<p id="linkt" class="font-para">Personal Dashboard v1.1.1</p>
<div id="linkt" style="margin-top:1.5rem;" class="flow-text">Thank you for your support!</div>

<ul class="list-item-2">
<li class="items">


</li>
<li class="items">
<div class="row">
<div class="col m3 l3 s3 linkstyle" id="linkt">Feedback</div>

<div class="col m3 l3 s3" id="linkt">Instagram</div>
<div class="col m3 l3 s3" id="linkt">Facebook</div>
<div class="col m3 l3 s3" id="linkt">Twitter</div>

</div>

</li>

<div class="font-para" style="margin-top:5rem;">Made with <i class="fas fa-heart"></i> in beautiful Lucknow, India . Terms & privacy</div>
</ul>


</div>
</div>




</div>


`;
  }
}
export const menu = new Menu();
