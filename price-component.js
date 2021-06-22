"use strict";

const rangeElement = document.getElementById("price-range");
const pageView = document.getElementById("pageview");
const boldFigure = document.getElementsByClassName("bold-figure");
const monthOrYear = document.getElementsByClassName("month-year");
const yearlyToggle = document.getElementById("yearly-toggle");

const monthlyPriceList = [8, 12, 16, 24, 36];
const yearlyPriceList = monthlyPriceList.map((e) => {
  return e * 12 * 0.75;
});
function changePrice() {
  let value =
    ((rangeElement.value - rangeElement.min) /
      (rangeElement.max - rangeElement.min)) *
    100;
  rangeElement.style.background = `linear-gradient(to right, var(--soft-cyan) 0%, var(--strong-cyan) ${value}%, var(--light-grayish-blue) ${value}% , var(--light-grayish-blue) 100%)`;

  if (yearlyToggle.checked) {
    if (value === 1) {
      pageView.innerText = "10K pageviews";
      for (let i = 0; i < boldFigure.length; i++) {
        boldFigure[i].innerText = `$${yearlyPriceList[0]}.00`;
        monthOrYear[i].innerText = `year`;
      }
    } else if (value === 5) {
      pageView.innerText = "50K pageviews";
      for (let i = 0; i < boldFigure.length; i++) {
        boldFigure[i].innerText = `$${yearlyPriceList[1]}.00`;
        monthOrYear[i].innerText = `year`;
      }
    } else if (value === 10) {
      pageView.innerText = "100K pageviews";
      for (let i = 0; i < boldFigure.length; i++) {
        boldFigure[i].innerText = `$${yearlyPriceList[2]}.00`;
        monthOrYear[i].innerText = `year`;
      }
    } else if (value === 50) {
      pageView.innerText = "500K pageviews";
      for (let i = 0; i < boldFigure.length; i++) {
        boldFigure[i].innerText = `$${yearlyPriceList[3]}.00`;
        monthOrYear[i].innerText = `year`;
      }
    } else if (value === 100) {
      pageView.innerText = "1m pageviews";
      for (let i = 0; i < boldFigure.length; i++) {
        boldFigure[i].innerText = `$${yearlyPriceList[4]}.00`;
        monthOrYear[i].innerText = `year`;
      }
    }
  } else {
    if (value === 1) {
      pageView.innerText = "10K pageviews";
      for (let i = 0; i < boldFigure.length; i++) {
        boldFigure[i].innerText = `$${monthlyPriceList[0]}.00 `;
        monthOrYear[i].innerText = ` month`;
      }
    } else if (value === 5) {
      pageView.innerText = "50K pageviews";
      for (let i = 0; i < boldFigure.length; i++) {
        boldFigure[i].innerText = `$${monthlyPriceList[1]}.00`;
        monthOrYear[i].innerText = ` month`;
      }
    } else if (value === 10) {
      pageView.innerText = "100K pageviews";
      for (let i = 0; i < boldFigure.length; i++) {
        boldFigure[i].innerText = `$${monthlyPriceList[2]}.00`;
        monthOrYear[i].innerText = ` month`;
      }
    } else if (value === 50) {
      pageView.innerText = "500K pageviews";
      for (let i = 0; i < boldFigure.length; i++) {
        boldFigure[i].innerText = `$${monthlyPriceList[3]}.00`;
        monthOrYear[i].innerText = ` month`;
      }
    } else if (value === 100) {
      pageView.innerText = "1m pageviews";
      for (let i = 0; i < boldFigure.length; i++) {
        boldFigure[i].innerText = `$${monthlyPriceList[4]}.00`;
        monthOrYear[i].innerText = ` month`;
      }
    }
  }
}
yearlyToggle.addEventListener("change", changePrice);

rangeElement.addEventListener("input", changePrice);
