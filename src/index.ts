type ArabicCharacter = {
	i: string;
    b?: string;
    m?: string;
    e?: string;
};

// POMIL-003170

// const characters = [
// 	'ا', 'ب', 'ت', 'ث', 'ج',
// 	'ح', 'خ', 'د', 'ذ', 'ر',
// 	'ز', 'س', 'ش', 'ص', 'ض',
// 	'ط', 'ظ', 'ع', 'غ', 'ف',
// 	'ق', 'ك', 'ل', 'م', 'ن',
// 	'و', 'ه', 'ء', 'ي',
// 	'ى', 'آ', 'ة'
// ];

const combinations: ArabicCharacter[] = [
	{e: 'ـا', b: 'ا', i: 'ا'},
	{e: 'ـب', m: 'ـبـ', b: 'بـ', i: 'ب'},
	{e: 'ـت', m: 'ـتـ', b: 'تـ', i: 'ت'},
	{e: 'ـث', m: 'ـثـ', b: 'ثـ', i: 'ث'},
	{e: 'ـج', m: 'ـجـ', b: 'جـ', i: 'ج'},
	{e: 'ـح', m: 'ـحـ', b: 'حـ', i: 'ح'},
	{e: 'ـخ', m: 'ـخـ', b: 'خـ', i: 'خ'},
	{e: 'ـد', b: 'د', i: 'د'},
	{e: 'ـذ', b: 'ذ', i: 'ذ'},
	{e: 'ـر', b: 'ر', i: 'ر'},
	{e: 'ـز', b: 'ز', i: 'ز'},
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

const characterForms = combinations.map((c, i) => {
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
	<tbody>
	${c.e ? `<td><span lang="ar-SA" dir="rtl">${c.e}</span></td>`: ''}
	${c.m ? `<td><span lang="ar-SA" dir="rtl">${c.m}</span></td>`: ''}
	${c.b ? `<td><span lang="ar-SA" dir="rtl">${c.b}</span></td>`: ''}
	${c.i ? `<td><span lang="ar-SA" dir="rtl">${c.i}</span></td>`: ''}
	</tbody>
	</table>
	<!--<pre>
{e: '${tatweel}${c.i}', m: '${tatweel}${c.i}${tatweel}', b: '${c.i}${tatweel}', i: '${c.i}'},
	</pre>//-->
	</div>`
});

app.innerHTML = `
<button type="checkbox" id="toggle">Toggle serif</button>
  ${characterForms.join('')}
`

const buttonStyleToggle = document.getElementById('toggle');

buttonStyleToggle?.addEventListener('click', e => document.getElementsByTagName('body')[0]?.classList.toggle('sansserif'));