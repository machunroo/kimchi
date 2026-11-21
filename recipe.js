const ingredients = {
  cabbage: { name: '절임배추', amount: 20, unit: 'kg' },
  water: { name: '물 · 육수용', amount: 4, unit: 'L' },
  kelp: { name: '다시마', amount: 40, unit: 'g' },
  shiitake: { name: '건표고', amount: 6, unit: '개' },
  anchovies: { name: '손질한 육수용 멸치', amount: 80, unit: 'g' },
  pollock: { name: '황태포', amount: 1, unit: '개' },
  stockLeek: { name: '대파 · 육수용', amount: 3, unit: '대' },
  onion: { name: '양파', amount: 1, unit: '개' },
  stockRadish: { name: '무 · 육수용', amount: 600, unit: 'g' },
  pasteWater: { name: '물 · 찹쌀가루 풀기용', amount: 1, unit: '컵' },
  riceFlour: { name: '찹쌀가루', amount: 4, unit: '숟갈' },
  radish: { name: '무 · 김칫소용', amount: 1, unit: '개' },
  leek: { name: '대파 · 김칫소용', amount: 3, unit: '대' },
  scallions: { name: '쪽파 · 김칫소용', amount: 0.5, unit: '단' },
  greens: { name: '청갓', amount: 1, unit: '대' },
  sandLance: { name: '까나리액젓', amount: 2.5, unit: '컵' },
  fish: { name: '멸치액젓', amount: 1, unit: '컵' },
  shrimp: { name: '새우젓', unspecified: true },
  pepper: { name: '고춧가루', amount: 700, unit: 'g' },
  garlic: { name: '다진 마늘', amount: 450, unit: 'g' },
  ginger: { name: '다진 생강', amount: 70, unit: 'g' },
  sugar: { name: '설탕 · 김칫소용', amount: 300, unit: 'g' },
  fresh: { name: '생새우', amount: 500, unit: 'g' },
  oysters: { name: '생굴', amount: 1, unit: 'kg' },
  oysterSugar: { name: '설탕 · 굴김치용', amount: 1, unit: '숟갈' },
  sesame: { name: '볶은깨', amount: 3, unit: '숟갈' },
  gingerSyrup: { name: '생강청', amount: 1, unit: '숟갈' },
  oysterScallions: { name: '쪽파 · 굴김치용', amount: 1, unit: '줌' },
  pork: { name: '수육용 삼겹살', amount: 1.8, unit: 'kg', fixed: true },
  porkWater: { name: '물 · 수육용', amount: 6, unit: '컵', fixed: true },
  porkSalt: { name: '맛소금', amount: 6, unit: '숟갈', fixed: true },
  porkSugar: { name: '설탕 · 수육용', amount: 2, unit: '숟갈', fixed: true },
  peppercorns: { name: '통후추', amount: 1, unit: '숟갈', fixed: true },
};

const stock = ['water', 'kelp', 'shiitake', 'anchovies', 'pollock', 'stockLeek', 'onion', 'stockRadish'];
const paste = ['pasteWater', 'riceFlour'];
const vegetables = ['radish', 'leek', 'scallions', 'greens'];
const fishSauces = ['sandLance', 'fish', 'shrimp'];
const seasoning = ['pepper', 'garlic', 'ginger', 'sugar', 'fresh'];
const oysterKimchi = ['oysters', 'oysterSugar', 'sesame', 'gingerSyrup', 'oysterScallions'];
const boiledPork = ['pork', 'porkWater', 'porkSalt', 'porkSugar', 'peppercorns'];

const groups = [
  ['배추 준비', ['cabbage']],
  ['육수', stock, 'stock'],
  ['찹쌀풀', paste, 'paste'],
  ['김칫소 채소', vegetables],
  ['김칫소 양념', [...fishSauces, ...seasoning]],
  ['굴김치', oysterKimchi],
  ['맛소금 수육', boiledPork],
];

const steps = {
  drain: ['절임배추 물 빼기', null, ['cabbage'], [
    '절임배추는 채반에 받쳐 물기를 충분히 뺍니다.',
  ]],
  stock: ['육수 끓이기', '00:33', stock, [
    '냄비에 물과 육수 재료를 넣고 총 30분 끓입니다.',
    '15분이 지나면 다시마를 건집니다.',
    '30분이 되면 남은 건더기를 건져 육수만 남깁니다.',
  ]],
  paste: ['찹쌀풀 쑤기', '00:33', paste, [
    '물에 찹쌀가루를 풀어 육수에 넣고 다시 끓입니다.',
    '보글보글 끓으면 세 번 저어 마무리합니다. 양념에 넣기 전에 식힙니다.',
  ]],
  filling: ['김칫소 버무리기', '03:54', [...vegetables, ...fishSauces, ...seasoning], [
    '무를 굵은 채칼로 썰고, 대파·쪽파·청갓을 썰어 넣습니다.',
    '까나리액젓, 멸치액젓, 새우젓을 넣고 한 번 버무립니다.',
    '고춧가루, 다진 마늘, 다진 생강, 설탕, 식힌 찹쌀풀, 생새우를 넣고 고루 섞습니다.',
  ]],
  pack: ['배추에 김칫소 넣기', '08:09', [], [
    '절임배추 잎 사이에 김칫소를 넣습니다. 굴김치를 만들 경우 김칫소 일부를 남겨 둡니다.',
    '배추를 김치통에 차곡차곡 담습니다.',
  ]],
  pork: ['맛소금 수육 삶기', '10:06', boiledPork, [
    '냄비에 물, 맛소금, 설탕, 통후추, 삼겹살을 넣고 끓입니다.',
    '끓기 시작하면 약불로 줄이고 뚜껑을 덮어 1시간 끓입니다.',
    '불을 끄고 10분 더 뜸을 들입니다.',
  ]],
  oysters: ['굴김치 버무리기', '14:26', oysterKimchi, [
    '남은 김칫소에 설탕, 볶은깨, 생강청을 섞습니다.',
    '쪽파와 생굴을 넣고 버무립니다.',
  ]],
};

const cookingDays = [
  { tab: 'day-before', stepIds: ['stock', 'paste'] },
  { tab: 'day-of', stepIds: ['drain', 'filling', 'pack', 'pork', 'oysters'] },
];
const byId = id => document.getElementById(id);
const sections = [['ingredients-tab', 'shopping'], ['prep-tab', 'prep'], ['cook-tab', 'cook']];
const format = new Intl.NumberFormat('ko-KR', { maximumFractionDigits: 2 });
const boxInput = byId('box-count');
const kilogramsPerBox = 20;
const checklistKey = 'kimchi-20kg-checklist-v1';
const boxCountKey = 'kimchi-seoul-box-count-v1';
const checkedItems = loadChecklist();
let dayIndex = 0;
let stepPosition = 0;

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
    const factor = item.fixed ? 1 : kg / kilogramsPerBox;
    const amount = item.unspecified ? '분량 확인 필요' : factor ? amountText(item.amount * factor, item.unit) : '—';
    const guide = id === 'greens' ? '<button type="button" class="guide-button" data-greens-guide aria-haspopup="dialog" aria-controls="greens-guide">청갓·홍갓 설명</button>' : '';
    return `<div class="row"><dt>${checkItem(`${scope}:${id}`, item.name)}${guide}</dt><dd>${amount}</dd></div>`;
  }).join('') + '</dl>';
}

function currentWeight() {
  const kg = boxInput.valueAsNumber * kilogramsPerBox;
  return boxInput.validity.valid && Number.isFinite(kg) ? kg : null;
}

function renderStep() {
  const { stepIds } = cookingDays[dayIndex];
  const stepId = stepIds[stepPosition];
  const [title, timestamp, ids, instructions] = steps[stepId];
  const scope = `cook:${stepId}`;
  const instructionList = instructions.map((line, index) => `<li>${checkItem(`${scope}:instruction:${index}`, line)}</li>`).join('');
  byId('step-count').textContent = `${stepPosition + 1} / ${stepIds.length} 단계`;
  byId('step').innerHTML = `<h3>${checkItem(`${scope}:done`, title)}</h3>${renderRows(ids, currentWeight(), scope)}<ol>${instructionList}</ol>${timestamp ? `<p>영상 ${timestamp}</p>` : ''}`;
  Array.from(byId('step-list').children).forEach(button => {
    const id = button.dataset.stepId;
    button.hidden = !stepIds.includes(id);
    button.setAttribute('aria-pressed', id === stepId);
  });
  byId('prev').disabled = dayIndex === 0 && stepPosition === 0;
  const atEnd = stepPosition === stepIds.length - 1;
  byId('next').textContent = atEnd ? (dayIndex === 0 ? '김장 당일로' : '준비로 돌아가기') : '다음';
}

function selectCookingDay(day, position = 0) {
  dayIndex = day;
  stepPosition = position;
  cookingDays.forEach(({ tab }, index) => byId(tab).setAttribute('aria-pressed', index === dayIndex));
  renderStep();
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
  byId('weight-status').textContent = kg
    ? `총 ${amountText(kg, 'kg')}`
    : '0.01박스 이상 입력하세요';
  byId('shopping-list').innerHTML = renderRows(groups.flatMap(([, ids]) => ids), kg, 'shopping');
  byId('ingredients').innerHTML = groups.map(([title, ids, stepId], index) => {
    const instructions = stepId ? steps[stepId][3] : [];
    const list = instructions.map((line, item) => `<li>${checkItem(`prep:${index}:instruction:${item}`, line)}</li>`).join('');
    return `<article><h3>${title}</h3>${renderRows(ids, kg, `prep:${index}`)}${list ? `<ol>${list}</ol>` : ''}</article>`;
  }).join('');
  renderStep();
}

cookingDays.forEach(({ tab, stepIds }, day) => {
  byId(tab).onclick = () => selectCookingDay(day);
  stepIds.forEach((id, position) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = position + 1;
    button.dataset.stepId = id;
    button.setAttribute('aria-label', `${position + 1}단계 ${steps[id][0]}`);
    button.onclick = () => selectCookingDay(day, position);
    byId('step-list').append(button);
  });
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
  selectCookingDay(0);
  renderAmounts();
  showSection('shopping', true);
};
byId('start').onclick = () => showSection('cook', true);
byId('prev').onclick = () => {
  if (stepPosition > 0) selectCookingDay(dayIndex, stepPosition - 1);
  else if (dayIndex > 0) selectCookingDay(0, cookingDays[0].stepIds.length - 1);
};
byId('next').onclick = () => {
  if (stepPosition < cookingDays[dayIndex].stepIds.length - 1) selectCookingDay(dayIndex, stepPosition + 1);
  else if (dayIndex === 0) selectCookingDay(1);
  else showSection('prep', true);
};
document.addEventListener('click', ({ target }) => {
  if (target.closest('[data-greens-guide]')) byId('greens-guide').showModal();
});
try {
  const savedBoxCount = localStorage.getItem(boxCountKey);
  if (savedBoxCount !== null) {
    boxInput.value = savedBoxCount;
    if (!currentWeight()) boxInput.value = boxInput.defaultValue;
  }
} catch {
  // Use the default count when storage is unavailable.
}
boxInput.addEventListener('input', () => {
  if (currentWeight()) {
    try {
      localStorage.setItem(boxCountKey, boxInput.value);
    } catch {
      // Keep recalculating even when storage is unavailable.
    }
  }
  renderAmounts();
});
renderAmounts();
