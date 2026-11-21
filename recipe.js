const ingredients = {
  cabbage: { name: '해남 절임배추', amount: 20, unit: 'kg' },
  water: { name: '물', amount: 2, unit: 'L' },
  pollock: { name: '황태 대가리', amount: 3, unit: '개' },
  stockLeek: { name: '대파', amount: 1, unit: '대' },
  stockKelp: { name: '건다시마', amount: 30, unit: 'g' },
  stockRadish: { name: '다발무', amount: 300, unit: 'g' },
  riceFlour: { name: '찹쌀가루', amount: 300, unit: 'g' },
  garlic: { name: '마늘', amount: 400, unit: 'g' },
  ginger: { name: '생강', amount: 200, unit: 'g' },
  shrimpPaste: { name: '새우젓', amount: 250, unit: 'g' },
  stockOnion: { name: '양파', amount: 1, unit: '개' },
  blendRadish: { name: '다발무 · 믹서용', amount: 500, unit: 'g' },
  plum: { name: '매실청', amount: 300, unit: 'mL', cups: true },
  pear: { name: '배', amount: 1, unit: '개' },
  apple: { name: '사과', amount: 1, unit: '개' },
  blendOnion: { name: '양파 · 믹서용', amount: 1, unit: '개' },
  fish: { name: '멸치액젓', amount: 500, unit: 'mL', cups: true },
  pepper: { name: '고춧가루', amount: 1200, unit: 'g', hint: '건고추를 대신하는 고춧가루 포함' },
  salt: { name: '천일염 · 간 맞춤용', amount: 3, unit: '숟갈', hint: '선택 · 간을 보며 조금씩' },
  radish: { name: '다발무 · 김칫소용', amount: 2, unit: '개', hint: '믹서용을 덜고 나머지는 무채로 사용' },
  greens: { name: '청갓', amount: 600, unit: 'g', bundles: 1 },
  scallions: { name: '쪽파', amount: 500, unit: 'g', bundles: 0.5 },
  seaweed: { name: '건청각', amount: 100, unit: 'g' },
  coverKelp: { name: '건다시마 · 덮개용', amount: 100, unit: 'g' },
  soju: { name: '소주 · 다시마 적심용', quantity: '적당량', hint: '선택' },
};

const stock = ['water', 'stockRadish', 'stockOnion', 'stockLeek', 'stockKelp', 'pollock'];
const blend = ['garlic', 'ginger', 'shrimpPaste', 'blendRadish', 'plum', 'pear', 'apple', 'blendOnion', 'fish'];
const vegetables = ['radish', 'greens', 'scallions', 'seaweed'];
const cover = ['coverKelp', 'soju'];

const groups = [
  ['배추 준비', ['cabbage'], 'turn'],
  ['육수', stock, 'stock'],
  ['찹쌀풀', ['riceFlour'], 'paste'],
  ['믹서에 갈 재료', blend],
  ['김치양념', ['pepper', 'salt', ...vegetables]],
  ['김치통 덮개', cover],
];

const shoppingIngredients = {
  ...ingredients,
  stockRadish: {
    name: '다발무',
    amount: ingredients.radish.amount,
    stockWeight: ingredients.stockRadish.amount,
    unit: '개',
  },
  stockOnion: { name: '양파', amount: ingredients.stockOnion.amount + ingredients.blendOnion.amount, unit: '개' },
  stockKelp: {
    name: '건다시마',
    amount: ingredients.stockKelp.amount + ingredients.coverKelp.amount,
    unit: 'g',
  },
};
const combinedShoppingIds = new Set(['radish', 'blendRadish', 'blendOnion', 'coverKelp']);
const shoppingIds = groups.flatMap(([, ids]) => ids).filter(id => !combinedShoppingIds.has(id));

const videoUrl = 'https://youtu.be/BE4oP2FzDYA';
const seasoningCheck = '절임배추 한 조각에 김칫소를 얹어 맛본 뒤, 싱거우면 남겨 둔 멸치액젓을 조금씩 더합니다.';
const pasteNotice = '<p><strong>주의사항</strong> · 반드시 육수를 완전히 식힌 상태에서 사용할 것</p>';

const steps = {
  turn: ['전날 절임배추 상자 뒤집기', 13, ['cabbage'], [
    '김장 전날 절임배추를 받으면 냉장 또는 충분히 서늘한 곳에 두고, 상자를 뒤집어 절임물이 고루 닿게 합니다.',
  ]],
  stock: ['황태·다시마 육수 끓이기', 159, stock, [
    '냄비에 물, 다발무, 양파, 대파, 다시마, 황태 대가리를 넣습니다.',
    '끓기 시작하면 중약불로 줄여 다시마를 포함한 모든 재료를 약 30분 우립니다.',
    '불을 끄고 건더기를 체로 걸러 육수만 남깁니다.',
  ]],
  paste: ['육수로 찹쌀풀 쑤기', 246, ['riceFlour'], [
    '건더기를 거른 육수는 반드시 완전히 식힙니다. 급하면 육수 용기를 얼음물에 받쳐 식힙니다.',
    '식힌 육수에 찹쌀가루를 넣고 거품기나 숟가락으로 덩어리 없이 풉니다.',
    '중약불에서 냄비 바닥까지 계속 저으며 끓입니다. 윤기가 돌고 걸쭉해지면서 기포가 올라오면 불을 끕니다.',
    '찹쌀풀을 완전히 식힌 뒤 믹서 양념에 넣습니다.',
  ]],
  drain: ['절임배추 물 빼기', 86, ['cabbage'], [
    '김장 당일 절임배추를 채반에 엎어 약 1시간 물기를 뺍니다.',
  ]],
  vegetables: ['무채와 채소 손질하기', null, vegetables, [
    '건청각은 삶지 않고 물에 약 2시간 불립니다. 조개껍데기 등 이물질을 골라내고 씻은 다음, 물기를 빼고 잘게 다집니다.',
    '김칫소용 다발무에서 믹서에 갈 분량을 먼저 덜어 두고 나머지는 채 썹니다. 청갓은 밑동과 누런 잎을 떼고 줄기 사이를 씻습니다. 물기를 뺀 뒤 3~4 cm 길이로 썹니다. 쪽파도 씻어 물기를 빼고 먹기 좋게 썹니다.',
  ]],
  blend: ['믹서 양념 갈기', 334, blend, [
    '배, 사과, 양파, 믹서용 다발무를 잘라 마늘, 생강, 새우젓, 매실청과 함께 준비합니다.',
    '멸치액젓은 마지막 간을 위해 일부 남깁니다. 준비한 재료를 식힌 찹쌀풀과 함께 여러 번에 나눠 갈아 한데 모읍니다.',
  ]],
  filling: ['김칫소 버무리기', 375, ['pepper', 'salt', ...vegetables], [
    '갈아 둔 양념에 고춧가루를 섞습니다.',
    `무채, 청갓, 쪽파, 청각을 넣고 버무립니다. ${seasoningCheck} 그래도 싱거우면 천일염을 조금씩 넣습니다.`,
  ]],
  pack: ['배추에 속을 넣어 담기', 504, [], [
    '푸른 겉잎을 아래로 펴고, 잎을 한 장씩 넘기며 줄기 안쪽까지 김칫소를 바릅니다. 처음부터 많이 바르지 말고 남은 배추 양에 맞춰 나눠 씁니다.',
    '안쪽 노란 잎에는 양념을 가볍게 묻힙니다. 잎을 가운데로 모아 푸른 겉잎으로 감싼 뒤 김치통에 담습니다.',
  ]],
  store: ['김치통 덮고 보관하기', 642, cover, [
    '영상에서는 김치 위를 건다시마로 덮습니다. 소주에 살짝 적시는 과정은 선택입니다.',
    '뚜껑을 닫고 김치냉장고에 넣습니다.',
  ]],
};
const cookingDays = [
  { tab: 'day-before', stepIds: ['turn', 'stock', 'paste'] },
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
    if (factor && item.stockWeight) measure.push(`육수용 ${amountText(item.stockWeight * factor, 'g')} 추가`);
    if (factor && item.thin) measure.push(`가는 대파 ${amountText(item.thin * factor, item.unit)}`);
    if (factor && item.cups) measure.push(amountText(item.amount * factor / 200, '컵'));
    if (factor && item.bundles) measure.push(amountText(item.bundles * factor, '단'));
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
  byId('step').innerHTML = `<h3>${checkItem(`${scope}:done`, title)}</h3>${renderRows(ids, currentWeight(), scope)}${stepId === 'paste' ? pasteNotice : ''}<ol>${instructionList}</ol>${seconds === null ? '' : `<p><a href="${source}?t=${seconds}s">영상에서 이 단계 보기</a></p>`}`;
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
    const confirmation = ids.includes('pepper') ? `<p>${checkItem('prep:seasoning:confirm', `<strong>확인하기</strong> · ${seasoningCheck}`)}</p>` : '';
    const list = instructions.map((line, item) => `<li>${checkItem(`prep:${index}:instruction:${item}`, line)}</li>`).join('');
    return `<article><h3>${title}</h3>${renderRows(ids, kg, `prep:${index}`)}${stepId === 'paste' ? pasteNotice : ''}${list ? `<ol>${list}</ol>` : ''}${confirmation}</article>`;
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
