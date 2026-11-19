const weights = [20, 24, 47, 71, 94, 118, 235];
const reference = {
  radish: [2.2, 2.7, 5.3, 7.9, 10.5, 13, 26],
  scallions: [1.1, 1.3, 2.6, 4, 5, 6.5, 13],
  flour: [0.18, 0.21, 0.42, 0.64, 0.85, 1, 2.12],
  shrimp: [0.6, 0.7, 1.4, 2, 2.7, 3.4, 6.8],
  garlic: [0.85, 1, 2, 3, 4, 5, 10],
  fish: [0.85, 1, 2, 3, 4, 5, 10],
  pepper: [1.3, 1.5, 3, 4.5, 6, 7.5, 15],
};

function multiplier(kg, key) {
  const values = reference[key];
  if (!values) return kg / 20;

  const upper = weights.findIndex(weight => weight >= kg);
  if (upper === 0) return kg / 20;
  if (upper === -1) {
    const last = weights.length - 1;
    return (kg / weights[last]) * (values[last] / values[0]);
  }

  const fraction = (kg - weights[upper - 1]) / (weights[upper] - weights[upper - 1]);
  return (values[upper - 1] + fraction * (values[upper] - values[upper - 1])) / values[0];
}

const ingredients = {
  cabbage: { name: '절임배추', amount: 20, unit: 'kg' },
  sliced: { name: '무 · 채 썰기용', amount: 1600, unit: 'g', key: 'radish' },
  greens: { name: '홍갓', amount: 400, unit: 'g' },
  scallions: { name: '쪽파', amount: 200, unit: 'g', key: 'scallions' },
  stock: { name: '멸치다시마육수', amount: 1300, unit: 'mL', ml: 1300 },
  flour: { name: '찹쌀가루', amount: 90, unit: 'g', key: 'flour', ml: 7 * 15 },
  pear: { name: '배', amount: 250, unit: 'g' },
  apple: { name: '사과', amount: 100, unit: 'g' },
  leek: { name: '대파 흰 부분', amount: 3, unit: '대' },
  blended: { name: '무 · 믹서용', amount: 500, unit: 'g', key: 'radish' },
  onion: { name: '양파', amount: 0.5, unit: '개' },
  shrimp: { name: '새우젓', amount: 200, unit: 'g', key: 'shrimp' },
  fresh: { name: '생새우', amount: 180, unit: 'g' },
  paste: { name: '식힌 찹쌀풀', note: '만든 분량 전부' },
  garlic: { name: '다진 마늘', amount: 400, unit: 'g', key: 'garlic' },
  ginger: { name: '다진 생강', amount: 100, unit: 'g' },
  fish: { name: '멸치액젓', amount: 800, unit: 'g', key: 'fish', ml: 700, showMilliliters: true },
  pepper: { name: '고춧가루', amount: 1100, unit: 'g', key: 'pepper', ml: 1800 },
  plum: { name: '매실청', amount: 4, unit: '큰술', ml: 60, showMilliliters: true },
  salt: { name: '소금 · 마지막 간 조절', amount: 50, unit: 'g', ml: 5 * 15 },
};

const groups = [
  ['재료', ['cabbage', 'sliced', 'greens', 'scallions']],
  ['찹쌀풀 만들 때', ['stock', 'flour']],
  ['믹서기에 갈 때', ['pear', 'apple', 'leek', 'blended', 'onion', 'shrimp', 'fresh', 'stock']],
  ['간 재료에 양념할 때', ['paste', 'garlic', 'ginger', 'fish', 'pepper', 'plum', 'salt']],
];

const steps = [
  [
    '절임배추 받기',
    '받은 절임배추는 속봉지를 닫은 채 상자를 뒤집어 서늘한 곳에 약 1시간 둡니다. 봉지 아래쪽에 모인 절임물이 배추에 고루 닿게 하는 과정입니다. 제품 안내에 별도 시간이 있으면 그 시간을 따르세요. 대관령원예농협은 추운 날 배송되어 윗부분이 덜 절여진 경우 2~6시간을 안내합니다.',
    [],
    [['김진옥 레시피 · 1시간', 'https://www.10000recipe.com/recipe/6967727'], ['대관령원예농협 · 제품 안내', 'https://www.skyvillage.co.kr/m/main.html']],
  ],
  [
    '배추 물 빼기',
    '상자를 뒤집어 둔 뒤 봉지를 열고, 깨끗한 채반 아래에 물받이를 놓습니다. 배추의 자른 면을 아래로 향하게 놓고 우선 1시간 물을 뺍니다. 물이 계속 떨어지면 상태를 보며 2시간 안팎까지 더 받쳐 두세요. 빼낸 물에 배추가 다시 잠기지 않게 물받이를 비웁니다. 물기를 빼는 동안 찹쌀풀과 채소를 준비하세요.',
    [],
    [['김진옥 레시피 · 채반에서 1시간', 'https://www.10000recipe.com/recipe/6967727'], ['절임배추 40kg 조리 예시 · 물받이와 채반', 'https://m.10000recipe.com/recipe/7065985']],
  ],
  [
    '찹쌀풀 쑤기',
    '아래에 표시된 찹쌀풀용 육수와 찹쌀가루를 사용합니다.',
    groups[1][1],
    [['김진옥 원본 레시피 · 찹쌀풀', 'https://www.10000recipe.com/recipe/7037475']],
    [
      '불을 켜기 전에 식힌 육수에 찹쌀가루를 넣고 거품기로 덩어리 없이 풉니다.',
      '중불에서 약 3~5분 저으며 끓입니다. 냄비 바닥과 가장자리까지 훑어 눌어붙지 않게 하고, 끓어오르면 불을 조금 낮춥니다.',
      '묽은 죽처럼 걸쭉해지고 주걱에 얇게 묻으면 불을 끕니다. 식으면서 더 되직해집니다.',
      '양념에 섞기 전에 완전히 식힙니다. 양이 많으면 냄비 바깥을 찬물에 받쳐 저어 식히면 시간을 줄일 수 있습니다.',
    ],
  ],
  [
    '홍갓과 쪽파 손질',
    '홍갓과 쪽파는 따로 씻고, 잎과 줄기를 약 2cm 길이로 썹니다.',
    ['greens', 'scallions'],
    [['김진옥 원본 레시피 · 홍갓과 쪽파', 'https://www.10000recipe.com/recipe/7037475'], ['새미네부엌 · 쪽파 손질법', 'https://semie.cooking/recipe-lab/archive/how-to-clean-green-onion']],
    [
      '홍갓은 묶음을 풀고 뿌리와 시든 잎을 떼어냅니다. 줄기가 갈라지는 밑동을 벌려 흙을 털고, 흐르는 물에 잎 뒷면과 줄기 사이를 씻습니다.',
      '홍갓을 약 2cm로 썬 뒤 한 번 더 헹구고 채반에 받칩니다. 밑동 가까운 줄기 사이에 흙이 남았는지 확인합니다.',
      '쪽파는 뿌리 끝을 자르고 누런 잎과 흙이 낀 겉껍질을 벗깁니다. 흰 밑동부터 물에 헹군 다음 초록 잎도 씻습니다.',
      '쪽파는 채반에서 겉물이 빠진 뒤 흰 부분과 초록 부분을 함께 약 2cm로 썹니다. 물기 뺀 홍갓과 쪽파는 김칫소에 넣을 때까지 따로 둡니다.',
    ],
  ],
  ['무 채 썰기', '채 썰기용 무를 씻어 반으로 나눈 다음 채를 썹니다.', ['sliced']],
  ['갈 재료 썰기', '배와 사과, 대파 흰 부분, 무, 양파를 믹서기에 들어갈 크기로 자릅니다.', ['pear', 'apple', 'leek', 'blended', 'onion']],
  ['믹서기로 갈기', '썰어 둔 재료에 생새우, 새우젓, 육수를 넣어 곱게 갑니다.', ['fresh', 'shrimp', 'stock']],
  ['김칫소 만들기', '간 재료와 식힌 찹쌀풀에 마늘, 생강, 액젓, 고춧가루, 매실청을 섞습니다. 무채와 홍갓, 쪽파를 버무린 뒤 소금을 조금씩 넣어 간을 맞춥니다.', groups[3][1]],
  ['양념 바르기', '배춧잎을 한 장씩 들춰 흰 줄기 위주로 김칫소를 고루 바릅니다.', []],
  ['김치통에 담기', '배추를 김치통에 차곡차곡 담습니다. 양념한 겉잎으로 위를 덮고 통을 밀봉합니다.', []],
];

const byId = id => document.getElementById(id);
const format = new Intl.NumberFormat('ko-KR', { maximumFractionDigits: 2 });
const weightInput = byId('weight');
let stepIndex = 0;

function amountText(value, unit) {
  if (unit === 'g' && value >= 1000) {
    return `${format.format(value / 1000)} kg`;
  }
  if (value > 0 && value < 0.01) return `0.01 ${unit} 미만`;
  return `${format.format(value)} ${unit}`;
}

function renderRows(ids, kg) {
  if (!ids.length) return '';
  return '<dl>' + ids.map(id => {
    const item = ingredients[id];
    const factor = kg ? multiplier(kg, item.key) : 0;
    const amount = item.note ?? (kg ? amountText(item.amount * factor, item.unit) : '—');
    const showVolume = kg && item.ml;
    const milliliters = showVolume && item.showMilliliters
      ? ` · 약 ${amountText(item.ml * factor, 'mL')}` : '';
    const cups = showVolume ? '약 ' + amountText(item.ml * factor / 180, '종이컵') : '';
    const spoons = showVolume && item.unit !== '큰술'
      ? ' · ' + amountText(item.ml * factor / 15, '큰술') : '';
    return `<div class="row"><dt>${item.name}</dt><dd>${amount}${milliliters}${showVolume ? `<small>${cups}${spoons}</small>` : ''}</dd></div>`;
  }).join('') + '</dl>';
}

function currentWeight() {
  return weightInput.validity.valid && Number.isFinite(weightInput.valueAsNumber)
    ? weightInput.valueAsNumber : null;
}

function renderStep() {
  const [title, description, ids, sources = [], instructions = []] = steps[stepIndex];
  const instructionList = instructions.map(line => `<li>${line}</li>`).join('');
  const sourceLinks = sources.map(([label, url]) => `<li><a href="${url}">${label}</a></li>`).join('');
  byId('step-count').textContent = `${stepIndex + 1} / ${steps.length} 단계`;
  byId('step').innerHTML = `<h3>${title}</h3><p>${description}</p>${renderRows(ids, currentWeight())}${instructionList ? `<ol>${instructionList}</ol>` : ''}${sourceLinks ? `<ul>${sourceLinks}</ul>` : ''}`;
  Array.from(byId('step-list').children).forEach((button, index) => {
    button.setAttribute('aria-pressed', index === stepIndex);
  });
  byId('prev').disabled = stepIndex === 0;
  byId('next').textContent = stepIndex === steps.length - 1 ? '준비로 돌아가기' : '다음';
}

function showSection(cooking, focusTitle = false) {
  byId('prep').hidden = cooking;
  byId('cook').hidden = !cooking;
  byId('prep-tab').setAttribute('aria-pressed', !cooking);
  byId('cook-tab').setAttribute('aria-pressed', cooking);
  if (focusTitle) byId(cooking ? 'cook-title' : 'prep-title').focus();
}

function renderAmounts() {
  const kg = currentWeight();
  weightInput.setAttribute('aria-invalid', !kg);
  byId('weight-status').textContent = !kg ? '0.1 kg 이상 입력하세요'
    : kg === 20 ? '20 kg 원본 계량'
    : kg < 20 || kg > 235 ? '표 범위 밖 · 비례 추정' : '중량별 계량 적용';
  byId('ingredients').innerHTML = groups.map(([title, ids]) =>
    `<article><h3>${title}</h3>${renderRows(ids, kg)}</article>`).join('');
  renderStep();
}

steps.forEach(([title], index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = index + 1;
  button.setAttribute('aria-label', `${index + 1}단계 ${title}`);
  button.onclick = () => { stepIndex = index; renderStep(); };
  byId('step-list').append(button);
});
byId('prep-tab').onclick = () => showSection(false);
byId('cook-tab').onclick = () => showSection(true);
byId('start').onclick = () => showSection(true, true);
byId('prev').onclick = () => { stepIndex -= 1; renderStep(); };
byId('next').onclick = () => {
  if (stepIndex === steps.length - 1) showSection(false, true);
  else { stepIndex += 1; renderStep(); }
};
weightInput.addEventListener('input', renderAmounts);
renderAmounts();
