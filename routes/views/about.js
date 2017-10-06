var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	locals.section = 'about';
	locals.page.title = 'About CEO';

	locals.organisers = [
		{ name: '王竞凡',    image: '/images/organiser-wjf.jpg',    linkedin: 'jingfan-wang',   field: '能源工程博士', title: 'Co-President' },
		{ name: '朱元欣(Cindy)',     image: '/images/organiser-zyx.jpg',     linkedin: 'cindy-yuanxin-zhu-6b460924',   field: 'MBA', title: 'Co-President' }
	]

	locals.vporganisers1 = [
		{ name: '韩文',    image: '/images/organiser-hw.jpg',    linkedin: '',   field: 'MBA', title: 'CFO' },
		{ name: '谢天宇', image: '/images/organiser-xty.jpg', linkedin: '', field: '人类学博士', title: 'VP (Marketing)' },
		{ name: '阮珊珊(Sherry)',    image: '/images/organiser-rss.jpg',    linkedin: 'sherrysruan',   field: '计算机科学博士', title: 'VP (BD)' }
	]

	locals.vporganisers2 = [
		{ name: '胡冯钦 (Angel)',    image: '/images/organiser-hfq.jpg',    linkedin: '',   field: 'MS&E 硕士', title: 'VP (Operations)' },
		{ name: '孙卿云', image: '/images/organiser-sqy.jpg', linkedin: '', field: '数学博士', title: 'CIO' }
	]

	view.render('site/about');

}
