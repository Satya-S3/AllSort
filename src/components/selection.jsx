
function swap(el1, el2) {
      let temp = el1.style.height;
      el1.style.height = el2.style.height;
      el2.style.height = temp;
}


async function selection(getDelay){
      const ele = document.querySelectorAll(".bar");
  
      for(let i = 0; i < ele.length; i++){
          let min_index = i;
          ele[i].style.background = 'blue';
  
          for(let j = i+1; j < ele.length; j++){
              ele[j].style.background = 'red';
  
              await new Promise((resolve) => setTimeout(resolve, getDelay())); 
              if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                  
                  if(min_index !== i){
                      ele[min_index].style.background = 'cyan';
                  }
                  min_index = j;
              } 
              else{
                  ele[j].style.background = 'cyan';
              }   
          }
          await new Promise((resolve) => setTimeout(resolve, getDelay())); 
          
          swap(ele[min_index], ele[i]);
  
          ele[min_index].style.background = 'cyan';
          ele[i].style.background = 'green';
      }
  }
  
  
export default selection;