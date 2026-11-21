const weights = [20, 24, 47, 71, 94, 118, 235];
const reference = {
  radish: [2.2, 2.7, 5.3, 7.9, 10.5, 13, 26],
  scallions: [1.1, 1.3, 2.6, 4, 5, 6.5, 13],
  shrimp: [0.6, 0.7, 1.4, 2, 2.7, 3.4, 6.8],
  garlic: [0.85, 1, 2, 3, 4, 5, 10],
  fish: [0.85, 1, 2, 3, 4, 5, 10],
  pepper: [1.3, 1.5, 3, 4.5, 6, 7.5, 15],
  sugar: [0.3, 0.35, 0.7, 1, 1.4, 1.8, 3.5],
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
  water: { name: '물 · 육수용', range: [3, 4], unit: 'L' },
  pollock: { name: '황태 대가리', amount: 3, unit: '개' },
  stockLeek: { name: '굵은 대파 · 육수용', amount: 1, unit: '대', thin: 2 },
  kelp: { name: '다시마', amount: 30, unit: 'g' },
  stockRadish: { name: '무 · 육수용', amount: 400, unit: 'g' },
  rice: { name: '불린 찹쌀', amount: 340, unit: 'g', cups: 2 },
  radish: { name: '무 · 채 썰기용', amount: 3, unit: '개', key: 'radish' },
  pepper: { name: '고춧가루', amount: 850, unit: 'g', cups: 10, key: 'pepper' },
  greens: { name: '갓', amount: 500, unit: 'g', hint: '청갓 또는 홍갓' },
  scallions: { name: '쪽파', amount: 1000, unit: 'g', key: 'scallions' },
  leek: { name: '굵은 대파 · 김칫소용', amount: 2, unit: '대', thin: 3 },
  fish: { name: '멸치액젓', amount: 1100, unit: 'g', cups: 5, key: 'fish', liquid: true },
  shrimp: { name: '새우젓', amount: 950, unit: 'g', cups: 4, key: 'shrimp' },
  fresh: { name: '생새우', amount: 500, unit: 'g', cups: 3 },
  garlic: { name: '다진 마늘', amount: 800, unit: 'g', cups: 4, key: 'garlic' },
  ginger: { name: '다진 생강', amount: 60, unit: 'g', spoons: 4 },
  sugar: { name: '백설탕', amount: 115, unit: 'g', spoons: 8, key: 'sugar' },
  salt: { name: '천일염', range: [1, 2], unit: '큰술', hint: '선택 · 마지막에 배추와 함께 간을 보고 추가' },
  msg: { name: '미원', amount: 1, unit: '큰술', hint: '선택 · 조미료를 넣지 않은 새우젓을 쓸 때' },
};
const stockIngredients = ['water', 'pollock', 'stockLeek', 'kelp', 'stockRadish'];
const greensIngredients = ['greens', 'scallions', 'leek'];
const seasoning = ['fish', 'shrimp', 'fresh', 'garlic', 'ginger', 'sugar'];
const optionalSeasoning = ['salt', 'msg'];
const groups = [
  ['배추 준비', ['cabbage']],
  ['황태 육수', stockIngredients],
  ['찹쌀죽', ['rice']],
  ['무채와 채소', ['radish', 'pepper', ...greensIngredients]],
  ['김칫소 양념', [...seasoning, ...optionalSeasoning]],
];
const videoUrl = 'https://www.youtube.com/watch?v=yCAmXF76lxs';
const steps = [
  ['배추 상자 뒤집기', 18, ['cabbage'], [
    '받은 절임배추 상자를 물이 흘러도 되는 서늘한 곳에 뒤집어 약 1~2시간 둡니다. 아래쪽에 고인 절임물이 배추에 고루 닿도록 합니다.',
  ]],
  ['황태 육수 끓이기', 62, stockIngredients, [
    '냄비에 물과 황태 대가리, 대파, 다시마, 무를 넣습니다.',
    '끓기 시작하면 중약불로 줄여 약 30분 우립니다. 다시마도 다른 재료와 함께 우립니다.',
    '불을 끄고 체로 건더기를 걸러 육수만 남깁니다.',
  ]],
  ['황태 육수로 찹쌀죽 쑤기', 128, ['rice'], [
    '찹쌀은 30분 이상 불려 물기를 빼고, 건더기를 거른 황태 육수에 넣습니다.',
    '약 15분 끓이면서 쌀알이 퍼져 부드러워지는지 확인합니다. 눌어붙기 시작하면 저어 주고, 국물이 먼저 줄면 물을 조금 더 넣어 끓입니다.',
    '쌀알이 부드럽게 익으면 불을 끄고, 양념에 넣기 전까지 온기가 없도록 식힙니다.',
  ]],
  ['절임배추 물 빼기', 224, ['cabbage'], [
    '채반에 배추를 뒤집어 놓고 1~2시간 물을 뺍니다.',
    '헹굴 필요가 있으면 영상의 방법대로 소금물로 가볍게 헹군 뒤 물을 뺍니다.',
  ]],
  ['무채에 고춧가루 버무리기', 271, ['radish', 'pepper'], [
    '무를 채 썰어 고춧가루를 고루 버무립니다. 다른 채소를 손질하는 동안 두어 색이 배게 합니다.',
  ]],
  ['갓·쪽파·대파 손질하기', 305, greensIngredients, [
    '갓은 밑동을 다듬고 깨끗이 씻어 물기를 뺀 뒤 잘게 썹니다.',
    '쪽파는 흰 부분을 잘게, 초록 부분은 조금 길게 썹니다. 대파는 길이로 반을 갈라 어슷하게 썹니다.',
  ]],
  ['김칫소 버무리기', 388, seasoning, [
    '고춧가루를 입힌 무채에 멸치액젓, 새우젓, 생새우, 다진 마늘, 다진 생강, 백설탕을 넣어 섞습니다.',
    '식힌 찹쌀죽과 손질한 갓·쪽파·대파를 넣고 고루 버무립니다.',
  ]],
  ['천일염과 미원으로 간 조절하기', 453, optionalSeasoning, [
    '생새우가 들어간 김칫소는 소량만 따로 덜어 충분히 익혀 식힌 다음, 절임배추 속잎 한 조각과 함께 맛봅니다.',
    '간이 맞으면 천일염을 생략합니다. 싱거우면 표시된 범위에서 조금씩 섞어 조절합니다.',
    '새우젓에 조미료가 들어 있지 않고 감칠맛을 더하고 싶을 때 미원을 넣습니다.',
  ]],
  ['배추에 속을 넣고 보관하기', 545, [], [
    '안쪽 잎부터 한 장씩 들어 김칫소를 바르고, 흰 줄기 밑부분에 넉넉히 넣습니다.',
    '겉잎으로 감싸 김치통에 담고, 김장용 비닐을 윗면에 밀착시켜 공기 접촉을 줄입니다.',
    '영상에서는 서늘한 곳에서 약 24시간 익힌 뒤 김치냉장고로 옮깁니다.',
  ]],
];
const byId = id => document.getElementById(id);
const sections = [['ingredients-tab', 'shopping'], ['prep-tab', 'prep'], ['cook-tab', 'cook']];
const format = new Intl.NumberFormat('ko-KR', { maximumFractionDigits: 2 });
const boxInput = byId('box-count');
const kilogramsPerBox = 20;
const checklistKey = 'kimchi-seoul-checklist-v1';
const checkedItems = loadChecklist();
let stepIndex = 0;

function loadChecklist() {
  try {
    const saved = JSON.parse(localStorage.getItem(checklistKey));
    if (Array.isArray(saved)) return new Set(saved);
  } catch {
    // The checklist still works for this visit when storage is unavailable.
  }
  return new Set();
}

function saveChecklist() {
  try {
    localStorage.setItem(checklistKey, JSON.stringify([...checkedItems]));
  } catch {
    // Keep the current checklist usable in memory.
  }
}

function checkItem(key, label) {
  return `<label class="check-item"><input type="checkbox" data-check="${key}"${checkedItems.has(key) ? ' checked' : ''}><span>${label}</span></label>`;
}

function amountText(value, unit) {
  if (unit === 'g' && value >= 1000) {
    return `${format.format(value / 1000)} kg`;
  }
  if (value > 0 && value < 0.01) return `0.01 ${unit} 미만`;
  return `${format.format(value)} ${unit}`;
}

function renderRows(ids, kg, scope) {
  if (!ids.length) return '';
  return '<dl>' + ids.map(id => {
    const item = ingredients[id];
    const factor = kg ? multiplier(kg, item.key) : 0;
    const amount = kg ? scaledAmount(item, factor) : '—';
    const measure = [];
    if (kg && item.cups) measure.push(amountText(item.cups * factor, '컵'));
    if (kg && item.liquid) measure.push(amountText(item.cups * 200 * factor, 'mL'));
    if (kg && item.spoons) measure.push(amountText(item.spoons * factor, '큰술'));
    const hint = kg && item.thin ? `가는 대파라면 ${amountText(item.thin * factor, '대')}` : item.hint;
    const label = `${item.name}${hint ? `<small>${hint}</small>` : ''}`;
    return `<div class="row"><dt>${checkItem(`${scope}:${id}`, label)}</dt><dd>${amount}${measure.length ? `<small>${measure.join(' · ')}</small>` : ''}</dd></div>`;
  }).join('') + '</dl>';
}

function scaledAmount(item, factor) {
  if (!item.range) return amountText(item.amount * factor, item.unit);
  const [min, max] = item.range.map(value => value * factor);
  return `${format.format(min)}~${amountText(max, item.unit)}`;
}

function currentWeight() {
  const kg = boxInput.valueAsNumber * kilogramsPerBox;
  return boxInput.validity.valid && Number.isFinite(kg) ? kg : null;
}

function renderStep() {
  const [title, seconds, ids, instructions] = steps[stepIndex];
  const scope = `cook:${stepIndex}`;
  const instructionList = instructions.map((line, index) => `<li>${checkItem(`${scope}:instruction:${index}`, line)}</li>`).join('');
  byId('step-count').textContent = `${stepIndex + 1} / ${steps.length} 단계`;
  byId('step').innerHTML = `<h3>${checkItem(`${scope}:done`, title)}</h3>${renderRows(ids, currentWeight(), scope)}<ol>${instructionList}</ol><p><a href="${videoUrl}&amp;t=${seconds}s">영상에서 이 단계 보기</a></p>`;
  Array.from(byId('step-list').children).forEach((button, index) => {
    button.setAttribute('aria-pressed', index === stepIndex);
  });
  byId('prev').disabled = stepIndex === 0;
  byId('next').textContent = stepIndex === steps.length - 1 ? '준비로 돌아가기' : '다음';
}

function showSection(section, focusTitle = false) {
  for (const [tab, panel] of sections) {
    const active = panel === section;
    byId(panel).hidden = !active;
    byId(tab).setAttribute('aria-pressed', active);
  }
  if (focusTitle) byId(`${section}-title`).focus();
}

function renderAmounts() {
  const kg = currentWeight();
  boxInput.setAttribute('aria-invalid', !kg);
  const estimate = kg && (kg < 20 || kg > 235) ? ' · 비례 추정' : '';
  byId('weight-status').textContent = kg
    ? `총 ${amountText(kg, 'kg')}${estimate}`
    : '0.01박스 이상 입력하세요';
  byId('shopping-list').innerHTML = renderRows(groups.flatMap(([, ids]) => ids), kg, 'shopping');
  byId('ingredients').innerHTML = groups.map(([title, ids], index) => {
    const instructions = index === 1 || index === 2 ? steps[index][3] : [];
    const list = instructions.map((line, item) => `<li>${checkItem(`prep:${index}:instruction:${item}`, line)}</li>`).join('');
    return `<article><h3>${title}</h3>${renderRows(ids, kg, `prep:${index}`)}${list ? `<ol>${list}</ol>` : ''}</article>`;
  }).join('');
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
for (const [tab, panel] of sections) byId(tab).onclick = () => showSection(panel);
document.addEventListener('change', ({ target }) => {
  const key = target.dataset?.check;
  if (!key) return;
  if (target.checked) checkedItems.add(key);
  else checkedItems.delete(key);
  saveChecklist();
});
byId('restart').onclick = () => {
  checkedItems.clear();
  saveChecklist();
  stepIndex = 0;
  renderAmounts();
  showSection('shopping', true);
};
byId('start').onclick = () => showSection('cook', true);
byId('prev').onclick = () => { stepIndex -= 1; renderStep(); };
byId('next').onclick = () => {
  if (stepIndex === steps.length - 1) showSection('prep', true);
  else { stepIndex += 1; renderStep(); }
};
boxInput.addEventListener('input', renderAmounts);
renderAmounts();
