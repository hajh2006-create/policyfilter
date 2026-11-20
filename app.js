/* ==================== DATA ==================== */
const POLICIES = [
  {
    id: "policy_01", name: "청년월세 지원사업", source: "복지로 / 온통청년",
    minAge: 19, maxAge: 34,
    statuses: ["학생", "구직자", "직장인·근로자", "자영업자·소상공인·프리랜서", "무직·은퇴자"],
    situations: ["1인 가구", "해당 사항 없음"],
    fields: ["주거비 지원"],
    benefit: "청년 독립거주 무주택 대상 월 최대 20만 원씩 최장 24개월 월세 지원(생애 1회, 소득·재산 요건 충족 시)",
    condition: "만 19~34세 부모님과 별도 거주 무주택 청년 등(공고·소득·재산 기준 확인 필요)",
    link: "https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004661"
  },
  {
    id: "policy_02", name: "청년전용 버팀목전세자금", source: "복지로 / 온통청년",
    minAge: 19, maxAge: 34,
    statuses: ["학생", "구직자", "직장인·근로자", "자영업자·소상공인·프리랜서"],
    situations: ["1인 가구", "신혼부부·예비부부/임신·출산", "해당 사항 없음"],
    fields: ["주거비 지원", "생활비·금융"],
    benefit: "청년 전세자금 저금리 대출 지원으로 초기 주거 마련 비용 부담 완화",
    condition: "만 19~34세 무주택 세대주 등 주택도시기금 소득·보증금 요건 충족 시",
    link: "https://www.youthcenter.go.kr/youthPolicy/ythPlcyInfoMain"
  },
  {
    id: "policy_03", name: "국민취업지원제도 (청년특례 포함)", source: "온통청년 / 고용24",
    minAge: 15, maxAge: 69,
    statuses: ["구직자", "무직·은퇴자"],
    situations: ["1인 가구", "한부모·조손 가구", "저소득·취약계층", "해당 사항 없음"],
    fields: ["취업·창업", "생활비·금융"],
    benefit: "맞춤형 취업지원 서비스와 함께 요건 충족 시 구직촉진수당 등 구직활동 지원",
    condition: "취업을 원하는 구직자 중 연령·가구소득·취업경험 등 제도 유형별 요건 충족 시",
    link: "https://www.youthcenter.go.kr/youthPolicy/ythPlcyInfoMain"
  },
  {
    id: "policy_04", name: "국민내일배움카드", source: "온통청년 / 고용24",
    minAge: 18, maxAge: 75,
    statuses: ["학생", "구직자", "직장인·근로자", "자영업자·소상공인·프리랜서", "무직·은퇴자"],
    situations: ["1인 가구", "저소득·취약계층", "해당 사항 없음"],
    fields: ["취업·창업", "교육·학자금"],
    benefit: "직무 역량 향상을 위한 직업능력개발훈련비 일부 지원",
    condition: "국민내일배움카드 발급 대상자(일부 제외 대상 외 재직자·구직자·자영업자 등)",
    link: "https://www.youthcenter.go.kr/youthPolicy/ythPlcyInfoMain"
  },
  {
    id: "policy_05", name: "청년미래적금", source: "온통청년",
    minAge: 19, maxAge: 34,
    statuses: ["직장인·근로자", "자영업자·소상공인·프리랜서"],
    situations: ["1인 가구", "해당 사항 없음"],
    fields: ["생활비·금융"],
    benefit: "청년 목돈 마련을 위한 적금 납입액에 정부기여금 및 이자소득 비과세 혜택 지원",
    condition: "만 19~34세 등 연령 및 소득·가구중위소득 요건 충족 시(회차별 모집 일정 확인)",
    link: "https://www.youthcenter.go.kr/youthPolicy/ythPlcyInfoMain"
  },
  {
    id: "policy_06", name: "국가장학금 지원사업", source: "복지로 / 한국장학재단",
    minAge: 17, maxAge: 39,
    statuses: ["학생"],
    situations: ["다자녀 포함", "저소득·취약계층", "해당 사항 없음"],
    fields: ["교육·학자금"],
    benefit: "대학생 등록금 부담 경감을 위한 학자금 지원구간별 장학금 지급",
    condition: "국내 대학 재학·입학 예정 학생 중 학자금 지원구간 및 성적·이수학점 기준 충족 시",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    id: "policy_07", name: "학자금 대출 및 상환 지원", source: "복지로 / 한국장학재단",
    minAge: 17, maxAge: 45,
    statuses: ["학생", "구직자", "직장인·근로자"],
    situations: ["저소득·취약계층", "해당 사항 없음"],
    fields: ["교육·학자금", "생활비·금융"],
    benefit: "학업 및 취업 준비 기간 중 등록금·생활비 대출 및 상환 부담 완화 지원",
    condition: "대학·대학원 재학생 및 졸업생 등 대상별 요건 충족 시",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    id: "policy_08", name: "청년 마음건강 지원사업", source: "복지로 / 온통청년",
    minAge: 19, maxAge: 34,
    statuses: ["학생", "구직자", "직장인·근로자", "자영업자·소상공인·프리랜서", "무직·은퇴자"],
    situations: ["1인 가구", "해당 사항 없음"],
    fields: ["건강·마음돌봄"],
    benefit: "심리적 어려움을 겪는 청년에게 1:1 전문 심리상담 서비스 이용권 지원",
    condition: "해당 연령대 청년 중 심리상담 지원 필요 대상(지자체·사업별 세부 기준 확인)",
    link: "https://www.youthcenter.go.kr/youthPolicy/ythPlcyInfoMain"
  },
  {
    id: "policy_09", name: "전국민 마음투자 지원사업", source: "복지로",
    minAge: 19, maxAge: 80,
    statuses: ["학생", "구직자", "직장인·근로자", "자영업자·소상공인·프리랜서", "무직·은퇴자"],
    situations: ["1인 가구", "신혼부부·예비부부/임신·출산", "자녀 양육 중(다자녀 포함)", "한부모·조손 가구", "저소득·취약계층", "해당 사항 없음"],
    fields: ["건강·마음돌봄"],
    benefit: "우울·불안 등 정서적 어려움이 있는 국민에게 전문 심리상담 바우처(총 8회) 제공",
    condition: "정신건강복지센터·의료기관 의뢰서 또는 자립준비청년·보호연장아동 등 대상 요건 충족 시",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    id: "policy_10", name: "첫만남이용권", source: "복지로",
    minAge: 18, maxAge: 65,
    statuses: ["학생", "구직자", "직장인·근로자", "자영업자·소상공인·프리랜서", "무직·은퇴자"],
    situations: ["신혼부부·예비부부/임신·출산", "자녀 양육 중(다자녀 포함)", "한부모·조손 가구"],
    fields: ["돌봄·육아", "생활비·금융"],
    benefit: "출생 아동에게 첫째아 200만 원, 둘째아 이상 300만 원 상당의 바우처 지급",
    condition: "출생신고 후 주민등록번호를 부여받은 출생아 보호자(신청 기한 및 세부 요건 확인)",
    link: "https://www.bokjiro.go.kr/ssis-tbm/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004656"
  },
  {
    id: "policy_11", name: "부모급여 지원", source: "복지로",
    minAge: 18, maxAge: 65,
    statuses: ["학생", "구직자", "직장인·근로자", "자영업자·소상공인·프리랜서", "무직·은퇴자"],
    situations: ["신혼부부·예비부부/임신·출산", "자녀 양육 중(다자녀 포함)", "한부모·조손 가구"],
    fields: ["돌봄·육아", "생활비·금융"],
    benefit: "만 0세·만 1세 아동 양육 가정의 경제적 부담 완화를 위한 월별 급여(또는 보육료·종일제 지원) 지급",
    condition: "만 0~1세 아동을 양육하는 가정(어린이집 이용 시 보육료 바우처 대체 지급 등 세부 기준 적용)",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    id: "policy_12", name: "아이돌봄 서비스", source: "복지로",
    minAge: 18, maxAge: 70,
    statuses: ["직장인·근로자", "자영업자·소상공인·프리랜서", "구직자", "학생"],
    situations: ["자녀 양육 중(다자녀 포함)", "한부모·조손 가구", "저소득·취약계층"],
    fields: ["돌봄·육아"],
    benefit: "양육 공백이 발생한 가정에 아이돌보미가 찾아가는 돌봄 서비스 및 이용요금 차등 지원",
    condition: "만 12세 이하 아동 양육 가정 중 맞벌이·한부모·취업 등 양육공백 및 소득기준 충족 시",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    id: "policy_13", name: "근로·자녀장려금", source: "복지로 / 국세청",
    minAge: 18, maxAge: 75,
    statuses: ["직장인·근로자", "자영업자·소상공인·프리랜서"],
    situations: ["1인 가구", "신혼부부·예비부부/임신·출산", "자녀 양육 중(다자녀 포함)", "한부모·조손 가구", "저소득·취약계층"],
    fields: ["생활비·금융"],
    benefit: "일하는 가구의 소득과 자녀 양육비 부담을 덜어주는 장려금 지급",
    condition: "가구원 구성에 따른 총소득 및 재산 요건 충족 시",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    id: "policy_14", name: "소상공인 고용보험료 지원 및 정책자금", source: "복지로 / 중소벤처기업부",
    minAge: 19, maxAge: 75,
    statuses: ["자영업자·소상공인·프리랜서"],
    situations: ["1인 가구", "자녀 양육 중(다자녀 포함)", "저소득·취약계층", "해당 사항 없음"],
    fields: ["취업·창업", "생활비·금융"],
    benefit: "자영업자 고용보험료 일부 지원 및 경영 안정·창업 자금 연계 지원",
    condition: "사업자등록을 유지 중인 소상공인·자영업자(지자체·사업별 지원율 및 대상 요건 확인)",
    link: "https://www.bokjiro.go.kr/ssis-tbm/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004737"
  },
  {
    id: "policy_15", name: "국민기초생활보장제도", source: "복지로",
    minAge: 0, maxAge: 100,
    statuses: ["학생", "구직자", "직장인·근로자", "자영업자·소상공인·프리랜서", "무직·은퇴자"],
    situations: ["저소득·취약계층", "한부모·조손 가구", "장애인·국가유공자"],
    fields: ["생활비·금융", "주거비 지원", "건강·마음돌봄", "교육·학자금"],
    benefit: "기준 중위소득 이하 가구에 생계·의료·주거·교육 급여를 지원해 최저생활 보장",
    condition: "가구 소득인정액이 급여별 기준 중위소득 이하이고 부양의무자 기준 등 충족 시",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    id: "policy_16", name: "에너지바우처", source: "복지로",
    minAge: 0, maxAge: 100,
    statuses: ["학생", "구직자", "직장인·근로자", "자영업자·소상공인·프리랜서", "무직·은퇴자"],
    situations: ["저소득·취약계층", "장애인·국가유공자", "자녀 양육 중(다자녀 포함)", "한부모·조손 가구"],
    fields: ["주거비 지원", "생활비·금융"],
    benefit: "하절기·동절기 냉난방비(전기·도시가스·지역난방·등유·연탄·LPG 등) 바우처 지원",
    condition: "국민기초생활보장 수급가구 중 노인·영유아·장애인·임산부 등 세대원 특성 및 소득 기준 충족 시",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    id: "policy_17", name: "장애인 활동지원 및 연금·수당 지원", source: "복지로",
    minAge: 6, maxAge: 64,
    statuses: ["학생", "구직자", "직장인·근로자", "자영업자·소상공인·프리랜서", "무직·은퇴자"],
    situations: ["장애인·국가유공자", "저소득·취약계층"],
    fields: ["건강·마음돌봄", "돌봄·육아", "생활비·금융"],
    benefit: "신체적·정신적 장애로 일상생활과 사회활동이 어려운 대상자에게 활동지원급여 및 수당 지원",
    condition: "등록장애인 중 서비스 지원 종합조사 결과 및 연령·소득 기준 충족 시",
    link: "https://www.bokjiro.go.kr/"
  },
  {
    id: "policy_18", name: "노인일자리 및 사회활동 지원사업", source: "복지로",
    minAge: 60, maxAge: 100,
    statuses: ["무직·은퇴자", "구직자", "자영업자·소상공인·프리랜서"],
    situations: ["1인 가구", "저소득·취약계층", "해당 사항 없음"],
    fields: ["취업·창업", "건강·마음돌봄", "생활비·금융"],
    benefit: "공익활동, 역량활용, 공동체사업단, 취업지원 등 어르신 맞춤형 일자리·사회활동 및 활동비 지원",
    condition: "만 65세 이상(일부 유형 만 60세 이상) 등 사업 유형별 연령 및 신청 제외 요건 충족 시",
    link: "https://www.bokjiro.go.kr/ssis-tbu/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001155"
  }
];

/* ==================== STATE ==================== */
let userAge = 25;
let userStatus = null;
let userSituations = [];
let userFields = [];

const LIFECYCLE = [
  [1, 6, '영유아'], [7, 12, '어린이'], [13, 18, '청소년'], [19, 34, '청년'],
  [35, 49, '중장년'], [50, 64, '장년'], [65, 79, '어르신'], [80, 100, '노인']
];

const PARENTAL_SITUATIONS = ['신혼부부·예비부부/임신·출산', '자녀 양육 중(다자녀 포함)', '한부모·조손 가구'];

/* ==================== LIFECYCLE LABEL ==================== */
function getLifecycle(age) {
  for (const [min, max, label] of LIFECYCLE) {
    if (age >= min && age <= max) return label;
  }
  return '';
}

/* ==================== SLIDER ==================== */
function updateAge(val) {
  userAge = parseInt(val);
  document.getElementById('age-value').textContent = userAge;
  document.getElementById('lifecycle-tag').textContent = getLifecycle(userAge);

  const pct = ((userAge - 1) / (80 - 1)) * 100;
  document.getElementById('age-slider').style.background =
    `linear-gradient(90deg, var(--green-400) ${pct}%, var(--green-100) ${pct}%)`;

  markDone('age');
  updateProgress();
}

/* ==================== SINGLE SELECT ==================== */
function selectSingle(group, value) {
  if (group === 'status') {
    userStatus = value;
    document.querySelectorAll('#group-status .toggle-btn').forEach(b => {
      b.classList.toggle('selected', b.textContent.trim().includes(value));
    });
    hideError('status');
    markDone('status');
  }
  updateProgress();
}

/* ==================== MULTI SELECT ==================== */
function selectMulti(group, value, el) {
  if (group === 'situation') {
    const noneBtn = document.getElementById('btn-none-situation');
    noneBtn.classList.remove('selected');
    userSituations = userSituations.filter(s => s !== '해당 사항 없음');

    if (userSituations.includes(value)) {
      userSituations = userSituations.filter(s => s !== value);
      el.classList.remove('selected');
    } else {
      userSituations.push(value);
      el.classList.add('selected');
    }

    if (userSituations.length > 0) { hideError('situation'); markDone('situation'); }
    else { unmarkDone('situation'); }
  }
  updateProgress();
}

/* ==================== NONE SELECT ==================== */
function selectNone(group) {
  if (group === 'situation') {
    userSituations = ['해당 사항 없음'];
    document.querySelectorAll('#group-situation .toggle-btn').forEach(b => b.classList.remove('selected'));
    document.getElementById('btn-none-situation').classList.add('selected');
    hideError('situation');
    markDone('situation');
  }
  updateProgress();
}

/* ==================== FIELD SELECT (max 3) ==================== */
function selectField(value, el) {
  if (userFields.includes(value)) {
    userFields = userFields.filter(f => f !== value);
    el.classList.remove('selected');
  } else {
    if (userFields.length >= 3) {
      showToast('관심 분야는 최대 3개까지 선택 가능해요 😊');
      return;
    }
    userFields.push(value);
    el.classList.add('selected');
  }

  if (userFields.length > 0) { hideError('field'); markDone('field'); }
  else { unmarkDone('field'); }
  updateProgress();
}

/* ==================== CARD STATE ==================== */
function markDone(key) {
  const card = document.getElementById('card-' + key);
  const num  = document.getElementById('num-' + key);
  card.classList.add('filled');
  num.classList.add('done');
  num.textContent = '✓';
}

function unmarkDone(key) {
  const card = document.getElementById('card-' + key);
  const num  = document.getElementById('num-' + key);
  card.classList.remove('filled');
  num.classList.remove('done');
  const map = { age: '1', status: '2', situation: '3', field: '4' };
  num.textContent = map[key];
}

/* ==================== PROGRESS ==================== */
function updateProgress() {
  let done = 1; // age is always set
  if (userStatus) done++;
  if (userSituations.length > 0) done++;
  if (userFields.length > 0) done++;

  const pct = (done / 4) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-text').textContent = done + ' / 4 완료';
}

/* ==================== ERROR ==================== */
function showError(key) {
  document.getElementById('error-' + key).classList.add('show');
  document.getElementById('card-' + key).style.borderColor = '#e05252';
  document.getElementById('card-' + key).scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function hideError(key) {
  document.getElementById('error-' + key).classList.remove('show');
  document.getElementById('card-' + key).style.borderColor = '';
}

/* ==================== SUBMIT ==================== */
function submitForm() {
  let valid = true;

  if (!userStatus) { showError('status'); valid = false; }
  else hideError('status');

  if (userSituations.length === 0) {
    if (valid) showError('situation');
    else document.getElementById('error-situation').classList.add('show');
    valid = false;
  } else hideError('situation');

  if (userFields.length === 0) {
    if (valid) showError('field');
    else document.getElementById('error-field').classList.add('show');
    valid = false;
  } else hideError('field');

  if (!valid) {
    showToast('⚠️ 선택하지 않은 항목이 있어요. 확인해 주세요!');
    return;
  }

  renderResult();
  goToPage('page-result');
}

/* ==================== MATCHING ==================== */
function scorePolicy(p) {
  let score = 0;
  const isParental = PARENTAL_SITUATIONS.some(s => userSituations.includes(s));
  const isParentalPolicy = (
    p.situations.some(s => PARENTAL_SITUATIONS.includes(s)) &&
    (p.fields.includes('돌봄·육아') || p.fields.includes('생활비·금융'))
  );

  // 1. Age check
  if (userAge >= p.minAge && userAge <= p.maxAge) {
    score += 20;
  } else if (isParental && isParentalPolicy && userAge >= 18 && userAge <= 65) {
    score += 10; // parent exception
  } else {
    return -1; // exclude
  }

  // 2. Status match
  if (p.statuses.includes(userStatus)) score += 15;

  // 3. Situation match
  const hasNone = userSituations.includes('해당 사항 없음');
  if (hasNone) {
    if (p.situations.includes('해당 사항 없음')) score += 10;
  } else {
    for (const s of userSituations) {
      if (p.situations.includes(s)) score += 18;
    }
  }

  // 4. Field match
  for (const f of userFields) {
    if (p.fields.includes(f)) score += 12;
  }

  return score;
}

/* ==================== REASON ==================== */
function buildReason(p) {
  const parts = [];
  const lifecycle = getLifecycle(userAge);

  parts.push(`만 ${userAge}세 ${lifecycle}이신 고객님께`);

  if (p.statuses.includes(userStatus)) {
    parts.push(`${userStatus} 상태에서 활용하시기 좋은 정책이에요.`);
  }

  const matchedSituations = userSituations.filter(s => p.situations.includes(s));
  if (matchedSituations.length > 0 && !userSituations.includes('해당 사항 없음')) {
    parts.push(`${matchedSituations.join(', ')} 상황과 잘 맞는 지원이 포함되어 있어요.`);
  }

  const matchedFields = userFields.filter(f => p.fields.includes(f));
  if (matchedFields.length > 0) {
    parts.push(`관심 분야인 '${matchedFields.join(', ')}'와 직접 연결된 정책이에요.`);
  }

  return parts.join(' ');
}

/* ==================== RENDER RESULT ==================== */
function renderResult() {
  const scored = POLICIES
    .map(p => ({ ...p, score: scorePolicy(p) }))
    .filter(p => p.score >= 0)
    .sort((a, b) => b.score - a.score);

  const top = scored.slice(0, 6);
  const lifecycle = getLifecycle(userAge);

  // Header
  document.getElementById('result-header').innerHTML = `
    <div class="result-emoji">🎉</div>
    <h1>고객님께 딱 맞는 정책을<br/>찾아드렸어요!</h1>
    <p class="result-desc">
      <span class="result-name">만 ${userAge}세 (${lifecycle}) · ${userStatus}</span> 기준으로<br/>
      아래 정책들을 적극 추천해 드려요. 꼼꼼히 살펴보시고 도움이 되시길 바랍니다 😊
    </p>
    <div class="profile-chips">
      <span class="profile-chip">🎂 만 ${userAge}세 · ${lifecycle}</span>
      <span class="profile-chip">💼 ${userStatus}</span>
      ${userSituations.map(s => `<span class="profile-chip">🏷️ ${s}</span>`).join('')}
      ${userFields.map(f => `<span class="profile-chip">🔖 ${f}</span>`).join('')}
    </div>
  `;

  // List
  const listEl = document.getElementById('result-list');
  if (top.length === 0) {
    listEl.innerHTML = `
      <div class="no-result">
        <div style="font-size:2.5rem">🔍</div>
        <p>선택하신 조건과 정확히 맞는 정책을 찾지 못했어요.<br/>
        조건을 다시 선택해 보시거나 관심 분야를 더 추가해 보세요.</p>
      </div>`;
    return;
  }

  listEl.innerHTML = top.map((p, i) => `
    <div class="policy-card" style="animation-delay:${i * 0.08}s">
      <div class="policy-card-top">
        <div class="policy-rank">${i + 1}</div>
        <div class="policy-name">${p.name}</div>
        <div class="policy-source">${p.source}</div>
      </div>
      <div class="policy-reason">💬 ${buildReason(p)}</div>
      <div class="policy-info-grid">
        <div class="info-block">
          <div class="ib-label">📦 주요 혜택</div>
          <div class="ib-value">${p.benefit}</div>
        </div>
        <div class="info-block">
          <div class="ib-label">📋 신청 조건</div>
          <div class="ib-value">${p.condition}</div>
        </div>
      </div>
      <a class="policy-link" href="${p.link}" target="_blank" rel="noopener noreferrer">
        신청하러 가기 →
      </a>
    </div>
  `).join('');
}

/* ==================== NAVIGATION ==================== */
function goToPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function goBack() {
  goToPage('page-input');
}

/* ==================== TOAST ==================== */
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

/* ==================== INIT ==================== */
(function init() {
  updateAge(25);
  markDone('age');
  updateProgress();
})();
