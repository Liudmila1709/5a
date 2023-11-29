const sliderItemNodes = document.getElementsByClassName('slider-item');


const clickLeft = () => {
    
   
    let prevIndex = null;
    for (let i = 0; i < sliderItemNodes.length; i += 1) {
     if (sliderItemNodes[i].classList.contains('selected')) {
        

      prevIndex = i - 1;
      if (prevIndex == - 1) {
      prevIndex = sliderItemNodes.length - 1  
      }
     }
    }
    // const selectedNodes = document.getElementsByClassName('selected');
    // const selectedNode = selectedNodes[0];
    const [selectedNode] = document.getElementsByClassName('selected');
    /**
     * "class1 class2".toggle('class3') => "class1 class2 class3"
     * "class1 class2".toggle('class2') => "class1 class3"
     */
    selectedNode.classList.toggle('selected');
    sliderItemNodes[prevIndex].classList.toggle('selected');
   };
   /**
    * setTimeout  -> викликає функцію після певного часу 1 раз
    * setInterval -> викликає функцію кожен раз як інтервал закінчиться
    */
   
   //setInterval(clickLeft, 1500); // 1500ms => 1.5s
   const clickRight = () => {
    

    let prevIndex = null;
    for (let i = 0; i < sliderItemNodes.length; i += 1) {
     if (sliderItemNodes[i].classList.contains('selected')) {
     prevIndex = i +1;
      if (prevIndex == 3) {
          prevIndex = sliderItemNodes.length - 3;
         }
        }
       }

const [selectedNode] = document.getElementsByClassName('selected');
    /**
     * "class1 class2".toggle('class3') => "class1 class2 class3"
     * "class1 class2".toggle('class2') => "class1 class3"
     */
    selectedNode.classList.toggle('selected');
    sliderItemNodes[prevIndex].classList.toggle('selected');    

}  
   document.getElementById('left')
    .addEventListener('click', clickLeft );

    document.getElementById('right')
    .addEventListener('click', clickRight);