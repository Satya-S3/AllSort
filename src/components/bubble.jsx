
function swap(el1, el2) {
      let temp = el1.style.height;
      el1.style.height = el2.style.height;
      el2.style.height = temp;
}
async function bubble(getDelay) {
      const ele = document.querySelectorAll(".bar");

      for (let i = 0; i < ele.length - 1; i++) {
            for (let j = 0; j < ele.length - i - 1; j++) {
                  ele[j].style.background = 'red';
                  ele[j + 1].style.background = 'red';

                  if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                        await new Promise((resolve) => setTimeout(resolve, getDelay())); 
                        swap(ele[j], ele[j + 1]);
                  }
                  ele[j].style.background = 'blue';
                  ele[j + 1].style.background = 'blue';
            }
            ele[ele.length - i - 1].style.background = 'green';
      }
      ele[0].style.background = 'green';
}

export default bubble;


