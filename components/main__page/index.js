const image = document.getElementById("imagename");

image.addEventListener("click", () => {
  // Увеличиваем размер и уменьшаем прозрачность
  image.style.transform = "scale(1.2)";
  image.style.opacity = "0.7";

  // Возвращаем картинку в исходное состояние через 500 мс
  setTimeout(() => {
    image.style.transform = "scale(1)";
    image.style.opacity = "1";
  }, 500);
});

// анимация иконки телефона
const phoneImage = document.getElementById("imagephone");

phoneImage.addEventListener("click", () => {
  // Увеличение и поворот на 360 градусов
  phoneImage.style.transform = "scale(1.5) rotate(360deg)";

  // Возврат к исходным параметрам через 500 мс
  setTimeout(() => {
    phoneImage.style.transform = "scale(1) rotate(0deg)";
  }, 500);
});
