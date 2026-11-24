// Actual quantities recorded for the 2026 batch of 80 kg.
const ingredients = {
  blendedFilling: { name: '김칫소 믹서기', note: '준비한 분량 전부' },
  ricePaste: { name: '찹쌀풀', note: '준비한 분량 전부' },
  cabbage: {"name":"해남 절임배추","amount":80,"unit":"kg"},
  water: {"name":"물","amount":8,"unit":"L"},
  pollock: {"name":"황태 대가리","amount":12,"unit":"개"},
  stockLeek: {"name":"굵은 대파","amount":1,"unit":"대","thin":2},
  kelp: {"name":"다시마","amount":120,"unit":"g"},
  stockRadish: {"name":"무","amount":1200,"unit":"g","reduced":600},
  onion: {"name":"양파","amount":4,"unit":"개","reduced":2},
  riceFlour: {"name":"찹쌀가루","amount":1200,"unit":"g"},
  stock: {"name":"황태육수","note":"끓여 둔 육수 사용"},
  radish: {"name":"다발무","amount":8,"unit":"개"},
  greens: {"name":"청갓","amount":2,"unit":"단"},
  scallions: {"name":"쪽파","amount":1,"unit":"단"},
  apple: {"name":"사과","amount":3,"unit":"개"},
  pear: {"name":"배","amount":3,"unit":"개"},
  blendRadish: {"name":"다발무","amount":2,"unit":"개"},
  blendFish: {"name":"멸치액젓","amount":400,"unit":"g","hint":"믹서에서 갈기 쉽도록 사용"},
  blendGarlic: {"name":"마늘","amount":1600,"unit":"g"},
  pepper: {"name":"고춧가루","amount":3000,"unit":"g"},
  fish: {"name":"청정원 멸치액젓","amount":2000,"unit":"mL","bottles":2},
  shrimp: {"name":"새우젓","amount":1000,"unit":"g"},
  fresh: {"name":"생새우","note":"생략"},
  garlic: {"name":"다진 마늘","amount":1600,"unit":"g"},
  ginger: {"name":"다진 생강","amount":300,"unit":"g"},
  sugar: {"name":"백설탕","note":"생략"},
  salt: {"name":"천일염","amount":3,"unit":"큰술","hint":"마지막 간 조절용"},
  msg: {"name":"미원","note":"생략","hint":"기록상 1큰술 · 80 kg 기준"},
};
const stockIngredients = ['water', 'pollock', 'stockLeek', 'kelp', 'stockRadish', 'onion'];
const defaultSeasoning = {
  fresh: { name: '생새우', amount: 2000, unit: 'g' },
  sugar: { name: '백설탕', amount: 460, unit: 'g' },
  msg: { name: '미원', amount: 4, unit: '큰술', hint: '선택 · 조미료를 넣지 않은 새우젓을 쓸 때' },
};
const greensIngredients = ['greens', 'scallions'];
const blenderIngredients = ['apple', 'pear', 'blendRadish', 'blendFish', 'blendGarlic'];
const seasoning = ['fish', 'shrimp', 'fresh', 'garlic', 'ginger', 'sugar'];
const optionalSeasoning = ['salt', 'msg'];
const groups = [
  ['절임배추', ['cabbage']],
  ['황태 육수', stockIngredients],
  ['찹쌀풀 재료', ['riceFlour', 'stock']],
  ['김칫소 믹서기', blenderIngredients],
  ['김칫소 양념', ['radish', ...greensIngredients, 'blendedFilling', 'ricePaste', 'pepper', ...seasoning, ...optionalSeasoning]],
];
const shoppingGroups = groups.map(([title, ids]) => {
  const moved = ['shrimp', 'garlic', 'ginger'];
  if (title === '김칫소 믹서기') return [title, [...ids, ...moved]];
  if (title === '김칫소 양념') return [title, ids.filter(id => !moved.includes(id))];
  return [title, ids];
});
const ingredientSections = {
  '찹쌀풀 재료': 'rice-paste',
  '김칫소 채소': 'vegetables',
  '김칫소 믹서기': 'blender',
  '김칫소 양념': 'seasoning',
};
const videoUrl = 'https://www.youtube.com/watch?v=yCAmXF76lxs';
const steps = [
  ['배추 상자 뒤집기', 18, ['cabbage'], [
    '받은 절임배추의 포장과 박스 안 상태를 확인합니다. 뒤집기로 했다면 물이 흘러도 되는 서늘한 곳에 약 1~2시간 두어 아래쪽에 고인 절임물이 배추에 고루 닿게 합니다.',
  ]],
  ['황태 육수 끓이기', null, stockIngredients, [
    '냄비에 물과 황태 대가리, 대파, 다시마, 무, 양파를 넣습니다.',
    '끓기 시작하면 중약불로 줄여 약 30분 우립니다. 다시마도 다른 재료와 함께 우립니다.',
    '불을 끄고 체로 건더기를 걸러 육수만 남깁니다.',
    '찹쌀풀을 쑤기 전에 황태육수를 충분히 식힙니다.',
  ]],
  ['황태육수로 찹쌀풀 쑤기', null, ['riceFlour', 'stock'], [
    '식힌 황태육수에 찹쌀가루를 풀어 덩어리를 없앱니다.',
    '냄비 바닥을 저으면서 끓여 걸쭉해지면 불을 끕니다. 미리 쑨 풀은 빠르게 식혀 냉장하고, 김장 당일 양념에 섞습니다.',
  ]],
  ['절임배추 물 빼기', 224, ['cabbage'], [
    '채반에 배추를 뒤집어 놓고 1~2시간 물을 뺍니다.',
    '물을 빼고 2~3시간 안에 양념을 버무립니다.',
    '헹굴 필요가 있으면 영상의 방법대로 소금물로 가볍게 헹군 뒤 물을 뺍니다.',
  ]],
  ['고춧가루 양념에 무채 버무리기', null, ['radish'], [
    '찹쌀풀과 믹서 재료로 만든 고춧가루 양념에 채 썬 무를 넣고 고루 버무립니다.',
  ]],
  null, // Combined with step 11. Keep later checklist IDs stable.
  null, // Retired step; preserve other checklist IDs.
  null, // Merged into step 12.
  ['배추에 속을 넣고 보관하기', 545, [], [
    '안쪽 잎부터 한 장씩 들어 김칫소를 바르고, 흰 줄기 밑부분에 넉넉히 넣습니다.',
    '겉잎으로 감싸 김치통에 담고, 김장용 비닐을 윗면에 밀착시켜 공기 접촉을 줄입니다.',
    '영상에서는 서늘한 곳에서 약 24시간 익힌 뒤 김치냉장고로 옮깁니다.',
  ]],
  null, // Retired step 9. Keep later checklist IDs stable.
  ['김칫소 손질하기 (무, 청갓, 쪽파)', 305, ['radish', ...greensIngredients], [
    '무는 흙을 씻고 양 끝을 다듬습니다. 갓은 밑동과 시든 잎을 떼고, 쪽파는 뿌리와 누런 잎을 정리합니다.',
    '청갓과 쪽파의 줄기 사이를 씻고 물기를 뺍니다. 손질한 무와 채소는 냉장해 두었다가 김장 당일 썹니다.',
  ]],
  ['김칫소(무채·청갓·쪽파) 썰기', 271, ['radish', ...greensIngredients], [
    '손질해 둔 김칫소용 무를 꺼내 가늘고 고르게 채 썹니다.',
    '미리 씻어 물기를 뺀 청갓을 잘게 썹니다.',
    '쪽파는 흰 부분을 잘게, 초록 부분은 조금 길게 썹니다.',
  ]],
];
steps.push(['찹쌀풀과 믹서 재료에 고춧가루 섞고 간 맞추기', null, [], [
  '[찹쌀풀 + 김칫소 믹서기]를 섞기',
  '[1]에 고추가루 버무리기',
  '간보고 심심한 경우 소금추가 ( 간은 짭짤하게 )',
  '[3]에 김칫소 채소',
]]);
// Keep step IDs stable so existing checklist entries stay with their original steps.
const cookingDays = [
  { tab: 'day-before', stepIds: [0, 1, 2, 10] },
  { tab: 'day-of', stepIds: [3, 11, 12, 4, 8] },
];
const byId = id => document.getElementById(id);
const sections = [['materials-tab', 'materials'], ['prep-tab', 'prep'], ['cook-tab', 'cook']];
const format = new Intl.NumberFormat('ko-KR', { maximumFractionDigits: 2 });
const boxInput = byId('box-count');
const recipeYear = byId('recipe-year');
const recordedWeights = { 2026: ingredients.cabbage.amount };
const kilogramsPerBox = 10;
const checklistKey = 'kimchi-seoul-checklist-v1';
const boxCountKey = 'kimchi-seoul-box-count-v2';
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

function ingredientHeading(title, ids, reminder = ids.includes('stock') ? '반드시 황태육수를 식혀서 사용할 것' : '') {
  const note = reminder ? `<span class="stock-reminder">${reminder}</span>` : '';
  return `<h3 class="ingredient-heading">${title}${note}</h3>`;
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
    const item = (recipeYear.value === 'current' && defaultSeasoning[id]) || ingredients[id];
    const factor = kg / ingredients.cabbage.amount;
    const amount = item.note ?? (kg ? amountText(item.amount * factor, item.unit) : '—');
    const isRadishCutting = scope === 'cook:11' && id === 'radish';
    const quantity = isRadishCutting && kg ? `다발무 ${format.format(item.amount * factor)}개` : amount;
    const hints = [item.hint];
    if (kg && item.thin) hints.push(`가는 대파라면 ${amountText(item.thin * factor, '대')}`);
    if (kg && item.reduced) hints.push(`줄일 경우 약 ${amountText(item.reduced * factor, item.unit)}`);
    if (kg && item.bottles) hints.push(`1 L 제품 기준 ${amountText(item.bottles * factor, '병')}`);
    const checkScope = scope === 'prep:5' && ['radish', ...greensIngredients].includes(id) ? 'prep:3' : scope;
    const label = `${isRadishCutting ? '무채썰기' : item.name}${hints.filter(Boolean).map(hint => `<small>${hint}</small>`).join('')}`;
    const guide = id === 'greens' ? '<button type="button" class="guide-button" data-greens-guide aria-haspopup="dialog" aria-controls="greens-guide">청갓·홍갓 설명</button>' : '';
    return `<div class="row"><dt>${checkItem(`${checkScope}:${id}`, label)}${guide}</dt><dd>${quantity}</dd></div>`;
  }).join('') + '</dl>';
}

function currentWeight() {
  const kg = boxInput.valueAsNumber * kilogramsPerBox;
  return boxInput.validity.valid && Number.isFinite(kg) ? kg : null;
}

function renderStep() {
  const { stepIds } = cookingDays[dayIndex];
  const stepId = stepIds[stepPosition];
  const [title, seconds, ids, instructions] = steps[stepId];
  const scope = `cook:${stepId}`;
  const instructionList = instructions.map((text, index) => {
    const key = stepId === 3 ? [0, 'season-after-draining', 1][index] : stepId === 12 ? [1, 2, 3, 'vegetables'][index] : index;
    return `<li>${checkItem(`${scope}:instruction:${key}`, text)}</li>`;
  }).join('');
  byId('step-count').textContent = `${stepPosition + 1} / ${stepIds.length} 단계`;
  byId('step').classList.toggle('storage-step', stepId === 8);
  const reminder = stepId === 0 ? '배추 상자를 뒤집는 경우 물이 빠질 수 있음, 박스 안 상태를 보고 뒤집을지 판단할 것'
    : stepId === 8 ? '[중요] 배추는 잘린 단면이 위로 오도록 넣어야 함' : undefined;
  const links = stepId === 12 ? '<nav class="ingredient-links" aria-label="관련 재료">' + Object.entries(ingredientSections).map(([name, id]) => `<a href="#${id}" data-ingredient-link>${name}</a>`).join('') + '</nav>' : '';
  byId('step').innerHTML = `${ingredientHeading(checkItem(`${scope}:done`, title), ids, reminder)}${links}${renderRows(ids, currentWeight(), scope)}<section class="cooking-instructions" aria-labelledby="instructions-heading"><h4 id="instructions-heading">조리 순서</h4><ol>${instructionList}</ol></section>${seconds === null ? '' : `<p><a href="${videoUrl}&amp;t=${seconds}s">영상에서 이 단계 보기</a></p>`}`;
  Array.from(byId('step-list').children).forEach(button => {
    const id = Number(button.dataset.stepId);
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

function renderMaterials(kg) {
  const factor = kg / ingredients.cabbage.amount;
  const quantity = id => amountText(ingredients[id].amount * factor, ingredients[id].unit);
  const count = value => format.format(value * factor);
  const rows = [
    ['배추·채소·과일', [
      ['cabbage'], ['radish', '무', `육수용 ${quantity('stockRadish')} + 다발무 ${count(ingredients.radish.amount + ingredients.blendRadish.amount)}개 (무채용 ${quantity('radish')}, 믹서기용 ${quantity('blendRadish')})`],
      ['stockLeek', '굵은 대파', `${quantity('stockLeek')} (가는 대파라면 ${count(ingredients.stockLeek.thin)}대)`], ['onion'], ['greens'], ['scallions'], ['apple'], ['pear']]],
    ['육수·찹쌀풀 재료', [['pollock'], ['kelp'], ['riceFlour']]],
    ['김칫소 양념·젓갈', [
      ['garlic', '마늘', `${amountText((ingredients.blendGarlic.amount + ingredients.garlic.amount) * factor, 'g')} (마늘 ${quantity('blendGarlic')} + 다진 마늘 ${quantity('garlic')})`],
      ['ginger'], ['pepper'], ['fish', '멸치액젓', `믹서기용 ${quantity('blendFish')} + 양념용 ${format.format(ingredients.fish.amount * factor / 1000)} L (청정원 1 L ${count(ingredients.fish.bottles)}병)`],
      ['shrimp'], ['salt', '천일염', `${quantity('salt')} (마지막 간 조절용)`]]],
  ];
  return rows.map(([title, items]) => `<article><h3>${title}</h3><dl>${items.map(([id, name, amount]) =>
    `<div class="row"><dt>${checkItem('materials:' + id, name || ingredients[id].name)}</dt><dd>${kg ? amount || quantity(id) : '—'}</dd></div>`
  ).join('')}</dl></article>`).join('');
}

function renderAmounts() {
  const kg = currentWeight();
  boxInput.setAttribute('aria-invalid', !kg);
  byId('weight-status').textContent = kg
    ? `총 ${amountText(kg, 'kg')}`
    : '1박스(10 kg) 이상 입력하세요';
  byId('materials-list').innerHTML = renderMaterials(kg);
  const historicalWeight = recordedWeights[recipeYear.value];
  byId('recipe-mode').textContent = historicalWeight
    ? `${recipeYear.value}년 실사용 기록 · 절임배추 ${historicalWeight} kg`
    : '현재 재료 · 상단 박스 수에 맞춰 환산';
  const shoppingScope = historicalWeight ? 'history:' + recipeYear.value : 'shopping';
  function shoppingRows(title, ids) {
    if (title !== '김칫소 양념') return renderRows(ids, kg, shoppingScope);
    const vegetables = ['radish', ...greensIngredients];
    return `<div id="vegetables" tabindex="-1">${renderRows(vegetables, kg, shoppingScope)}</div>` +
      renderRows(ids.filter(id => !vegetables.includes(id)), kg, shoppingScope);
  }
  byId('shopping-list').innerHTML = shoppingGroups.map(([title, ids]) =>
    `<article${ingredientSections[title] ? ` id="${ingredientSections[title]}" tabindex="-1"` : ''}>${ingredientHeading(title, ids)}${shoppingRows(title, ids)}</article>`).join('');
  byId('ingredients').innerHTML = groups.map(([title, ids], index) => {
    const instructions = index === 1 || index === 2 ? steps[index][3] : [];
    const list = instructions.map((line, item) => `<li>${checkItem(`prep:${index}:instruction:${item}`, line)}</li>`).join('');
    return `<article>${ingredientHeading(title, ids)}${renderRows(ids, kg, `prep:${index >= 3 ? index + 1 : index}`)}${list ? `<ol>${list}</ol>` : ''}</article>`;
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
byId('step').addEventListener('click', event => {
  const link = event.target.closest('[data-ingredient-link]');
  if (!link) return;
  event.preventDefault();
  showSection('prep');
  const section = byId(link.hash.slice(1));
  section.focus({ preventScroll: true });
  section.scrollIntoView({ block: 'start' });
});
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
  showSection('materials', true);
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
  const previousCount = localStorage.getItem('kimchi-seoul-box-count-v1');
  const savedBoxCount = localStorage.getItem(boxCountKey)
    ?? (previousCount === null ? null : String(Number(previousCount) * 2));
  if (savedBoxCount !== null) {
    boxInput.value = savedBoxCount;
    if (!currentWeight()) boxInput.value = boxInput.defaultValue;
  }
} catch {
  // Use the default count when storage is unavailable.
}
boxInput.addEventListener('input', () => {
  if (currentWeight() && recipeYear.value === 'current') {
    currentBoxCount = boxInput.value;
    try {
      localStorage.setItem(boxCountKey, boxInput.value);
    } catch {
      // Keep recalculating even when storage is unavailable.
    }
  }
  renderAmounts();
});
recipeYear.innerHTML = '<option value="current">선택 안 함</option>' + Object.keys(recordedWeights).map(year => `<option value="${year}">${year}년</option>`).join('');
recipeYear.value = 'current';
let currentBoxCount = boxInput.value;
recipeYear.addEventListener('change', () => {
  const historicalWeight = recordedWeights[recipeYear.value];
  if (historicalWeight) {
    boxInput.value = String(historicalWeight / kilogramsPerBox);
  } else {
    boxInput.value = currentBoxCount;
  }
  renderAmounts();
});
renderAmounts();
