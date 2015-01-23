var cmd = require('commander');
var inq = require('inquirer');

cmd
	.version('0.0.1')
	.option('-m, --max <n>', 'Set maximum prime number', parseInt)
	.parse(process.argv);

var a = {
	min: 2,
	max: 200,
	pr: [2, 3, 5],
	num: []
}

if (cmd.max)
{
	a.max = cmd.max;
	init();
}
else
{
	inq.prompt(
		[
			{
				type:"input",
				name: "number",
				message: "Set a maximum prime number",
				default: function() { return 200; }
			}
		], function(answer)
	{
		a.max = answer.number;
		init();
	})
}

function init()
{
	for (var i = a.min; i <= a.max; i++)
	{
		a.num.push(i);
	}
	prime();
}

function prime()
{
	var b = true;
	var c = 0;
	var d = Math.sqrt(a.max);
	while(b)
	{
		var v = a.num[c];
		if (v > d)
		{
			b = false;
			break;
		}

		a.num = a.num.filter(function(item)
		{
			return (item % v != 0 || item == v);
		})
		c++;
	}
		console.log(a.num[a.num.length - 1]);
}