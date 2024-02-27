 // For Inner Scrollers
 const scrollersInner = document.querySelectorAll(".dingus .scroller[data-direction='left']");
 addAnimationInner();

 function addAnimationInner() {
     scrollersInner.forEach((scroller) => {
         // add data-animated="true" to every `.scroller` on the page
         scroller.setAttribute("data-animated", true);

         // Make an array from the elements within `.scroller-inner`
         const scrollerInner = scroller.querySelector(".scroller__inner");
         const scrollerContentInner = Array.from(scrollerInner.children);

         // Get the last original item
         const lastOriginalItem = scrollerContentInner[scrollerContentInner.length - 1];

         // Add three additional loops of items
         for (let i = 0; i < 1; i++) {
             scrollerContentInner.forEach((item, index) => {
                 const duplicatedItem = item.cloneNode(true);
                 duplicatedItem.setAttribute("aria-hidden", true);
                 scrollerInner.insertBefore(duplicatedItem, lastOriginalItem.nextSibling);
             });
         }
     });
 }  


 // For Outer Scrollers
 const scrollersOuter = document.querySelectorAll(".dingus .scroller[data-direction='right']");
 addAnimationOuter();

 function addAnimationOuter() {
     scrollersOuter.forEach((scroller) => {
         // add data-animated="true" to every `.scroller` on the page
         scroller.setAttribute("data-animated", true);

         // Make an array from the elements within `.scroller-outer`
         const scrollerOuter = scroller.querySelector(".scroller__outer");
         const scrollerContentOuter = Array.from(scrollerOuter.children);

         // Get the last original item
         const lastOriginalItem = scrollerContentOuter[scrollerContentOuter.length - 1];

         // Add three additional loops of items
         for (let i = 0; i < 1; i++) {
             scrollerContentOuter.forEach((item, index) => {
                 const duplicatedItem = item.cloneNode(true);
                 duplicatedItem.setAttribute("aria-hidden", true);
                 scrollerOuter.insertBefore(duplicatedItem, lastOriginalItem.nextSibling);
             });
         }
     });
 }