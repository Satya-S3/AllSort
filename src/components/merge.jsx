async function merge(l, r, getDelay, ele) {
      if (l >= r) return;

      const m = l + Math.floor((r - l) / 2);
      await merge(l, m, getDelay, ele);
      await merge(m + 1, r, getDelay, ele);
      await mergeSort(l, m, r, getDelay, ele);
}

async function mergeSort(low, mid, high, getDelay, ele) {
      const n1 = mid - low + 1;
      const n2 = high - mid;

      let left = new Array(n1);
      let right = new Array(n2);

      for (let i = 0; i < n1; i++) {
            await new Promise((resolve) => setTimeout(resolve, getDelay()));
            ele[low + i].style.background = 'orange';
            left[i] = ele[low + i].style.height;
      }
      for (let i = 0; i < n2; i++) {
            await new Promise((resolve) => setTimeout(resolve, getDelay()));
            ele[mid + 1 + i].style.background = 'yellow';
            right[i] = ele[mid + 1 + i].style.height;
      }

      await new Promise((resolve) => setTimeout(resolve, getDelay()));
      let i = 0,
            j = 0,
            k = low;

      while (i < n1 && j < n2) {
            await new Promise((resolve) => setTimeout(resolve, getDelay()));
            if (parseInt(left[i]) <= parseInt(right[j])) {
                  ele[k].style.height = left[i];
                  i++;
            } else {
                  ele[k].style.height = right[j];
                  j++;
            }
            ele[k].style.background =
                  n1 + n2 === ele.length ? 'green' : 'lightgreen';
            k++;
      }

      while (i < n1) {
            await new Promise((resolve) => setTimeout(resolve, getDelay()));
            ele[k].style.height = left[i];
            ele[k].style.background =
                  n1 + n2 === ele.length ? 'green' : 'lightgreen';
            i++;
            k++;
      }

      while (j < n2) {
            await new Promise((resolve) => setTimeout(resolve, getDelay()));
            ele[k].style.height = right[j];
            ele[k].style.background =
                  n1 + n2 === ele.length ? 'green' : 'lightgreen';
            j++;
            k++;
      }
}

export default merge;