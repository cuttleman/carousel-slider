const first = document.querySelector(".slide:nth-child(1)");

const nextSlideEvent = (duration) => {
  // 매 함수 호출시마다 브라우저 width 길이를 업뎃함 -> 애니메이션 변수로 사용하기떄문
  const WINDOW = window.innerWidth;
  const PREV = "prev";
  const ACTIVE = "active";
  const NEXT = "next";
  const activeEl = document.getElementById(ACTIVE);
  const nextEl = document.getElementById(NEXT);
  const prevEl = document.getElementById(PREV);
  if (!activeEl) {
    first.id = ACTIVE;
    first.style.zIndex = 1;
    first.nextElementSibling.id = NEXT;
  } else {
    if (prevEl) {
      prevEl.removeAttribute("id");
    }
    activeEl.id = PREV;
    nextEl.id = ACTIVE;
    first.removeAttribute("style");
    activeEl.animate(
      // 실행 시점에선 nextEl은 Prev 상태의 Element를 가리킴
      {
        transform: [`translateX(0)`, `translateX(-${WINDOW}px)`],
        zIndex: [1, 1],
      },
      { duration: duration ? duration : 0, fill: "forwards" }
    );
    nextEl.animate(
      // 실행 시점에선 nextEl은 현재 Active 상태의 Element를 가리킴
      {
        transform: [`translateX(${WINDOW}px)`, `translateX(0)`],
        zIndex: [1, 2],
      },
      { duration: duration ? duration : 0, fill: "forwards" }
    );
    if (!nextEl.nextElementSibling) {
      first.id = NEXT;
    } else {
      nextEl.nextElementSibling.id = NEXT;
    }
  }
};

nextSlideEvent(1000);
// window.addEventListener("click", () => nextSlideEvent(1000));
setInterval(() => nextSlideEvent(1000), 3500);
