const update = () => {
  let text = $('#input').val().toUpperCase();
  text = text.replace('É', 'E');
  let encrypted = '';
  const min = 'A'.charCodeAt(0);
  const max = 'Z'.charCodeAt(0);
  for (let i = 0; i < text.length; i++) {
    const letter = text.charCodeAt(i);
    if (text[i] === ' ') {
      encrypted += `<span class='space' />`;
    } else if (letter >= min && letter <= max) {
      // console.log(`${text[i]} - ${letter} - ${letter - min} - ${cipher[letter - min]}`);
      encrypted += cipher[letter - min];
    } else {
      encrypted += text[i];
    }
  }
  $('#result').html(encrypted);
};

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const cipher = [
  '😀',
  '😡',
  '😺',
  '🎅',
  '💩',
  '👅',
  '🧦',
  '👍🏼',
  '👶🏾',
  '🐶',
  '🐲',
  '🐯',
  '🦁',
  '🐢',
  '🍟',
  '🏀',
  '🚴',
  '🚗',
  '📱',
  '🎁',
  '🔨',
  '❤️',
  '🕘',
  '🚀',
  '✈️',
  '🛴'
];
const displayCipher = () => {
  $('.cipher tbody').html('');
  let content = '<tr>';
  for (let i = 0; i < cipher.length; i++) {
    content += `<td>${cipher[i]}</td>`;
  }
  content += '</tr><tr>';
  for (let i = 0; i < cipher.length; i++) {
    content += `<td>${String.fromCharCode('A'.charCodeAt(0) + i)}</td>`;
  }
  content += '</tr>';
  $('.cipher tbody').append(content);
};

$(() => {
  displayCipher();
  $('#shuffle').click(ev => {
    ev.preventDefault();
    shuffle(cipher);
    displayCipher();
    update();
  });
  $('#input').change(update);
  $('#input').keyup(update);
});
