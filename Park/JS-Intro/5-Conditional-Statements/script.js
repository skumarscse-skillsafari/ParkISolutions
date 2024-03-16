let i = 10;
do {
  // if (i == 5) break;

  if (i == 5) {
    // 5 == 5
    i--;
    continue;
  }
  console.log(i); // 5
  i--; // 6
} while (i >= 1); //
