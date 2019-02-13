const code = {
  A: 'KA',
  B: 'ZU',
  C: 'MI',
  D: 'TE',
  E: 'KU',
  F: 'LU',
  G: 'JI',
  H: 'RI',
  I: 'KI',
  J: 'ZUS',
  K: 'ME',
  L: 'TA',
  M: 'RIN',
  N: 'TO',
  O: 'MO',
  P: 'NO',
  Q: 'KE',
  R: 'SHI',
  S: 'ARI',
  T: 'CHI',
  U: 'DO',
  V: 'RU',
  W: 'MEI',
  X: 'NA',
  Y: 'FU',
  Z: 'ZI'
};

const update = () => {
  let text = $('#input')
    .val()
    .toUpperCase();
  text = text.replace('É', 'E');
  let encrypted = '';
  const min = 'A'.charCodeAt(0);
  const max = 'Z'.charCodeAt(0);
  for (let i = 0; i < text.length; i++) {
    const letter = text.charCodeAt(i);
    if (text[i] === ' ') {
      encrypted += `<span class='space' />`;
    } else if (letter >= min && letter <= max) {
      encrypted += code[text[i]];
    } else if (text[i] === '\n') {
      encrypted += `<br />`;
    } else {
      encrypted += text[i];
    }
  }
  $('#result').html(encrypted);
};

$(() => {
  $('#input').change(update);
  $('#input').keyup(update);
});
