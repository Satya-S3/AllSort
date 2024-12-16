
function swap(el1, el2) {
      let temp = el1.style.height;
      el1.style.height = el2.style.height;
      el2.style.height = temp;
}


async function quick(l, r,getDelay,ele){
      if(l < r){
          let pivot_index = await partition(l, r,getDelay,ele);
          await quick(l, pivot_index - 1,getDelay,ele);
          await quick(pivot_index + 1, r,getDelay,ele);
      }
      else if(l >= 0 && r >= 0 && l < ele.length && r <ele.length){
              ele[r].style.background = 'green';
              ele[l].style.background = 'green';
      }
  }
  
  
  async function partition(l, r,getDelay,ele){
  
      let i = l - 1;
      ele[r].style.background = 'red';
  
      for(let j = l; j <= r - 1; j++){
          ele[j].style.background = 'yellow';
          await new Promise((resolve) => setTimeout(resolve, getDelay())); 
  
          if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
              i++;
              swap(ele[i], ele[j]);
  
              ele[i].style.background = 'orange';
              if(i != j) ele[j].style.background = 'orange';
  
              await new Promise((resolve) => setTimeout(resolve, getDelay())); 
          }
          else{
              ele[j].style.background = 'pink';
          }
      }
      i++; 
      await new Promise((resolve) => setTimeout(resolve, getDelay())); 
      swap(ele[i], ele[r]);
  
      ele[r].style.background = 'pink';
      ele[i].style.background = 'green';
  
      await new Promise((resolve) => setTimeout(resolve, getDelay())); 
      
      for(let k = 0; k < ele.length; k++){
          if(ele[k].style.background != 'green')
              ele[k].style.background = 'cyan';
      }
  
      return i;
  }
  
  
  
export default quick;