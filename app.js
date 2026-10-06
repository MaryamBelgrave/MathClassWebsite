/*
  app.js: builds every page from content.js.
  You should not need to edit this file. All text and links live in content.js.
*/
(function () {
  'use strict';

  var main = document.getElementById('main');
  var C = window.CONTENT;

  // If content.js has a typo, show a friendly message instead of a blank page.
  if (!C || typeof C !== 'object') {
    main.innerHTML =
      '<h1 tabindex="-1">Something needs a fix</h1>' +
      '<p>The site could not read content.js. Check your last edit for a missing comma, quote, or bracket.</p>' +
      '<p lang="es">El sitio no pudo leer content.js. Revise el último cambio: puede faltar una coma, unas comillas o un corchete.</p>';
    return;
  }

  /* ---------- Setup ---------- */

  var VIEWS = ['home', 'help', 'syllabus', 'schedule', 'store', 'families'];
  var VIEW_ICONS = { home: 'home', help: 'help', syllabus: 'line', schedule: 'clock', store: 'bag', families: 'people' };
  var GRADES = ['5', '6'];
  var CATEGORIES = ['supplies', 'privileges', 'treats'];
  var FONT_URLS = {
    A: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;700&family=Fraunces:opsz,wght,SOFT@9..144,500..700,0..100&family=Shantell+Sans:wght@400;600&display=swap',
    B: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..700&family=Lexend:wght@400;700&family=Shantell+Sans:wght@400;600&display=swap',
    C: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;700&family=Recursive:wght,CASL@400..800,0..1&family=Shantell+Sans:wght@400;600&display=swap'
  };

  var site = obj(C.site);
  var links = obj(site.links);
  var school = obj(site.school);
  var contact = obj(site.contact);
  var strings = obj(C.strings);
  var gradesData = obj(C.grades);
  var sched = obj(C.schedule);
  var storeData = obj(C.store);
  var syllabus = obj(C.syllabus);
  var families = obj(C.families);
  var dayTypes = obj(sched.dayTypes);

  var storage = {
    get: function (k) { try { return window.localStorage.getItem('mb-' + k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem('mb-' + k, v); } catch (e) { /* storage blocked: that's fine */ } }
  };

  var state = {
    lang: storage.get('lang') === 'es' ? 'es' : 'en',
    grade: GRADES.indexOf(storage.get('grade')) > -1 ? storage.get('grade') : '5',
    section: storage.get('section') || '',
    helpModule: null,
    openModule: null,
    dayType: null,
    storeFilter: 'all',
    budget: ''
  };
  if (!findSection(state.section)) state.section = '';

  /* ---------- Small helpers ---------- */

  function obj(v) { return v && typeof v === 'object' && !Array.isArray(v) ? v : {}; }
  function arr(v) { return Array.isArray(v) ? v.filter(function (x) { return x != null; }) : []; }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // Pick the right language from a value like { en: "...", es: "..." }.
  function L(v) {
    if (v == null || v === false) return '';
    if (typeof v === 'string' || typeof v === 'number') return String(v);
    if (Array.isArray(v)) return '';
    var s = v[state.lang];
    if (s == null || String(s).trim() === '') s = v.en;
    return s == null ? '' : String(s);
  }
  function has(v) { return L(v).trim() !== ''; }

  // UI label from strings, with {placeholders} filled in.
  function t(key, vars) {
    var s = obj(strings[state.lang])[key];
    if (s == null || s === '') s = obj(strings.en)[key];
    if (s == null) s = key;
    s = String(s);
    if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    return s;
  }
  function T(key, vars) { return esc(t(key, vars)); }
  function tList(key) {
    var v = obj(strings[state.lang])[key];
    return Array.isArray(v) && v.length ? v : arr(obj(strings.en)[key]);
  }

  function safeUrl(u) {
    u = String(u == null ? '' : u).trim();
    if (!u) return '';
    if (/^(https?:|mailto:|tel:)/i.test(u)) return u;
    if (/^[a-z][a-z0-9+.-]*:/i.test(u)) return ''; // block javascript: and other schemes
    return u.replace(/^\/+/, ''); // keep paths relative for GitHub Pages
  }
  function hostOf(u) {
    var m = /^https?:\/\/([^\/?#]+)/i.exec(u);
    return m ? m[1].replace(/^www\./, '') : '';
  }

  /* ---------- Icons: one outline set, always shown next to a word ---------- */

  var ICONS = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h5v-6h4v6h5V9.5"/>',
    help: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="m5.6 5.6 3.9 3.9m5 5 3.9 3.9m0-12.8-3.9 3.9m-5 5-3.9 3.9"/>',
    line: '<path d="M2 14h20"/><path d="M5 11v6M12 11v6M19 11v6"/><circle cx="12" cy="6" r="2"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    bag: '<path d="M5 8h14l-1 13H6z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/>',
    people: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.5a5 5 0 0 1 5 5.5"/>',
    board: '<rect x="3" y="4" width="18" height="12" rx="1"/><path d="m8 21 4-5 4 5"/><path d="M7 8h6M7 11h9"/>',
    slides: '<path d="M2 4h20"/><path d="M4 4v11h16V4"/><path d="M12 15v3m-4 3 4-3 4 3"/>',
    play: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3z"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7"/>',
    pin: '<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.5"/>',
    alert: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V13"/><path d="M12 16.5h.01"/>',
    external: '<path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    pencil: '<path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19z"/><path d="m14.5 6.5 3 3"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 7 9 6 9-6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1"/>',
    print: '<path d="M7 9V3h10v6"/><path d="M7 18H4v-8h16v8h-3"/><path d="M7 14h10v7H7z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="1"/><path d="M3 10h18M8 3v4m8-4v4"/>',
    grid: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 3v18m6-18v18M3 9h18M3 15h18"/>',
    note: '<path d="M4 4h16v12l-4 4H4z"/><path d="M16 20v-4h4"/><path d="M8 9h8m-8 4h5"/>',
    ruler: '<path d="m3 16 13-13 5 5L8 21z"/><path d="m7 12 2 2m1-5 2 2m1-5 2 2"/>',
    calc: '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M8 7h8"/><path d="M8.5 11.5h.01m3.5 0h.01m3.5 0h.01M8.5 15h.01M12 15h.01m3.5 0h.01M8.5 18h.01M12 18h.01m3.5 0h.01"/>',
    graph: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
    tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.5"/>',
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    school: '<path d="M3 21h18"/><path d="M5 21V10l7-5 7 5v11"/><path d="M10 21v-5h4v5"/><path d="M12 10h.01"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    book: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20v-3"/>'
  };
  function icon(name, cls) {
    return '<svg class="icon' + (cls ? ' ' + cls : '') + '" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || '') + '</svg>';
  }

  /* ---------- Links ---------- */

  // A link to another site. Blank link: shows "Coming soon" instead.
  function ext(url, label, cls, iconName) {
    var u = safeUrl(url);
    var lbl = esc(label);
    if (!u) {
      return '<span class="soon' + (cls && cls.indexOf('btn') > -1 ? ' soon-btn' : '') + '">' +
        (iconName ? icon(iconName) : '') + '<span>' + lbl + '<span class="soon-label">' + T('comingSoon') + '</span></span></span>';
    }
    if (u.charAt(0) === '#') {
      return '<a class="' + (cls || '') + '" href="' + esc(u) + '">' + (iconName ? icon(iconName) : '') + '<span>' + lbl + '</span></a>';
    }
    var isWeb = /^https?:/i.test(u);
    var host = hostOf(u);
    return '<a class="' + (cls || '') + '" href="' + esc(u) + '"' + (isWeb ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' +
      (iconName ? icon(iconName) : '') + '<span>' + lbl + '</span>' +
      (isWeb ? icon('external', 'icon-ext') + '<span class="sr-only"> (' + (host ? esc(host) + ', ' : '') + T('newTab') + ')</span>' : '') +
      '</a>';
  }

  /* ---------- Dates and times (Philadelphia) ---------- */

  function parseDate(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s == null ? '' : s).trim());
    if (!m) return null;
    var d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
    return isNaN(d.getTime()) ? null : d;
  }
  function isDate(s) { return !!parseDate(s); }
  function addDays(s, n) { var d = parseDate(s); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
  function daysBetween(a, b) { return Math.round((parseDate(b) - parseDate(a)) / 864e5); }
  function locale() { return state.lang === 'es' ? 'es-US' : 'en-US'; }
  function fmtDate(s, style) {
    var d = parseDate(s);
    if (!d) return '';
    var o = style === 'long' ? { weekday: 'long', month: 'long', day: 'numeric' }
      : style === 'md' ? { month: 'short', day: 'numeric' }
      : style === 'wd' ? { weekday: 'short' }
      : style === 'mdy' ? { month: 'long', day: 'numeric', year: 'numeric' }
      : { weekday: 'short', month: 'short', day: 'numeric' };
    o.timeZone = 'UTC';
    try { return new Intl.DateTimeFormat(locale(), o).format(d); } catch (e) { return s; }
  }
  function toMin(hm) {
    var m = /^(\d{1,2}):(\d{2})$/.exec(String(hm == null ? '' : hm).trim());
    return m ? (+m[1]) * 60 + (+m[2]) : null;
  }
  function hour12(min) { return ((Math.floor(min / 60) + 11) % 12) + 1; }
  function fmtTime(min) {
    var mm = String(min % 60); if (mm.length < 2) mm = '0' + mm;
    var pm = Math.floor(min / 60) >= 12;
    return hour12(min) + ':' + mm + (state.lang === 'es' ? (pm ? ' p. m.' : ' a. m.') : (pm ? ' PM' : ' AM'));
  }
  // "at 1:00" is "a la 1:00" in Spanish, "a las 2:00" for other hours.
  function atTime(min, kind) { return t(hour12(min) === 1 ? kind + 'One' : kind, { time: fmtTime(min) }); }

  // Today's date and time in Philadelphia. Add ?date=2026-10-06&time=09:30 to the address to preview another day.
  function phillyNow() {
    var date, minutes;
    try {
      var parts = {};
      new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
        .formatToParts(new Date()).forEach(function (p) { parts[p.type] = p.value; });
      date = parts.year + '-' + parts.month + '-' + parts.day;
      minutes = (parseInt(parts.hour, 10) % 24) * 60 + parseInt(parts.minute, 10);
    } catch (e) {
      var d = new Date();
      date = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      minutes = d.getHours() * 60 + d.getMinutes();
    }
    try {
      var q = new URLSearchParams(window.location.search);
      if (isDate(q.get('date'))) date = q.get('date');
      if (toMin(q.get('time')) != null) minutes = toMin(q.get('time'));
    } catch (e) { /* ignore */ }
    return { date: date, minutes: minutes };
  }

  /* ---------- Grades and modules ---------- */

  function gradeData(g) { return obj(gradesData[g || state.grade]); }
  function modulesOf(g) {
    return arr(g.modules).slice().sort(function (a, b) {
      var x = isDate(a.start) ? a.start : '9999', y = isDate(b.start) ? b.start : '9999';
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
  // Which module are we in? The most recent one that has started.
  function moduleStatus(mods, today) {
    var cur = -1;
    mods.forEach(function (m, i) { if (isDate(m.start) && m.start <= today) cur = i; });
    var last = mods[mods.length - 1];
    var allDone = mods.length > 0 && cur === mods.length - 1 && isDate(last.end) && today > last.end;
    return {
      current: allDone ? -1 : cur,
      allDone: allDone,
      statuses: mods.map(function (m, i) { return allDone || i < cur ? 'past' : i === cur ? 'current' : 'future'; })
    };
  }
  function modKey(m) { return String(m.number); }
  function modName(m) { return t('moduleN', { n: m.number }); }
  function dateRange(m, style) {
    if (!isDate(m.start) || !isDate(m.end)) return '';
    return t('dateRange', { start: fmtDate(m.start, style || 'md'), end: fmtDate(m.end, style || 'md') });
  }

  /* ---------- Schedule logic ---------- */

  function findSection(id) { return arr(obj(window.CONTENT && window.CONTENT.schedule).sections).filter(function (s) { return s.id === id; })[0] || null; }
  function defaultType() { return dayTypes[sched.defaultDayType] ? sched.defaultDayType : Object.keys(dayTypes)[0]; }
  function inRange(date, n) {
    if (!n) return false;
    if (isDate(n.date)) return n.date === date;
    if (isDate(n.start) && isDate(n.end)) return date >= n.start && date <= n.end;
    return false;
  }
  function dayInfo(date) {
    if ((isDate(sched.firstDay) && date < sched.firstDay) || (isDate(sched.lastDay) && date > sched.lastDay)) return { school: false, reason: t('summer') };
    var ns = arr(sched.noSchoolDates).filter(function (n) { return inRange(date, n); })[0];
    if (ns) return { school: false, reason: has(ns) ? L(ns) : t('noSchool') };
    var wd = parseDate(date).getUTCDay();
    if (wd === 0 || wd === 6) return { school: false, reason: t('weekend') };
    var sp = arr(sched.specialDays).filter(function (s) { return inRange(date, s) && dayTypes[s.type] && (!s.grade || String(s.grade) === state.grade); })[0];
    var type = sp ? sp.type : defaultType();
    return type ? { school: true, type: type } : { school: false, reason: t('noSchool') };
  }
  function periodName(p) {
    if (has(p.name)) return L(p.name);
    var n = obj(sched.periodNames)[p.id];
    return has(n) ? L(n) : String(p.id || '');
  }
  function periodsFor(type) {
    return arr(obj(dayTypes[type]).periods).map(function (p) {
      return { id: p.id, start: toMin(p.start), end: toMin(p.end), name: periodName(p) };
    }).filter(function (p) { return p.start != null && p.end != null; })
      .sort(function (a, b) { return a.start - b.start; });
  }
  var WEEKDAYS = ['mon', 'tue', 'wed', 'thu', 'fri'];
  var WEEKDAY_DATES = { mon: '2026-10-05', tue: '2026-10-06', wed: '2026-10-07', thu: '2026-10-08', fri: '2026-10-09' };
  var WD_KEYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  function weekdayKey(date) { return WD_KEYS[parseDate(date).getUTCDay()]; }

  // One class entry: "math", or { subject, teacher, room, math }.
  function classOf(v) {
    if (!v) return null;
    var e = typeof v === 'string' ? { subject: v } : v;
    if (!e.subject) return null;
    var sub = obj(sched.subjects)[e.subject];
    var room = e.room;
    var roomTxt = '';
    if (room && typeof room === 'object') roomTxt = L(room);
    else if (room) roomTxt = /^\d+$/.test(String(room)) ? t('roomN', { n: room }) : String(room);
    var bits = [];
    if (e.teacher) bits.push(String(e.teacher));
    if (roomTxt) bits.push(roomTxt);
    return {
      name: has(sub) ? L(sub) : String(e.subject),
      detail: bits.join(', '),
      isMath: e.subject === (sched.mathSubject || 'math') || e.math === true
    };
  }
  // What a section has in a period. For specials, pass the weekday to get that day, or leave it out to get the whole week.
  function subjectFor(section, periodId, dayType, wd) {
    if (!section) return null;
    var map = obj(section.byDayType)[dayType] || (dayType === defaultType() ? section.periods : null);
    var v = obj(map)[periodId];
    if (!v) return null;
    if (typeof v === 'object' && !v.subject) {
      if (wd && v[wd]) return classOf(v[wd]);
      var week = WEEKDAYS.filter(function (k) { return v[k]; }).map(function (k) { var c = classOf(v[k]); c.day = k; return c; });
      var sp = obj(sched.subjects)[periodId];
      return week.length ? { name: has(sp) ? L(sp) : periodId, detail: '', isMath: false, week: week } : null;
    }
    return classOf(v);
  }
  function nextSchoolDay(from) {
    for (var i = 1; i <= 120; i++) {
      var d = addDays(from, i), info = dayInfo(d);
      if (info.school) { var ps = periodsFor(info.type); if (ps.length) return { date: d, period: ps[0], type: info.type }; }
    }
    return null;
  }

  /* ---------- Shared bits of page ---------- */

  function pageHead(view, extra) {
    return '<div class="page-head"><h1 id="view-title" tabindex="-1">' + T('title_' + view) + '</h1>' + (extra || '') + '</div>';
  }

  function gradeSwitch() {
    return '<div class="grade-switch" role="group" aria-labelledby="gs-label"><span id="gs-label" class="gs-label">' + T('gradeLabel') + '</span>' +
      GRADES.map(function (g) {
        var on = state.grade === g;
        return '<button type="button" id="grade-btn-' + g + '" class="grade-btn grade-btn-' + g + '" data-action="grade" data-grade="' + g + '" aria-pressed="' + on + '">' +
          (on ? icon('check') : '') + '<span>' + T('grade' + g) + '</span></button>';
      }).join('') + '</div>';
  }

  function ticks() { return '<div class="ticks" aria-hidden="true"></div>'; }

  function textList(items, cls) {
    var li = arr(items).filter(has).map(function (x) { return '<li>' + esc(L(x)) + '</li>'; }).join('');
    return li ? '<ul class="' + (cls || 'plain-list') + '">' + li + '</ul>' : '';
  }

  function img(src, alt, cls) {
    var u = safeUrl(src);
    if (!u) return '';
    return '<img class="' + (cls || '') + '" src="' + esc(u) + '" alt="' + esc(L(alt)) + '" loading="lazy" decoding="async">';
  }

  /* ============================================================
     HOME
     ============================================================ */

  function viewHome() {
    var g = gradeData();
    var mods = modulesOf(g);
    var today = phillyNow().date;
    var st = moduleStatus(mods, today);
    var cur = st.current > -1 ? mods[st.current] : null;

    var html = pageHead('home', gradeSwitch());

    // Where we are
    html += '<div class="home-top">';
    html += '<section class="panel grade-panel where" aria-labelledby="where-h"><h2 id="where-h">' + icon('pin') + '<span>' + T('whereWeAre') + '</span></h2>';
    if (!mods.length) {
      html += '<p class="soon">' + T('comingSoon') + '</p>';
    } else if (st.allDone) {
      html += '<p>' + T('yearDone') + '</p>';
    } else if (!cur) {
      html += '<p>' + T('beforeYear', { n: mods[0].number, date: fmtDate(mods[0].start, 'long') }) + '</p>';
    } else {
      var total = isDate(cur.end) ? Math.max(1, Math.ceil((daysBetween(cur.start, cur.end) + 1) / 7)) : 0;
      var wk = total ? Math.min(total, Math.floor(daysBetween(cur.start, today) / 7) + 1) : 0;
      html += '<p class="tag tag-here">' + icon('pin') + T('youAreHere') + '</p>' +
        '<p class="where-title"><span class="where-num">' + esc(modName(cur)) + '</span> ' + esc(L(cur.title)) + '</p>' +
        '<p class="meta">' + esc(dateRange(cur)) + (total ? '. ' + T('weekOf', { n: wk, total: total }) + '.' : '') + '</p>' +
        (has(cur.bigIdea) ? '<p>' + esc(L(cur.bigIdea)) + '</p>' : '');
    }
    html += '</section>';

    // Due soon
    var end = addDays(today, 7);
    var due = [];
    arr(g.homework).forEach(function (h) {
      if (isDate(h.due) && h.due >= today && h.due <= end && has(h.title)) due.push({ date: h.due, title: L(h.title), link: h.link, kind: 'homework' });
    });
    mods.forEach(function (m) {
      arr(m.assessments).forEach(function (a) {
        if (isDate(a.date) && a.date >= today && a.date <= end && has(a.title)) due.push({ date: a.date, title: L(a.title), link: a.link, kind: 'assessment' });
      });
    });
    due.sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });

    html += '<section class="panel due" aria-labelledby="due-h"><h2 id="due-h" class="due-h">' + icon('alert') + '<span>' + T('dueSoon') + '</span></h2>';
    if (!due.length) {
      html += '<p>' + T('dueNone') + '</p>';
    } else {
      html += '<ul class="due-list">' + due.map(function (d) {
        var n = daysBetween(today, d.date);
        var when = n === 0 ? t('today') : n === 1 ? t('tomorrow') : t('inDays', { n: n });
        var title = safeUrl(d.link) ? ext(d.link, d.title) : esc(d.title);
        return '<li><p class="due-when"><strong>' + esc(when) + '</strong> <span class="meta">' + esc(fmtDate(d.date)) + '</span></p>' +
          '<p class="due-what"><span class="kind">' + icon(d.kind === 'homework' ? 'pencil' : 'note') + T(d.kind) + '</span> ' + title + '</p></li>';
      }).join('') + '</ul>';
    }
    html += '</section></div>';

    // Big buttons
    html += '<section aria-labelledby="quick-h" class="quick"><h2 id="quick-h" class="sr-only">' + T('quickLinks') + '</h2><ul class="big-links">' +
      '<li>' + ext(g.classroom, t('classroom'), 'btn btn-primary btn-big', 'board') + '</li>' +
      '<li>' + ext((cur && cur.slides) || g.slides, t('slides'), 'btn btn-big', 'slides') + '</li>' +
      '<li>' + ext('#help', t('homeworkHelp'), 'btn btn-big', 'help') + '</li>' +
      '</ul></section>';

    html += ticks();

    // Announcements and puzzle
    html += '<div class="home-bottom">';
    var notes = arr(C.announcements).filter(function (a) {
      return has(a) && (!a.grade || String(a.grade) === state.grade);
    }).sort(function (a, b) { return (b.date || '') < (a.date || '') ? -1 : (b.date || '') > (a.date || '') ? 1 : 0; })
      .slice(0, Number(site.maxAnnouncements) || 4);
    html += '<section aria-labelledby="ann-h"><h2 id="ann-h">' + icon('note') + '<span>' + T('announcements') + '</span></h2>';
    html += notes.length ? '<ul class="notes">' + notes.map(function (a) {
      return '<li>' + (isDate(a.date) ? '<p class="note-date">' + esc(fmtDate(a.date)) + '</p>' : '') + '<p class="note">' + esc(L(a)) + '</p></li>';
    }).join('') + '</ul>' : '<p>' + T('noAnnouncements') + '</p>';
    html += '</section>';

    var p = obj(C.puzzle);
    if (has(p.title) || has(p.prompt) || safeUrl(p.image)) {
      html += '<section class="panel puzzle" aria-labelledby="puz-h"><h2 id="puz-h">' + icon('grid') + '<span>' + T('puzzle') + '</span></h2>' +
        (has(p.title) ? '<h3>' + esc(L(p.title)) + '</h3>' : '') +
        (has(p.prompt) ? '<p>' + esc(L(p.prompt)) + '</p>' : '') +
        img(p.image, has(p.alt) ? p.alt : p.title, 'puzzle-img') +
        '<p class="note">' + T('puzzleNote') + '</p></section>';
    }
    html += '</div>';
    return html;
  }

  /* ============================================================
     HOMEWORK HELP
     ============================================================ */

  function viewHelp() {
    var g = gradeData();
    var mods = modulesOf(g);
    var today = phillyNow().date;
    var st = moduleStatus(mods, today);

    var sel = mods.filter(function (m) { return modKey(m) === state.helpModule; })[0];
    if (!sel) sel = st.current > -1 ? mods[st.current] : st.allDone ? mods[mods.length - 1] : mods[0];

    var html = pageHead('help', gradeSwitch());

    html += '<section class="tools" aria-labelledby="tools-h"><h2 id="tools-h">' + icon('ruler') + '<span>' + T('tools') + '</span></h2><ul class="tool-list">' +
      '<li>' + ext(links.manipulatives, t('toolManip'), 'btn', 'grid') + '</li>' +
      '<li>' + ext(links.desmos, t('toolDesmos'), 'btn', 'graph') + '</li>' +
      '<li>' + ext(links.calculator, t('toolCalc'), 'btn', 'calc') + '</li>' +
      '</ul></section>';

    if (!mods.length) return html + '<p class="soon">' + T('comingSoon') + '</p>';

    html += '<div class="module-pick" role="group" aria-labelledby="pick-h"><p id="pick-h" class="pick-label">' + T('pickModule') + '</p><ul>' +
      mods.map(function (m, i) {
        var on = m === sel;
        return '<li><button type="button" id="help-mod-' + esc(modKey(m)) + '" class="chip" data-action="help-module" data-mod="' + esc(modKey(m)) + '" aria-pressed="' + on + '">' +
          (st.statuses[i] === 'current' ? icon('pin') : st.statuses[i] === 'past' ? icon('check') : '') +
          '<span>' + esc(modName(m)) + '</span>' +
          (st.statuses[i] === 'current' ? '<span class="sr-only">, ' + T('youAreHere') + '</span>' : '') +
          '</button></li>';
      }).join('') + '</ul></div>';

    html += '<section class="help-module" aria-labelledby="mod-h"><h2 id="mod-h"><span class="where-num">' + esc(modName(sel)) + '</span> ' + esc(L(sel.title)) + '</h2>';
    if (has(sel.bigIdea)) html += '<p class="lead">' + esc(L(sel.bigIdea)) + '</p>';

    var topics = arr(sel.topics).filter(function (tp) { return has(tp.title); });
    if (!topics.length) {
      html += '<p class="soon">' + icon('clock') + '<span>' + T('topicsSoon') + '</span></p>';
    }
    topics.forEach(function (tp, i) {
      var id = 'topic-' + modKey(sel) + '-' + i;
      html += '<article class="topic grade-edge" aria-labelledby="' + id + '">' +
        '<h3 id="' + id + '">' + (has(tp.letter) ? '<span class="topic-letter">' + T('topicN', { n: L(tp.letter) }) + '</span> ' : '') + esc(L(tp.title)) + '</h3>';
      if (has(tp.bigIdea)) html += '<p class="big-idea"><strong>' + T('bigIdea') + ':</strong> ' + esc(L(tp.bigIdea)) + '</p>';
      html += lessonsBlock(tp.lessons);
      html += vocabBlock(tp.vocab, 'h4');
      html += exampleBlock(tp.example);
      html += '<ul class="link-row">' +
        '<li>' + ext(tp.video || g.videos, t('watchVideo'), 'btn', 'play') + '</li>' +
        '<li>' + ext(tp.slides || sel.slides || g.slides, t('slides'), 'btn', 'slides') + '</li>' +
        '<li>' + ext(tp.family || sel.family || links.eurekaFamily, t('familyGuide'), 'btn', 'people') + '</li>' +
        '</ul>';
      html += stuckBlock();
      html += '</article>';
    });
    html += '</section>';
    return html;
  }

  // The lessons in a topic, with their numbers, so students can match a lesson to their homework.
  function lessonsBlock(items) {
    var ls = arr(items).filter(function (l) { return has(l.title); });
    if (!ls.length) return '';
    return '<h4>' + T('lessonsLabel') + '</h4><ul class="lessons">' + ls.map(function (l) {
      return '<li><span class="lesson-n">' + T('lessonN', { n: l.n }) + '</span><span>' + esc(L(l.title)) + '</span></li>';
    }).join('') + '</ul>';
  }

  function vocabBlock(vocab, hTag) {
    var words = arr(vocab).filter(function (v) { return has(v.en) || has(v.es); });
    if (!words.length) return '';
    var first = state.lang === 'es' ? 'es' : 'en', second = first === 'es' ? 'en' : 'es';
    return '<' + hTag + '>' + T('keyWords') + '</' + hTag + '><ul class="vocab">' + words.map(function (v) {
      return '<li><span class="v-words"><span class="v-term" lang="' + first + '">' + esc(L(v[first])) + '</span>' +
        (has(v[second]) ? '<span class="v-alt" lang="' + second + '">' + esc(L(v[second])) + '</span>' : '') + '</span>' +
        (has(v.example) ? '<span class="v-ex">' + esc(L(v.example)) + '</span>' : '') + '</li>';
    }).join('') + '</ul>';
  }

  function exampleBlock(ex) {
    ex = obj(ex);
    if (!has(ex.problem)) return '';
    var steps = arr(ex.steps).filter(has);
    return '<details class="example"><summary>' + T('seeExample') + '</summary><div class="example-body">' +
      '<p class="ex-problem">' + esc(L(ex.problem)) + '</p>' +
      (steps.length ? '<ol>' + steps.map(function (s) { return '<li>' + esc(L(s)) + '</li>'; }).join('') + '</ol>' : '') +
      (has(ex.answer) ? '<p class="ex-answer"><strong>' + T('answer') + ':</strong> ' + esc(L(ex.answer)) + '</p>' : '') +
      '</div></details>';
  }

  function stuckBlock() {
    var steps = tList('stuckSteps');
    if (!steps.length) return '';
    return '<details class="stuck"><summary>' + T('stuck') + '</summary><ol class="stuck-steps">' +
      steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol></details>';
  }

  /* ============================================================
     SYLLABUS
     ============================================================ */

  function viewSyllabus() {
    var g = gradeData();
    var mods = modulesOf(g);
    var today = phillyNow().date;
    var st = moduleStatus(mods, today);

    var open = mods.filter(function (m) { return modKey(m) === state.openModule; })[0];
    if (!open) open = st.current > -1 ? mods[st.current] : st.allDone ? mods[mods.length - 1] : mods[0];

    var html = pageHead('syllabus', gradeSwitch() +
      '<button type="button" class="btn no-print" data-action="print">' + icon('print') + '<span>' + T('print') + '</span></button>');

    html += '<section aria-labelledby="year-h" class="year"><h2 id="year-h">' + T('theYear') + '</h2>';
    if (!mods.length) {
      html += '<p class="soon">' + T('comingSoon') + '</p>';
    } else {
      html += '<ul class="legend no-print">' +
        '<li><span class="swatch swatch-past" aria-hidden="true"></span>' + icon('check') + T('done') + '</li>' +
        '<li><span class="swatch swatch-current" aria-hidden="true"></span>' + icon('pin') + T('youAreHere') + '</li>' +
        '<li><span class="swatch swatch-future" aria-hidden="true"></span>' + icon('arrow') + T('comingUp') + '</li></ul>';

      html += '<ol class="numline no-print">' + mods.map(function (m, i) {
        var s = st.statuses[i];
        var days = isDate(m.start) && isDate(m.end) ? Math.max(5, daysBetween(m.start, m.end) + 1) : 20;
        var label = s === 'past' ? icon('check') + T('done') : s === 'current' ? icon('pin') + T('youAreHere') : icon('arrow') + T('comingUp');
        return '<li class="seg seg-' + s + '" style="--days:' + days + '">' +
          '<button type="button" class="seg-btn" id="seg-' + esc(modKey(m)) + '" data-action="module" data-mod="' + esc(modKey(m)) + '" aria-expanded="' + (m === open) + '" aria-controls="module-panel">' +
          '<span class="seg-status">' + label + '</span>' +
          '<span class="seg-name">' + esc(modName(m)) + '</span>' +
          '<span class="seg-title">' + esc(L(m.title)) + '</span>' +
          '<span class="seg-dates">' + esc(dateRange(m)) + '</span>' +
          '</button></li>';
      }).join('') + '</ol>';

      html += '<div id="module-panel" class="panel grade-panel module-panel no-print">' + moduleDetail(open, g, 'h3', 'h4') + '</div>';

      // Every module, for printing.
      html += '<div class="print-only"><h3>' + T('allModules') + '</h3>' + mods.map(function (m) {
        return '<div class="print-mod">' + moduleDetail(m, g, 'h4', 'h5', true) + '</div>';
      }).join('') + '</div>';
    }
    html += '</section>';

    html += ticks();

    var sy = syllabus;
    html += '<div class="syllabus-text">';
    if (arr(sy.expectations).length) html += '<section aria-labelledby="exp-h"><h2 id="exp-h">' + T('expectations') + '</h2>' + textList(sy.expectations) + '</section>';
    if (arr(sy.materials).length) html += '<section aria-labelledby="mat-h"><h2 id="mat-h">' + T('materials') + '</h2>' + textList(sy.materials) + '</section>';
    var grading = arr(sy.grading).filter(function (x) { return has(x.label); });
    if (grading.length || has(sy.gradingNote)) {
      html += '<section aria-labelledby="gr-h"><h2 id="gr-h">' + T('grading') + '</h2>';
      if (grading.length) {
        html += '<ul class="grading">' + grading.map(function (x) {
          var pct = Number(x.percent);
          return '<li><span>' + esc(L(x.label)) + '</span>' + (isNaN(pct) ? '' : '<span class="pct num">' + pct + '%</span>') + '</li>';
        }).join('') + '</ul>';
      }
      if (has(sy.gradingNote)) html += '<p>' + esc(L(sy.gradingNote)) + '</p>';
      html += '</section>';
    }
    if (has(sy.lateWork)) html += '<section aria-labelledby="late-h"><h2 id="late-h">' + T('lateWork') + '</h2><p>' + esc(L(sy.lateWork)) + '</p></section>';
    if (arr(sy.help).length) html += '<section aria-labelledby="gh-h"><h2 id="gh-h">' + T('getHelp') + '</h2>' + textList(sy.help) + '</section>';
    html += '</div>';
    return html;
  }

  function moduleDetail(m, g, h, h2, printMode) {
    if (!m) return '';
    var out = '<' + h + '><span class="where-num">' + esc(modName(m)) + '</span> ' + esc(L(m.title)) + '</' + h + '>';
    if (dateRange(m)) out += '<p class="meta">' + esc(dateRange(m, 'mdy')) + '</p>';
    if (has(m.bigIdea)) out += '<p><strong>' + T('bigIdea') + ':</strong> ' + esc(L(m.bigIdea)) + '</p>';
    out += vocabBlock(m.vocab, h2);
    out += '<' + h2 + '>' + T('assessments') + '</' + h2 + '>';
    var as = arr(m.assessments).filter(function (a) { return has(a.title); });
    out += as.length ? '<ul class="plain-list">' + as.map(function (a) {
      return '<li>' + (isDate(a.date) ? '<span class="num">' + esc(fmtDate(a.date)) + '</span>: ' : '') + esc(L(a.title)) + '</li>';
    }).join('') + '</ul>' : '<p class="meta">' + T('noAssessments') + '</p>';
    if (!printMode) {
      out += '<ul class="link-row">' +
        '<li>' + ext(m.slides || g.slides, t('slides'), 'btn', 'slides') + '</li>' +
        '<li><a class="btn" href="#help" data-action="goto-help" data-mod="' + esc(modKey(m)) + '">' + icon('help') + '<span>' + T('homeworkHelp') + '</span></a></li>' +
        '</ul>';
    }
    return out;
  }

  /* ============================================================
     SCHEDULE
     ============================================================ */

  function nowNextHtml() {
    var n = phillyNow();
    var info = dayInfo(n.date);
    var section = findSection(state.section);
    var nowTxt = '', nextTxt = '', nowMath = false, nextMath = false;

    function label(p, type, date) {
      var s = subjectFor(section, p.id, type, weekdayKey(date));
      return { text: p.name + (s ? ': ' + s.name + (s.detail ? ' (' + s.detail + ')' : '') : ''), math: !!(s && s.isMath) };
    }
    function nextDayText() {
      var nd = nextSchoolDay(n.date);
      if (!nd) return '';
      var l = label(nd.period, nd.type, nd.date);
      nextMath = l.math;
      return fmtDate(nd.date) + '. ' + l.text + ', ' + atTime(nd.period.start, 'at');
    }

    if (info.school) {
      var ps = periodsFor(info.type);
      var cur = ps.filter(function (p) { return n.minutes >= p.start && n.minutes < p.end; })[0];
      if (!ps.length) {
        nowTxt = t('noSchool');
      } else if (n.minutes < ps[0].start) {
        nowTxt = t('beforeSchool');
        var l0 = label(ps[0], info.type, n.date); nextTxt = l0.text + ', ' + atTime(ps[0].start, 'at'); nextMath = l0.math;
      } else if (n.minutes >= ps[ps.length - 1].end) {
        nowTxt = t('afterSchool');
        nextTxt = nextDayText();
      } else {
        if (cur) {
          var lc = label(cur, info.type, n.date); nowTxt = lc.text + ', ' + atTime(cur.end, 'until'); nowMath = lc.math;
        } else {
          nowTxt = t('passing');
        }
        var np = ps.filter(function (p) { return p.start >= (cur ? cur.end : n.minutes) && p !== cur; })[0];
        if (np) { var ln = label(np, info.type, n.date); nextTxt = ln.text + ', ' + atTime(np.start, 'at'); nextMath = ln.math; }
        else nextTxt = t('endOfDay');
      }
    } else {
      nowTxt = info.reason;
      nextTxt = nextDayText();
    }

    var typeName = info.school && dayTypes[info.type] && has(dayTypes[info.type].name) ? ' ' + L(dayTypes[info.type].name).replace(/\.$/, '') + '.' : '';
    var mathTag = '<span class="tag tag-here">' + icon('star') + T('mathWith', { teacher: L(site.teacher) }) + '</span>';
    return '<section class="nownext" aria-labelledby="nn-h"><h2 id="nn-h" class="sr-only">' + T('nowNext') + '</h2>' +
      '<p class="nn-today">' + icon('calendar') + '<span>' + T('todayIs', { day: fmtDate(n.date, 'long') }) + esc(typeName) + '</span></p>' +
      '<dl class="nn">' +
      '<div class="nn-now"><dt>' + icon('clock') + T('now') + '</dt><dd>' + esc(nowTxt) + (nowMath ? ' ' + mathTag : '') + '</dd></div>' +
      (nextTxt ? '<div class="nn-next"><dt>' + icon('arrow') + T('next') + '</dt><dd>' + esc(nextTxt) + (nextMath ? ' ' + mathTag : '') + '</dd></div>' : '') +
      '</dl></section>';
  }

  function viewSchedule() {
    var n = phillyNow();
    var info = dayInfo(n.date);
    var sections = arr(sched.sections).filter(function (s) { return s.id; });
    var section = findSection(state.section);
    var types = Object.keys(dayTypes).filter(function (k) { return periodsFor(k).length; });
    var showType = dayTypes[state.dayType] ? state.dayType : info.school ? info.type : defaultType();

    var html = pageHead('schedule');
    html += '<div id="nownext-slot">' + nowNextHtml() + '</div>';

    // Section picker and that section's day
    html += '<section aria-labelledby="day-h" class="your-day"><h2 id="day-h">' + (section ? T('yourDay', { section: section.id }) : T('yourClass')) + '</h2>';
    if (sections.length) {
      html += '<div class="pickers">' +
        '<div class="field"><label for="section-pick">' + T('yourClass') + '</label><select id="section-pick">' +
        '<option value="">' + T('pickClass') + '</option>' +
        sections.map(function (s) { return '<option value="' + esc(s.id) + '"' + (section && s.id === section.id ? ' selected' : '') + '>' + esc(s.id + (s.homeroom ? ' (' + s.homeroom + ')' : '')) + '</option>'; }).join('') +
        '</select></div>' +
        (types.length > 1 ? '<div class="field"><label for="daytype-pick">' + T('dayType') + '</label><select id="daytype-pick">' +
          types.map(function (k) { return '<option value="' + esc(k) + '"' + (k === showType ? ' selected' : '') + '>' + esc(L(dayTypes[k].name) || k) + '</option>'; }).join('') +
          '</select></div>' : '') +
        '</div>';
    } else {
      html += '<p class="soon">' + T('comingSoon') + '</p>';
    }

    if (section) {
      var ps = periodsFor(showType);
      var isToday = info.school && info.type === showType;
      html += '<div class="table-wrap"><table class="day-table"><caption>' + esc(L(obj(dayTypes[showType]).name)) + '</caption><thead><tr>' +
        '<th scope="col">' + T('period') + '</th><th scope="col">' + T('classCol') + '</th></tr></thead><tbody>' +
        ps.map(function (p) {
          var s = subjectFor(section, p.id, showType);
          var isNow = isToday && n.minutes >= p.start && n.minutes < p.end;
          var cls = (s && s.isMath ? 'is-math' : '') + (isNow ? ' is-now' : '');
          var cell = '';
          if (s && s.week) {
            cell = '<ul class="week">' + s.week.map(function (w) {
              return '<li><span class="wd">' + esc(fmtDate(WEEKDAY_DATES[w.day], 'wd')) + '</span> ' + esc(w.name) + (w.detail ? '<span class="p-time">' + esc(w.detail) + '</span>' : '') + '</li>';
            }).join('') + '</ul>';
          } else if (s) {
            cell = esc(s.name) + (s.detail ? '<span class="p-time">' + esc(s.detail) + '</span>' : '') +
              (s.isMath ? ' <span class="tag tag-here">' + icon('star') + T('mathWith', { teacher: L(site.teacher) }) + '</span>' : '');
          }
          return '<tr' + (cls.trim() ? ' class="' + cls.trim() + '"' : '') + '>' +
            '<td><span class="p-name">' + esc(p.name) + '</span><span class="p-time num">' + esc(t('timeRange', { start: fmtTime(p.start), end: fmtTime(p.end) })) + '</span>' +
            (isNow ? '<span class="tag tag-now">' + icon('clock') + T('now') + '</span>' : '') + '</td>' +
            '<td>' + cell + '</td></tr>';
        }).join('') + '</tbody></table></div>';
      if (!ps.some(function (p) { return subjectFor(section, p.id, showType); })) html += '<p class="meta">' + T('daySoon') + '</p>';
    } else if (sections.length) {
      html += '<p>' + T('pickClassHint') + '</p>';
    }
    html += '</section>';

    html += ticks();

    // Bell schedules
    if (types.length) {
      html += '<section aria-labelledby="bell-h"><h2 id="bell-h">' + T('bellSchedules') + '</h2><div class="bells">' +
        types.map(function (k) {
          return '<div class="table-wrap"><table class="bell-table"><caption>' + esc(L(dayTypes[k].name) || k) + '</caption><thead><tr><th scope="col">' + T('period') + '</th><th scope="col">' + T('time') + '</th></tr></thead><tbody>' +
            periodsFor(k).map(function (p) {
              return '<tr><td>' + esc(p.name) + '</td><td class="num">' + esc(t('timeRange', { start: fmtTime(p.start), end: fmtTime(p.end) })) + '</td></tr>';
            }).join('') + '</tbody></table></div>';
        }).join('') + '</div></section>';
    }

    // Important dates (no-school days are included automatically)
    var dates = [];
    arr(sched.importantDates).forEach(function (d) { if (isDate(d.date) && has(d)) dates.push({ date: d.date, text: L(d), off: false }); });
    arr(sched.noSchoolDates).forEach(function (d) {
      var start = isDate(d.date) ? d.date : d.start;
      if (isDate(start)) dates.push({ date: start, end: isDate(d.end) && d.end !== start ? d.end : '', text: has(d) ? L(d) : t('noSchool'), off: true });
    });
    // Early dismissal and delayed opening days show up here automatically.
    arr(sched.specialDays).forEach(function (sp) {
      var start = isDate(sp.date) ? sp.date : sp.start;
      var nm = dayTypes[sp.type] && has(dayTypes[sp.type].name) ? L(dayTypes[sp.type].name) : '';
      if (!isDate(start) || !nm || (sp.grade && String(sp.grade) !== state.grade)) return;
      dates.push({ date: start, end: isDate(sp.end) && sp.end !== start ? sp.end : '', text: nm, off: false });
    });
    dates = dates.filter(function (d) { return (d.end || d.date) >= n.date; })
      .sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; })
      .slice(0, Number(sched.showDates) || 8);

    html += '<section aria-labelledby="dates-h"><h2 id="dates-h">' + icon('calendar') + '<span>' + T('importantDates') + '</span></h2>';
    html += dates.length ? '<ul class="dates">' + dates.map(function (d) {
      return '<li><span class="date num">' + esc(d.end ? t('dateRange', { start: fmtDate(d.date, 'md'), end: fmtDate(d.end, 'md') }) : fmtDate(d.date)) + '</span>' +
        '<span>' + (d.off ? icon('x') : '') + esc(d.text) + '</span></li>';
    }).join('') + '</ul>' : '<p>' + T('noDates') + '</p>';
    html += '<p>' + ext(sched.calendar || school.calendar, t('schoolCalendar'), 'btn', 'calendar') + '</p></section>';
    return html;
  }

  /* ============================================================
     STORE
     ============================================================ */

  function viewStore() {
    var s = storeData;
    var items = arr(s.items).filter(function (it) { return has(it.name); });
    var html = pageHead('store');
    var intro = [];
    if (has(s.currency)) intro.push(T('currencyNote', { currency: L(s.currency) }));
    intro.push(T('browseOnly'));
    html += '<p class="lead">' + intro.join(' ') + '</p>';

    html += '<div class="store-controls">' +
      '<div class="field budget"><label for="budget">' + T('iHave') + '</label><div class="budget-row">' +
      '<input id="budget" type="number" inputmode="numeric" min="0" step="1" value="' + esc(state.budget) + '" aria-describedby="afford-status">' +
      (has(s.currency) ? '<span>' + esc(L(s.currency)) + '</span>' : '') + '</div></div>' +
      '<div class="filter" role="group" aria-labelledby="filter-label"><span id="filter-label" class="pick-label">' + T('show') + '</span><ul>' +
      ['all'].concat(CATEGORIES).map(function (c) {
        return '<li><button type="button" class="chip" id="filter-' + c + '" data-action="filter" data-cat="' + c + '" aria-pressed="' + (state.storeFilter === c) + '">' +
          '<span>' + T(c === 'all' ? 'all' : 'cat_' + c) + '</span></button></li>';
      }).join('') + '</ul></div></div>' +
      '<p id="afford-status" class="afford-status" role="status" aria-live="polite"></p>';

    html += '<section aria-labelledby="items-h"><h2 id="items-h">' + T('items') + '</h2>';
    html += items.length ? '<ul class="items">' + items.map(function (it) {
      var price = Number(it.price);
      var hasPrice = it.price !== '' && it.price != null && !isNaN(price);
      var stock = it.inStock !== false;
      var cat = CATEGORIES.indexOf(it.category) > -1 ? it.category : '';
      return '<li class="item" data-cat="' + cat + '" data-price="' + (hasPrice ? price : '') + '" data-stock="' + (stock ? '1' : '0') + '">' +
        (safeUrl(it.image) ? '<div class="item-img">' + img(it.image, has(it.alt) ? it.alt : '') + '</div>' : '') +
        '<h3 class="item-name">' + esc(L(it.name)) + '</h3>' +
        '<p class="item-price">' + icon('tag') + '<span class="num">' + (hasPrice ? esc(price) + ' ' + esc(L(s.currency)) : T('comingSoon')) + '</span></p>' +
        '<p class="item-meta">' + (cat ? '<span class="cat">' + T('cat_' + cat) + '</span>' : '') +
        (stock ? '<span class="stock">' + icon('check') + T('inStock') + '</span>' : '<span class="stock stock-out">' + icon('x') + T('outOfStock') + '</span>') + '</p>' +
        '<p class="item-afford" hidden></p></li>';
    }).join('') + '</ul>' : '<p class="soon">' + T('comingSoon') + '</p>';
    html += '</section>';

    html += ticks();
    html += '<div class="store-info">';
    if (has(s.hours)) html += '<section aria-labelledby="sh-h"><h2 id="sh-h">' + icon('clock') + '<span>' + T('storeHours') + '</span></h2><p>' + esc(L(s.hours)) + '</p></section>';
    if (arr(s.rules).length) html += '<section aria-labelledby="sr-h"><h2 id="sr-h">' + T('storeRules') + '</h2>' + textList(s.rules) + '</section>';
    if (arr(s.earn).length) html += '<section aria-labelledby="se-h"><h2 id="se-h">' + icon('star') + '<span>' + T('earnPoints') + '</span></h2>' + textList(s.earn) + '</section>';
    html += '</div>';
    return html;
  }

  var statusTimer = null;
  function updateStore(announce) {
    var raw = String(state.budget).trim();
    var budget = parseFloat(raw);
    var hasBudget = raw !== '' && !isNaN(budget) && budget >= 0;
    var count = 0;
    Array.prototype.forEach.call(main.querySelectorAll('.item'), function (li) {
      var show = state.storeFilter === 'all' || li.getAttribute('data-cat') === state.storeFilter;
      li.hidden = !show;
      var priceAttr = li.getAttribute('data-price');
      var price = parseFloat(priceAttr);
      var inStock = li.getAttribute('data-stock') === '1';
      var out = li.querySelector('.item-afford');
      li.classList.remove('can-get', 'cannot-get');
      if (hasBudget && inStock && priceAttr !== '' && !isNaN(price)) {
        var ok = price <= budget;
        li.classList.add(ok ? 'can-get' : 'cannot-get');
        out.hidden = false;
        out.innerHTML = ok ? icon('check') + '<span>' + T('canGet') + '</span>' : '<span>' + T('needMore', { n: Math.ceil(price - budget) }) + '</span>';
        if (ok && show) count++;
      } else {
        out.hidden = true;
        out.innerHTML = '';
      }
    });
    Array.prototype.forEach.call(main.querySelectorAll('[data-action="filter"]'), function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-cat') === state.storeFilter));
    });
    var msg = !hasBudget ? '' : count === 0 ? t('affordNone') : count === 1 ? t('affordOne') : t('affordCount', { n: count });
    var status = document.getElementById('afford-status');
    if (!status) return;
    clearTimeout(statusTimer);
    if (announce === false) { status.textContent = msg; return; }
    statusTimer = setTimeout(function () { status.textContent = msg; }, 400);
  }

  /* ============================================================
     FAMILIES
     ============================================================ */

  function viewFamilies() {
    var f = families;
    var html = pageHead('families');
    if (has(f.intro)) html += '<p class="lead">' + esc(L(f.intro)) + '</p>';
    html += '<div class="families">';

    if (arr(f.helpAtHome).length) html += '<section aria-labelledby="hah-h"><h2 id="hah-h">' + icon('home') + '<span>' + T('helpAtHome') + '</span></h2>' + textList(f.helpAtHome, 'plain-list roomy') + '</section>';

    var qs = arr(f.questions).filter(has);
    if (qs.length) {
      html += '<section aria-labelledby="q-h" class="panel grade-panel questions"><h2 id="q-h">' + icon('chat') + '<span>' + T('questionsToAsk') + '</span></h2><ul class="question-list">' +
        qs.map(function (q) {
          var other = state.lang === 'es' ? 'en' : 'es';
          return '<li><span class="q-main">' + esc(L(q)) + '</span>' + (has(q[other]) ? '<span class="q-alt" lang="' + other + '">' + esc(q[other]) + '</span>' : '') + '</li>';
        }).join('') + '</ul></section>';
    }

    // How to reach me
    html += '<section aria-labelledby="reach-h"><h2 id="reach-h">' + icon('mail') + '<span>' + T('reachMe') + '</span></h2>';
    if (has(contact.preferred)) html += '<p>' + esc(L(contact.preferred)) + '</p>';
    html += '<ul class="contact-list">';
    var email = String(contact.email || '').trim();
    html += '<li><span class="c-label">' + icon('mail') + T('email') + '</span>' +
      (/^[^\s@]+@[^\s@]+$/.test(email) ? '<a href="mailto:' + esc(email) + '">' + esc(email) + '</a>' : '<span class="soon">' + T('comingSoon') + '</span>') + '</li>';
    var cp = String(contact.phone || '').trim(), cd = cp.replace(/[^\d+]/g, '');
    if (cp) html += '<li><span class="c-label">' + icon('phone') + T('phone') + '</span>' + (cd.length >= 10 ? '<a href="tel:' + esc(cd) + '">' + esc(cp) + '</a>' : '<span>' + esc(cp) + '</span>') + '</li>';
    if (contact.classDojo === true) html += '<li><span class="c-label">' + icon('chat') + T('classDojo') + '</span><span>' + T('classDojoNote') + '</span></li>';
    html += '</ul>';
    if (has(contact.replyTime)) html += '<p class="note">' + esc(L(contact.replyTime)) + '</p>';
    html += '</section>';

    // School info
    html += '<section aria-labelledby="school-h"><h2 id="school-h">' + icon('school') + '<span>' + T('schoolInfo') + '</span></h2>';
    if (has(school.name)) html += '<p class="school-name">' + esc(L(school.name)) + '</p>';
    html += '<dl class="info-list">';
    if (has(school.address)) html += '<div><dt>' + T('address') + '</dt><dd>' + esc(L(school.address)) + '</dd></div>';
    if (has(school.phone)) {
      var digits = L(school.phone).replace(/[^\d+]/g, '');
      html += '<div><dt>' + T('phone') + '</dt><dd>' + (digits.length >= 10 ? '<a href="tel:' + esc(digits) + '">' + esc(L(school.phone)) + '</a>' : esc(L(school.phone))) + '</dd></div>';
    }
    if (has(school.hours)) html += '<div><dt>' + T('hours') + '</dt><dd>' + esc(L(school.hours)) + '</dd></div>';
    html += '</dl><ul class="link-row">' +
      '<li>' + ext(school.website, t('schoolWebsite'), 'btn', 'school') + '</li>' +
      '<li>' + ext(sched.calendar || school.calendar, t('schoolCalendar'), 'btn', 'calendar') + '</li>' +
      '<li>' + ext(links.eurekaFamily, t('eurekaFamily'), 'btn', 'book') + '</li>' +
      '</ul></section>';

    // School policies and links
    var pol = arr(f.policies).filter(function (p) { return has(p.title) && has(p.text); });
    if (pol.length) {
      html += '<section aria-labelledby="pol-h"><h2 id="pol-h">' + icon('book') + '<span>' + T('schoolPolicies') + '</span></h2><dl class="policies">' +
        pol.map(function (p) { return '<div><dt>' + esc(L(p.title)) + '</dt><dd>' + esc(L(p.text)) + '</dd></div>'; }).join('') + '</dl></section>';
    }
    var fl = arr(f.links).filter(function (x) { return has(x.label); });
    if (fl.length) {
      html += '<section aria-labelledby="fl-h"><h2 id="fl-h">' + T('schoolLinks') + '</h2><ul class="link-row">' +
        fl.map(function (x) { return '<li>' + ext(L(x.url), L(x.label), 'btn') + '</li>'; }).join('') + '</ul></section>';
    }
    html += '</div>';
    return html;
  }

  /* ============================================================
     HEADER, FOOTER, ROUTER
     ============================================================ */

  function routeName() {
    var h = (window.location.hash || '').replace(/^#/, '');
    return VIEWS.indexOf(h) > -1 ? h : 'home';
  }

  function renderChrome() {
    var route = routeName();
    document.documentElement.lang = state.lang;
    document.body.setAttribute('data-grade', state.grade);

    document.getElementById('skip-link').textContent = t('skip');
    document.getElementById('site-name-text').textContent = L(site.siteName) || 'Math';
    document.getElementById('site-nav').setAttribute('aria-label', t('navLabel'));
    document.getElementById('lang-group').setAttribute('aria-label', t('langLabel'));
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === state.lang));
    });

    document.getElementById('classroom-slot').innerHTML = ext(gradeData().classroom, t('classroom'), 'btn btn-primary', 'board');

    document.getElementById('nav-list').innerHTML = VIEWS.map(function (v) {
      return '<li><a href="#' + v + '"' + (v === route ? ' aria-current="page"' : '') + '>' + icon(VIEW_ICONS[v]) + '<span>' + T('nav_' + v) + '</span></a></li>';
    }).join('');

    document.getElementById('site-footer').innerHTML = '<div class="wrap footer-inner">' +
      '<p>' + esc(L(site.teacher)) + '. ' + T('footerClasses') + (has(school.name) ? '. ' + esc(L(school.name)) : '') + '.</p>' +
      (isDate(site.lastUpdated) ? '<p>' + T('updated', { date: fmtDate(site.lastUpdated, 'mdy') }) + '</p>' : '') +
      '<p>' + T('privacy') + '</p></div>';
  }

  var RENDER = { home: viewHome, help: viewHelp, syllabus: viewSyllabus, schedule: viewSchedule, store: viewStore, families: viewFamilies };

  function render(moveFocus) {
    var route = routeName();
    renderChrome();
    var html;
    try {
      html = RENDER[route]();
    } catch (e) {
      if (window.console) console.error(e);
      html = pageHead(route) + '<p>' + T('comingSoon') + '</p>';
    }
    main.innerHTML = html;
    document.title = t('title_' + route) + ' | ' + (L(site.siteName) || 'Math');
    if (route === 'store') updateStore(false);
    if (moveFocus) {
      var h1 = document.getElementById('view-title');
      window.scrollTo(0, 0);
      if (h1) h1.focus();
    }
  }

  // Re-draw the page but keep keyboard focus on the same control.
  function rerender(focusId) {
    render(false);
    if (focusId) { var el = document.getElementById(focusId); if (el) el.focus(); }
  }

  /* ---------- Events ---------- */

  function setGrade(g) {
    if (GRADES.indexOf(g) < 0) return;
    if (g !== state.grade) { state.helpModule = null; state.openModule = null; }
    state.grade = g;
    storage.set('grade', g);
  }

  window.addEventListener('hashchange', function () {
    if (window.location.hash === '#main') return;
    render(true);
  });

  document.getElementById('skip-link').addEventListener('click', function (e) {
    e.preventDefault();
    var h1 = document.getElementById('view-title');
    (h1 || main).focus();
  });

  document.getElementById('lang-group').addEventListener('click', function (e) {
    var b = e.target.closest('[data-lang]');
    if (!b) return;
    state.lang = b.getAttribute('data-lang') === 'es' ? 'es' : 'en';
    storage.set('lang', state.lang);
    render(false);
  });

  main.addEventListener('click', function (e) {
    var el = e.target.closest('[data-action]');
    if (!el) return;
    var action = el.getAttribute('data-action');
    if (action === 'grade') { setGrade(el.getAttribute('data-grade')); rerender(el.id); }
    else if (action === 'module') { state.openModule = el.getAttribute('data-mod'); rerender(el.id); }
    else if (action === 'help-module') { state.helpModule = el.getAttribute('data-mod'); rerender(el.id); }
    else if (action === 'goto-help') { state.helpModule = el.getAttribute('data-mod'); }
    else if (action === 'filter') { state.storeFilter = el.getAttribute('data-cat'); updateStore(); }
    else if (action === 'print') { window.print(); }
  });

  main.addEventListener('input', function (e) {
    if (e.target.id === 'budget') { state.budget = e.target.value; updateStore(); }
  });

  main.addEventListener('change', function (e) {
    if (e.target.id === 'section-pick') {
      state.section = e.target.value;
      storage.set('section', state.section);
      var s = findSection(state.section);
      if (s && GRADES.indexOf(String(s.grade)) > -1) setGrade(String(s.grade));
      rerender('section-pick');
    } else if (e.target.id === 'daytype-pick') {
      state.dayType = e.target.value;
      rerender('daytype-pick');
    }
  });

  // Keep "Now / Next" fresh while the Schedule page is open.
  setInterval(function () {
    if (routeName() !== 'schedule') return;
    var slot = document.getElementById('nownext-slot');
    if (slot) slot.innerHTML = nowNextHtml();
  }, 30000);

  /* ---------- Fonts ---------- */

  var pairing = FONT_URLS[site.fontPairing] ? site.fontPairing : 'A';
  document.documentElement.setAttribute('data-fonts', pairing);
  if (pairing !== 'A') {
    var link = document.getElementById('font-link');
    if (link) link.href = FONT_URLS[pairing];
  }

  render(false);
})();
