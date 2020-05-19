const PREV = "prev";
const ACTIVE = "active";
const NEXT = "next";

const first = document.querySelector(".slide:nth-child(1)");

const slideEvent = () => {
  // 매 함수 호출시마다 브라우저 width 길이를 업뎃함 -> 애니메이션 변수로 사용하기떄문
  const WINDOW = window.innerWidth;
  const activeEl = document.getElementById(ACTIVE);
  const nextEl = document.getElementById(NEXT);
  const prevEl = document.getElementById(PREV);
  if (activeEl) {
    if (prevEl) {
      prevEl.removeAttribute("id");
    }
    activeEl.id = PREV;
    nextEl.id = ACTIVE;
    activeEl.animate(
      // 실행 시점에선 nextEl은 Prev 상태의 Element를 가리킴
      {
        transform: [`translateX(0)`, `translateX(-${WINDOW}px)`],
      },
      1000
    );
    nextEl.animate(
      // 실행 시점에선 nextEl은 현재 Active 상태의 Element를 가리킴
      {
        transform: [`translateX(${WINDOW}px)`, `translateX(0)`],
      },
      1000
    );
    if (!nextEl.nextElementSibling) {
      first.id = NEXT;
    } else {
      nextEl.nextElementSibling.id = NEXT;
    }
  }
};

const init = () => {
  // absolute해준 slide들이 오름차순으로 정렬되어있기때문에 onload되었을때 처음 Element를 맨 위로 올려줌
  first.id = ACTIVE;
  first.nextElementSibling.id = NEXT;
  setInterval(() => slideEvent(), 3500);
};

init();
