let posts = [
    {
        title: 'Creating a Toggle button in React ',
        link:
            'https://dev.to/rakhisharma/creating-a-toggle-button-in-react-i8o',
        publishDate: '02 Apr 2021'
    },
    {
        title: 'JavaScript Array.some() or Array.every()',
        link:
            'https://dev.to/rakhisharma/javascript-array-some-or-array-every-4la1',
        publishDate: '01 Apr 2021'
    },
    {
        title: 'Book Review: Lean In by Sheryl Sandberg',
        link:
            'https://rakhish.wordpress.com/2019/05/21/book-review-lean-in-by-sheryl-sandberg/',
        publishDate: '21 May 2019'
    },
    {
        title: 'The Subtle Art of Not giving a F*ck: A Review',
        link:
            'https://rakhish.wordpress.com/2019/03/02/the-subtle-art-of-not-giving-a-fck-a-review/',
        publishDate: '02 Mar 2019'
    },
    {
        title: 'What is Mixed Reality?',
        link: 'https://rakhish.wordpress.com/2018/08/07/what-is-mixed-reality/',
        publishDate: '07 Aug 2018'
    },
    {
        title: 'Thank you, WomenInTechFund!',
        link:
            'https://rakhish.wordpress.com/2018/07/01/thank-you-womenintechfund/',
        publishDate: '01 Jul 2018'
    },
    {
        title: 'What I am learning, while mentoring a girl',
        link:
            'https://rakhish.wordpress.com/2018/05/07/what-i-am-learning-while-mentoring-a-girl/',
        publishDate: '07 May 2018'
    },
    {
        title: 'Design Sprint(Mozilla+StanfordHCI)',
        link:
            'https://medium.com/@atbrakhi/design-sprint-mozilla-stanfordhci-4c030f8be9aa',
        publishDate: '23 Nov 2017'
    },
    {
        title: '6 months in Tech world!',
        link:
            'https://medium.com/@atbrakhi/6-months-in-tech-world-27c54e7179c2',
        publishDate: '22 Nov 2017'
    },
    {
        title: 'Moving to Medium.',
        link: 'https://rakhish.wordpress.com/2017/11/22/moving-to-medium/',
        publishDate: '22 Nov 2017'
    },
    {
        title: 'Meet my team- RGSoC',
        link: 'https://rakhish.wordpress.com/2017/08/06/meet-my-team-rgsoc/',
        publishDate: '06 Aug 2017'
    },
    {
        title: 'Understanding Hoisting.',
        link:
            'https://rakhish.wordpress.com/2017/08/04/understanding-hoisting/',
        publishDate: '04 Aug 2017'
    },
    {
        title: 'Story of JS Closures',
        link:
            'https://rakhish.wordpress.com/2016/07/12/major-improvement-in-firefox/',
        publishDate: '08 Feb 2017'
    },
    {
        title: 'Outreachy Proposal for Mozilla.',
        link:
            'https://rakhish.wordpress.com/2016/09/26/outreachy-proposal-for-mozilla/',
        publishDate: '26 Sep 2016'
    },
    {
        title: 'Mozilla Intern project presentation!',
        link:
            'https://rakhish.wordpress.com/2016/08/26/mozilla-intern-project-presentation/',
        publishDate: '26 Aug 2016'
    },
    {
        title: 'Firefox Reader View(Revisiting :Visited )',
        link:
            'https://rakhish.wordpress.com/2016/08/13/firefox-reader-viewrevisiting-visited/',
        publishDate: '13 Aug 2016'
    },
    {
        title: 'Testing in Firefox- Mochitest!',
        link:
            'https://rakhish.wordpress.com/2016/07/28/testing-in-firefox-mochitest/',
        publishDate: '28 Jul 2016'
    },
    {
        title: 'Major improvement in Firefox',
        link:
            'https://rakhish.wordpress.com/2016/07/12/major-improvement-in-firefox/',
        publishDate: '12 Jul 2016'
    },
    {
        title: 'Open source, Mozilla & Outreachy',
        link: 'https://rakhish.wordpress.com/2016/07/11/374/',
        publishDate: '11 Jul 2016'
    },
    {
        title: 'Hg push-to-try',
        link: 'https://rakhish.wordpress.com/2016/06/27/hg-push-to-try/',
        publishDate: '27 Jun 2016'
    },
    {
        title: 'Bookmark in toolbar.',
        link: 'https://rakhish.wordpress.com/2016/06/25/bookmark-in-toolbar/',
        publishDate: '25 Jun 2016'
    },
    {
        title: 'Firefox for Desktop.',
        link: 'https://rakhish.wordpress.com/2016/05/30/firefix-for-desktop/',
        publishDate: '30 May 2016'
    },
    {
        title: 'Outreachy- The Beginning!',
        link:
            'https://rakhish.wordpress.com/2016/05/23/outreachy-the-beginning/',
        publishDate: '23 May 2016'
    },
    {
        title: 'Shotgun-game [Learn IT, Girl]',
        link: 'https://rakhish.wordpress.com/2016/05/09/shotgun-maths-game/',
        publishDate: '09 May 2016'
    },
    {
        title: 'Import image using openGL in C',
        link:
            'https://rakhish.wordpress.com/2016/03/29/import-image-using-opengl-in-c/',
        publishDate: '29 Mar 2016'
    },
    {
        title: 'Learn IT, Girl!',
        link: 'https://rakhish.wordpress.com/2016/03/12/learn-it-girl/',
        publishDate: '12 Mar 2016'
    }
];

posts_html = '';

window.onload = function() {
	blog_posts = document.getElementById( "blog-posts" );
	
	for( let i = 0; i< posts.length; i++ ) {
		posts[i].title;
		posts[i].publishDate;
		posts[i].link;

		posts_html += '<div>' + posts[i].publishDate +':  <a href="' + posts[i].link + ' "target="_blank">' + posts[i].title + '</a></div><br>';
	}

	blog_posts.innerHTML = posts_html;
}
