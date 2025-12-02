function decodeText() {
  const input = document.getElementById("input").value.toLowerCase();

  const decoder = {
    "/xar": " ",
    "/bja": "a",
    "/nop": "b",
    "/nga": "c",
    "/foz": "d",
    "/req": "e",
    "/bel": "f",
    "/sor": "g",
    "/nau": "h",
    "/xox": "i",
    "/vaf": "j",
    "/otv": "k",
    "/bvh": "l",
    "/cha": "m",
    "/tom": "n",
    "/ola": "o",
    "/xdf": "p",
    "/kkx": "q",
    "/xxk": "r",
    "/aab": "s",
    "/ccb": "t",
    "/oop": "u",
    "/nna": "v",
    "/hra": "w",
    "/jer": "x",
    "/rey": "y",
    "/zip": "z"
  };

  let output = "";
  let i = 0;
  while (i < input.length) {
    if (input[i] === "/") {
      // Take the next 4 characters as a token
      const token = input.slice(i, i + 4);
      if (decoder[token]) {
        output += decoder[token];
        i += 4;
        continue;
      }
    }
    // Fallback to single character
    output += input[i];
    i++;
  }

  document.getElementById("output").value = output;
}
