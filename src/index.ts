type ArabicCharacter = {
	i: string;
    b?: string;
    m?: string;
    e?: string;
    d?: boolean;
};

// POMIL-003170

const characters: ArabicCharacter[] = [
	{e: 'ـا', b: 'ا', i: 'ا', d: true},
	{e: 'ـب', m: 'ـبـ', b: 'بـ', i: 'ب', d: true},
	{e: 'ـت', m: 'ـتـ', b: 'تـ', i: 'ت', d: true},
	{e: 'ـث', m: 'ـثـ', b: 'ثـ', i: 'ث', d: true},
	{e: 'ـج', m: 'ـجـ', b: 'جـ', i: 'ج', d: true},
	{e: 'ـح', m: 'ـحـ', b: 'حـ', i: 'ح', d: true},
	{e: 'ـخ', m: 'ـخـ', b: 'خـ', i: 'خ', d: true},
	{e: 'ـد', b: 'د', i: 'د', d: true},
	{e: 'ـذ', b: 'ذ', i: 'ذ', d: true},
	{e: 'ـر', b: 'ر', i: 'ر', d: true},
	{e: 'ـز', b: 'ز', i: 'ز', d: true},
	{e: 'ـس', m: 'ـسـ', b: 'سـ', i: 'س'},
	{e: 'ـش', m: 'ـشـ', b: 'شـ', i: 'ش'},
	{e: 'ـص', m: 'ـصـ', b: 'صـ', i: 'ص'},
	{e: 'ـض', m: 'ـضـ', b: 'ضـ', i: 'ض'},
	{e: 'ـط', m: 'ـطـ', b: 'طـ', i: 'ط'},
	{e: 'ـظ', m: 'ـظـ', b: 'ظـ', i: 'ظ'},
	{e: 'ـع', m: 'ـعـ', b: 'عـ', i: 'ع'},
	{e: 'ـغ', m: 'ـغـ', b: 'غـ', i: 'غ'},
	{e: 'ـف', m: 'ـفـ', b: 'فـ', i: 'ف'},
	{e: 'ـق', m: 'ـقـ', b: 'قـ', i: 'ق'},
	{e: 'ـك', m: 'ـكـ', b: 'كـ', i: 'ك'},
	{e: 'ـل', m: 'ـلـ', b: 'لـ', i: 'ل'},
	{e: 'ـم', m: 'ـمـ', b: 'مـ', i: 'م'},
	{e: 'ـن', m: 'ـنـ', b: 'نـ', i: 'ن'},
	{e: 'ـه', m: 'ـهـ', b: 'هـ', i: 'ه'},
	{e: 'ـو', b: 'و', i: 'و'},
	{e: 'ـي', m: 'ـيـ', b: 'يـ', i: 'ي'},
	{i: 'ء'},
	{e: 'ـى', i: 'ى'},
	{e: 'ـآ', b: 'آ', i: 'آ'},
	{e: 'ـة', b: 'ة', i: 'ة'},
];

const diacritics = [
  "َ", // Fathah U+064E
  "ُ", // Dammah U+064F
  "ِ", // Kasrah U+0650
//   "ْ", // Sukun U+0652
//   "ّ", // Shaddah U+0651
//   "ٓ", // Maddah U+0653
//   "ً", // Tanwin Fath U+064B
//   "ٌ", // Tanwin Damm U+064C
//   "ٍ", // Tanwin Kasr U+064D
//   "ٱ", // Hamzat Wasl sign U+0671
//   "ٰ"  // Superscript Alif U+0670
];

const phonetic = [
	'ah-liff', 'bah', 'tah', 't&apos;ha', 'geym/geme',
	'há (asp.)', 'k&apos;haw (guteral)', 'dá', 'thá', 'rah (roll once)',
	'zay', 'seen (see)', 'sheen (she)', 'sōd', 'dōd',
	't&apos;aw', 'th&apos;aw', 'ein', 'gh&apos;ein (guteral)', 'f&apos;áh',
	'cāw&apos;f (guteral)', 'kā&apos;f', 'lām', 'meme', 'noon',
	'hā', 'wāow/wow', 'yeāh', 'hamza (glottal stop)',
	'ah-liff mahksura', 'ah-liff med&apos;ah (long, then glottal stop)', 'tāh marbut&apos;ah (feminine)'
];

const tatweel = 'ـ';

// سكر
// زح

const app = document.querySelector<HTMLDivElement>('#app')!

const characterForms = characters.map((c, i) => {
	let body = `<tr>${c.e ? `<td><span lang="ar-SA" dir="rtl">${c.e}</span></td>`: ''}
		${c.m ? `<td><span lang="ar-SA" dir="rtl">${c.m}</span></td>`: ''}
		${c.b ? `<td><span lang="ar-SA" dir="rtl">${c.b}</span></td>`: ''}
		${c.i ? `<td><span lang="ar-SA" dir="rtl">${c.i}</span></td>`: ''}</tr>`;

	if(c.d)
		body += Object.entries(diacritics).map(([,d]) => (
			`${c.e ? `<tr class="diacritic"><td><span lang="ar-SA" dir="rtl">${c.e}${d}</span></td>`: ''}
			${c.m ? `<td><span lang="ar-SA" dir="rtl">${c.m}${d}</span></td>`: ''}
			${c.b ? `<td><span lang="ar-SA" dir="rtl">${c.b}${d}</span></td>`: ''}
			${c.i ? `<td><span lang="ar-SA" dir="rtl">${c.i}${d}</span></td>`: ''}</tr>`
		)).join('');

	return `<div>
	<div class="header">
	<div><h3>${phonetic[i]}</h3></div>
	<div><h2><span lang="ar-SA" dir="rtl">${c.i}</span></h2></div>
	</div>
	<table>
	<thead>
	${c.e ? `<td>End</td>`: ''}
	${c.m ? `<td>Middle</td>`: ''}
	${c.b ? `<td>Beginning</td>`: ''}
	${c.i ? `<td>Isolate</td>`: ''}
	</thead>
	<tbody>${body}</tbody>
	</table>
	<!--<pre>
{e: '${tatweel}${c.i}', m: '${tatweel}${c.i}${tatweel}', b: '${c.i}${tatweel}', i: '${c.i}'},
	</pre>//-->
	</div>`
});

app.innerHTML = `
<button type="checkbox" id="serif">Toggle serif</button>
<button type="checkbox" id="diacritic">Toggle diacritic</button>
  ${characterForms.join('')}
`

const toggleSerif = document.getElementById('serif');
toggleSerif?.addEventListener('click', e => document.getElementsByTagName('body')[0]?.classList.toggle('sansserif'));

const toggleDiacritic = document.getElementById('diacritic');
toggleDiacritic?.addEventListener('click', e => document.getElementsByTagName('body')[0]?.classList.toggle('diacritic'));