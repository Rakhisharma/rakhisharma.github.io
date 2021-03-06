let posts = [
    {
		"title": "Outreachy- The Beginning!",
		"link": "https://rakhish.wordpress.com/2016/05/23/outreachy-the-beginning/",
		"publishDate": "05 May 2020",
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

