let posts = [
    {
		"title": "Testing in Firefox- Mochitest!",
		"link": "https://rakhish.wordpress.com/2016/07/12/major-improvement-in-firefox/",
		"publishDate": "12 July 2020",
	},
    {
		"title": "Testing in Firefox- Mochitest!",
		"link": "https://rakhish.wordpress.com/2016/07/12/major-improvement-in-firefox/",
		"publishDate": "12 July 2020",
	},
    {
		"title": "Testing in Firefox- Mochitest!",
		"link": "https://rakhish.wordpress.com/2016/07/12/major-improvement-in-firefox/",
		"publishDate": "12 July 2020",
	},
    {
		"title": "Testing in Firefox- Mochitest!",
		"link": "https://rakhish.wordpress.com/2016/07/12/major-improvement-in-firefox/",
		"publishDate": "12 July 2020",
	},
    {
		"title": "Testing in Firefox- Mochitest!",
		"link": "https://rakhish.wordpress.com/2016/07/28/testing-in-firefox-mochitest/",
		"publishDate": "28 July 2020",
	},
    {
		"title": "Major improvement in Firefox",
		"link": "https://rakhish.wordpress.com/2016/07/12/major-improvement-in-firefox/",
		"publishDate": "12 July 2020",
	},
    {
		"title": "Open source, Mozilla & Outreachy",
		"link": "https://rakhish.wordpress.com/2016/07/11/374/",
		"publishDate": "11 July 2016",
	},
    {
		"title": "Hg push-to-try",
		"link": "https://rakhish.wordpress.com/2016/06/27/hg-push-to-try/",
		"publishDate": "27 June 2020",
	},
    {
		"title": "Bookmark in toolbar.",
		"link": "https://rakhish.wordpress.com/2016/06/25/bookmark-in-toolbar/",
		"publishDate": "25 June 2020",
	},
    {
		"title": "Firefox for Desktop.",
		"link": "https://rakhish.wordpress.com/2016/05/30/firefix-for-desktop/",
		"publishDate": "30 May 2016",
	},
    {
		"title": "Outreachy- The Beginning!",
		"link": "https://rakhish.wordpress.com/2016/05/23/outreachy-the-beginning/",
		"publishDate": "23 May 2016",
	},
    {
		"title": "Shotgun-game [Learn IT, Girl]",
		"link": "https://rakhish.wordpress.com/2016/05/09/shotgun-maths-game/",
		"publishDate": "09 May 2016",
	},
    {
		"title": "Import image using openGL in C",
		"link": "https://rakhish.wordpress.com/2016/03/29/import-image-using-opengl-in-c/",
		"publishDate": "29 Mar 2016",
	},
	{
		"title": "Learn IT, Girl!",
		"link": "https://rakhish.wordpress.com/2016/03/12/learn-it-girl/",
		"publishDate": "12 Mar 2016",
	}
],
posts_html = '';

window.onload = function() {
	blog_posts = document.getElementById( "blog-posts" );
	
	for( let i = 0; i< posts.length; i++ ) {
		posts[i].title;
		posts[i].publishDate;
		posts[i].link;

		posts_html += '<div>' + posts[i].publishDate +' :  <a href="' + posts[i].link + ' "target="_blank">' + posts[i].title + '</a></div><br>';
	}

	blog_posts.innerHTML = posts_html;
}

