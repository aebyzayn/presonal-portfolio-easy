        
    // Start Nav Scorll ........
    let nav = document.querySelector('nav');

    window.addEventListener('scroll',()=>{
        nav.classList.toggle('nav-scroll',window.scrollY>0);
    });     
     
          
     // Start About Title Tab Active........
     let allTabTitles = document.querySelectorAll('.about-tabs-title h5');
       
       let removeActive  = ()=>{
           allTabTitles.forEach(tabtitle=>{
              tabtitle.classList.remove('active');
          });
       } 

       allTabTitles.forEach(tabtitle => {
           tabtitle.addEventListener('click',()=>{   
               removeActive();             
               tabtitle.classList.add('active');   
           });                     
       });   
       
       
        // Start About Tab ........
        let tab1 = document.querySelector('.about-tab1');
        let tab2 = document.querySelector('.about-tab2');
        let tab3 = document.querySelector('.about-tab3');
        

        let title1 = document.querySelector('.title1');
        let title2 = document.querySelector('.title2');
        let title3 = document.querySelector('.title3');

        title1.addEventListener('click',()=>{
           tab1.style.display='block';
           tab2.style.display='none';
           tab3.style.display='none';
        });

        title2.addEventListener('click',()=>{
           tab1.style.display='none';
           tab2.style.display='block';
           tab3.style.display='none';
        });  

        title3.addEventListener('click',()=>{
           tab1.style.display='none';
           tab2.style.display='none';
           tab3.style.display='block';
        });     
        
    // Start Phone Menu ........

    let open = document.querySelector('.open');
    let close = document.querySelector('.close');
    let navLinks = document.querySelector('.nav-links');

    open.addEventListener('click',()=>{
        navLinks.style.display='block';
        open.style.display='none';
        close.style.display='inline-block'
    });

    close.addEventListener('click',()=>{
        navLinks.style.display='none';
        open.style.display='inline-block';
        close.style.display='none'
    });