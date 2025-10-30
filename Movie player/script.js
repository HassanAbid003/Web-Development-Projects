// let box = document.getElementById("advertise");
//     let position = 0;

//     // Animation loop using setInterval
//     let move = setInterval(function() {      
//         if (position >= 1100) {
//         // clearInterval(move); // stop the animation
//             position = 0; // reset to start again

//       } else {
//         position--;
//         box.style.left = position + "px";
//       }
//     }, 30); // run every 5 milliseconds









const slider = document.getElementById("advertise");
    let position = 0;

    function animate() {
      position -= 1; // Speed: lower value = slower
      // Reset after one full loop
      if (position <= -slider.scrollWidth / 2) {
        position = 0;
      }
      slider.style.left = position + "px";
      requestAnimationFrame(animate);
    }

    animate(); // Start animation






plugins: [
  require('tailwind-scrollbar'),
]


