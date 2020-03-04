### NEXT ###

## Your Task ##
Simple app which has four tabs at the top which trigger API calls. On a successful API call, the JSON response should be parsed successfully and all of the views on the page should be refreshed accordingly. The data should be translated to a simple bar graph using the chartist.js library. We are also using the fontawesome icon library to display icons. The page should be mobile-responsive. You should stay as close to the screen capture as possible and make an attempt to replicate all the styles shown. Use the screenshots and screen capture as references for your code.

API:
GET: /chart/<id>
- call this endpoint to get the data for each chart
- <id> is an integer from 0-3

Example output:     
```
{
	'bullets': [
		{
			'icon': 'fa-university',
			'text': 'Your company is very secure'
		},
		{
			'icon': 'fa-chevron-right',
			'text': 'Your company needs to work on <span class=\"negative\">improving your security</span>'
		},
		{
			'icon': 'fa-dollar-sign',
			'text': 'We estimate that you could save up to <span class=\"positive\">$12,000</span> if you take more security precautions. We suggest starting that process right now.'
		}
	],
	'chart': {
		'title': 'Chart 1'
		'data': {
			'labels': ['High', 'Medium', 'Low'],
			'series': [[20, 30, 80], [30,10,30]]
		}
	}
}
```

## Dev Setup Instructions ##
- To get started, you need to have npm and node installed.
- To install all dependencies for the dev environment simply run 'npm install'.
- You can start the webpack dev server using the 'npm start' command. The server should hot-reload on code changes.
- If you just want to build the files using webpack, you can use 'npm run webpack'.

## Solution Instructions ##
Your output should be a .zip file of the whole project (please don't include /node_modules in the file, however). Please include any directions for running the setup if the steps are different from the ones we've prepared. Include a file at the root of the .zip file called "Solution.md" outlining how you solved the problems and where you had difficulties as well as why you chose certain libraries if you used them. Also please let us know if you found the instructions unclear or you felt you didn't have enough time to finish the challenge. Any feedback is highly appreciated. Good luck!
