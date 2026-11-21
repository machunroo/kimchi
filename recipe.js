const ingredients = {
  cabbage: { name: '해남 절임배추', amount: 20, unit: 'kg' },
  water: { name: '물 · 육수용', range: [3, 4], unit: 'L' },
  pollock: { name: '황태 대가리', amount: 3, unit: '개' },
  stockLeek: { name: '굵은 대파 · 육수용', amount: 1, unit: '대', thin: 2 },
  stockKelp: { name: '건다시마 · 육수용', amount: 30, unit: 'g' },
  stockRadish: { name: '다발무 · 육수용', amount: 400, unit: 'g' },
  riceFlour: { name: '습식 찹쌀가루', amount: 300, unit: 'g' },
  driedChili: { name: '건고추', amount: 250, unit: 'g' },
  garlic: { name: '마늘', amount: 400, unit: 'g' },
  ginger: { name: '생강', amount: 200, unit: 'g' },
  shrimpPaste: { name: '새우젓', amount: 250, unit: 'g' },
  blendRadish: { name: '다발무 · 믹서용', amount: 700, unit: 'g', hint: '시원한 맛을 위해 원본보다 추가', extra: 200 },
  plum: { name: '매실청', amount: 300, unit: 'mL', cups: true },
  pear: { name: '배', amount: 1, unit: '개' },
  apple: { name: '사과', amount: 1, unit: '개' },
  blendOnion: { name: '양파 · 믹서용', amount: 1, unit: '개' },
  fish: { name: '멸치액젓', amount: 500, unit: 'mL', cups: true },
  pepper: { name: '고춧가루', amount: 1000, unit: 'g' },
  salt: { name: '천일염 · 간 맞춤용', amount: 3, unit: '숟갈', hint: '선택 · 간을 보며 조금씩' },
  radish: { name: '다발무 · 무채용', quantity: '남은 분량' },
  greens: { name: '청갓', amount: 600, unit: 'g', bundles: 1 },
  scallions: { name: '쪽파', amount: 500, unit: 'g', bundles: 0.5 },
  seaweed: { name: '건청각', amount: 100, unit: 'g' },
  coverKelp: { name: '건다시마 · 덮개용', amount: 100, unit: 'g' },
  soju: { name: '소주 · 다시마 적심용', quantity: '적당량', hint: '선택' },
};

const stock = ['water', 'pollock', 'stockLeek', 'stockKelp', 'stockRadish'];
const blend = ['driedChili', 'garlic', 'ginger', 'shrimpPaste', 'blendRadish', 'plum', 'pear', 'apple', 'blendOnion', 'fish'];
const vegetables = ['radish', 'greens', 'scallions', 'seaweed'];
const cover = ['coverKelp', 'soju'];

const groups = [
  ['배추 준비', ['cabbage']],
  ['육수', stock, 'stock'],
  ['찹쌀풀', ['riceFlour'], 'paste'],
  ['믹서에 갈 재료', blend],
  ['양념과 김칫소 채소', ['pepper', 'salt', ...vegetables]],
  ['김치통 덮개', cover],
];

const shoppingIngredients = {
  ...ingredients,
  stockRadish: {
    name: '다발무',
    amount: 2,
    unit: '개',
    hint: '육수와 믹서용을 덜고 남은 분량은 무채로 사용',
  },
  stockKelp: {
    name: '건다시마',
    amount: ingredients.stockKelp.amount + ingredients.coverKelp.amount,
    unit: 'g',
  },
};
const combinedShoppingIds = new Set(['radish', 'blendRadish', 'coverKelp']);
const shoppingIds = groups.flatMap(([, ids]) => ids).filter(id => !combinedShoppingIds.has(id));

const videoUrl = 'https://youtu.be/BE4oP2FzDYA';
const steps = {
  stock: ['황태·다시마 육수 끓이기', 62, stock, [
    '냄비에 물, 황태 대가리, 대파, 다시마, 육수용 다발무를 넣습니다.',
    '끓기 시작하면 중약불로 줄여 다시마를 포함한 모든 재료를 약 30분 우립니다.',
    '불을 끄고 건더기를 체로 걸러 육수만 남깁니다.',
  ], 'https://youtu.be/yCAmXF76lxs'],
  paste: ['찹쌀풀 쑤기', 246, ['riceFlour'], [
    '거른 육수에 습식 찹쌀가루를 풀고 센 불에서 저어 줍니다.',
    '걸쭉해지면 중불로 낮춰 약 5분 더 끓인 뒤 식힙니다.',
  ]],
  drain: ['절임배추 물 빼기', 86, ['cabbage'], [
    '절임배추를 엎어 약 1시간 물기를 뺍니다.',
  ]],
  vegetables: ['무채와 채소 손질하기', null, vegetables, [
    '건청각을 물에 약 2시간 불립니다. 씻어 물기를 뺀 뒤 잘게 다집니다.',
    '육수용과 믹서용으로 쓸 다발무를 먼저 덜어 두고 나머지는 채 썹니다. 청갓은 밑동과 누런 잎을 떼고 줄기 사이를 씻습니다. 물기를 뺀 뒤 3~4 cm 길이로 썹니다. 쪽파도 씻어 물기를 빼고 먹기 좋게 썹니다.',
  ]],
  blend: ['건고추와 양념 갈기', 283, blend, [
    '건고추를 불리고 믹서용 다발무, 배, 사과, 양파를 썹니다.',
    '멸치액젓은 일부 남겨 두고, 건고추와 나머지 믹서용 재료를 식힌 찹쌀풀과 나누어 갈아 큰 볼에 모읍니다.',
  ]],
  filling: ['김칫소 버무리기', 375, ['pepper', 'salt', ...vegetables], [
    '갈아 둔 양념에 고춧가루를 섞습니다.',
    '무채, 청갓, 쪽파, 청각을 넣고 버무립니다. 절임배추와 함께 맛보고 남겨 둔 멸치액젓으로 간을 맞춥니다. 그래도 싱거우면 천일염을 조금씩 넣습니다.',
  ]],
  pack: ['배추에 속을 넣어 담기', 504, [], [
    '배춧잎 사이에 김칫소를 골고루 바르고 겉잎으로 감싸 김치통에 담습니다.',
  ]],
  store: ['김치통 덮고 보관하기', 642, cover, [
    '영상에서는 김치 위를 건다시마로 덮습니다. 소주에 살짝 적시는 과정은 선택입니다.',
    '뚜껑을 닫아 냉장 보관합니다.',
  ]],
};
const cookingDays = [
  { tab: 'day-before', stepIds: ['stock', 'paste'] },
  { tab: 'day-of', stepIds: ['drain', 'vegetables', 'blend', 'filling', 'pack', 'store'] },
];
const byId = id => document.getElementById(id);
const sections = [['ingredients-tab', 'shopping'], ['prep-tab', 'prep'], ['cook-tab', 'cook']];
const format = new Intl.NumberFormat('ko-KR', { maximumFractionDigits: 2 });
const boxInput = byId('box-count');
const kilogramsPerBox = 20;
const checklistKey = 'kimchi-daeseok-checklist-v1';
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

function scaledAmount(item, factor) {
  if (!item.range) return amountText(item.amount * factor, item.unit);

  const [min, max] = item.range.map(value => value * factor);
  return `${format.format(min)}~${amountText(max, item.unit)}`;
}

function renderRows(ids, kg, scope, items = ingredients) {
  if (!ids.length) return '';
  return '<dl>' + ids.map(id => {
    const item = items[id];
    const factor = kg / kilogramsPerBox;
    const amount = item.quantity ?? (factor ? scaledAmount(item, factor) : '—');
    const measure = [];
    if (factor && item.thin) measure.push(`가는 대파 ${amountText(item.thin * factor, item.unit)}`);
    if (factor && item.cups) measure.push(amountText(item.amount * factor / 200, '컵'));
    if (factor && item.bundles) measure.push(amountText(item.bundles * factor, '단'));
    if (factor && item.extra) measure.push(`추가 ${amountText(item.extra * factor, 'g')} 포함`);
    const name = scope === 'shopping' ? item.name.split(' · ')[0] : item.name;
    const label = name + (item.hint ? `<small>${item.hint}</small>` : '');
    const guide = id === 'greens' ? '<button type="button" class="guide-button" data-greens-guide aria-haspopup="dialog" aria-controls="greens-guide">청갓·홍갓 설명</button>' : '';
    return `<div class="row"><dt>${checkItem(`${scope}:${id}`, label)}${guide}</dt><dd>${amount}${measure.length ? `<small>${measure.join(" · ")}</small>` : ""}</dd></div>`;
  }).join('') + '</dl>';
}

function currentWeight() {
  const kg = boxInput.valueAsNumber * kilogramsPerBox;
  return boxInput.validity.valid && Number.isFinite(kg) ? kg : null;
}

function renderStep() {
  const { stepIds } = cookingDays[dayIndex];
  const stepId = stepIds[stepPosition];
  const [title, seconds, ids, instructions, source = videoUrl] = steps[stepId];
  const scope = `cook:${stepId}`;
  const instructionList = instructions.map((line, index) => `<li>${checkItem(`${scope}:instruction:${index}`, line)}</li>`).join('');
  byId('step-count').textContent = `${stepPosition + 1} / ${stepIds.length} 단계`;
  byId('step').innerHTML = `<h3>${checkItem(`${scope}:done`, title)}</h3>${renderRows(ids, currentWeight(), scope)}<ol>${instructionList}</ol>${seconds === null ? '' : `<p><a href="${source}?t=${seconds}s">영상에서 이 단계 보기</a></p>`}`;
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
  byId('shopping-list').innerHTML = renderRows(shoppingIds, kg, 'shopping', shoppingIngredients);
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
