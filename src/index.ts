const button = document.querySelector('[type="button"]') as HTMLButtonElement;
const url = 'https://api.adviceslip.com/advice';

button.addEventListener('click', onclickEvent);

interface AdviceObj {
  slip: {
    id: number,
    advice: string;
  }
}

async function onclickEvent() {
  addLoader(true);
  let advice = await fetchAdvice(url);
  setTimeout(() => {
    addLoader(false);
    renderContent(advice);
  }, 1000);
}

async function fetchAdvice(url: string): Promise<AdviceObj> {
  let response = await fetch(url);
  return response.json();
}

function renderContent(obj: AdviceObj): void {
  let elem = document.querySelector('.card > p') as HTMLParagraphElement;
  let heading = document.querySelector('.card > h1') as HTMLHeadingElement;
  heading.innerHTML = `ADVICE #${obj.slip.id}`;
  elem.innerHTML = `<q>${obj.slip.advice}</q>`
}

function addLoader(isLoader: boolean): void {
  let elem = document.querySelector('.card > p') as HTMLParagraphElement;
  let heading = document.querySelector('.card > h1') as HTMLHeadingElement;
  let loader = document.querySelector('.card > .loader-container') as HTMLDivElement;

  if (isLoader) {
    loader.classList.remove('hidden');
  } else {
    loader.classList.add('hidden');
  }

  elem.innerHTML = '';
  heading.innerHTML = '';
}

