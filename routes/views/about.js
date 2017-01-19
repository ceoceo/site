var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	locals.section = 'about';
	locals.page.title = 'About CEO';
	
	locals.organisers = [
		{ name: '金兆阳', image: '/images/organiser-jzy.jpg', linkedin: 'larry-zhaoyang-jin-51927361',       field: '能源工程博士', title: 'Co-President' },
		{ name: '张灵',     image: '/images/organiser-zl.jpg',     linkedin: 'ella-zhang-992b9817',   field: 'MBA', title: 'Co-President' }
	]
	
	locals.vporganisers = [
		{ name: '王竞凡',    image: '/images/organiser-wjf.jpg',    linkedin: 'jingfan-wang',   field: '能源工程博士', title: 'VP (Operations)' },
		{ name: '臧晓羽', image: '/images/organiser-zxy.jpg', linkedin: 'xyzang', field: '化学博士', title: 'VP (Marketing)' },
		{ name: '熊婧',    image: '/images/organiser-xj.jpg',    linkedin: 'xiongjing',   field: '电子工程博士', title: 'VP (Business Development)' },
		{ name: '冯玄', image: '/images/organiser-fx.jpg', linkedin: 'xuan-feng-6b562124', field: 'MBA', title: 'VP (Finance)' }
	]
	
	view.render('site/about');
	
}
