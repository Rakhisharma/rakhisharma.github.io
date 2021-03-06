let posts = [
	{
		"title": "Test1",
		"link": "https://rakhisharma.github.io/writing.html",
		"publishDate": "3 Mar 2021",
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

