const helloText = document.querySelector(".code1 p");

if (helloText) {
  const originalText = helloText.textContent.trim();
  helloText.textContent = "";

  let charIndex = 0;
  let isTyping = true;

  const typeWriter = () => {
    if (isTyping && charIndex < originalText.length) {
      helloText.textContent += originalText.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter,90);
    } else if (!isTyping && charIndex > 0) {
      helloText.textContent = originalText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeWriter,180);
    } else {
      isTyping = !isTyping;
      setTimeout(typeWriter,540); 
    }
  };

  typeWriter();
}

const subtitle = document.querySelector(".code2 p");

if (subtitle) {
  subtitle.style.opacity = "0";
  subtitle.style.transition = "opacity 1.5s ease-in-out";
  setTimeout(() => {
    subtitle.style.opacity = "1";
  }, 1500);
}


document.addEventListener("DOMContentLoaded", () => {
  const animatedSections = document.querySelectorAll(
    ".about, .education-info, .skill-cert-info, .carrier, .professional, .choices, .my-choices, .total-details, .last-section"
  );

  animatedSections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      } else {
        entry.target.style.opacity = "0";
        entry.target.style.transform = "translateY(30px)";
      }
    });
  }, {
    threshold: 0.1
  });

  animatedSections.forEach(section => {
    observer.observe(section);
  });
});
